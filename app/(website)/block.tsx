import { PropsWithChildren } from "react";

export function Block(props: PropsWithChildren & { heading: string, className?: string }) {
    return (
        <div className={`p-8 ${props.className}`}>
            <h2 className="font-semibold text-2xl">{props.heading}</h2>
            {props.children}
        </div>
    );
}