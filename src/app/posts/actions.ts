import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { history } from "src/services/history";
import { PATHNAMES } from "src/constants/routes";
import { IPostItem } from "src/types/post";

export const POSTS_SLICE_NAME = "posts";

interface GetPostsAsyncParams {
  page?: number;
  limit?: number;
}

export const getPostsAsync = createAsyncThunk(
  `${POSTS_SLICE_NAME}/fetchPosts`,
  async (
    { page = 1, limit = 10 }: GetPostsAsyncParams,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await instance.get<IPostItem[]>(
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
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IPostItem>(`/posts/${id}`);

      return data;
    } catch (e) {
      history.push(PATHNAMES.NOT_FOUND);

      return rejectWithValue(e);
    }
  }
);
