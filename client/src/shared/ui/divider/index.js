import React from "react";
import styled from "styled-components";

const DividerStyled = styled.div`
  width: 100%;
  height: ${({ customHeight }) => customHeight || "40px"};
`;

export const Divider = ({ height }) => {
  return <DividerStyled customHeight={height} />;
};
