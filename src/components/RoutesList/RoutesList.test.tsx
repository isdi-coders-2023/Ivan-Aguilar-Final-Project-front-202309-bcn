import { screen } from "@testing-library/react";
import routesMocks from "../../mocks/routesMocks";
import { renderWithProvider } from "../../testsUtils/renderWithProvider";
import RoutesList from "./RoutesList";

describe("Given a component RoutesList", () => {
  describe("When it is rendered", () => {
    test("Then it should show 2 routes", () => {
      const expectedNumberOfRoutes = routesMocks.length;

      renderWithProvider(<RoutesList />);
      const listItems = screen.getAllByRole("listitem").length;

      expect(listItems).toBe(expectedNumberOfRoutes);
    });
  });
});
