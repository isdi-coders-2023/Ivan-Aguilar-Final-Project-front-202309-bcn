import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./components/App/App";
import "@fontsource-variable/dm-sans";
import "@fontsource/dm-serif-text";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
