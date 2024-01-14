import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Modules/cart";

const CartProduct = ({ item }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  return (
    <div>
      <ul className="flex w-full items-center justify-between border-b border-solid border-gray-300 py-[12px] text-center text-xs">
        <li>
          <input type="checkbox" className="ml-[8px] flex-1" />
        </li>
        <li className="w-[105px]">
          <img
            onClick={() => navigate("/product/detail/:pid")}
            /* src="../../../cart/cartCover.jpeg" */
            src={`http://127.0.0.1:9090/uploads/${item.cover}`}
            className="ml-[30px] h-[60px] w-[60px] cursor-pointer"
            alt=""
          />
        </li>
        <li className="hidden w-[129px] lg:block">
          <div
            onClick={() => navigate("/product/detail/:pid")}
            className="transition-text flex flex-col items-center"
          >
            <p className="ml-[10px]">{item.title}</p>
            {/* <p className="ml-[10px]">카밍 터치</p> */}
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
          <p>₩{item.originalPrice.toLocaleString()}</p>
          <p className="font-bold">₩{item.priceSales.toLocaleString()}</p>
        </li>
        <li className="hidden w-[165px] lg:block">
          <div className="relative ml-[52px] h-[30px] w-[70px] rounded-[5px] border border-solid border-gray-400">
            <img
              className="absolute left-[10px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 transform cursor-pointer"
              src="../../../cart/icon-minus-line.svg"
              alt="minus"
              onClick={() => handleQuantity("minus")}
            />

            <div className="absolute left-1/2 top-1/2 w-[56px] -translate-x-1/2 -translate-y-1/2 transform border border-b-0 border-t-0 border-solid border-gray-400">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                {count}
              </span>
            </div>

            <img
              className="absolute right-[10px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 transform cursor-pointer"
              src="../../../cart/icon-plus-line.svg"
              alt="plus"
              onClick={() => handleQuantity("plus")}
            />
          </div>
        </li>
        <li className="w-[99px]">
          ₩{(item.priceSales * 0.1).toLocaleString()}
        </li>
        <li className="w-[58px] text-center">
          <p>2,500</p>
          <p>조건</p>
        </li>
        <li className="hidden w-[102px] font-bold lg:block">
          {item.priceSales.toLocaleString()}
        </li>
        <li className="w-[101px]">
          <button
            type="button"
            className="h-[35px] w-[60px] border border-solid border-black font-bold transition duration-500 hover:bg-gray-100"
          >
            삭제
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CartProduct;
