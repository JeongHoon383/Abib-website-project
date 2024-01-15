import React, { useState } from "react";

export default function ProductCounter({ handleSetQuantity, quantity }) {
  // const [value, setValue] = useState(1);

  // const handleChangeInput = (e) => {
  //   const newValue = parseInt(e.target.value);

  //   if (isNaN(newValue) || newValue < 1) {
  //     alert(`최소 주문량은 1개입니다.`);
  //     setValue(1);
  //   } else setValue(newValue);
  // };

  // const handleBlurInput = (e) => {
  //   let newValue = parseInt(e.target.value);

  //   if (100 < newValue) {
  //     alert(`100개 이하로 구매하실 수 있습니다.`);
  //     newValue = 100;
  //   }
  //   setValue(newValue);
  //   onBlur(newValue);
  // };

  const handleQuantity = (type) => {
    if (type === "plus") {
      if (quantity < 100) {
        handleSetQuantity(quantity + 1);
      } else {
        alert("최대 주문 가능한 수량은 100개입니다.");
      }
    } else if (type === "minus") {
      if (quantity > 1) {
        handleSetQuantity(quantity - 1);
      } else {
        alert("최소 주문 가능한 수량은 1개입니다.");
      }
    }
  };

  return (
    <div className="relative mb-10 mt-2 flex h-9 w-[45%] flex-row divide-x rounded-sm border border-gray-200 md:w-full">
      <input
        type="number"
        // min={1}
        // value={value}
        // max={100}
        // onChange={handleChangeInput}
        // onBlur={handleBlurInput}
        value={quantity}
        className="flex w-full cursor-default items-center text-center text-xs text-neutral-700 outline-none"
      ></input>
      <button
        type="button"
        // disabled={100 === value}
        aria-label="수량 올리기"
        className="h-full w-20 cursor-pointer text-gray-300"
        // onClick={() => onClick(1)}
        onClick={() => handleQuantity("plus")}
      >
        <span className="m-auto text-base font-thin">+</span>
      </button>
      <button
        type="button"
        // disabled={value === 1}
        aria-label="수량 내리기"
        className="h-full w-20 cursor-pointer text-gray-300 outline-none"
        // onClick={() => onClick(-1)}
        onClick={() => handleQuantity("minus")}
      >
        <span className="m-auto text-base font-thin">−</span>
      </button>
    </div>
  );
}
