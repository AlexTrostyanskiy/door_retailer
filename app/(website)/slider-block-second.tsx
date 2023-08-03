export function SliderBlockSecond() {
    return (
        <div>
            <h2 className="font-semibold text-2xl mt-8 ml-8">Входные Двери</h2>
            <div className="flex justify-center gap-12 ml-8 mr-8 mb-8 p-12">
                <div className="flex flex-col items-center shadow-xl rounded-xl p-8">
                    <img className="shadow-xl" src="urban.webp" alt="" />
                    <h2>Урбан</h2>
                    <h5>190 р.</h5>
                    <button
                        className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                        Рассчитать
                    </button>
                </div>
                <div className="flex flex-col items-center shadow-xl rounded-xl p-8">
                    <img className="shadow-xl" src="/emalex.webp" alt="" />
                    <h2>Эмалекс</h2>
                    <h5>250 р.</h5>
                    <button
                        className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                        Рассчитать
                    </button>
                </div>
                <div className="flex flex-col items-center shadow-xl rounded-xl items-center p-8">
                    <img className="shadow-xl" src="k6.webp" alt="" />
                    <h2>K6</h2>
                    <h5>265 р.</h5>
                    <button
                        className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                        Рассчитать
                    </button>
                </div>
            </div>
        </div>
    );
}