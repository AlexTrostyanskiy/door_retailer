
import { DoorThumbnail } from '../../../components/door-thumbnail';

interface Door {
  title: string;
  price: number;
  imageSrc: string;
}

export default function Catalog() {
  const doors = getDoors();
  return (
    // TODO: get back to height
    <div className="flex gap-2 grow-0 h-[calc(100vh-241px)]">
      <div className="basis-1/5 bg-gray-500 rounded-lg">фильтры, бля</div>
      <div className="basis-4/5 bg-red-300 rounded-lg overflow-auto">
        <div className="flex justify-center gap-12 p-12 flex-wrap">
          {doors.map((door) => <DoorThumbnail price={door.price} title={door.title} imageSrc={door.imageSrc}/>)}
        </div>
      </div>
    </div>
  );
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