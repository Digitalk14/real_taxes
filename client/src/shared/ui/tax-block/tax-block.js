import React, { useContext, useEffect } from "react";
import { COLORS, TaxValue } from "../../../shared";
import { Wrapper, Subtitle, Block, H3 } from "./tax-block.style";
import { getTaxValue, addSpaces } from "../../../features";

export const TaxBlock = ({ index, description, formula }) => {
  useEffect(() => {}, []);
  const { taxValue } = useContext(TaxValue);
  if (!taxValue.value) {
    return null;
  }
  const isDarkBackground = () => {
    switch (COLORS[index]) {
      case "#118AB2":
        return true;
      case "#FFD166":
        return false;
      case "#06D6A0":
        return false;
      case "#073B4C":
        return true;
      default:
        return false;
    }
  };
  const { payedTax } = getTaxValue(formula, taxValue.value);
  return (
    <Wrapper backgroundColor={COLORS[index]}>
      {description.map(({ title, list, weight }) => {
        const sum = Math.round((payedTax * weight) / 100)
        const sumSpaces = addSpaces(sum)
        return (
          <Block key={title} darkBackground={isDarkBackground()}>
            <div>
              <Subtitle>{title}</Subtitle>
              <ul>
                {list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <H3>~ {sumSpaces} руб.</H3>
          </Block>
        );
      })}
    </Wrapper>
  );
};
