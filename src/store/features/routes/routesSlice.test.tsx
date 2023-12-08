import routesMocks from "../../../mocks/routesMocks";
import { loadRoutesActionCreator, routesReducer } from "./routesSlice";
import { RoutesStateStructure } from "./types";

describe("Given a routesReducer", () => {
  describe("When it receives the action of load two routes and an initialState without routes", () => {
    test("Then it should return a list of two new routes", () => {
      const currentRoutesList: RoutesStateStructure = {
        routes: [],
      };

      const expectedRoutesList: RoutesStateStructure = {
        routes: routesMocks,
      };

      const routesList = routesReducer(
        currentRoutesList,
        loadRoutesActionCreator(routesMocks),
      );

      expect(routesList).toStrictEqual(expectedRoutesList);
    });
  });
});
