import React from "react";
import { plants } from "@/lib/data";
import Card from "@/components/ui/favorite";
import Link from "next/link";

export default function BestSeller() {
  const bestPlants = plants.filter((plant) => plant.tag.includes("Best"));

  return (
    <section
      id="bestSeller"
      className="mb-28 scroll-mt-20 px-6 sm:px-10 md:scroll-mt-28 md:px-14 lg:mb-40"
    >
      <div className="mb-8 space-y-2 text-center">
        <h1 className="font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
          Best <span className="text-[#83C949]">Seller</span>
        </h1>
        <p className="mx-auto max-w-[30rem] text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
          Discover our curated selection of top-notch plants, guaranteed to
          elevate your indoor garden game.
        </p>
        <div className="flex flex-wrap"></div>
      </div>
      <div className="mx-auto flex w-full max-w-[46rem] flex-wrap items-center justify-center gap-x-4 gap-y-4">
        {bestPlants.map((plant) => (
          <Link href={`/category/All/product/${plant.slug}`} key={plant.id}>
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
    </section>
  );
}
