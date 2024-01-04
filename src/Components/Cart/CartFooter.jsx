import React from "react";
import { useNavigate } from "react-router-dom";

const CartFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-[1400px] flex-col border-t border-solid border-black pt-[50px] text-center text-xs">
      <div className="mx-auto flex flex-col items-center">
        <button className="mb-[10px] h-[60px] w-full border border-solid border-black sm:w-[600px]">
          선택상품 구매하기
        </button>
        <button
          onClick={() => navigate("/order")}
          className="transition-btn h-[60px] w-full border border-solid border-black bg-black text-white sm:w-[600px]"
        >
          전체상품 구매하기
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
