import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import uiReducer, { openModal, ModalTypes } from '@/store/slices/uiSlice';
import userReducer from '@/store/slices/userSlice';
import Modal from '@/components/Modal';

describe('Modal', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        ui: uiReducer,
        user: userReducer, // include the user reducer
      },
      preloadedState: {
        user: {
          isLoggedIn: true,
          address: 'bob',
          balance: '100',
          balanceHistory: [],
          error: null,
          isNewUser: true,
        },
      },
    });
  });

  it('renders the correct content based on the Redux state', () => {
    store.dispatch(openModal(ModalTypes.WELCOME));

    const { getByText } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    expect(getByText('🎉 Welcome bob! 🎉')).toBeInTheDocument();
  });

  it('closes when the close button is clicked', () => {
    store.dispatch(openModal(ModalTypes.WELCOME));

    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    const closeButton = screen.getByTestId('close-modal-btn');
    fireEvent.click(closeButton);

    // Check that the 'showModal' state is null after the close button is clicked
    expect(store.getState().ui.showModal).toBeNull();
  });
});
