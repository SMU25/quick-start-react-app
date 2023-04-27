import { PayloadAction } from "@reduxjs/toolkit";
import { showModal, hideModal } from "./actions";
import { ModalState, initialState } from "./slice";

export const showModalReducer = (builder) => {
  builder.addCase(
    showModal,
    (state, action: PayloadAction<Omit<ModalState, "isOpen">>) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.text = action.payload.text;
      state.children = action.payload.children;
    }
  );
};

export const hideModalReducer = (builder) => {
  builder.addCase(hideModal, (state) => (state = initialState));
};
