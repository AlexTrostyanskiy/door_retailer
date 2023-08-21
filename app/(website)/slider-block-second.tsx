import { Block } from './block';
import { Button } from '../../components/button';
export function SliderBlockSecond() {
    return (
        <Block heading="Входные Двери" className="bg-neutral-300">
            <div className="flex justify-center gap-12 ml-8 mr-8 mb-8 p-12">

            <div className="flex gap-6 bg-white rounded-xl p-4  shadow-xl">
                        <img className='shadow-xl' src="urban.webp" alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h2>Категория - Экошпон</h2>
                        <h5>Что это такое? Чуть другой текст. Дверь состоит из чего-то, покрывается какой-то супер пленкой и тд и тп</h5>
                        <Button>Перейти</Button>
                    </div>
                </div>

                <div className="flex gap-6 bg-white rounded-xl p-4 shadow-xl">
                        <img className='shadow-xl' src="/emalex.webp" alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h2>Категория - Эмаль</h2>
                        <h5>Что это такое? Дверь состоит из чего-то, покрывается какой-то супер эмалью и тд и тп</h5>
                        <Button>Перейти</Button>
                    </div>
                </div>

                <div className="flex gap-6 bg-white rounded-xl p-4 shadow-xl">
                        <img className='shadow-xl' src="k6.webp" alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h2>Категория - Масси</h2>
                        <h5>Ну тут что-то про дерево, что круто и тд, но один хрен, мне текст нужен</h5>
                        <Button>Перейти</Button>
                    </div>
                </div>
                
            </div>
        </Block>
    );
}