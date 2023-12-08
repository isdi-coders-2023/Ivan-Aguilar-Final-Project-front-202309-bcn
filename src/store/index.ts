import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { routesReducer } from "./features/routes/routesSlice";

export const store = configureStore({
  reducer: { routesState: routesReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
