import { getAllAuthors, getSettings } from "@/lib/sanity/client";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <div>
<p>
  Каталог и блок фильтров слева
</p>
  </div>;
}