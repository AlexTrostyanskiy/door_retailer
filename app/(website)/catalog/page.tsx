import { getAllAuthors, getSettings } from "@/lib/sanity/client";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <div className="grid grid-rows-3 grid-flow-col gap-2">
    <div className="bg-gray-500 row-span-3 rounded-lg">01-фильтры</div>
    <div className="bg-slate-500 col-span-5 rounded-lg">02-категории</div>
    <div className="bg-red-300 row-span-2 col-span-5 rounded-lg">03-каталог</div>
  </div>;
}