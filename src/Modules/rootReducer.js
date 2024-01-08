import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./Products";

/** 여러개의 reducer를 합치는 기능 */
const reducer = combineReducers({
  productSlice: productSlice.reducer,
});

export default configureStore({
  reducer,
});
