import React from "react";

const CartProduct = () => {
  return (
    <div>
      <ul className="flex w-full items-center border-b border-solid border-gray-300 py-[12px] text-xs">
        <li>
          <input type="checkbox" className="ml-[8px] flex-1" />
        </li>
        <li>
          <img
            src="../../../cart/cartCover.jpeg"
            className=" ml-[20px] mr-[50px] h-[60px] w-[60px]"
          />
        </li>
        <li className="mr-[70px] flex flex-col items-center">
          <div>여성초 스팟 패드</div>
          <div>카밍 터치</div>
          <div>
            <img
              src="../../../cart/cartSale.png"
              className="h-[19px] w-[45px]"
            />
          </div>
        </li>
        <li className="mr-[50px]">
          <p>₩24,000</p>
          <p className="font-bold">₩16,800</p>
        </li>
        <li className="mr-[105px]">
          <input type="text" className="w-[50px]" />2
        </li>
        <li className="mr-[72px]">₩1,680</li>
        <li className="mr-[75px] text-center">
          <p>2,500</p>
          <p>조건</p>
        </li>
        <li className="font-bold">33,600</li>
        <li>
          <button
            type="button"
            className="ml-[24px] h-[35px] w-[60px] border border-solid border-black font-bold"
          >
            삭제
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CartProduct;
