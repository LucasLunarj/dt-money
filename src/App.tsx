import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./themes/default";
import { GlobalStyle } from "./global";
import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./contexts/TransactionProvider";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  );
}
