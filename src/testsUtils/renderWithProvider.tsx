import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import mainTheme from "../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "../store";
import { Store } from "@reduxjs/toolkit";

export const renderWithProvider = (
  children: React.ReactElement,
  mockedStore: Store = store,
) => {
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
