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

        <div className="-z-20">
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
