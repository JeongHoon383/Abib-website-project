import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import * as cookie from "./../util/cookie";

const initialState = {
  isLogin: false,
  token: null,
  memberId: null,
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, memberId } = action.payload;
      state.isLogin = true;
      state.token = token;
      state.memberId = memberId;
      cookie.setCookie("x-auth-jwt", token);
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = null;
      state.memberId = null;
      cookie.removeCookie("x-auth-jwt");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { login, logout } = memberSlice.actions;

export default memberSlice.reducer;
