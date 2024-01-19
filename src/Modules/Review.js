import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getReview = createAsyncThunk(
  "reviews/fetchProductsStatus", //action name
  async (pid) => {
    const result = await axios.get(`http://192.168.50.16:9091/review/${pid}`);
    return result.data; //action payload return
  },
);

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: { list: [] },
  reducers: {},
  // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다
  extraReducers: (builder) => {
    builder.addCase(getReview.fulfilled, (state, action) => {
      // Add user to the state array
      state.list = action.payload;
    });
  },
});

export default reviewSlice.reducer;
