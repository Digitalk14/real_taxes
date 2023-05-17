import styled from "styled-components";

export const SectionStyle = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || "center"};
  max-width: 960px;
`;

export const Section = ({ children, justify }) => {
  return <SectionStyle justify={justify}>{children}</SectionStyle>;
};
