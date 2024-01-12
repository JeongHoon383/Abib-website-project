import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    id: "",
    iat: "",
    isKeepLogin: false,
  },
  reducers: {
    login: (state, action) => {
      const { id, iat, isKeepLogin } = action.payload;
      state.id = id;
      state.iat = iat;
      state.isKeepLogin = isKeepLogin;
    },
    logout: (state) => {
      state.isKeepLogin
        ? localStorage.removeItem("member")
        : sessionStorage.removeItem("member");
      state.id = "";
      state.iat = "";
      state.isKeepLogin = false;
    },
    getMemberInfo: (state) => {
      const { id, iat, isKeepLogin } = state.payload;
      state.id = id;
      state.iat = iat;
      state.isKeepLogin = isKeepLogin;
    },
  },
});

export const { login, logout, getMemberInfo } = memberSlice.actions;

export default memberSlice.reducer;
