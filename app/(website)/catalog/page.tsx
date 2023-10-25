
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
    <div className="flex gap-2 grow-0 mx-2">
      <div className="h-max bg-gray-300 rounded-lg basis-1/4">
        <div className='bg-teal-100 rounded-lg m-2 py-1 px-2'>категории</div>
        <div className='bg-teal-100 rounded-lg m-2 py-1 px-2'>фильтры</div>
        <div className='bg-teal-100 rounded-lg m-2 py-1 px-2'>еще фильтры</div>
        <div className='bg-teal-100 rounded-lg m-2 py-1 px-2'>что-то еще</div>
        <div className='bg-teal-100 rounded-lg m-2 py-1 px-2'>тоже фильтры</div>
        </div>
      <div className=" bg-slate-300 rounded-lg overflow-auto flex gap-12 p-12 flex-wrap place-items-center basis-3/4">
        
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