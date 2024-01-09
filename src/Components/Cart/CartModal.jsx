import React from "react";
import { MdOutlineClose } from "react-icons/md";

const CartModal = () => {
  return (
    <div className="fixed left-1/3 top-1/3 h-[200px] w-[400px] bg-white">
      <div>
        <MdOutlineClose />
      </div>
      <h3>카트에 상품이 담겼습니다.</h3>
      <div>
        <button>카트 확인하기</button>
        <button>쇼핑 계속하기</button>
      </div>
    </div>
  );
};

export default CartModal;
