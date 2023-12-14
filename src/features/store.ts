import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categories.slice";
import productsSlice from "./products/products.slice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
  },
  devTools: true,
});
