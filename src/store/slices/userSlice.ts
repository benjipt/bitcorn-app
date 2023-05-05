// src/store/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  address: string;
  balance: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  address: '',
  balance: '',
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
  },
});

export const { setLoggedIn, setAddress, setBalance } = userSlice.actions;

export default userSlice.reducer;
