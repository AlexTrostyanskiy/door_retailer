export function SliderBlockSecond() {
    return (
        <div className="bg-neutral-800">
            <h2 className="text-white font-semibold text-2xl mt-8 ml-8">Входные Двери</h2>
            <div className="flex justify-center gap-12 ml-8 mr-8 mb-8 p-12">
                <div className="flex flex-col items-center rounded-xl p-0">
                    <img className="rounded-xl" src="urban.webp" alt="" />
                    <h2 className="text-white">Урбан</h2>
                    <h5 className="text-white">190 р.</h5>
                    <button
                        className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                        Рассчитать
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <img className="rounded-xl" src="/emalex.webp" alt="" />
                    <h2 className="text-white">Эмалекс</h2>
                    <h5 className="text-white">250 р.</h5>
                    <button
                        className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                        Рассчитать
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <img className="rounded-xl" src="k6.webp" alt="" />
                    <h2 className="text-white">K6</h2>
                    <br />
                    <h5 className="text-white">265 р.</h5>
                    <button
                        className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                        Рассчитать
                    </button>
                </div>
            </div>
        </div>
    );
}