import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products";
import { reviewSlice } from "./Review";
import { modalSlice } from "./Modal";
import { memberSlice } from "./Member";

/** 여러개의 reducer를 합치는 기능 */
const reducer = combineReducers({
  product: productReducer,
  review: reviewSlice.reducer,
  modal: modalSlice.reducer,
  memberSlice: memberSlice.reducer,
});

export default configureStore({
  reducer,
});
