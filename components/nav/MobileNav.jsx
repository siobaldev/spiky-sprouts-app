"use client";

import React, { useState, useEffect } from "react";
import { NavItems, FacebookIcon, TwitterIcon, InstagramIcon } from "@/lib/data";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button
        className="sticky z-40 cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="size-6 opacity-60 sm:size-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h12M4 12h16M8 18h12"}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="shadow-navShadow fixed left-0 top-0 mb-10 flex h-dvh w-4/5 flex-col bg-primary p-6 sm:w-96 md:w-[28rem] md:p-16">
          <div className="flex flex-col gap-y-12 px-6 py-24 md:px-0">
            <form>
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
                  placeholder="Search"
                  className="h-12 w-11/12 rounded-lg border-2 border-white/[0.05] bg-white/[0.02] py-2 pl-12 font-bold text-white/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button"
                />
              </div>
            </form>
            <div>
              <ul className="flex flex-col gap-3 text-xl">
                {NavItems.map((link) => (
                  <li
                    key={link.href}
                    className="list-none transition hover:text-accent"
                  >
                    <Link onClick={toggleMenu} href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex items-center justify-center gap-x-4">
              <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-button">
                <FacebookIcon />
              </div>
              <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-button">
                <TwitterIcon />
              </div>
              <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-button">
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed left-0 top-0 -z-10 h-screen w-full bg-primary/40 backdrop-blur-sm transition-opacity duration-[0.75s] ease-in-out md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
