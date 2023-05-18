import React from "react";
import { Section } from "../shared";
import { FirstScreen, SecondScreen } from "../widgets";

export const Main = () => {
  return (
    <>
      <Section>
        <FirstScreen />
        <SecondScreen />
      </Section>
    </>
  );
};
