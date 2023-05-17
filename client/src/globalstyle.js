import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    top: 0;
    
  }
  body {
    font-family: ${(props) => props.theme.fontFamily};
    background: #EF476F;
    color: #fff;
  }
  * {
    margin: 0;
    font-family: 'Cuprum', sans-serif;
  }
  h1, h2 {
    font-family: 'Russo One', sans-serif;
  }
  h1 {
    font-size: 48px;
    margin: 12px 0;
  }
`;
