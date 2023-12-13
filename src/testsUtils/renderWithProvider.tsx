import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import mainTheme from "../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { Provider } from "react-redux";
import { getMockStore } from "./providerWrapper";

export const renderWithProvider = (children: React.ReactElement) => {
  const mockedStore = getMockStore();

  render(
    <BrowserRouter>
      <Provider store={mockedStore}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
};
