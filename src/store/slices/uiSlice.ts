import { createSlice } from '@reduxjs/toolkit';

export enum ModalTypes {
  WELCOME = 'WELCOME',
  // add other modal types here
}

interface UIState {
  showModal: ModalTypes | null;
}

const initialState: UIState = {
  showModal: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: (state, action: { payload: ModalTypes }) => {
      state.showModal = action.payload;
    },
    closeModal: state => {
      state.showModal = null;
    },
  },
});

export const { openModal, closeModal } = uiSlice.actions;

export default uiSlice.reducer;
