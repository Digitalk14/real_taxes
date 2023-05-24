import React, { useContext } from "react";
import { COLORS, TaxValue } from "../../../shared";
import { Wrapper, Subtitle, Block, H3 } from "./tax-block.style";
import { getTaxValue } from "./getTaxValue";

export const TaxBlock = ({ index, description, formula }) => {
  const { taxValue } = useContext(TaxValue);
  if (!taxValue) {
    return null;
  }

  const { payedTax } = getTaxValue(formula, taxValue);
  return (
    <Wrapper backgroundColor={COLORS[index]}>
      {description.map(({ title, list, weight }) => (
        <Block key={title}>
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
