import { configureStore } from "@reduxjs/toolkit";

import panierReducer from "./panier";

const store = configureStore({
  reducer: {
    panier: panierReducer,
  },
});

export * from "./panier";
export default store;
