import React from "react";

const CartFooter = () => {
  return (
    <div className="mx-auto max-w-[1400px] flex-col border-t border-solid border-black pt-[50px] text-center text-xs">
      <div className="mx-auto flex flex-col items-center">
        <button className="mb-[10px] h-[60px] w-[600px] border border-solid border-black">
          선택상품 구매하기
        </button>
        <button className="h-[60px] w-[600px] border border-solid border-black bg-black text-white">
          전체상품 구매하기
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
