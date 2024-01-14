import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products";
import { reviewSlice } from "./Review";
import { modalSlice } from "./Modal";
import { cartSlice } from "./cart";
import { memberSlice } from "./Member";
import { persistReducer, PERSIST, PURGE } from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

//react-persist를 설정하는 persistConfig 객체 정의
const persistConfig = {
  key: "member", //리덕스 상태를 저장할 때 사용할 키
  version: 1, // 저장된 상태의 구조가 변경되었을 때 증가시킬 버전 번호
  storage, // 리덕스 상태를 실제로 저장할 스토리지 엔진 (storage: 로컬스토리지 storageSession: 세션스토리지)
};

const persistCartConfig = {
  key: "cart",
  version: 1,
  storage,
};

/** 여러개의 reducer를 합치는 기능 */
const reducer = combineReducers({
  product: productReducer,
  review: reviewSlice.reducer,
  modal: modalSlice.reducer,
  cart: persistReducer(persistCartConfig, cartSlice.reducer),
  persistedReducer: persistReducer(persistConfig, memberSlice.reducer),
});

const store = configureStore({
  reducer,
  middleware: (
    getDefaultMiddleware, //기본 미들웨어와 로거 연결
  ) =>
    getDefaultMiddleware({
      //Redux의 불변성 및 직렬화 여부를 확인하는 옵션
      serializableCheck: {
        // 무시할 액션 유형 (redux-persist 관련)
        ignoredActions: [PERSIST, PURGE],
      },
    }).concat(logger), //액션과 상태의 변화를 콘솔에 로깅
});

export default store;

export const persistor = persistStore(store);
