"use client";

import React, { useState, useEffect } from "react";
import { NavItems, FacebookIcon, TwitterIcon, InstagramIcon } from "@/lib/data";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuSlide } from "@/lib/utils";
import SearchBar from "@/components/ui/searchBar";

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
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="bg-primary shadow-nav-shadow fixed top-0 left-0 mb-10 flex h-dvh flex-col p-6 max-[380px]:p-2 sm:w-96 md:w-md md:p-16"
          >
            <div className="flex h-screen flex-col justify-between space-y-12 px-6 py-24 md:px-0">
              <div className="space-y-14">
                <SearchBar
                  setMovileNavOpen={() => {
                    setIsOpen(false);
                  }}
                />
                <div>
                  <ul className="flex flex-col gap-3 text-xl">
                    {NavItems.map((link) => (
                      <li
                        key={link.href}
                        className="hover:text-accent list-none transition"
                      >
                        <Link onClick={toggleMenu} href={link.href}>
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-center gap-x-4">
                <div className="bg-button flex size-10 cursor-pointer items-center justify-center rounded-full">
                  <FacebookIcon />
                </div>
                <div className="bg-button flex size-10 cursor-pointer items-center justify-center rounded-full">
                  <TwitterIcon />
                </div>
                <div className="bg-button flex size-10 cursor-pointer items-center justify-center rounded-full">
                  <InstagramIcon />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {isOpen && (
          <motion.div
            className="bg-primary/40 fixed top-0 left-0 -z-10 h-screen w-full backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
