import Container from '@/components/container';
import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity/image';

export default function Navbar(props) {
    return (
        <div className="bg-white">
            <div className="container mx-auto">
                <nav className="flex flex-wrap justify-between py-4 gap-8">
                    <Link className="w-28 dark:hidden" href="/">
                        <Image
                            {...urlForImage(props.logo)}
                            alt="Logo"
                            priority={true}
                            sizes="(max-width: 640px) 100vw, 200px"
                        />
                    </Link>
                    <div className="flex flex-row items-stretch gap-4 mr-auto">
                        <Link className="flex items-center text-sm font-medium text-gray-600 transition-all hover:text-amber-500 dark:text-gray-400" href="/">
                            Каталог
                        </Link>
                        <Link className="flex items-center text-sm font-medium text-gray-600 transition-all hover:text-amber-500 dark:text-gray-400" href="/">
                            Акции
                        </Link>
                    </div>


                    <div className="flex flex-row justify-end items-center gap-10 text-gray-600">
                        <div className="">+375 (29) 386-26-83</div>
                        <button
                            className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all p-1 px-2 rounded-md">Заказать
                            звонок
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
