import { configureStore } from "@reduxjs/toolkit";
import { routesReducer } from "../store/features/routes/routesSlice";
import routesMocks from "../mocks/routesMocks";
import { Provider } from "react-redux";
import { store } from "../store";
import { PropsWithChildren } from "react";

export const getMockStore = () => {
  const mockStore = configureStore({
    reducer: { routesState: routesReducer },
    preloadedState: {
      routesState: {
        routes: routesMocks,
      },
    },
  });
  return mockStore;
};

export const providerWeapper = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
