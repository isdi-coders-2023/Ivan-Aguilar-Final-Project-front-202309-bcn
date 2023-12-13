import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProvider } from "../../testsUtils/renderWithProvider";
import { MemoryRouter } from "react-router-dom";

describe("Given a component App", () => {
  describe("When it is rendered", () => {
    test("Then it should show the logo with the text 'logo of meet mauritius app'", () => {
      const expectedAltText = "logo of meet mauritius app";

      renderWithProvider(<App />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });

    describe("When it is rendered with a HomePage path", () => {
      test(
        "Then it should show the text 'Hi, I'm Anju! Let me take you to explore the island.'",
      ),
        () => {
          const expectedHeadingText =
            "Hi, I'm Anju! Let me take you to explore the island.";

          renderWithProvider(
            <MemoryRouter initialEntries={["/home"]}>
              <App />
            </MemoryRouter>,
          );

          const heading = screen.getByRole("heading", {
            name: expectedHeadingText,
          });

          expect(heading).toBeInTheDocument();
        };
    });
  });
});
