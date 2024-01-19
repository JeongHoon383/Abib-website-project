import React, { useState } from "react";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeAllFromCart } from "../../Modules/cart";

const CartMain = () => {
  const dispatch = useDispatch();

  // 비워두기
  // 비워두기
  // 비워두기
  // 비워두기
  // 비워두기
  // 비워두기

  const cart = useSelector(getCart).list;
  const totalOriginalPrice = cart.reduce((acc, obj) => {
    return acc + obj.originalPrice * obj.quantity;
  }, 0);
  const totalPriceSales = cart.reduce((acc, obj) => {
    return (
      acc + (obj.priceSales ? obj.priceSales : obj.originalPrice) * obj.quantity
    );
  }, 0);

  const [checkLists, setCheckLists] = useState([]);

  const handleCheckList = (checked, pid) => {
    if (checked) {
      setCheckLists([...checkLists, pid]);
    } else {
      setCheckLists(checkLists.map((check) => check !== pid));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const checkItems = [];
      cart.map((cart) => checkItems.push(cart.pid));
      setCheckLists(checkItems);
    } else {
      setCheckLists([]);
    }
  };
  return (
    <div className="pb-[40px]">
      <div className="mx-auto max-w-[900px] pt-[90px] text-xs">
        <div>
          <div>
            <ul className="flex w-full items-center justify-between border-b border-solid border-gray-300 text-center font-bold">
              <li className="px-[5px] py-[12px]">
                <input
                  className="mx-[3px] mb-[7px] mt-[5px]"
                  type="checkbox"
                  onChange={(e) => {
                    handleAllCheck(e.currentTarget.checked);
                  }}
                />
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
          {cart.map((item) => (
            <CartProduct item={item} key={item.pid} />
          ))}
          <div className="flex flex-row-reverse px-[10px] pb-[17px] pt-[15px] underline">
            <div
              className="transition-text hover:underline"
              onClick={() => dispatch(removeAllFromCart())}
            >
              장바구니비우기
            </div>
            <div className="transition-text mr-[15px] hover:underline">
              선택삭제
            </div>
          </div>
          <div className="mb-[50px]">
            <ul className="flex justify-center px-[10px] pb-[17px] pt-[15px]">
              <li>상품구매금액 {totalOriginalPrice.toLocaleString()}</li>
              <li className="ml-[5px] mr-[5px]">+</li>
              <li>배송비 {totalPriceSales >= 50000 ? "무료" : "2,500"}</li>
              <li className="ml-[5px] mr-[5px]">-</li>
              <li>
                상품할인금액{" "}
                {(totalOriginalPrice - totalPriceSales).toLocaleString()}
              </li>
              <li className="ml-[5px] mr-[5px]">=</li>
              <li className="font-bold">
                ₩
                {(
                  totalPriceSales + (totalPriceSales >= 50000 ? 0 : 2500)
                ).toLocaleString()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
