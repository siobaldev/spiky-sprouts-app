import React from "react";

export default function Loading() {
  return (
    <div className="h-screen w-full px-6 sm:px-10 md:px-14">
      <div className="flex h-[4rem] w-full items-center justify-center md:h-[5rem] lg:h-[6rem]">
        <div className="container flex h-[4rem] w-full max-w-[1280px] animate-pulse items-center justify-between rounded-lg bg-accent/10 px-8 md:px-16"></div>
      </div>
      <div className="container mx-auto mt-32 h-[60%] w-full max-w-[1280px] animate-pulse rounded-lg bg-accent/10 p-6 max-[380px]:px-4 sm:p-8 md:px-14 lg:px-8 lg:pb-16 xl:px-16"></div>
    </div>
  );
}
