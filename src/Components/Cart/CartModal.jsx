import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="fixed left-0 top-0 z-[100] h-full w-full bg-black/70">
      <div className="fixed left-1/2 top-1/2 z-[999] h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 transform bg-white">
        <div className="flex flex-col">
          <button className="ml-auto" onClick={closeModal} type="button">
            <IoCloseOutline size={30} />
          </button>
          <h3 className="h-[110px] text-center leading-[110px]">
            카트에 상품이 담겼습니다.
          </h3>
          <div className="flex justify-around text-xs">
            <Link to="/cart">
              <button className="h-[40px] w-[173px] border border-solid border-black">
                카트 확인하기
              </button>
            </Link>
            <button
              className="h-[40px] w-[171px] bg-black text-white"
              onClick={closeModal}
              type="button"
            >
              쇼핑 계속하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
