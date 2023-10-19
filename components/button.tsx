import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
    className?: string;
}

export function Button({ children, className }: ButtonProps) {
    return (
        <button className={`bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-500 transition-all mt-2 p-2 px-4 rounded-md ${className}`}>
            {children}
        </button>
    );
}