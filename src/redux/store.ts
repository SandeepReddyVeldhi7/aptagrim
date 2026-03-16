import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./slices/jobsSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
