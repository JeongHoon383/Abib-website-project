import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./Products";
import reviewReducer from "./Review";
import cartSlice from "./Cart";

/** 여러개의 reducer를 합치는 기능 */
const reducer = combineReducers({
  productSlice: productSlice.reducer,
  review: reviewReducer,
  cartSlice: cartSlice.reducer,
});

export default configureStore({
  reducer,
});
