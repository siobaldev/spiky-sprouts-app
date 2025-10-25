import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  ArrowIcon,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-button/10 relative px-8 pt-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-y-8 md:p-10 lg:flex-row lg:px-16">
          <div className="flex flex-col gap-y-2">
            <div className="flex w-full justify-between">
              <div className="">
                <Link href="/">
                  <Image
                    className="w-24 lg:w-32"
                    src="/assets/Logo.svg"
                    alt="logo-icon"
                    width={80}
                    height={30}
                  />
                </Link>
              </div>
            </div>
            <p className="w-72 text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
              Sculpting nature&apos;s beauty into unique creations for your
              living spaces.
            </p>
            <div className="flex items-center gap-x-4">
              <div className="group bg-button/60 relative flex size-9 cursor-pointer items-center justify-center rounded-full">
                <FacebookIcon />
                <span className="bg-button absolute -top-14 left-1/2 z-20 -translate-x-1/2 scale-0 transform rounded-lg px-4 py-2 text-sm font-bold text-white shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-100">
                  Facebook
                </span>
              </div>
              <div className="group bg-button/60 relative flex size-9 cursor-pointer items-center justify-center rounded-full">
                <TwitterIcon />
                <span className="bg-button absolute -top-14 left-1/2 z-20 -translate-x-1/2 scale-0 transform rounded-lg px-4 py-2 text-sm font-bold text-white shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-100">
                  Twitter
                </span>
              </div>
              <div className="group bg-button/60 relative flex size-9 cursor-pointer items-center justify-center rounded-full">
                <InstagramIcon />
                <span className="bg-button absolute -top-14 left-1/2 z-20 -translate-x-1/2 scale-0 transform rounded-lg px-4 py-2 text-sm font-bold text-white shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-100">
                  Instagram
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 md:text-left md:text-base lg:gap-12 lg:text-lg xl:text-xl">
            <div className="space-y-2 md:space-y-3">
              <h1 className="font-bold opacity-87">Sitemap</h1>
              <ul className="flex flex-col gap-y-2 opacity-60 md:gap-3">
                <li>
                  <a href="/#newArrival">New Arrival</a>
                </li>
                <li>
                  <a href="/#bestSeller">BestSeller</a>
                </li>
                <li>
                  <a href="/#category">Category</a>
                </li>
                <li>
                  <a href="/#plantCare">Plant Care</a>
                </li>
                <li>
                  <a href="/#faq">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h1 className="font-bold opacity-87">Visit Us</h1>
              <p className="opacity-60">
                Lima - Green City <br />
                Peru Av. Plantopia #4321
              </p>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h1 className="font-bold opacity-87">Contact Us</h1>
              <div className="flex flex-col gap-y-2 opacity-60">
                <p>spikysprouts@gmail.com</p>
                <p>+00-987-654-321</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:p-x-10 lg:px-16">
          <hr className="bg-button/60 h-0.5 w-full rounded-md border-0" />
          <p className="py-4 text-center text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
            &#169; All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
