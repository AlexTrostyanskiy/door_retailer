export function MainBlock() {
    return (
        <div className="relative">
            <img className="absolute brightness-50 w-full h-full object-cover -z-10" src="/main.avif" alt=""/>
            <div className="container flex flex-col items-start gap-4 py-32">
                <h1 className="text-white font-semibold text-4xl ">Покупайте наши двери!</h1>
                <p className="text-white w-96">Наши двери самые лучшие в Беларуси! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Dolor, ea. Delectus ea nemo dolores, accusamus impedit,
                    velit</p>
                <button
                    className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
                    Заказать звонок
                </button>
            </div>
        </div>
    );
}