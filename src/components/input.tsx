import { HTMLProps } from "react";
import classanmes from 'classnames'
export const Input: React.FC<HTMLProps<HTMLInputElement>> = ({className, ...props}) => {
    return (
      <input className={classanmes(className, "rounded-lg bg-white shadow-sm py-3 px-4 w-full outline-none focus:ring-2 ring-blue-50")} {...props}/>
    );
}