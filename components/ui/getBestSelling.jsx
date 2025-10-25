"use client";

import Card from "@/components/ui/card";
import Link from "next/link";
import { UseProducts } from "@/hooks/useProducts";
import Loading from "./loading";
import { toast } from "sonner";

export const GetBestSelling = () => {
  const { data: bestSelling, isLoading, error } = UseProducts("Best");

  if (isLoading) return <Loading count={3} />;

  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.matchMedia("(max-width: 1024px)").matches;
  }

  if (error) {
    toast.error("Error fetching best selling!", {
      duration: 5000,
      position: isMobile ? "top-center" : "bottom-right",
      classNames: {
        icon: "text-green-500",
        toast: "bg-[#1D1412] text-white/87 border-red",
        description: "text-white/60 lg:text-lg md:text-base text-sm",
      },
    });
    return null;
  }

  return (
    <div className="flex w-full max-w-184 flex-wrap items-center justify-center gap-x-4 gap-y-4">
      {bestSelling.map((product) => (
        <Link href={`/category/All/product/${product.slug}`} key={product.id}>
          <Card
            id={product.id}
            name={product.name}
            image={product.image}
            rate={product.rate}
            reviews={product.reviews}
            salePrice={product.salePrice}
            price={product.price}
            slug={product.slug}
            plant={product}
          />
        </Link>
      ))}
    </div>
  );
};
