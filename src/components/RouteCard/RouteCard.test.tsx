import { screen } from "@testing-library/react";
import routesMocks from "../../mocks/routesMocks";
import { RouteStructure } from "../../store/features/routes/types";
import { renderWithProvider } from "../../testsUtils/renderWithProvider";
import RouteCard from "./RouteCard";

describe("Given a RouteCard Component", () => {
  describe("When it receives a route `Le Morne Brabant`", () => {
    const route: RouteStructure = routesMocks[0];

    test("Then it should show the image `https://miro.medium.com/v2/resize:fit:1100/format:webp/0*IyAju_tGqm7eE7y5.jpg`", () => {
      const expectedName = route.name;

      renderWithProvider(<RouteCard route={route} />);
      const image = screen.getByRole("img", { name: expectedName });

      expect(image).toBeInTheDocument();
    });

    test("Then it shoould show a `West`zone", () => {
      const expectedZone = route.zone;

      renderWithProvider(<RouteCard route={route} />);
      const zone = screen.getByText(expectedZone);

      expect(zone).toBeInTheDocument();
    });
  });
});
