import React from "react";
import Hero from "@/components/hero/Page";
import Testimonial from "@/components/testimonial/Page";
import NewArrival from "@/components/newArrival/Page";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <Testimonial />
      <NewArrival />
    </main>
  );
}
