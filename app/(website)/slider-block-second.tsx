import { Block } from './block';
import { Button } from '../../components/button';
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

                <div className="flex gap-6 bg-white rounded-xl p-4 h-80 w-80">
                        <img className="rounded-xl" src="/emalex.webp" alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h2>Категория - Эмаль</h2>
                        <h5>Что это такое? Дверь состоит из чего-то, покрывается какой-то супер эмалью и тд и тп</h5>
                        <Button>Перейти</Button>
                    </div>
                    
                </div>

                <div className="flex flex-col">
                    <img className="rounded-xl" src="k6.webp" alt="" />
                    <div className="border-b-2">
                        <h2>K6</h2>
                    </div>
                    <h5 className="">265 р.</h5>
                    <Button>Рассчитать</Button>
                </div>
            </div>
        </Block>
    );
}