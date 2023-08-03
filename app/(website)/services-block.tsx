export function ServicesBlock({ className }) {
    return (
        <div className={className}>
            <div className="container">
                <div className="flex flex-row gap-12 justify-center">
                    <div className="bg-white p-8 shadow-xl rounded-md">
                        <h2 className="font-semibold">Шаг 1</h2>
                        <p>Консультация</p>
                    </div>
                    <div className="bg-white p-8 shadow-xl rounded-md">
                        <h2 className="font-semibold">Шаг 2</h2>
                        <p>Замер</p>
                    </div>
                    <div className="bg-white p-8 shadow-xl rounded-md">
                        <h2 className="font-semibold">Шаг 3</h2>
                        <p>Доставка</p>
                    </div>
                    <div className="bg-white p-8 shadow-xl rounded-md">
                        <h2 className="font-semibold">Шаг 4</h2>
                        <p>Установка</p>
                    </div>
                </div>
            </div>
        </div>
    );
}