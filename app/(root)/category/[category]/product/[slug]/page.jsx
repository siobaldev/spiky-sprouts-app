import { plants, plantCare } from "@/lib/data";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import ColorSelector from "@/components/ui/potColor/page";
import Quantity from "@/components/ui/quantity/page";
import Rating from "@/components/ui/rating/page";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function PlantDetail({ params }) {
  const { category, slug } = params;
  const plant = plants.find((item) => item.slug === slug);

  if (!plant) {
    return notFound();
  }

  return (
    <section className="container mx-auto mb-24 mt-24 max-w-[1280px] px-8 max-[350px]:px-5 md:mt-20 md:px-16 lg:mt-32">
      <nav className="mb-4 md:mb-8">
        <ol className="flex gap-x-2 text-sm md:text-xl">
          <li>
            <Link href="/" className="opacity-60">
              Home
            </Link>
          </li>
          <li className="opacity-60">/</li>
          <li>
            <Link href={`/category/${category}`} className="opacity-60">
              {category}
            </Link>
          </li>
          <li className="opacity-60">/</li>
          <li>{plant.name}</li>
        </ol>
      </nav>

      <div className="flex flex-col gap-y-10 md:gap-y-14 lg:gap-y-16 xl:gap-y-20">
        <div className="w-full rounded-3xl bg-button/10 p-6 max-[380px]:px-4 sm:p-8 md:px-14 lg:rounded-[2.5rem] lg:px-8 lg:pb-16 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:gap-x-8">
            <div className="flex items-center justify-center lg:w-[45%]">
              <Image
                className="size-44 drop-shadow-sm max-[380px]:size-40 sm:size-60 md:size-72 lg:size-80 xl:size-96"
                src={getImageUrl(plant.image)}
                alt={plant.name}
                width={90}
                height={90}
                unoptimized={true}
              />
            </div>
            <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[55%] lg:gap-y-8">
              <div className="space-y-2 lg:space-y-6">
                <h1 className="w-fit rounded-full bg-accent/20 px-4 py-1 font-morangaBlack uppercase text-accent">
                  {plant.tag[2]}
                </h1>
                <h2 className="font-morangaBlack text-2xl font-bold md:text-[1.6rem] lg:text-[2.488rem] xl:text-[2.986rem]">
                  {plant.name}
                </h2>
                <p className="text-sm opacity-60 sm:text-base md:text-base lg:text-lg xl:text-xl">
                  {plant.description}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between gap-x-4">
                {plant.salePrice ? (
                  <>
                    <span className="text-2xl font-bold md:text-[1.6rem] lg:text-[2.488rem] xl:text-[2.986rem]">
                      ${plant.salePrice}
                    </span>
                    <span className="line-through opacity-60 md:text-[1.4rem] lg:text-[2rem]">
                      ${plant.price}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold md:text-[1.6rem] lg:text-[2.488rem] xl:text-[2.986rem]">
                    ${plant.price}
                  </span>
                )}
                <hr className="h-[1px] w-full grow rounded-md border-0 bg-white/60" />
                <span className="whitespace-nowrap text-sm opacity-60 sm:text-base md:text-base lg:text-lg xl:text-xl">
                  40 in stock
                </span>
              </div>
              <div className="flex flex-col md:gap-y-1 lg:gap-y-2">
                <h1 className="text-sm md:text-base lg:text-lg xl:text-xl">
                  Pot Color
                </h1>
                <ColorSelector />
              </div>
              <div className="flex flex-col gap-y-1 lg:gap-y-2">
                <h1 className="text-sm md:text-base lg:text-lg xl:text-xl">
                  Quantity
                </h1>
                <Quantity />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="mb-4 text-lg font-bold sm:text-[1.266rem] md:text-[1.424rem] lg:text-[1.602rem]">
            Product Details
          </h1>
          <ul className="flex flex-col gap-y-1 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl">
            <li className="flex gap-x-2">
              Size: <span className="opacity-60">18L x 10W</span>
            </li>
            <li className="flex gap-x-2">
              Weigh: <span className="opacity-60">13kg</span>
            </li>
            <li className="flex gap-x-2">
              Pot Material:
              <span className="opacity-60">Ceramic</span>
            </li>
            <li className="flex gap-x-2">
              Drainage holes:
              <span className="opacity-60">Yes</span>
            </li>
            <li className="flex gap-x-2">
              Toxic to pets: <span className="opacity-60">No</span>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="mb-4 text-lg font-bold sm:text-[1.266rem] md:text-[1.424rem] lg:text-[1.602rem]">
            Care Instruction
          </h1>
          <div className="max-w-[24rem] space-y-2 lg:max-w-none">
            {plantCare.map((care) => (
              <div key={care.number} className="flex flex-row gap-x-2">
                <h1 className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
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
          <div className="space-y-8 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-x-4 lg:space-y-0">
            <Rating rate={plant.rate} review={plant.reviews} />
            <div className="space-y-4 lg:max-w-[40rem]">
              <h1 className="text-lg font-bold sm:text-[1.266rem] md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
                Reviews
              </h1>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                      Bryan M.
                    </h1>
                    <Image
                      className="h-auto w-24"
                      src={"/assets/5stars.svg"}
                      alt={"5 star rating"}
                      width={90}
                      height={90}
                    />

                    <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
                      The {plant.name} I ordered arrived in perfect condition.
                      Its unique shape adds a nice touch to my plant collection!
                    </p>
                  </div>
                  <p className="text-xs opacity-38">4/20/2024</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                      Anna P.
                    </h1>
                    <Image
                      className="h-auto w-24"
                      src={"/assets/5stars.svg"}
                      alt={"5 star rating"}
                      width={90}
                      height={90}
                    />

                    <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
                      I love how low-maintenance this plant is! It&apos;s
                      thriving even with minimal care. Highly recommend for
                      beginners.
                    </p>
                  </div>
                  <p className="text-xs opacity-38">3/15/2024</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                      Emily T.
                    </h1>
                    <Image
                      className="h-auto w-24"
                      src={"/assets/4stars.svg"}
                      alt={"4 star rating"}
                      width={90}
                      height={90}
                    />

                    <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
                      Looks stunning! The colors are so vibrant, and the plant
                      was packed very well.
                    </p>
                  </div>
                  <p className="text-xs opacity-38">11/11/2023</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                      Catherine J.
                    </h1>
                    <Image
                      className="h-auto w-24"
                      src={"/assets/5stars.svg"}
                      alt={"5 star rating"}
                      width={90}
                      height={90}
                    />

                    <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
                      The pot color and shape are so cute, and the plant is just
                      the right size. Definitely happy with my purchase.
                    </p>
                  </div>
                  <p className="text-xs opacity-38">9/2/2023</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                      David H.
                    </h1>
                    <Image
                      className="h-auto w-24"
                      src={"/assets/4stars.svg"}
                      alt={"4 star rating"}
                      width={90}
                      height={90}
                    />

                    <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
                      Such a healthy plant! It&apos;s already sprouting new
                      growth. I can&apos;t wait to see how it develops over
                      time.
                    </p>
                  </div>
                  <p className="text-xs opacity-38">7/8/2023</p>
                </div>
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
