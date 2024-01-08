import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
  "products/fetchProductsStatus", //action name
  async (category) => {
    const result = await axios.get(
      `http://127.0.0.1:9090/product/list/${category}`,
    );
    return result.data; //action payload return
  },
);

export const productSlice = createSlice({
  name: "products",
  initialState: { list: [] },
  reducers: {},
  // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      // Add user to the state array
      state.list = action.payload;
    });
  },
});

export default productSlice.reducer;
