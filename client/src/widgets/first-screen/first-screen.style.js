import styled from "styled-components";

export const Text = styled.p`
  max-width: 470px;
  font-size: ${({ customFontSize }) => customFontSize ?? "20px"};
`;

export const H1 = styled.h1`
  max-width: 470px;
  color: #fab608;
`;
