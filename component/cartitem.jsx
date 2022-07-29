import React from "react";
import Price from "./price";
import Quantity from "./quantity";

export default function CartItem({ lable, price, quantity, handleid, id }) {
  return (
    <div>
      <Price lable={lable} price={price} />
      <Quantity quantity={quantity} handleid={handleid} id={id} />
    </div>
  );
}
