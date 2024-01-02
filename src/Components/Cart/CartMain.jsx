import React from "react";
import CartProduct from "./CartProduct";

const CartMain = () => {
  return (
    <div>
      <div className="mx-auto max-w-[900px] pt-[90px] text-xs">
        <div>
          <div>
            <ul className="flex w-full items-center justify-between border-b border-solid border-gray-300 font-bold">
              <li className="px-[5px] py-[12px]">
                <input
                  className="mx-[3px] mb-[7px] mt-[5px] flex-1"
                  type="checkbox"
                />
              </li>
              <li></li>
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
          <div className="flex flex-row-reverse px-[10px] pb-[17px] pt-[15px] underline">
            <div>장바구니비우기</div>
            <div className="mr-[15px]">선택삭제</div>
          </div>
          <div className="mb-[50px]">
            <ul className="flex justify-center px-[10px] pb-[17px] pt-[15px]">
              <li>상품구매금액 48,000</li>
              <li className="ml-[5px] mr-[5px]">+</li>
              <li>배송비 2,500</li>
              <li className="ml-[5px] mr-[5px]">-</li>
              <li>상품할인금액 14,400</li>
              <li className="ml-[5px] mr-[5px]">=</li>
              <li className="font-bold">₩36,100</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-bold">총 할인금액 상세내역</div>
            <div>$7,200원</div>
            <div>기간할인 $7,200</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CartMain;
