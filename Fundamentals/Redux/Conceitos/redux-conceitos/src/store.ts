import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "../src/features/counter/counter-slice.ts";
export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
