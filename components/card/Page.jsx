import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import Favorite from "@/components/favorite/page";
import ClientWrapper from "@/context/ClientWrapper";

const Page = ({ name, imageName, rate, reviews, salePrice, price }) => {
  return (
    <div className="relative flex h-[16rem] w-[9rem] flex-col items-center justify-center gap-y-2 rounded-2xl border-2 border-white/[0.05] bg-white/[0.02] shadow-itemCard md:h-[20rem] md:w-[13rem]">
      <Favorite />

      <ClientWrapper>
        <Image
          className="size-24 md:size-32"
          src={getImageUrl(imageName)}
          alt={name}
          width={90}
          height={90}
          unoptimized={true}
        />
      </ClientWrapper>

      <div className="flex w-full flex-col gap-y-1 px-4">
        <h1 className="text-sm font-bold opacity-[0.87] md:text-base">
          {name}
        </h1>
        <div className="flex items-center gap-x-1 text-xs font-bold md:text-sm">
          <Image
            className="size-4"
            src={"/assets/star.svg"}
            alt="rating"
            width={14}
            height={14}
          />
          <p className="text-white/60">{rate}</p>
          <p className="text-white/60">{reviews}</p>
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
        <button className="rounded-md border-2 border-button bg-button px-3 py-1 text-[0.75rem] font-bold text-white/[0.87] hover:border-hover hover:bg-hover md:py-2 md:text-base">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Page;
