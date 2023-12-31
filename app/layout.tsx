import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  variable: "--font-lora"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="antialiased bg-gray-100 text-gray-800 dark:bg-black dark:text-gray-400">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
