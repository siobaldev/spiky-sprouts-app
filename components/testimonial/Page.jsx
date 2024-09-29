import React from "react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="mb-28 bg-button/10 px-6 sm:px-10 md:px-14">
      <div className="grid grid-cols-2 place-items-center gap-y-4 p-7 max-[420px]:grid-cols-1 md:grid-cols-3 md:grid-rows-1 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-x-16">
        <h1 className="col-span-full text-center font-morangaRegular text-xl md:order-2 md:col-span-1">
          Trusted by Over <br /> 5,000 Businesses <br /> Since 2019
        </h1>
        <div className="md:order-1">
          <Image
            className="lg:drop-shadow-lgv min-w-44 drop-shadow-sm max-[420px]:min-w-32 sm:w-[14rem] md:w-[15rem]"
            src="/assets/Contact-Cactus.webp"
            alt="home-cactus"
            width={100}
            height={100}
            quality={100}
            unoptimized={true}
          />
        </div>
        <div className="flex flex-col gap-x-6 gap-y-6 md:order-3 lg:flex-row">
          <div>
            <div className="flex gap-x-2">
              <h1 className="text-xl font-bold">4.8</h1>
              <Image
                className=""
                src="/assets/rating.svg"
                alt="home-cactus"
                width={80}
                height={80}
              />
            </div>
            <p className="text-sm opacity-60">
              Rating from <br /> 1500+ Reviews
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold">100+</h1>
            <p className="text-sm opacity-60">
              New Clients <br /> Every Year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
