import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";

export default function Navbar(props) {
  return (
    <Container>
      <nav className="flex flex-wrap justify-between md:flex-nowrap md:gap-10 bg-red-100">
        <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
          <Link href="/"
            className="px-5 py-2 text-sm font-medium text-gray-600 transition-all hover:text-amber-500 dark:text-gray-400"
          >
            Каталог
          </Link>
          <Link href="/"
            className="px-5 py-2 text-sm font-medium text-gray-600 transition-all hover:text-amber-500 dark:text-gray-400"
          >
            Акции
          </Link>
        </div>
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link href="/" className="w-28 dark:hidden">
            <Image
              {...urlForImage(props.logo)}
              alt="Logo"
              priority={true}
              sizes="(max-width: 640px) 100vw, 200px"
            />
          </Link>
        </div>

        <div className="flex w-full flex-row items-center justify-start gap-10 text-gray-600">
          <div className="">+375 (29) 386-26-83</div>
          <button className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all p-1 px-2 rounded-md">Заказать звонок</button>
        </div>
      </nav>
    </Container>
  );
}
