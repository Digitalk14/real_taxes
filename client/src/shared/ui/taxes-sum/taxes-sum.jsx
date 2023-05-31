import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { getTaxValue, addSpaces } from "../../../features";
import { TaxValue } from "../../../shared";
import { H2, Text, Wrapper } from "./taxes-sum.style";

const GET_TAXES_SUM = gql`
  query ExampleQuery {
    getTaxes {
      taxes {
        formula
      }
    }
  }
`;

export const TaxesSum = () => {
  const { loading, data } = useQuery(GET_TAXES_SUM);
  const { taxValue, setTaxValue } = useContext(TaxValue);
  if (data) {
    const taxesArray = [];
    const taxesObjects = data.getTaxes[0].taxes;
    taxesObjects.forEach(({ formula }) => {
      const value = getTaxValue(formula, taxValue.value);
      taxesArray.push(value.payedTax);
    });
    const sumTaxes = Math.round(taxesArray.reduce((partialSum, a) => partialSum + a, 0));
    const sumToString = addSpaces(sumTaxes);
    const handleTaxPeriod = () => {
      let sum = taxValue.value;
      if (taxValue.period === "12") {
        setTaxValue({
          ...taxValue,
          period: "1",
          value: sum = sum / 12
        });
      } else {
        setTaxValue({
          ...taxValue,
          period: "12",
          value: sum = sum * 12
        });
      }
    };
    const isMonthActive = taxValue.period === "1" ? true : false;
    return (
      <>
        <H2>~ {sumToString} рублей</H2>
        <Wrapper>
          <Text isActive={isMonthActive}>
            Инвестировано за <span onClick={handleTaxPeriod}>месяц</span>{" "}
          </Text>
          <Text isActive={!isMonthActive}>
            <span onClick={handleTaxPeriod}>год</span>
          </Text>
        </Wrapper>
      </>
    );
  }
  return null;
};
