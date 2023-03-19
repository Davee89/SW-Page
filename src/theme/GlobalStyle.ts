import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Philosopher";
  background:${({ theme }: { theme: Theme }) => theme.backgroundColor};
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;
export default GlobalStyle;
