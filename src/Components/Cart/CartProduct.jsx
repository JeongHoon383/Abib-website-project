import React from "react";

const CartProduct = () => {
  return (
    <div>
      <ul className="flex w-full items-center justify-between border-b border-solid border-gray-300 py-[12px] text-center text-xs">
        <li>
          <input type="checkbox" className="ml-[8px] flex-1" />
        </li>
        <li className="w-[105px]">
          <img
            src="../../../cart/cartCover.jpeg"
            className="ml-[30px] h-[60px] w-[60px]"
            alt=""
          />
        </li>
        <li className="hidden w-[129px] lg:block">
          <div className="flex flex-col items-center">
            <p className="ml-[10px]">여성초 스팟 패드</p>
            <p className="ml-[10px]">카밍 터치</p>
            <div>
              <img
                src="../../../cart/cartSale.png"
                className="ml-[10px] h-[19px] w-[45px]"
                alt=""
              />
            </div>
          </div>
        </li>
        <li className="w-[108px]">
          <p>₩24,000</p>
          <p className="font-bold">₩16,800</p>
        </li>
        <li className="hidden w-[165px] lg:block">2</li>
        <li className="w-[99px]">₩1,680</li>
        <li className="w-[58px] text-center">
          <p>2,500</p>
          <p>조건</p>
        </li>
        <li className="hidden w-[102px] font-bold lg:block">33,600</li>
        <li className="w-[101px]">
          <button
            type="button"
            className="h-[35px] w-[60px] border border-solid border-black font-bold "
          >
            삭제
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CartProduct;
