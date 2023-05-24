import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify ?? "center"};
`;

export const Wrapper = ({ children, justify }) => {
  return <WrapperStyled justify={justify}>{children}</WrapperStyled>;
};
