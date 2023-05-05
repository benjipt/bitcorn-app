// src/store/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BalancePlot } from '../../types';

interface UserState {
  isLoggedIn: boolean;
  address: string;
  balance: string;
  balanceHistory: BalancePlot[];
}

const initialState: UserState = {
  isLoggedIn: false,
  address: '',
  balance: '',
  balanceHistory: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setBalance: (state, action: PayloadAction<string>) => {
      state.balance = action.payload;
    },
    setBalanceHistory: (state, action: PayloadAction<BalancePlot[]>) => {
      state.balanceHistory = action.payload;
    },
  },
});

export const { setLoggedIn, setAddress, setBalance, setBalanceHistory } =
  userSlice.actions;

export default userSlice.reducer;
