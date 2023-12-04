import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import mainTheme from "../../styles/mainTheme";

describe("Given a header component", () => {
  describe("When it is rendered", () => {
    test("Then it shoud show a logo with an alt text `logo of meet mauritius app`", () => {
      const expectedAltText = "logo of meet mauritius app";

      render(
        <ThemeProvider theme={mainTheme}>
          <Header />
        </ThemeProvider>,
      );

      const headerImage = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(headerImage).toBeInTheDocument();
    });

    test("Then it should show an text with `meet mauritius`", () => {
      const expectedText = "meet mauritius";

      render(
        <ThemeProvider theme={mainTheme}>
          <Header />
        </ThemeProvider>,
      );

      const header = screen.getByRole("heading", { name: expectedText });

      expect(header).toBeInTheDocument();
    });
  });
});
