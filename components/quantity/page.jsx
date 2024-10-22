"use client";
import React, { useState } from "react";

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity >= 40) return;
    setQuantity(quantity + 1);
  }
  function decrement() {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  }

  return (
    <>
      <h1>Quantity</h1>
      <div className="flex gap-x-2">
        <div className="flex flex-1 items-center justify-between rounded-md bg-button/20 px-4 py-2">
          <button className="text-xl" onClick={decrement}>
            -
          </button>
          <span className="font-medium">{quantity}</span>
          <button className="text-xl" onClick={increment}>
            +
          </button>
        </div>
        <button className="flex-1 rounded-md border-2 border-button bg-button px-3 py-1 text-[0.75rem] font-bold text-white/[0.87] hover:border-hover hover:bg-hover md:py-2 md:text-base">
          Add to cart
        </button>
      </div>
    </>
  );
}
