import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getReview = createAsyncThunk(
  "reviews/fetchProductsStatus", //action name
  async (pid) => {
    const result = await axios.get(`http://127.0.0.1:9090/review/${pid}`);
    return result.data; //action payload return
  },
);

export const getEachReview = createAsyncThunk(
  "eachReview/fetchProductsStatus",
  async (pid, rid) => {
    const result = await axios.get(
      `http://127.0.0.1:9090/review/${pid}/${rid}`,
    );
    return result.data;
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

export const eachReviewSlice = createSlice({
  name: "eachReview",
  initialState: { list: {} },
  reducers: {},
  // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다
  extraReducers: (builder) => {
    builder.addCase(getEachReview.fulfilled, (state, action) => {
      // Add user to the state array
      state.list = action.payload;
    });
  },
});

const reviewReducer = combineReducers({
  reviews: reviewSlice.reducer,
  eachReviews: eachReviewSlice.reducer,
});

export default reviewReducer;
