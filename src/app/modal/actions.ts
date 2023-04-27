import { createAction } from "@reduxjs/toolkit";
import { ModalState } from "./slice";

export const MODAL_SLICE_NAME = "modalWindow";

export const showModal = createAction<Omit<ModalState, "isOpen">>(
  `${MODAL_SLICE_NAME}/showModal`
);

export const hideModal = createAction(`${MODAL_SLICE_NAME}/hideModal`);
