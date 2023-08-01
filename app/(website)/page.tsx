import { MainBlock } from './main-block';
import { ServicesBlock } from './services-block';
import { SliderBlock } from './slider-block'

import { getAllPosts } from '@/lib/sanity/client';

export function HomePage({ posts }) {
    return (
        <>
            <MainBlock />
            <ServicesBlock className="bg-gray-200 py-24"/>
            <SliderBlock />
        </>
    );
}


export default async function IndexPage() {
    const posts = await getAllPosts();
    return <HomePage posts={posts}/>;
}

// export const revalidate = 60;
