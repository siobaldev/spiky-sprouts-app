"use client";

import React, { useState, useEffect } from "react";
import MobileNav from "@/components/nav/MobileNav";
import { NavItems } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";

export default function Header() {
  const [isSticking, setIsSticking] = useState(false);

  useEffect(() => {
    setIsSticking(window.scrollY > 0);
    const handleScroll = () => {
      setIsSticking(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 flex h-[4rem] w-full items-center justify-center transition-all duration-300 md:h-[5rem] lg:h-[6rem] ${
        !isSticking
          ? "bg-transparent"
          : "bg-primary shadow-headerBottom backdrop-blur-[1rem]"
      }`}
    >
      <div className="container z-0 mx-auto flex w-full max-w-[1280px] items-center justify-between px-8 md:px-16">
        <div className="lg:hidden">
          <MobileNav />
        </div>

        <div className="-z-20">
          <Link href="/">
            <Image
              className="-z-20 md:w-20 lg:w-28"
              src="/assets/logo.svg"
              alt="Spiky-Sprouts-Logo"
              width={70}
              height={30}
              priority
            />
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex flex-wrap gap-4">
            {NavItems.map((link) => (
              <li key={link.href} className="relative px-4 py-2">
                <Link
                  className="list-none underline-offset-8 transition hover:text-accent md:text-base"
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="-z-20 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-20">
          <form className="hidden lg:flex">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 transform text-white/60"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Looking for something?"
                className="h-12 w-72 rounded-lg border-2 border-white/[0.05] bg-white/[0.02] py-2 pl-12 font-medium text-white/60 placeholder:opacity-60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button xl:w-80"
              />
            </div>
          </form>
          <Image
            className="size-6 opacity-60 sm:size-7 lg:size-8"
            src="/assets/Cart.svg"
            alt="cart"
            width={30}
            height={30}
          />
        </div>
      </div>
    </header>
  );
}
