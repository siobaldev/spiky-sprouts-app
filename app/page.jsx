import React from "react";
import Hero from "@/components/hero/Page";
import Testimonial from "@/components/testimonial/Page";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <Testimonial />
    </main>
  );
}
