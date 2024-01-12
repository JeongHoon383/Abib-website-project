import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products";
import { reviewSlice } from "./Review";
import { modalSlice } from "./Modal";
import { cartSlice } from "./cart";

/** 여러개의 reducer를 합치는 기능 */
const reducer = combineReducers({
  product: productReducer,
  review: reviewSlice.reducer,
  modal: modalSlice.reducer,
  cart: cartSlice.reducer,
});

export default configureStore({
  reducer,
});
