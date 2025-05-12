import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import usersReducer from "./users/usersSlice";

export const store = configureStore({
  reducer: { products: productsReducer, users: usersReducer },
});
