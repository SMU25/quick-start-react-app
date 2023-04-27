import { showModal, hideModal } from "./actions";
import { initialState } from "./slice";

export const showModalReducer = (builder) => {
  builder.addCase(showModal, (state, action) => {
    state.isOpen = true;
    state.title = action.payload.title;
    state.text = action.payload.text;
    state.children = action.payload.children;
  });
};

export const hideModalReducer = (builder) => {
  builder.addCase(hideModal, (state) => (state = initialState));
};
