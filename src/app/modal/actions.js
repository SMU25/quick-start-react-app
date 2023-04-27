import { createAction } from "@reduxjs/toolkit";

export const MODAL_SLICE_NAME = "modalWindow";

export const showModal = createAction(`${MODAL_SLICE_NAME}/showModal`);

export const hideModal = createAction(`${MODAL_SLICE_NAME}/hideModal`);
