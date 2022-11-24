import { configureStore } from "@reduxjs/toolkit";
import BookStoreReducer from '../Features/BookStoreSlice';

export const store = configureStore({
  reducer: {
    bookstore: BookStoreReducer
  },
});
