import React from "react";

const CartHead = () => {
  return (
    <div className="text-center max-w-[1400px] mx-auto flex-column">
      <div className="text-[32px] pt-[100px] pb-[25px]">Cart.</div>
      <div className="text-[13px] pb-[34px] border-b border-solid border-black">
        50,000원 이상 구매하시면 배송비 무료입니다.
      </div>
    </div>
  );
};

export default CartHead;
