import { createSlice } from "@reduxjs/toolkit";
import { MODAL_SLICE_NAME } from "./actions";
import { showModalReducer, hideModalReducer } from "./reducers.js";

export const initialState = {
  isOpen: false,
  title: "",
  text: "",
  children: null,
};

export const { reducer: modal } = createSlice({
  name: MODAL_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    showModalReducer(builder);
    hideModalReducer(builder);
  },
});
