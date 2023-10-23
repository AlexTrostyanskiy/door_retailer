import { Button } from "./button";

interface DoorThumbnailProps {
  title: string;
  price: number;
  imageSrc: string;
  category: string;
}

export function DoorThumbnail(props: DoorThumbnailProps) {
  return (
    <div className="flex flex-row rounded-xl gap-4 p-8 shadow-xl">
      <img className="max-h-64 shadow-xl" src={props.imageSrc} alt="" />
      <div className="flex flex-col">
        <h2 className="text-right mb-2 font-semibold">{props.title}</h2>
        <h5 className="text-right text-inherit text-xs">{props.category}</h5>
        <h5 className="text-right mt-2">{props.price} р.</h5>
        <Button className="mt-auto">Перейтиnpm</Button>
      </div>
    </div>
  );
}
