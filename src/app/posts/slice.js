import { createSlice } from "@reduxjs/toolkit";
import { POSTS_SLICE_NAME } from "./actions";
import { getPostsReducer, getPostByIdReducer } from "./reducers";

const initialState = {
  isLoading: false,
  posts: null,
  postById: null,
};

export const { reducer: posts } = createSlice({
  name: POSTS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getPostsReducer(builder);
    getPostByIdReducer(builder);
  },
});
