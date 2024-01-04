import React from "react";

const OrderFooter = () => {
  return (
    <div className="mx-auto max-w-[1400px] text-center">
      <div className="mt-[50px]">
        <button className="transition-btn h-[60px] w-full md:w-[600px]">
          ₩36,100 결제하기
        </button>
        <p className="mt-[12px] text-xs">
          *증정품은 총 실결제금액(쿠폰, 배송비 제외) 기준으로 증정됩니다.
        </p>
      </div>
    </div>
  );
};

export default OrderFooter;
