import { Block } from './block';
import { Button } from './button';

export function SliderBlockFirst() {
    return (
        <Block heading="Межкомнатные Двери">
            <div className="flex justify-center gap-12 p-12">
                <div className="flex flex-col items-center shadow-xl rounded-xl p-8">
                    <h2 className="font-semibold mb-2">Эмалекс</h2>
                    <img className="shadow-xl" src="/emalex.webp" alt="" />
                    <h5 className="mt-2">250 р.</h5>
                    <Button>Рассчитать</Button>
                </div>
                <div className="flex flex-col items-center shadow-xl rounded-xl p-8">
                    <h2 className="font-semibold mb-2">K6</h2>
                    <img className="shadow-xl" src="k6.webp" alt="" />
                    <h5 className="mt-2">265 р.</h5>
                    <Button>Рассчитать</Button>
                </div>
                <div className="flex flex-col items-center shadow-xl rounded-xl p-8">
                    <h2 className="font-semibold mb-2">Урбан</h2>
                    <img className="shadow-xl" src="urban.webp" alt="" />
                    <h5 className="mt-2">190 р.</h5>
                    <Button>Рассчитать</Button>
                </div>
            </div>
        </Block>
    );
}