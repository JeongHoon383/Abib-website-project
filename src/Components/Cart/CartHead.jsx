import React from "react";

const CartHead = () => {
  return (
    <div className="flex-column mx-auto max-w-[1400px] text-center">
      <div className="pb-[25px] pt-[100px] text-[32px]">Cart.</div>
      <div className="border-b border-solid border-black pb-[34px] text-[13px]">
        50,000원 이상 구매하시면 배송비 무료입니다.
      </div>
    </div>
  );
};

export default CartHead;
