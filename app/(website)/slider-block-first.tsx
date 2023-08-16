import { Block } from './block';
import { DoorThumbnail } from '../../components/door-thumbnail';

interface Door {
    title: string;
    price: number;
    imageSrc: string;
}

export function SliderBlockFirst() {
    const doors = getDoors();
    return (
        <Block heading="Межкомнатные Двери">
            <div className="flex justify-center gap-12 p-12">
                {doors.map((door) => <DoorThumbnail price={door.price} title={door.title} imageSrc={door.imageSrc}/>)}
            </div>
        </Block>
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
    return [emalex, k6, urban];
}