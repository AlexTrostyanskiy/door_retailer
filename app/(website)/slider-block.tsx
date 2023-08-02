export function SliderBlock() {
    return (
        <div className="flex justify-center gap-12 m-8 p-12">
            <div className="flex-column align-middle shadow-xl rounded-md p-8">
                <img className="shadow-xl" src="/emalex.webp" alt="" />
                <h2>Эмалекс</h2>
                <h5>250 руб.</h5>
                <button
                    className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                    Рассчитать стоимость
                </button>
            </div>
            <div className="shadow-xl rounded-md p-8">
                <img className="shadow-xl" src="k6.webp" alt="" />
                <h2>K6</h2>
                <h5>265 руб.</h5>
                <button
                    className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                    Рассчитать стоимость
                </button>
            </div>
            <div className="shadow-xl rounded-md p-8">
                <img className="shadow-xl" src="urban.webp" alt="" />
                <h2>Урбан</h2>
                <h5>190 руб.</h5>
                <button
                    className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                    Рассчитать стоимость
                </button>
            </div>
        </div>
    );
}