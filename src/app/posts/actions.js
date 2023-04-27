import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "services/api-client";
import { history } from "services/history";
import { PATHNAMES } from "constants/routes";

export const POSTS_SLICE_NAME = "posts";

export const getPostsAsync = createAsyncThunk(
  `${POSTS_SLICE_NAME}/fetchPosts`,
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/posts?sortBy=createdAt&order=desc&page=${page}&limit=${limit}`
      );

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getPostByIdAsync = createAsyncThunk(
  `${POSTS_SLICE_NAME}/fetchPostById`,
  async (id, { rejectWithValue }) => {
    try {
      const { data } = (await instance.get)`/posts/${id}`;

      return data;
    } catch (e) {
      history.push(PATHNAMES.NOT_FOUND);

      return rejectWithValue(e);
    }
  }
);
