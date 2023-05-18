import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};
