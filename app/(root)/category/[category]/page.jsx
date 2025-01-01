"use client";

import { useState, useEffect, use } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? plants
        : plants.filter((item) => item.tag.includes(selectedCategory));
    setFilteredItems(filtered);
    setCurrentPage(1);
  }, [selectedCategory]);

  const indexOfLastPlant = currentPage * itemsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - itemsPerPage;
  const currentPlants = filteredItems.slice(
    indexOfFirstPlant,
    indexOfLastPlant,
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="px-10 py-32 md:px-20 lg:p-36">
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-center gap-x-3 text-sm font-bold text-white/[.87] sm:gap-x-5">
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
          {currentPlants.map((plant) => (
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
                plant={plant}
              />
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-lg bg-button/10 px-5 py-2 hover:ring-2 hover:ring-button disabled:text-white/30 disabled:ring-0"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={`rounded-lg px-4 py-2 ${currentPage === page ? "border-0 bg-button/10" : ""}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="rounded-lg bg-button/10 px-5 py-2 hover:ring-2 hover:ring-button disabled:text-white/30 disabled:ring-0"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
