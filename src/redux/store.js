import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./shop/shopSlice";

export const store = configureStore({
  reducer: {
    shops: shopReducer,
  },
});
