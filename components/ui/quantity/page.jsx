"use client";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Quantity({ plantQuantity, className }) {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity >= plantQuantity) return;
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-md bg-button/20",
        className,
      )}
    >
      <button
        className="px-4 py-2 text-2xl md:ml-2 lg:text-3xl"
        onClick={decrement}
      >
        <Minus className="size-4" />
      </button>
      <span className="font-bold sm:text-base md:text-base lg:text-lg xl:text-xl">
        {quantity}
      </span>
      <button
        className="px-4 py-2 text-2xl md:mr-2 lg:text-3xl"
        onClick={increment}
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
