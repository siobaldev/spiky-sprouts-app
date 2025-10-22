import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

export const menuSlide = {
  initial: { x: "calc(-100%)" },
  enter: { x: "0", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(-100%)",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};
