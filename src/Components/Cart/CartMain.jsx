import React from "react";
import CartProduct from "./CartProduct";

const CartMain = () => {
  return (
    <div>
      <div className="border border-solid border-red-300 pt-[90px] max-w-[900px] mx-auto">
        <div>
          <div className="flex">
            <input
              className="flex-none w-[14px] h-[14px] rounded-none border border-solid border-gray-300 box-border mt-[5px] mx-[3px] mb-[7px]"
              type="checkbox"
            />
            <ul className="flex">
              <li className="w-[104px]"></li>
              <li>PRODUCT</li>
              <li>UNIT PRICE</li>
              <li>QUANTITY</li>
              <li>MILEAGE</li>
              <li>SHIP</li>
              <li>SUBTOTAL</li>
              <li></li>
            </ul>
          </div>
          <CartProduct />
          <div>
            <div>선택삭제</div>
            <div>장바구니비우기</div>
          </div>
          <div>
            <div>
              상품구매금액 48,000 + 배송비 2,500 - 상품할인금액 14,400 = $36,100
            </div>
          </div>
          <div>
            <div>총 할인금액 상세내역</div>
            <div>$7,200원</div>
            <div>기간할인 $7,200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
