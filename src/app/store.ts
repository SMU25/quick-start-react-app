import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modal } from "./modal/slice";
import { posts } from "./posts/slice";

export const store = configureStore({
  reducer: combineReducers({
    modal,
    posts,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
