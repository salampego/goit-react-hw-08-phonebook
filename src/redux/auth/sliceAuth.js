import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
  },
});
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
