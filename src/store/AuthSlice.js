import { createSlice } from '@reduxjs/toolkit';
import axios from '@/api/axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accesstoken: null,
    refreshtoken: null,
  },
  reducers: {
    setTokens: (state, action) => {
      state.accesstoken = action.payload.accesstoken;
      state.refreshtoken = action.payload.refreshtoken;
    },
    clearTokens: (state) => {
      state.accesstoken = null;
      state.refreshtoken = null;
    },
  },
});

export const { setTokens, clearTokens } = authSlice.actions;
export const selectTokens = (state) => ({
  accesstoken: state.auth.accesstoken,
  refreshtoken: state.auth.refreshtoken,
});
export default authSlice.reducer;
