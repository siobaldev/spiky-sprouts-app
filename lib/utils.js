// get images for plants

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

export function getImageUrl(plant) {
  return "/assets/" + plant.imageName + ".webp";
}
