import React from "react";
import CartHead from "../../Components/Cart/CartHead";
import CartMain from "../../Components/Cart/CartMain";
import CartFooter from "../../Components/Cart/CartFooter";

const Cart = () => {
  return (
    <div className="pb-[150px]">
      <CartHead cart="Cart." />
      <CartMain />
      <CartFooter />
    </div>
  );
};

export default Cart;
