// app/plants/[slug]/page.js
import { plants } from "@/lib/data";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";

// Generate static params
export async function generateStaticParams() {
  return plants.map((plant) => ({
    slug: plant.slug,
  }));
}

export default function PlantDetail({ params }) {
  const plant = plants.find((p) => p.slug === params.slug);

  if (!plant) {
    return <div>Plant not found</div>;
  }

  return (
    <section className="container mx-auto flex h-full w-full items-center justify-center py-80">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">{plant.name}</h1>
        <Image
          className="size-24 md:size-32"
          src={getImageUrl(plant.image)}
          alt={plant.name}
          width={90}
          height={90}
          unoptimized={true}
        />
        <p className="text-xl font-medium">
          Rating: {plant.rate} ({plant.reviews})
        </p>
        <p className="text-lg text-gray-700">Price: ${plant.salePrice}</p>
        <p className="text-lg text-gray-500 line-through">
          Was: ${plant.price}
        </p>
      </div>
    </section>
  );
}
