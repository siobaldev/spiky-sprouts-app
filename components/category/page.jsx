import React from "react";
import Image from "next/image";
import { ArrowIcon } from "@/lib/data";
import ClientWrapper from "@/context/ClientWrapper";
import Link from "next/link";

export default function Category() {
  return (
    <section
      id="category"
      className="mb-28 scroll-mt-20 px-6 sm:px-10 md:scroll-mt-28 md:px-14 lg:mb-40"
    >
      <div className="mb-8 space-y-2 text-center">
        <h1 className="font-moranga-black text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
          Explore by <span className="text-accent">category</span>
        </h1>
        <p className="mx-auto max-w-120 text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
          Browse our diverse selection of plants, carefully chosen to thrive and
          bring life to any setting.
        </p>
      </div>

      <div className="flex flex-row items-center justify-center gap-12 max-[460px]:flex-col md:text-xl lg:text-2xl xl:text-3xl">
        <ClientWrapper>
          <Link href="/category/All" className="space-y-2">
            <div className="relative size-52 bg-[url('/assets/all-bg.svg')] bg-cover md:size-64 lg:size-80">
              <Image
                className="absolute top-8 left-8 size-24 drop-shadow-sm select-none md:size-32 md:drop-shadow-md lg:size-40 lg:drop-shadow-lg"
                src="https://nlyzxhvvdrgeqcrgakld.supabase.co/storage/v1/object/public/images/Lily-Pad-Succulent.webp"
                alt="Wishlist"
                width={20}
                height={20}
                unoptimized={true}
              />
              <Image
                className="absolute right-8 bottom-8 size-24 drop-shadow-sm select-none md:size-32 md:drop-shadow-md lg:size-40 lg:drop-shadow-lg"
                src="https://nlyzxhvvdrgeqcrgakld.supabase.co/storage/v1/object/public/images/Gymnocalycium-Cactus.webp"
                alt="Wishlist"
                width={20}
                height={20}
                unoptimized={true}
              />
            </div>

            <div className="flex items-center justify-between">
              <h1 className="font-moranga-black uppercase opacity-87">
                Explore All
              </h1>
              <ArrowIcon className="duration-500 group-hover:-rotate-45 lg:size-6 xl:size-7" />
            </div>
          </Link>
        </ClientWrapper>
        <div className="space-y-8">
          <ClientWrapper>
            <Link href="/category/Cactus" className="space-y-2">
              <div className="flex size-40 items-center justify-center bg-[url('/assets/cactus-bg.svg')] bg-cover md:size-52 lg:size-60">
                <Image
                  className="size-24 drop-shadow-sm select-none md:size-32 md:drop-shadow-md lg:drop-shadow-lg"
                  src="https://nlyzxhvvdrgeqcrgakld.supabase.co/storage/v1/object/public/images/Rebutia-Cactus.webp"
                  alt="Wishlist"
                  width={20}
                  height={20}
                  unoptimized={true}
                />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-moranga-black uppercase opacity-87">
                  Cactus
                </h1>
                <ArrowIcon className="duration-500 group-hover:-rotate-45 lg:size-6 xl:size-7" />
              </div>
            </Link>
          </ClientWrapper>
          <ClientWrapper>
            <Link href="/category/Succulent" className="space-y-2">
              <div className="flex size-40 items-center justify-center bg-[url('/assets/succulent-bg.svg')] bg-cover md:size-52 lg:size-60">
                <Image
                  className="size-24 drop-shadow-sm select-none md:size-32 md:drop-shadow-md lg:drop-shadow-lg"
                  src="https://nlyzxhvvdrgeqcrgakld.supabase.co/storage/v1/object/public/images/Jade-Plant-Succulent.webp"
                  alt="Wishlist"
                  width={20}
                  height={20}
                  unoptimized={true}
                />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-moranga-black uppercase opacity-87">
                  Succulent
                </h1>
                <ArrowIcon className="duration-500 group-hover:-rotate-45 lg:size-6 xl:size-7" />
              </div>
            </Link>
          </ClientWrapper>
        </div>
      </div>
    </section>
  );
}
