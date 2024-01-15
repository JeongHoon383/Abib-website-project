import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (value, { getState, rejectWithValue }) => {
    const { cart } = getState();
    const isProductAdded = cart.list.some((item) => item.pid === value.pid);
    if (isProductAdded) {
      return rejectWithValue("이미 추가된 상품입니다.");
    } else {
      return value;
    }
  },
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
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
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      alert(action.payload);
    });
  },
});

export const getCart = (state) => state.cart;

export default cartSlice.reducer;
