import React from "react";

export default function Loading() {
  return (
    <div className="h-screen w-full px-6 sm:px-10 md:px-14">
      <div className="flex h-16 w-full items-center justify-center md:h-20 lg:h-24">
        <div className="bg-accent/10 container flex h-16 w-full max-w-7xl animate-pulse items-center justify-between rounded-lg px-8 md:px-16"></div>
      </div>
      <div className="bg-accent/10 container mx-auto mt-32 h-[60%] w-full max-w-7xl animate-pulse rounded-lg p-6 max-[380px]:px-4 sm:p-8 md:px-14 lg:px-8 lg:pb-16 xl:px-16"></div>
    </div>
  );
}
