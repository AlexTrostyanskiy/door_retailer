
import { DoorThumbnail } from '../../../components/door-thumbnail';

interface Door {
  title: string;
  price: number;
  imageSrc: string;
  category: string;
}

export default function Catalog() {
  const doors = getDoors();
  return (
    // TODO: get back to height
    <div className="flex gap-2 grow-0 h-[calc(100vh-241px)] mx-2">
      <div className="basis-1/6 bg-gray-300 rounded-lg">фильтры/категории</div>
      <div className="basis-5/6 bg-slate-300 rounded-lg overflow-auto flex gap-12 p-12 flex-wrap place-items-center">
        
          {doors.map((door) => <DoorThumbnail price={door.price} title={door.title} imageSrc={door.imageSrc} category={door.category}/>)}
        
      </div>
    </div>
  );
}

function getDoors(): Door[] {
  const emalex = {
      title: "Эмалекс",
      price: 250,
      imageSrc: "/emalex.webp",
      category: "Эмаль"
  };
  const k6 = {
      title: "K6",
      price: 265,
      imageSrc: "k6.webp",
      category: "Массив"
  };
  const urban = {
      title: "Урбан",
      price: 190,
      imageSrc: "urban.webp",
      category: "Шпон"
  };
  return [emalex, k6, urban, k6, urban, emalex, emalex, k6, urban, k6, urban, emalex];
}