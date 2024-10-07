import react from "react";

import { plants } from "@/lib/data";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = plants.map((plant) => ({
    params: { slug: plant.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const plant = plants.find((p) => p.slug === params.slug);

  if (!plant) {
    return {
      notFound: true,
    };
  }

  return { props: { plant } };
}

const PlantDetail = ({ plant }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{plant.name}</h1>
      <Image
        className="size-24 md:size-32"
        src={getImageUrl(plant.imageName)}
        alt={plant.name}
        width={90}
        height={90}
        unoptimized={true}
      />
      <p className="text-xl font-medium">
        Rating: {plant.rate} ({plant.reviews})
      </p>
      <p className="text-lg text-gray-700">Price: ${plant.salePrice}</p>
      <p className="text-lg text-gray-500 line-through">Was: ${plant.price}</p>
    </div>
  );
};

export default PlantDetail;
