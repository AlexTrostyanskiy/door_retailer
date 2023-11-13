import { MainBlock } from './main-block';
import { SliderInterDoors } from './slider-inter-doors';
import { SliderExternalDoors } from './slider-external-doors';

import { getAllProducts } from '@/lib/sanity/client';
import { urlForImage } from "@/lib/sanity/image";

export function HomePage({ posts }) {
    return (
        <>
            <MainBlock />
           {/* <ServicesBlock className="bg-gray-200 py-24" /> */}
            <SliderInterDoors doors={posts} />
            <SliderExternalDoors />
        </>
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
    return <HomePage posts={productsWithImage} />;
}

// export const revalidate = 60;
