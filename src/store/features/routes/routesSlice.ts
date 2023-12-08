import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RoutesStateStructure, RouteStructure } from "./types";

const initialRoutesState: RoutesStateStructure = {
  routes: [],
};

const routesSlice = createSlice({
  name: "routes",
  initialState: initialRoutesState,
  reducers: {
    loadRoutes: (
      currentState: RoutesStateStructure,
      action: PayloadAction<RouteStructure[]>,
    ): RoutesStateStructure => ({ ...currentState, routes: action.payload }),
  },
});

export const { loadRoutes: loadRoutesActionCreator } = routesSlice.actions;

export const routesReducer = routesSlice.reducer;
