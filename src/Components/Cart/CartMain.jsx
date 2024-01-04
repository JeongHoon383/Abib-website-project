import React from "react";
import CartProduct from "./CartProduct";

const CartMain = () => {
  return (
    <div className="pb-[70px]">
      <div className="mx-auto max-w-[900px] pt-[90px] text-xs">
        <div>
          <div>
            <ul className="flex w-full items-center justify-between border-b border-solid border-gray-300 text-center font-bold">
              <li className="px-[5px] py-[12px]">
                <input className="mx-[3px] mb-[7px] mt-[5px]" type="checkbox" />
              </li>
              <li className="w-[105px]"></li>
              <li className="hidden w-[129px] lg:block">PRODUCT</li>
              <li className="w-[108px]">UNIT PRICE</li>
              <li className="hidden w-[165px] lg:block">QUANTITY</li>
              <li className="w-[99px]">MILEAGE</li>
              <li className="w-[58px]">SHIP</li>
              <li className="hidden w-[102px] lg:block">SUBTOTAL</li>
              <li className="w-[101px]"></li>
            </ul>
          </div>
          <CartProduct />
          <div className="flex flex-row-reverse px-[10px] pb-[17px] pt-[15px] underline">
            <div className="transition-text hover:underline">
              장바구니비우기
            </div>
            <div className="transition-text mr-[15px] hover:underline">
              선택삭제
            </div>
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
            <div className="mb-[3px] font-bold">총 할인금액 상세내역</div>
            <div className="mb-[3px] text-[11px]">₩7,200원</div>
            <div className="text-[11px]">기간할인 ₩7,200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
