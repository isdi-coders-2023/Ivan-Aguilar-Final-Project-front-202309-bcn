import { render, screen } from "@testing-library/react";
import Button from "./Button";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  const text = "Map";

  describe("When it receives a text `Map`", () => {
    test("Then it should show a button with `Map`inside", async () => {
      render(<Button type="button" children={text} className={""} />);

      const buttonElement = screen.getByRole("button", { name: text });

      expect(buttonElement).toBeInTheDocument();
    });
  });
});
