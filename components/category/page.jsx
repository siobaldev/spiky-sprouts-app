import React from "react";
import Image from "next/image";
import { ArrowUpIcon } from "@/lib/data";
import ClientWrapper from "@/context/ClientWrapper";

export default function Category() {
  return (
    <section
      id="category"
      className="mb-28 scroll-mt-20 px-6 sm:px-10 md:scroll-mt-28 md:px-14"
    >
      <div className="mb-8 space-y-2 text-center">
        <h1 className="font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
          Explore by <span className="text-accent">category</span>
        </h1>
        <p className="mx-auto max-w-[30rem] text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
          Browse our diverse selection of plants, carefully chosen to thrive and
          bring life to any setting.
        </p>
      </div>
      {/* grid grid-cols-2 place-items-center gap-y-12 max-[520px]:grid-cols-1 */}
      <div className="flex flex-row items-center justify-center gap-12 max-[460px]:flex-col md:text-xl lg:text-2xl xl:text-3xl">
        <ClientWrapper>
          <div className="relative size-52 bg-[url('/assets/all-bg.svg')] bg-cover md:size-64 lg:size-80">
            <Image
              className="absolute left-8 top-8 size-24 select-none drop-shadow-sm md:size-32 md:drop-shadow-md lg:size-40 lg:drop-shadow-lg"
              src={"/assets/Lily-Pad-Succulent.webp"}
              alt="Wishlist"
              width={20}
              height={20}
              unoptimized={true}
            />
            <Image
              className="absolute bottom-8 right-8 size-24 select-none drop-shadow-sm md:size-32 md:drop-shadow-md lg:size-40 lg:drop-shadow-lg"
              src={"/assets/Gymnocalycium-Cactus.webp"}
              alt="Wishlist"
              width={20}
              height={20}
              unoptimized={true}
            />
          </div>
          <div className="flex justify-between">
            <h1 className="font-morangaBlack uppercase opacity-87">
              Explore All
            </h1>
            <div className="rotate-90">
              <ArrowUpIcon />
            </div>
          </div>
        </ClientWrapper>
        <div className="space-y-8">
          <ClientWrapper>
            <div className="flex size-40 items-center justify-center bg-[url('/assets/cactus-bg.svg')] bg-cover md:size-52 lg:size-60">
              <Image
                className="size-24 select-none drop-shadow-sm md:size-32 md:drop-shadow-md lg:drop-shadow-lg"
                src={"/assets/Rebutia-Cactus.webp"}
                alt="Wishlist"
                width={20}
                height={20}
                unoptimized={true}
              />
            </div>
            <div className="flex justify-between">
              <h1 className="font-morangaBlack uppercase opacity-87">Cactus</h1>
              <div className="rotate-90">
                <ArrowUpIcon />
              </div>
            </div>
          </ClientWrapper>
          <ClientWrapper>
            <div className="flex size-40 items-center justify-center bg-[url('/assets/succulent-bg.svg')] bg-cover md:size-52 lg:size-60">
              <Image
                className="size-24 select-none drop-shadow-sm md:size-32 md:drop-shadow-md lg:drop-shadow-lg"
                src={"/assets/Jade-Plant-Succulent.webp"}
                alt="Wishlist"
                width={20}
                height={20}
                unoptimized={true}
              />
            </div>
            <div className="flex justify-between">
              <h1 className="font-morangaBlack uppercase opacity-87">
                Succulent
              </h1>
              <div className="rotate-90">
                <ArrowUpIcon />
              </div>
            </div>
          </ClientWrapper>
        </div>
      </div>
    </section>
  );
}
