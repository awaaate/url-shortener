import classanmes from "classnames";
import { HTMLProps } from "react";

export interface ButtonProps {}

export const Button: React.FC<ButtonProps & HTMLProps<HTMLButtonElement>> = ({
    className,
    children,
}) => {
    return (
        <button
            className={classanmes("rounded-lg px-12 w-30 py-2 font-semibold", className)}
        >
            {children}
        </button>
    );
};
