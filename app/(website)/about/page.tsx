import { getAllAuthors, getSettings } from "@/lib/sanity/client";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <div>
<p>
  Тут текст о нас
</p>
  </div>;
}

// export const revalidate = 60;
