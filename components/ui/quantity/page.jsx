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
      <div className="flex gap-x-2">
        <div className="flex flex-1 items-center justify-between rounded-md bg-button/20">
          <button
            className="px-4 py-2 text-2xl md:ml-2 lg:text-3xl"
            onClick={decrement}
          >
            -
          </button>
          <span className="font-bold sm:text-base md:text-base lg:text-lg xl:text-xl">
            {quantity}
          </span>
          <button
            className="px-4 py-2 text-2xl md:mr-2 lg:text-3xl"
            onClick={increment}
          >
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
