import React from "react";

export default function NewsLetter() {
  return (
    <section className="mb-28 scroll-mt-20 px-6 sm:px-10 md:scroll-mt-28 md:px-14">
      <div className="mb-8 flex flex-col items-center gap-y-2">
        <h1 className="text-center font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
          Join Our <span className="text-accent">plant</span> Community
        </h1>
        <p className="flex flex-wrap text-center text-sm opacity-60 md:w-[34rem] md:text-base lg:w-[36rem] lg:text-lg xl:w-[40rem] xl:text-xl">
          Subscribe to our newsletter for exclusive updates, special discounts,
          and expert plant care tips delivered straight to your inbox!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <div>
          <input
            className="w-70 h-12 rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:w-80 md:text-base lg:h-14 lg:w-96 lg:py-3 lg:text-lg xl:text-xl"
            type="text"
            id="search"
            name="search"
            inputMode="email"
            placeholder="Type your email"
          />
        </div>

        <button className="font-basementGrotesque h-12 rounded-md bg-button px-4 text-sm font-bold hover:bg-hover md:text-base lg:h-14 lg:text-lg xl:px-8 xl:text-xl">
          Subscribe
        </button>
      </div>
    </section>
  );
}