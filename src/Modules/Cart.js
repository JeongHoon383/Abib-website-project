import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartData",
  initialState: {
    cartData: {}, // 초기 객체 상태
  },
  reducers: {
    cartData: (state, action) => {
      state.cartData = action.payload;
    },
  },
});

export const { cartData } = cartSlice.actions;
export default cartSlice.reducer;
