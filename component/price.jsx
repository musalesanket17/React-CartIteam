import React from "react";

export default function Price({ lable, price }) {
  return (
    <div>
      <div> {lable}</div>
      <div>{price} </div>
    </div>
  );
}
