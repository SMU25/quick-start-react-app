import { ReactNode } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { MODAL_SLICE_NAME } from "./actions";
import { showModalReducer, hideModalReducer } from "./reducers";

export interface ModalState {
  isOpen: boolean;
  title: string;
  text?: string;
  children?: ReactNode;
}

export const initialState: ModalState = {
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
