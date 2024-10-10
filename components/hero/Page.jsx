import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="mb-28 scroll-mt-[10rem] px-6 sm:px-10 md:px-14 lg:mb-40"
    >
      <div className="mb-12 flex flex-col-reverse items-center gap-y-4 pt-16 md:flex-row md:items-center md:justify-center md:pt-28 lg:gap-x-8 lg:pt-40">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start xl:gap-6">
          <div className="flex flex-col gap-4 xl:gap-6">
            <h1 className="max-w-[40rem] font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
              Sculpting Spaces — <br />
              The Art of Ornamental <span className="text-accent">Plants</span>
            </h1>
            <p className="max-w-[40rem] text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
              We design ornamental plants for your home in-house for an original
              style and quality you won&apos;t find anywhere else.
            </p>
          </div>
          <div>
            <Link href="#bestSeller">
              <button className="group flex h-11 items-center gap-x-4 rounded-md border-2 border-button bg-button px-5 text-sm font-bold uppercase text-white/[0.87] hover:border-hover hover:bg-hover xl:text-base">
                <span>Shop now</span>
                <ArrowIcon className="duration-500 group-hover:-rotate-45 lg:size-6 xl:size-7" />
              </button>
            </Link>
          </div>
        </div>

        <div>
          <Image
            className="w-48 drop-shadow-sm sm:w-[14rem] md:w-[20rem] lg:drop-shadow-lg xl:w-[22rem]"
            src="/assets/Home-Cactus.webp"
            alt="home-cactus"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

// H1
