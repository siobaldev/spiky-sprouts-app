"use client";

import { useCart } from "@/context/CartProvider";
import { cn } from "@/lib/utils";

export default function AddToCartButton({ plant, className }) {
  const { addToCart } = useCart();

  const handleClick = (e) => {
    e.preventDefault();
    addToCart(plant);
  };

  return (
    <button
      className={cn(
        "border-button bg-button hover:border-hover hover:bg-hover rounded-md border-2 px-3 py-1 text-[0.75rem] font-bold text-white/[0.87] md:py-2 md:text-base",
        className,
      )}
      onClick={handleClick}
    >
      Add to cart
    </button>
  );
}
