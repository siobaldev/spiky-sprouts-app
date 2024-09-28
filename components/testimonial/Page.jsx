import React from "react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="mb-28 bg-button/10 px-6 sm:px-10 md:px-14">
      <div className="flex w-full flex-col gap-y-4 p-7">
        <h1 className="font-morangaRegular text-center text-xl">
          Trusted by Over <br /> 5,000 Businesses <br /> Since 2019
        </h1>
        <div className="flex items-center justify-center gap-8">
          <Image
            className="w-48 drop-shadow-sm sm:w-[14rem] md:w-[20rem] lg:drop-shadow-lg xl:w-[22rem]"
            src="/assets/Contact-Cactus.webp"
            alt="home-cactus"
            width={70}
            height={70}
          />
          <div className="flex flex-col gap-y-6">
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
      </div>
    </section>
  );
}
