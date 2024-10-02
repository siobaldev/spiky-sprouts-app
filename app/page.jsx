import React from "react";
import Hero from "@/components/hero/Page";
import Testimonial from "@/components/testimonial/Page";
import NewArrival from "@/components/newArrival/Page";
import BestSeller from "@/components/bestSeller/Page";
import Category from "@/components/category/page";
import Care from "@/components/care/page";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <Testimonial />
      <NewArrival />
      <BestSeller />
      <Category />
      <Care />
    </main>
  );
}
