import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    insert: (state, action) => {
      const { pid, title, quantity, originalPrice, priceSales, cover } =
        action.payload;
      const newItem = {
        pid,
        cover,
        title,
        quantity,
        originalPrice,
        priceSales,
      };

      state.push(newItem);
    },
  },
});

export const { insert } = cartSlice.actions;

export const getCart = (state) => state.cart;

export default cartSlice.reducer;
