import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { TaxValue } from "../../../shared";
import { addSpaces } from "../../../features";
import { Wrapper, CountryBlock } from "./countries-taxes.style";

const COUNTRIES_TAXES = gql`
  query ExampleQuery {
    getCountriesTaxes {
      name
      taxRange {
        top
        bottom
        taxValue
      }
      iconCode
    }
  }
`;

const GET_CURRENCY = gql`
  query CurrencyRequest {
    getCurrency {
      name
      value
    }
  }
`;

export const CountriesTaxes = () => {
  const { loading, data } = useQuery(COUNTRIES_TAXES);
  const currencyRequest = useQuery(GET_CURRENCY);
  let currencyValue;
  if (currencyRequest.data) {
    currencyValue = currencyRequest.data.getCurrency.value;
  }
  const { taxValue } = useContext(TaxValue);
  if (loading) {
    return <>Loading</>;
  } else if (data) {
    const countriesTaxes = data.getCountriesTaxes;
    return (
      <Wrapper>
        {countriesTaxes.map(({ iconCode, name, taxRange }) => {
          const payedTax =
            taxValue.period === "12" ? taxValue.value : taxValue.value * 12;
          const currency = currencyValue ?? 80;
          const range = taxRange.find((x) => {
            if (
              x.bottom * currency < payedTax &&
              payedTax <= x.top * currency
            ) {
              return true;
            }
            return false;
          }).taxValue;
          const countryPayedTax =
            taxValue.period === "12"
              ? (range * payedTax) / 100
              : (range * payedTax) / 100 / 12;
          return (
            <CountryBlock key={iconCode}>
              <img src={`/assets/images/icons/flags/${iconCode}.svg`} />
              <p>{name}</p>
              <h3>{addSpaces(countryPayedTax)} рублей</h3>
            </CountryBlock>
          );
        })}
      </Wrapper>
    );
  }
  return null;
};
