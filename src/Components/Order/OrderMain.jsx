import React from "react";
import OrderForm from "./OrderForm";

const OrderMain = () => {
  return (
    <div>
      <div>
        <img
          src="../../../cart/orderMainImage.jpeg"
          alt=""
          className="pb-[60px]"
        />
      </div>
      <OrderForm />
    </div>
  );
};

export default OrderMain;
