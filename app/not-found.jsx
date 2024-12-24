"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  let title = "Page";
  let linkHref = "/";
  let linkText = "Home";

  if (pathname.startsWith("/category/")) {
    const parts = pathname.split("/");

    if (parts.includes("product")) {
      title = "Product";
      linkHref = `/category/${parts[2]}`;
      linkText = "Categories";
    } else {
      title = "Category";
      linkHref = "/category/All";
      linkText = "Categories";
    }
  }
  return (
    <div className="container mx-auto flex h-screen w-full flex-col items-center justify-center gap-y-4 px-6">
      <h1 className="font-morangaBlack text-[1.6rem] lg:text-[2.488rem] xl:text-[2.986rem]">
        404 - {title} Not Found
      </h1>
      <p className="text-center text-base lg:text-xl">
        Oops! The {title.toLowerCase()} you're looking for doesn't exist.
      </p>
      <Link href={linkHref}>
        <button className="group flex h-11 items-center gap-x-4 rounded-md border-2 border-button bg-button px-5 text-sm font-bold uppercase text-white/[0.87] hover:border-hover hover:bg-hover xl:text-base">
          Return to {linkText}
        </button>
      </Link>
    </div>
  );
}
