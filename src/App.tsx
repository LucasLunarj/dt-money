import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./themes/default";
import { GlobalStyle } from "./global";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  );
}
