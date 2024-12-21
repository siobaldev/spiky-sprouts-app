"use client";

import { useState } from "react";

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState("Metallic Bronze");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <input
          type="radio"
          id="bronze"
          name="color"
          value="bronze"
          className="peer/bronze hidden"
          defaultChecked
          onChange={() => handleColorChange("Metallic Bronze")}
        />
        <label
          htmlFor="bronze"
          className="size-4 cursor-pointer rounded-full border-2 border-transparent bg-potColor-bronze hover:border-white peer-checked/bronze:border-white/87 sm:size-6 md:size-8"
        />

        <input
          type="radio"
          id="brown"
          name="color"
          value="brown"
          className="peer/brown hidden"
          onChange={() => handleColorChange("Pastel Brown")}
        />
        <label
          htmlFor="brown"
          className="size-4 cursor-pointer rounded-full border-2 border-transparent bg-potColor-brown hover:border-white/87 peer-checked/brown:border-white/87 sm:size-6 md:size-8"
        />

        <input
          type="radio"
          id="green"
          name="color"
          value="green"
          className="peer/green hidden"
          onChange={() => handleColorChange("Moss Green")}
        />
        <label
          htmlFor="green"
          className="size-4 cursor-pointer rounded-full border-2 border-transparent bg-potColor-green hover:border-white/87 peer-checked/green:border-white/87 sm:size-6 md:size-8"
        />

        <input
          type="radio"
          id="space"
          name="color"
          value="space"
          className="peer/space hidden"
          onChange={() => handleColorChange("Outer Space")}
        />
        <label
          htmlFor="space"
          className="size-4 cursor-pointer rounded-full border-2 border-transparent bg-potColor-space hover:border-white/87 peer-checked/space:border-white/87 sm:size-6 md:size-8"
        />
      </div>

      <div>
        {selectedColor && (
          <span className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
            {selectedColor}
          </span>
        )}
      </div>
    </div>
  );
}
