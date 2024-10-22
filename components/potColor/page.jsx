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
          className="bg-potColor-bronze size-4 cursor-pointer rounded-full border-2 border-transparent hover:border-white peer-checked/bronze:border-white/87"
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
          className="bg-potColor-brown size-4 cursor-pointer rounded-full border-2 border-transparent hover:border-white/87 peer-checked/brown:border-white/87"
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
          className="bg-potColor-green size-4 cursor-pointer rounded-full border-2 border-transparent hover:border-white/87 peer-checked/green:border-white/87"
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
          className="bg-potColor-space size-4 cursor-pointer rounded-full border-2 border-transparent hover:border-white/87 peer-checked/space:border-white/87"
        />
      </div>

      <div>
        {selectedColor && (
          <span className="text-sm opacity-60">{selectedColor}</span>
        )}
      </div>
    </div>
  );
}
