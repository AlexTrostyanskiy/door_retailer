import { Button } from "./button";

interface DoorThumbnailProps {
  title: string;
  price: number;
  imageSrc: string;
}

export function DoorThumbnail(props: DoorThumbnailProps) {
  return (
    <div className="flex flex-row rounded-xl gap-4 p-8 shadow-xl">
      <img className="max-h-64 shadow-xl" src={props.imageSrc} alt="" />
      <div className="flex flex-col justify-start">
        <h2 className="mb-2 font-semibold">{props.title}</h2>
        <h5 className="mt-2">{props.price} р.</h5>
        <Button className="mt-auto">Рассчитать</Button>
      </div>
    </div>
  );
}
