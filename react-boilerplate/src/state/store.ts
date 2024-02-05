import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/DummyCounterReducer";
import dummyAsyncSlice from "./reducers/DummyAsyncReducer";
import loadingSlice from "./reducers/LoadingReducer";

const reducer = combineReducers({
  counterSlice,
  dummyAsyncSlice,
  loadingSlice,
});

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
