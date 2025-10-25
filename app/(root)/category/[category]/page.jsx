"use client";

import { use, useState, useMemo } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Card from "@/components/ui/card";
import { UseProducts } from "@/hooks/useProducts";
import Loading from "@/components/ui/loading";

export default function ShopByCategory({ params }) {
  const { category } = use(params);
  const validCategories = ["All", "Cactus", "Succulent"];
  const { data: allProducts, isLoading, error } = UseProducts(category);

  if (!validCategories.includes(category)) {
    notFound();
  }

  const [selectedCategory, setSelectedCategory] = useState(category);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const filteredItems = useMemo(() => {
    if (!allProducts) return [];

    return selectedCategory === "All"
      ? allProducts
      : allProducts.filter((item) => item.tag.includes(selectedCategory));
  }, [selectedCategory, allProducts]);

  if (error) return <div>Error: {error.message}</div>;

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
          {validCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
              }}
              className={`bg-button/10 hover:ring-button rounded-lg px-5 py-2 hover:ring-2 ${
                selectedCategory === cat
                  ? "ring-button ring-2"
                  : "text-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="flex items-center justify-center">
          Showing {filteredItems.length === 0 ? 0 : indexOfFirstPlant + 1} -{" "}
          {Math.min(indexOfLastPlant, filteredItems.length)} of{" "}
          {filteredItems.length}
        </p>

        {isLoading ? (
          <Loading count={5} />
        ) : (
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-8">
            {currentPlants.map((plant) => (
              <Link
                href={`/category/${selectedCategory}/product/${plant.slug}`}
                key={plant.id}
              >
                <Card
                  id={plant.id}
                  name={plant.name}
                  image={plant.image}
                  rate={plant.rate}
                  reviews={plant.reviews}
                  salePrice={plant.salePrice}
                  price={plant.price}
                  slug={plant.slug}
                  category={category}
                  plant={plant}
                />
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center gap-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-button/10 hover:ring-button rounded-lg px-5 py-2 hover:ring-2 disabled:text-white/30 disabled:ring-0"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded-lg px-4 py-2 ${
                currentPage === page ? "bg-button/10 border-0" : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="bg-button/10 hover:ring-button rounded-lg px-5 py-2 hover:ring-2 disabled:text-white/30 disabled:ring-0"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
