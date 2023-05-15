// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import uiReducer from './slices/uiSlice';

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
});

export default rootReducer;
