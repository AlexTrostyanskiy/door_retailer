import { Button } from './button';

interface DoorThumbnailProps {
    title: string;
    price: number;
    imageSrc: string;
}

export function DoorThumbnail(props: DoorThumbnailProps) {
    return (
        <div className="flex flex-col items-center shadow-xl rounded-xl p-8">
            <h2 className="font-semibold mb-2">{props.title}</h2>
            <img className="shadow-xl" src={props.imageSrc} alt="" />
            <h5 className="mt-2">{props.price} р.</h5>
            <Button>Рассчитать</Button>
        </div>
    )
}