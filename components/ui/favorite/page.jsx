"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Favorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite((prev) => !prev)}
      className="absolute right-3 top-3 size-5 cursor-pointer md:size-6"
    >
      {isFavorite ? (
        <Image
          src={"/assets/heart-filled.svg"}
          alt="Wishlist"
          width={20}
          height={20}
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      ) : (
        <Image
          src={"/assets/heart.svg"}
          alt="Wishlist"
          width={20}
          height={20}
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      )}
    </button>
  );
}
