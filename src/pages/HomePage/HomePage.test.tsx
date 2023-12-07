import { screen } from "@testing-library/react";
import { renderWithProvider } from "../../testsUtils/renderWithProvider";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a headding with the text `Hi, I'm Anju! Let me take you to explore the island.`", () => {
      const expectedText =
        "Hi, I'm Anju! Let me take you to explore the island.";

      renderWithProvider(<HomePage />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
