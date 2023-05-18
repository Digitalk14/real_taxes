import styled, { css } from "styled-components";

const SectionStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || "center"};
  max-width: 960px;
  margin: 0 auto;
  overflow-y: hidden;
  overflow-x: hidden;
  ${({ fixed }) =>
    fixed &&
    css`
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    `}
`;

export const Section = ({ children, justify, fixed }) => {
  return (
    <SectionStyle fixed={fixed} justify={justify}>
      {children}
    </SectionStyle>
  );
};
