import { Catalog } from "../catalog";

export function Catalog({ posts }) {

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
  return <Catalog posts={productsWithImage} />;
}