
import { DoorThumbnail } from '../../../components/door-thumbnail';

interface Door {
  title: string;
  price: number;
  imageSrc: string;
}

export default async function Catalog() {
  const doors = getDoors();
  return <div className="grid grid-rows-3 grid-flow-col gap-2">
    <div className="bg-gray-500 row-span-3 rounded-lg justify-center">фильтры, бля</div>
    <div className="bg-red-300 row-span-3 col-span-5 rounded-lg">
    <div className="flex justify-center gap-12 p-12">
                {doors.map((door) => <DoorThumbnail price={door.price} title={door.title} imageSrc={door.imageSrc}/>)}
            </div>
    </div>
  </div>;
}

function getDoors(): Door[] {
  const emalex = {
      title: "Эмалекс",
      price: 250,
      imageSrc: "/emalex.webp"
  };
  const k6 = {
      title: "K6",
      price: 265,
      imageSrc: "k6.webp"
  };
  const urban = {
      title: "Урбан",
      price: 190,
      imageSrc: "urban.webp"
  };
  return [emalex, k6, urban, k6, urban, emalex, emalex, k6, urban, k6, urban, emalex];
}