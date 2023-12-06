import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { renderWithProvider } from "../../testsUtils/renderWithProvider";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a NavLink with the text `Home`", () => {
      const expectedText = "Home";
      const expectedAriaLabel = "home";

      renderWithProvider(<Navigation />);

      const NavLink = screen.getByRole("link", { name: expectedAriaLabel });

      expect(NavLink).toHaveTextContent(expectedText);
    });
  });
});
