import React from "react";
import Button from "./button";

export default function Quantity({ quantity, handleid, id }) {
  // console.log(handleid)
  return (
    <div>
      <button onClick={() => handleid(id, +1)}>+</button>
      <h4>{quantity}</h4>
      <button disabled={quantity === 0} onClick={() => handleid(id, -1)}>
        -
      </button>
    </div>
  );
}
