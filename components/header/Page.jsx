"use client";

import React, { useState, useEffect } from "react";
import MobileNav from "@/components/nav/MobileNav";
import { NavItems } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";

export default function Header() {
  return (
    <header>
      <div className="container fixed mx-auto flex items-center justify-between px-4 opacity-[.87] lg:h-[4rem]">
        <div className="w-24 lg:w-28">
          <Link href="/">
            <Image
              src="./assets/logo.svg"
              alt="Spiky-Sprouts-Logo"
              width={70}
              height={30}
            />
          </Link>
        </div>

        <div className="hidden md:flex">
          <ul className="flex flex-wrap gap-8">
            {NavItems.map((link) => (
              <li
                key={link.href}
                className="list-none transition hover:text-accent"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
