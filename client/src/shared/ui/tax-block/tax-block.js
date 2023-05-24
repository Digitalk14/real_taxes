import React, { useContext, useState, useEffect } from "react";
import { COLORS, TaxValue } from "../../../shared";
import { Wrapper, Subtitle, Block, H3 } from "./tax-block.style";
import { getTaxValue } from "./getTaxValue";

export const TaxBlock = ({ index, description, formula }) => {
  const [prevIndex, setPrevIndex] = useState(index);
  useEffect(() => {}, []);
  const { taxValue } = useContext(TaxValue);
  if (!taxValue) {
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
  const { payedTax } = getTaxValue(formula, taxValue);
  return (
    <Wrapper backgroundColor={COLORS[index]}>
      {description.map(({ title, list, weight }) => (
        <Block key={title} darkBackground={isDarkBackground()}>
          <div>
            <Subtitle>{title}</Subtitle>
            <ul>
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <H3>~{Math.round((payedTax * weight) / 100)} руб.</H3>
        </Block>
      ))}
    </Wrapper>
  );
};
