import { GetBestSelling } from "../ui/getBestSelling";

export default function BestSeller() {
  return (
    <section
      id="bestSeller"
      className="mb-28 scroll-mt-20 px-6 sm:px-10 md:scroll-mt-28 md:px-14 lg:mb-40"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="font-moranga-black text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
            Best <span className="text-accent">Seller</span>
          </h1>
          <p className="mx-auto max-w-120 text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
            Discover our curated selection of top-notch plants, guaranteed to
            elevate your indoor garden game.
          </p>
        </div>
        <GetBestSelling />
      </div>
    </section>
  );
}
