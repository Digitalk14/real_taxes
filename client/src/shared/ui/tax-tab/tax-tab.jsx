import React, { useCallback, useState } from "react";
import { H2, Tab, Wrapper } from "./tax-tab.style";
import { COLORS } from "../../../shared";

export const TaxTab = ({
  taxRate,
  name,
  index,
  passActiveIndex,
  activeIndex,
}) => {
  const handleCLick = useCallback(() => {
    passActiveIndex(index);
  }, []);
  return (
    <Wrapper>
      <p>{name}</p>
      <Tab backgroundColor={COLORS[index]} onClick={handleCLick}>
        <H2 isActive={activeIndex === index}>{taxRate}</H2>
      </Tab>
    </Wrapper>
  );
};
