export function ServicesBlock({ className }) {
    return (
        <div className={className}>
            <div className="container">
                <div className="flex flex-row gap-12 justify-center">
                    <div className="bg-white p-8 shadow-xl rounded-md">Services 1</div>
                    <div className="bg-white p-8 shadow-xl rounded-md">Services 2</div>
                    <div className="bg-white p-8 shadow-xl rounded-md">Services 3</div>
                    <div className="bg-white p-8 shadow-xl rounded-md">Services 4</div>
                </div>
            </div>
        </div>
    );
}