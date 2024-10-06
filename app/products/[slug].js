import { plants } from "@/lib/data";

export async function getStaticPaths() {
  const paths = plants.map((plant) => ({
    params: { slug: plant.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const plant = plants.find((p) => p.slug === params.slug);

  return { props: { plant } };
}

const PlantDetail = ({ plant }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{plant.name}</h1>
      <img
        src={`/assets/products/${plant.imageName}.jpg`}
        alt={plant.name}
        className="my-4"
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
