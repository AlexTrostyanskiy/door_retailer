import { Block } from './block';
import { DoorThumbnail } from '../../components/door-thumbnail';
import { Product } from "@/lib/sanity/type";

export function SliderInterDoors(props: { doors: Product[] }) {
    return (
        <Block heading="Межкомнатные Двери">
            <div className="flex justify-center gap-12 p-12">
                {props.doors.map((door) => <DoorThumbnail price={door.price} title={door.title} imageSrc={door.imageSrc} category={door.category}/>)}
            </div>
        </Block>
    );
}
