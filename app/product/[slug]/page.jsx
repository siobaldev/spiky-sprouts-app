// app/plants/[slug]/page.js
import { plants } from "@/lib/data";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import ColorSelector from "@/components/potColor/page";
import Quantity from "@/components/quantity/page";

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
    <section className="container mx-auto mb-24 mt-16 px-8 max-[350px]:px-5 md:mt-20 md:px-16 lg:mt-24">
      <div className="container mx-auto w-full rounded-3xl bg-button/10 p-6 max-[380px]:px-4">
        <div className="just flex flex-col gap-y-4">
          <div className="flex w-full justify-center">
            <Image
              className="size-40 drop-shadow-sm"
              src={getImageUrl(plant.image)}
              alt={plant.name}
              width={90}
              height={90}
              unoptimized={true}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="w-fit rounded-full bg-accent/20 px-4 py-1 font-morangaBlack uppercase text-accent">
              Cactus
            </h1>

            <h2 className="font-morangaBlack text-2xl font-bold">
              {plant.name}
            </h2>
            <p className="text-sm opacity-60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              finibus nulla diam, finibus feugiat magna efficitur at. Phasellus
              a urna.
            </p>
            <div className="flex flex-row items-center justify-between gap-x-2">
              <span className="text-2xl font-bold">${plant.salePrice}</span>
              <span className="line-through opacity-60">${plant.price}</span>
              <hr className="h-0.5 w-full grow rounded-md border-0 bg-white/60" />
              <span className="whitespace-nowrap text-sm opacity-60">
                40 in stock
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm">Pot Color</h1>
              <ColorSelector />
            </div>
            <Quantity />
          </div>
        </div>
      </div>
    </section>
  );
}
