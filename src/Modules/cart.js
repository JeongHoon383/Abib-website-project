import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { list: [] },
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

      return {
        list: [...state.list, newItem],
      };
    },
    removeCart: (state, action) => {
      const pidToRemove = action.payload;
      return state.filter((item) => item.pid !== pidToRemove);
    },
  },
});

export const { insert, removeCart } = cartSlice.actions;

export const getCart = (state) => state.cart;

export default cartSlice.reducer;
