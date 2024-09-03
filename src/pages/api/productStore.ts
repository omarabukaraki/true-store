import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";
import paginationSlice from "./paginationSlice";

export const productStore = configureStore({
    reducer: {
        [productsSlice.reducerPath]: productsSlice.reducer,
        paginationReducer:paginationSlice
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsSlice.middleware),});
