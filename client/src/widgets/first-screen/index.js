import React from "react";
import { Wrapper, ScrollButton, Form } from "../../shared";
import { Text, H1 } from "./first-screen.style";

export const FirstScreen = () => {
  return (
    <Wrapper>
      <H1>Узнать сколько я проинвестировал в свою страну</H1>
      <Text>Я получил на руки*</Text>
      <Form />
    </Wrapper>
  );
};
