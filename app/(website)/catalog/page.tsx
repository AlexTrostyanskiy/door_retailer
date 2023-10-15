import { getAllAuthors, getSettings } from "@/lib/sanity/client";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <div className="grid grid-rows-3 grid-flow-col gap-4">
<div className="bg-gray-500 row-span-6">1</div>
<div className="bg-slate-500 col-span-3">2</div>
<div className="bg-red-300 row-span-5 col-span-3">3</div>
  </div>;
}