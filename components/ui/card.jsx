"use client";

import React from "react";
import Image from "next/image";
import Favorite from "@/components/ui/favorite";
import ClientWrapper from "@/context/ClientWrapper";
import AddToCartButton from "./addToCart";

const Page = ({ name, image, rate, reviews, salePrice, price, plant }) => {
  return (
    <div className="shadow-item-card relative flex h-64 w-36 flex-col items-center justify-center gap-y-2 rounded-2xl border-2 border-white/5 bg-white/2 md:h-80 md:w-52">
      <Favorite />

      <ClientWrapper>
        <Image
          className="size-24 md:size-32"
          src={image}
          alt={name}
          width={90}
          height={90}
          unoptimized={true}
        />
      </ClientWrapper>

      <div className="flex w-full flex-col gap-y-1 px-4">
        <h1 className="text-sm font-bold opacity-87 md:text-base">{name}</h1>
        <div className="flex items-center gap-x-1 text-xs font-bold md:text-sm">
          <Image
            className="size-4"
            src={"/assets/star.svg"}
            alt="rating"
            width={14}
            height={14}
          />
          <p className="text-white/60">{rate}</p>
          <p className="text-white/60">({reviews})</p>
        </div>
        <div className="flex items-center gap-x-2 text-sm font-bold md:text-base">
          {salePrice ? (
            <>
              <p className="opacity-87">${salePrice}</p>
              <p className="line-through opacity-60">${price}</p>
            </>
          ) : (
            <p className="opacity-87">${price}</p>
          )}
        </div>
        <AddToCartButton plant={plant} />
      </div>
    </div>
  );
};

export default Page;
