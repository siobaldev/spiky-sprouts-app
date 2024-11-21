import React from "react";
import { StarRating } from "@/lib/data";
import Image from "next/image";

export default function Rating({ rate }) {
  return (
    <>
      <div className="h-fit max-w-[28rem] space-y-2 rounded-3xl bg-button/10 p-6 max-[380px]:px-4 lg:w-[28rem]">
        <div className="space-y-4">
          <h1 className="text-lg font-bold sm:text-[1.266rem] md:text-[1.424rem] lg:text-[1.602rem]">
            Rating
          </h1>
          <div className="flex items-center gap-x-1">
            <p className="text-5xl font-bold">{rate}</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-x-4">
          {StarRating.map((rate) => (
            <div
              key={rate.number}
              className="grid grid-cols-[5%_10%_75%_10%] items-center"
            >
              <div className="w-1">{rate.star}</div>
              <Image
                className="size-5"
                src={"/assets/star.svg"}
                alt="rating"
                width={14}
                height={14}
              />
              <div className="relative">
                {" "}
                <div
                  className="absolute h-[6px] w-full items-start rounded-full bg-button"
                  style={{ width: `${(rate.number / 25) * 100}%` }}
                />
                <div className="absolute h-[6px] w-full items-start rounded-full bg-button/10" />
              </div>

              <div className="ml-4">{rate.number}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
