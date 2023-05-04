import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    //background-color: #acf50a;
    height: 100vh;
  }
`;

export default GlobalStyles;