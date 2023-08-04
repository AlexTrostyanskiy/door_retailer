import { PropsWithChildren } from "react";

export function Button({ children }: PropsWithChildren) {
    return (
        <button className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 transition-all mt-2 p-2 px-4 rounded-md">
            {children}
        </button>
    );
}