import React, { useState } from "react";
import CartItem from "./cartitem";
import Total from "./total";

export default function Cart() {
  const inidata = [
    {
      id: 1,
      product_name: "Noodles",
      price: 50,
      quantity: 1
    },
    {
      id: 2,
      product_name: "Biryani",
      price: 90,
      quantity: 2
    },
    {
      id: 3,
      product_name: "Chips",
      price: 10,
      quantity: 3
    }
  ];

  const [data, setData] = useState(inidata);
  // console.log(data)

  function handleid(id, amount) {
    console.log("ok");
    let updated = data.map((el) => {
      return el.id === id ? { ...el, quantity: el.quantity + amount } : el;
    });
    setData(updated);
  }

  function CalculateTotal(product) {
    return product.reduce((acc, el) => acc + el.price * el.quantity, 0);
  }
  return (
    <>
      {data.map((el) => (
        <CartItem
          key={el.id}
          lable={el.product_name}
          price={el.price}
          quantity={el.quantity}
          handleid={handleid}
          id={el.id}
        />
      ))}

      <Total total={CalculateTotal(data)} />
    </>
  );
}
