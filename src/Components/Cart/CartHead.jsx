import React from "react";

const CartHead = (props) => {
  return (
    <div className="flex-column mx-auto max-w-[1400px] text-center ">
      <div className="pb-[15px] pt-[80px] text-[32px]">{props.cart}</div>
      <div className="border-b border-solid border-black pb-[34px] text-[13px]">
        50,000원 이상 구매하시면 배송비 무료입니다.
      </div>
    </div>
  );
};

export default CartHead;
