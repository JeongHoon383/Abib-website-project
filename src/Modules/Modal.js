import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //state 값
  modalType: "",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    //dispatch로 부르는 액션 함수의 이름
    openModal: (state, actions) => {
      const { modalType } = actions.payload;
      state.modalType = modalType;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

//컴포넌트에서 사용하기 위해 export
export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state) => state.modal;

//configStore에 등록하기 위해 export default
export default modalSlice.reducer;
