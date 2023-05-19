import React, { useState } from "react";
import { Section, TaxValue } from "../shared";
import { FirstScreen, SecondScreen, FAQButton } from "../widgets";

export const Main = () => {
  const [taxValue, setTaxValue] = useState('');
  return (
    <TaxValue.Provider value={{taxValue,setTaxValue}}>
      <Section>
        <FirstScreen />
        <SecondScreen />
      </Section>
      <FAQButton />
    </TaxValue.Provider>
  );
};
