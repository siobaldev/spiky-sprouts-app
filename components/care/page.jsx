import React from "react";
import { plantCare } from "@/lib/data";
import Image from "next/image";

export default function Care() {
  return (
    <section
      id="plantCare"
      className="mb-28 scroll-mt-20 px-6 sm:px-10 md:scroll-mt-28 md:px-14"
    >
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-center font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
            Essential Care Tips for <br />
            Your <span className="text-[#83C949]"> Plants</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-x-8 md:flex-row lg:flex-row">
          <Image
            className="drop-shadow-sm md:w-64 md:drop-shadow-md lg:w-96 lg:drop-shadow-lg"
            src="/assets/Care-Cactus.webp"
            alt="home-cactus"
            width={150}
            height={150}
          />
          <div className="max-w-[24rem] md:w-[28rem] lg:w-[34rem] lg:space-y-2">
            {plantCare.map((care) => (
              <div key={care.number} className="flex flex-row items-center">
                <h1 className="w-7 bg-gradient-to-r from-[#83C949] bg-clip-text font-morangaBlack text-[3rem] text-transparent md:text-[3.3rem]">
                  {care.number}
                </h1>
                <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
                  {care.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
