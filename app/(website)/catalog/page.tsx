import { Catalog } from "../catalog";
import { getAllProducts } from '@/lib/sanity/client';
import { urlForImage } from "@/lib/sanity/image";

export function CatalogPage({ posts }) {

  return (
    <Catalog doors={posts} />
  );
}

export default async function IndexPage() {
  const products = await getAllProducts();
  const productsWithImage = products.map((product) => {
    return {
      ...product,
      imageSrc: urlForImage(product.image).src,
    }
  });
  return <CatalogPage posts={productsWithImage} />;
}