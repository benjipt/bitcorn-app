import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/store/slices/userSlice';
import uiReducer, { ModalTypes } from '@/store/slices/uiSlice';
import BitcornUI from '@/components/BitcornUI';

// mock getData function
const getData = vi.fn();

// setting initial state for user and ui
const initialState = {
  user: {
    isLoggedIn: true,
    address: 'testAddress',
    balance: '100',
    balanceHistory: [],
    error: null,
    isNewUser: true,
  },
  ui: {
    showModal: ModalTypes.WELCOME,
  },
};

// configure store
const store = configureStore({
  reducer: { user: userReducer, ui: uiReducer },
  preloadedState: initialState,
});

// testing the BitcornUI component for presence of the modal
describe('BitcornUI component', () => {
  it('renders welcome modal when isNewUser is true', () => {
    render(
      <Provider store={store}>
        <BitcornUI getData={getData} />
      </Provider>
    );

    expect(screen.getByText(/🎉 Welcome testAddress! 🎉/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /The renowned and mysterious creator of Bitcorn 🌽, Mr. Kozuka, has gifted you with 100 Bitcorns. Send them to anyone you like! 💌/i
      )
    ).toBeInTheDocument();
  });

  it('does not render welcome modal when isNewUser is false', () => {
    // create a new store with isNewUser set to false
    const store = configureStore({
      reducer: { user: userReducer, ui: uiReducer },
      preloadedState: {
        ...initialState,
        user: {
          ...initialState.user,
          isNewUser: false,
        },
        ui: {
          showModal: null,
        },
      },
    });

    render(
      <Provider store={store}>
        <BitcornUI getData={getData} />
      </Provider>
    );

    // check that the modal's text is not in the document
    expect(
      screen.queryByText(/🎉 Welcome testAddress! 🎉/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        /The renowned and mysterious creator of Bitcorn 🌽, Mr. Kozuka, has gifted you with 100 Bitcorns. Send them to anyone you like! 💌/i
      )
    ).not.toBeInTheDocument();
  });
});
