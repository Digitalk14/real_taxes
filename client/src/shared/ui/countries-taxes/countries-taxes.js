import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { TaxValue } from "../../../shared";
import { addSpaces } from "../../../features";
import { Wrapper, CountryBlock } from "./countries-taxes.style";

const COUNTRIES_TAXES = gql`
  query CountriesTaxes {
    getCountriesTaxes {
      name
      taxRange {
        top
        bottom
        taxValue
      }
      iconCode
      additionalPaymets
      currency
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
    currencyValue = currencyRequest.data.getCurrency;
  }
  const { taxValue } = useContext(TaxValue);
  if (loading) {
    return <>Loading</>;
  } else if (data && currencyValue) {
    const countriesTaxes = data.getCountriesTaxes;
    return (
      <Wrapper>
        {countriesTaxes.map(
          ({ iconCode, name, taxRange, currency, additionalPaymets }) => {
            const payedTax =
              taxValue.period === "12" ? taxValue.value : taxValue.value * 12;
            const countryCurrency =
              currencyValue.find((x) => x.name === currency).value ?? 80;
            const range = taxRange.find((x) => {
              if (
                x.bottom < payedTax * countryCurrency &&
                payedTax * countryCurrency <= x.top
              ) {
                return true;
              }
              return false;
            }).taxValue;
            const withAdditionalPayments = range + additionalPaymets;
            const countryPayedTax =
              taxValue.period === "12"
                ? (withAdditionalPayments * payedTax) / 100
                : (withAdditionalPayments * payedTax) / 100 / 12;
            return (
              <CountryBlock key={iconCode}>
                <img src={`/assets/images/icons/flags/${iconCode}.svg`} />
                <p>{name}</p>
                <h3>~ {addSpaces(Math.round(countryPayedTax))} рублей</h3>
              </CountryBlock>
            );
          }
        )}
      </Wrapper>
    );
  }
  return null;
};
