import React from "react";
import { plants } from "@/lib/data";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function NewArrival() {
  const newPlants = plants.filter((plant) => plant.tag.includes("New"));

  return (
    <section
      id="newArrival"
      className="mb-28 scroll-mt-20 px-6 sm:px-10 md:scroll-mt-28 md:px-14 lg:mb-40"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
            New <span className="text-accent">Arrivals</span>
          </h1>
          <p className="mx-auto max-w-[30rem] text-sm opacity-60 md:text-base lg:max-w-[35rem] lg:text-lg xl:text-xl">
            Select new ornamental plants for home decoration and obtain an
            atmosphere of harmony and freshness.
          </p>
        </div>
        <div className="flex w-full max-w-[46rem] flex-wrap items-center justify-center gap-x-4 gap-y-4">
          {newPlants.map((plant) => (
            <Link href={`/category/All/product/${plant.slug}`} key={plant.id}>
              <Card
                name={plant.name}
                imageName={plant.image}
                rate={plant.rate}
                reviews={plant.reviews}
                salePrice={plant.salePrice}
                price={plant.price}
                slug={plant.slug}
                plant={plant}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
