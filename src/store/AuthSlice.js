import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accesstoken: null,
    refreshtoken: null,
    auth: false
  },
  reducers: {
    setTokens: (state, action) => {
      state.accesstoken = action.payload.accesstoken;
      state.refreshtoken = action.payload.refreshtoken;
    },
    setAuth: (state,action)=>{
      state.auth=action.payload.auth;
    },
    clearTokens: (state) => {
      state.accesstoken = null;
      state.refreshtoken = null;
      state.auth=false;
    },
  },
});

export const { setAuth, setTokens, clearTokens } = authSlice.actions;
export const selectTokens = (state) => ({
  accesstoken: state.auth.accesstoken,
  refreshtoken: state.auth.refreshtoken,
  auth: state.auth.auth

});


export default authSlice.reducer;
