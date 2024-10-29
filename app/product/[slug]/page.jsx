// app/plants/[slug]/page.js
import { plants, plantCare } from "@/lib/data";
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
      <div className="flex flex-col gap-y-10">
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
                finibus nulla diam, finibus feugiat magna efficitur at.
                Phasellus a urna.
              </p>
              <div className="flex flex-row items-center justify-between gap-x-2">
                <span className="text-2xl font-bold">${plant.salePrice}</span>
                <span className="line-through opacity-60">${plant.price}</span>
                <hr className="h-[1px] w-full grow rounded-md border-0 bg-white/60" />
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
        <div>
          <h1 className="mb-4 text-lg font-bold">Product Details</h1>
          <ul className="flex flex-col gap-y-1 px-4 text-sm">
            <li className="flex justify-between">
              <span>Size:</span> <span className="opacity-60">18L x 10W</span>
            </li>
            <li className="flex justify-between">
              <span>Weigh:</span> <span className="opacity-60">13kg</span>
            </li>
            <li className="flex justify-between">
              <span>Pot Material:</span>
              <span className="opacity-60">Ceramic</span>
            </li>
            <li className="flex justify-between">
              <span>Drainage holes:</span>
              <span className="opacity-60">Yes</span>
            </li>
            <li className="flex justify-between">
              <span>Toxic to pets:</span> <span className="opacity-60">No</span>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="mb-4 text-lg font-bold">Care Instruction</h1>
          <div className="max-w-[24rem] md:w-[28rem] lg:w-[34rem] lg:space-y-2">
            {plantCare.map((care) => (
              <div key={care.number} className="flex flex-row items-center">
                <h1 className="w-7 bg-gradient-to-r from-[#83C949] bg-clip-text font-morangaBlack text-[3rem] text-transparent md:text-[3.3rem]">
                  {care.number}
                </h1>
                <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
                  {care.tips}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Product rating and reviews</h1>
            <div>
              <div className="flex items-center gap-x-1">
                <Image
                  className="size-5"
                  src={"/assets/star.svg"}
                  alt="rating"
                  width={14}
                  height={14}
                />
                <p className="flex items-center gap-[0.40em] font-bold">
                  {plant.rate}
                  <span className="font-normal opacity-60">
                    out of 5 &#x2022; {plant.reviews} reviews
                  </span>
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="font-medium">Bryan M.</h1>
                  <Image
                    className="h-auto w-24"
                    src={"/assets/5stars.svg"}
                    alt={"5 star rating"}
                    width={90}
                    height={90}
                  />

                  <p className="text-sm opacity-60">
                    The {plant.name} I ordered arrived in perfect condition. Its
                    unique shape adds a nice touch to my plant collection!
                  </p>
                </div>
                <p className="text-xs opacity-38">4/20/2024</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="font-medium">Anna P.</h1>
                  <Image
                    className="h-auto w-24"
                    src={"/assets/5stars.svg"}
                    alt={"5 star rating"}
                    width={90}
                    height={90}
                  />

                  <p className="text-sm opacity-60">
                    I love how low-maintenance this plant is! It's thriving even
                    with minimal care. Highly recommend for beginners.
                  </p>
                </div>
                <p className="text-xs opacity-38">3/15/2024</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="font-medium">Emily T.</h1>
                  <Image
                    className="h-auto w-24"
                    src={"/assets/4stars.svg"}
                    alt={"4 star rating"}
                    width={90}
                    height={90}
                  />

                  <p className="text-sm opacity-60">
                    Looks stunning! The colors are so vibrant, and the plant was
                    packed very well.
                  </p>
                </div>
                <p className="text-xs opacity-38">11/11/2023</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="font-medium">Catherine J.</h1>
                  <Image
                    className="h-auto w-24"
                    src={"/assets/5stars.svg"}
                    alt={"5 star rating"}
                    width={90}
                    height={90}
                  />

                  <p className="text-sm opacity-60">
                    The pot color and shape are so cute, and the plant is just
                    the right size. Definitely happy with my purchase.
                  </p>
                </div>
                <p className="text-xs opacity-38">9/2/2023</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="font-medium">David H.</h1>
                  <Image
                    className="h-auto w-24"
                    src={"/assets/4stars.svg"}
                    alt={"4 star rating"}
                    width={90}
                    height={90}
                  />

                  <p className="text-sm opacity-60">
                    Such a healthy plant! It's already sprouting new growth. I
                    can't wait to see how it develops over time.
                  </p>
                </div>
                <p className="text-xs opacity-38">7/8/2023</p>
              </div>
            </div>
          </div>
          <button className="rounded-full border-2 border-button px-3 py-1 text-sm font-bold text-white/[0.87] hover:border-hover hover:bg-hover md:py-2 md:text-base">
            See all
          </button>
        </div>
      </div>
    </section>
  );
}
