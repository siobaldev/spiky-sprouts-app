"use client";

import { useState, useEffect } from "react";
import { plants } from "@/lib/data";
import Link from "next/link";
import Card from "@/components/ui/card/Page";
import { notFound } from "next/navigation";

export default function ShopByCategory({ params }) {
  const { category } = params;
  const validCategories = ["All", "Cactus", "Succulent"];

  if (!validCategories.includes(category)) {
    notFound();
  }

  const [selectedCategory, setSelectedCategory] = useState(category);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? plants
        : plants.filter((item) => item.tag.includes(selectedCategory));
    setFilteredItems(filtered);
  }, [selectedCategory]);

  return (
    <div className="px-10 py-32 md:px-20 lg:p-36">
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-center gap-x-5 font-bold text-white/[.87]">
          <button
            onClick={() => {
              setSelectedCategory("All");
            }}
            className={`rounded-lg bg-button/10 px-5 py-2 hover:ring-2 hover:ring-button ${selectedCategory === "All" ? "ring-2 ring-button" : "text-white/60"}`}
          >
            All
          </button>
          <button
            onClick={() => {
              setSelectedCategory("Cactus");
            }}
            className={`rounded-lg bg-button/10 px-5 py-2 hover:ring-2 hover:ring-button ${selectedCategory === "Cactus" ? "ring-2 ring-button" : "text-white/60"}`}
          >
            Cactus
          </button>
          <button
            onClick={() => {
              setSelectedCategory("Succulent");
            }}
            className={`rounded-lg bg-button/10 px-5 py-2 hover:ring-2 hover:ring-button ${selectedCategory === "Succulent" ? "ring-2 ring-button" : "text-white/60"}`}
          >
            Succulent
          </button>
        </div>

        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-8">
          {filteredItems.map((plant) => (
            <Link
              href={`/category/${selectedCategory}/product/${plant.slug}`}
              key={plant.id}
            >
              <Card
                key={plant.id}
                name={plant.name}
                imageName={plant.image}
                rate={plant.rate}
                reviews={plant.reviews}
                salePrice={plant.salePrice}
                price={plant.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
