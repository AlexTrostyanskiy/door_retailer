export function SliderBlockFirst() {
    return (
        <div>
            <h2 className="font-semibold text-2xl mt-8 ml-8">Межкомнатные Двери</h2>
            <div className="flex justify-center gap-12 ml-8 mr-8 mb-8 p-12">
                <div className="flex flex-col items-center shadow-xl rounded-xl p-8">
                    <h2 className="font-semibold mb-2">Эмалекс</h2>
                    <img className="shadow-xl" src="/emalex.webp" alt="" />
                    <h5 className="mt-2">250 р.</h5>
                    <button
                        className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                        Рассчитать
                    </button>
                </div>
                <div className="flex flex-col items-center shadow-xl rounded-xl items-center p-8">
                    <h2 className="font-semibold mb-2">K6</h2>
                    <img className="shadow-xl" src="k6.webp" alt="" />
                    <h5 className="mt-2">265 р.</h5>
                    <button
                        className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                        Рассчитать
                    </button>
                </div>
                <div className="flex flex-col items-center shadow-xl rounded-xl p-8">
                    <h2 className="font-semibold mb-2">Урбан</h2>
                    <img className="shadow-xl" src="urban.webp" alt="" />
                    <h5 className="mt-2">190 р.</h5>
                    <button
                        className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                        Рассчитать
                    </button>
                </div>
            </div>
        </div>
    );
}