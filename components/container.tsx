export default function Container(props) {
    return (
        <div className={`px-8 mx-auto xl:px-5 max-w-screen-xl py-5 lg:py-8 ${props.className}`}>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}
