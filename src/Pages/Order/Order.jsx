import React from "react";
import CartHead from "../../Components/Cart/CartHead";
import OrderMain from "../../Components/Order/OrderMain";
import OrderFooter from "../../Components/Order/OrderFooter";

const Order = () => {
  return (
    <div className="pb-[200px]">
      <CartHead cart="Order form." />
      <OrderMain />
      <OrderFooter />
    </div>
  );
};

export default Order;
