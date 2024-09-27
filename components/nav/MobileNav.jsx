"use client";

import React, { useState } from "react";
import { NavItems, FacebookIcon, TwitterIcon, InstagramIcon } from "@/lib/data";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button
        className="sticky z-30 cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed right-0 top-0 mb-10 flex h-dvh w-80 flex-col bg-primary p-6">
          <div className="flex flex-col gap-y-12 px-6 py-24">
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
                  className="h-12 w-56 rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-12 py-2 font-bold text-white/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button"
                />
              </div>
            </form>
            <div>
              <ul className="flex flex-col gap-3 text-xl">
                {NavItems.map((link) => (
                  <label htmlFor="sidebar-active" key={link.href}>
                    <Link href={link.href}>{link.title}</Link>
                  </label>
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
    </nav>
  );
}
{
  /*  */
}
