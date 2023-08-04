import { Block } from './block';
import { Button } from './button';
export function SliderBlockSecond() {
    return (
        <Block heading="Входные Двери" className="bg-neutral-300">
            <div className="flex justify-center gap-12 ml-8 mr-8 mb-8 p-12">
                <div className="flex flex-col items-center rounded-xl p-0">
                    <img className="rounded-xl " src="urban.webp" alt="" />
                    <h2 className="">Урбан</h2>
                    <h5 className="">190 р.</h5>
                    <Button>Рассчитать</Button>
                </div>
                <div className="flex flex-col items-center ">
                    <img className="rounded-xl" src="/emalex.webp" alt="" />
                    <h2 className="">Эмалекс</h2>
                    <h5 className="">250 р.</h5>
                    <Button>Рассчитать</Button>
                </div>
                <div className="flex flex-col">
                    <img className="rounded-xl" src="k6.webp" alt="" />
                    <div className="border-b-2">
                    <h2 >K6</h2>
                    </div>
                    <h5 className="">265 р.</h5>
                    <Button>Рассчитать</Button>
                </div>
                </div>
                </Block>
    );
}