import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
  "products/fetchProductsStatus", //action name
  async (category) => {
    const result = await axios.get(
      `http://192.168.50.16:9091/product/list/${category}`,
    );
    return result.data; //action payload return
  },
);

export const getProductDetail = createAsyncThunk(
  "productDetail/fetchProductsStatus",
  async (pid) => {
    const result = await axios.get(
      `http://192.168.50.16:9091/product/detail/${pid}`,
    );
    return result.data;
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

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: { data: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

const productReducer = combineReducers({
  products: productSlice.reducer,
  productDetail: productDetailSlice.reducer,
});

export default productReducer;
