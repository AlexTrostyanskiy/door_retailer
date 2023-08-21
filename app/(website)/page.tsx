import { MainBlock } from './main-block';
import { ServicesBlock } from './services-block';
import { SliderBlockFirst } from './slider-block-first';
import { SliderBlockSecond } from './slider-block-second';

import { getAllPosts } from '@/lib/sanity/client';

export function HomePage({ posts }) {
    return (
        <>
            <MainBlock />
           {/* <ServicesBlock className="bg-gray-200 py-24" /> */}
            <SliderBlockFirst />
            <SliderBlockSecond />
        </>
    );
}


export default async function IndexPage() {
    const posts = await getAllPosts();
    return <HomePage posts={posts} />;
}

// export const revalidate = 60;
