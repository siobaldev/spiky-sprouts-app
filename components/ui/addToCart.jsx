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
        "rounded-md border-2 border-button bg-button px-3 py-1 text-[0.75rem] font-bold text-white/[0.87] hover:border-hover hover:bg-hover md:py-2 md:text-base",
        className,
      )}
      onClick={handleClick}
    >
      Add to cart
    </button>
  );
}
