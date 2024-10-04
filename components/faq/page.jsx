"use client";

import React, { useState } from "react";
import { FAQs } from "@/lib/data";

export default function Faq() {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };
  return (
    <section className="mb-28 scroll-mt-20 px-6 sm:px-10 md:scroll-mt-28 md:px-14">
      <h1 className="mb-8 text-center font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
        FAQ<span className="lowercase">s</span>
      </h1>
      <div className="mx-auto max-w-[800px] space-y-2 text-sm md:space-y-3 md:text-base lg:space-y-4 lg:text-lg xl:text-xl">
        {FAQs.map((faqs) => (
          <div
            key={faqs.id}
            className="rounded-2xl border-white bg-white/[0.02] p-4 md:p-5 lg:p-6"
          >
            <button
              onClick={() => toggleAccordion(faqs.id)}
              className="flex w-full items-center justify-between px-4"
            >
              <span className="pr-4 text-left opacity-87">{faqs.question}</span>
              <span
                className={`transition-transform duration-300 ease-in-out ${
                  openAccordionId === faqs.id ? "rotate-180" : "-rotate-0"
                }`}
              >
                <svg
                  className="size-[10px] md:size-[12px]"
                  width="10"
                  height="10"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.38" clipPath="url(#clip0_969_1630)">
                    <path
                      d="M13.7792 2.29789C13.5594 2.2004 13.3054 2.25477 13.1369 2.4335L7.0714 8.86638L1.00591 2.4335C0.837381 2.25477 0.583971 2.20101 0.363597 2.29789C0.143196 2.39413 0 2.62287 0 2.87537V6.00026C0 6.16651 0.0618748 6.32524 0.172669 6.44213L6.6548 13.3169C6.76971 13.4387 6.92055 13.5 7.07143 13.5C7.2223 13.5 7.37315 13.4387 7.48806 13.3169L13.9702 6.44213C14.081 6.32527 14.1429 6.16651 14.1429 6.00026V2.87537C14.1428 2.62287 13.9996 2.39413 13.7792 2.29789Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_969_1630">
                      <rect width="14.1429" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordionId === faqs.id
                  ? "mt-2 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-4 text-sm font-light opacity-60 md:pr-12 md:text-base lg:space-y-4 lg:text-lg xl:text-xl">
                {faqs.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
