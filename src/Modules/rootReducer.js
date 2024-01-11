import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products";
import { reviewSlice } from "./Review";
import { modalSlice } from "./Modal";

/** 여러개의 reducer를 합치는 기능 */
const reducer = combineReducers({
  product: productReducer,
  review: reviewSlice.reducer,
  modal: modalSlice.reducer,
});

export default configureStore({
  reducer,
});
