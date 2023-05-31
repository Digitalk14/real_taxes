import React, { useContext, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import {
  Wrapper,
  TaxValue,
  TaxTab,
  TaxBlock,
  Pointer,
  TaxesSum,
  CountriesTaxes,
} from "../../shared";
import { addSpaces } from "../../features";
import { H2, TabWrapper, Text } from "./second-screen.style";

const GET_TAXES = gql`
  query ExampleQuery($getCountryTaxesId: ID!) {
    getCountryTaxes(id: $getCountryTaxesId) {
      taxes {
        name
        formula
        taxRate
        description {
          title
          list
          weight
        }
      }
    }
  }
`;

export const SecondScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { taxValue } = useContext(TaxValue);
  const { loading, error, data } = useQuery(GET_TAXES, {
    variables: {
      getCountryTaxesId: "1",
    },
  });
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return null;
  }
  const { taxes } = data.getCountryTaxes;
  const taxBlockContent = taxes[activeIndex];
  const payedSum = addSpaces(taxValue.value)
  return (
    <Wrapper justify="flex-start">
      <H2>{payedSum} рублей</H2>
      <Pointer index={activeIndex} />
      <TabWrapper>
        {taxes.map(({ taxRate, name }, i) => (
          <TaxTab
            key={taxRate}
            index={i}
            name={name}
            taxRate={taxRate}
            passActiveIndex={handleActiveIndex}
            activeIndex={activeIndex}
          />
        ))}
      </TabWrapper>
      <TaxBlock index={activeIndex} {...taxBlockContent} />
      <TaxesSum />
      <CountriesTaxes />
    </Wrapper>
  );
};
