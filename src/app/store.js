import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modal } from "./modal/slice.js";
import { posts } from "./posts/slice";

export const store = configureStore({
  reducer: combineReducers({
    modal,
    posts,
  }),
});
