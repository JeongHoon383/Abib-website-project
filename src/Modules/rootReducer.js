import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./Products";
import { reviewSlice } from "./Review";

/** 여러개의 reducer를 합치는 기능 */
const reducer = combineReducers({
  productSlice: productSlice.reducer,
  reviewSlice: reviewSlice.reducer,
});

export default configureStore({
  reducer,
});
