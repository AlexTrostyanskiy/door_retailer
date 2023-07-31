import Link from "next/link";

import { getAllPosts } from "@/lib/sanity/client";

export function HomePage({ posts }) {
  return (
    <>
      <div className="relative">
        <img className="brightness-50 w-full" src="/main.avif" alt="" />
        <div className="container">
          <div className="absolute top-0">
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-white font-semibold text-4xl pt-32">Покупайте наши двери!</h1>
              <p className="text-white w-96">Наши двери самые лучшие в Беларуси! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea. Delectus ea nemo dolores, accusamus impedit, velit</p>
              <button className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                Быстрая консультация
              </button>
            </div>
          </div>

        </div>

      </div>

    </>
  );
}


export default async function IndexPage() {
  const posts = await getAllPosts();
  return <HomePage posts={posts} />;
}

// export const revalidate = 60;
