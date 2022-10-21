import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  width: 100%;
  padding: 0;
  margin: 0;
}

.tela-inteira {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
`;

export default GlobalStyle;
