import React from "react";
import { GlobalStyles } from "../lib/global.styles";
import { makeShort } from "../lib/shortener";
import classnames from "classnames";
import { Button } from "./button";
export interface UrlCardProps {
    i: number;
    id: string;
    hits: number;
    target: string;
}

export const UrlCard: React.FC<UrlCardProps> = ({
    target,
    hits,
    i,
    id,
    ...props
}) => {
    const shorted = makeShort(parseInt(id));
    return (
        <div
            className={classnames(
                "rounded-lg shadow-md px-8 py-6 z-10 flex justify-between  items-center",
                {
                    "bg-orange-50": i % 2 === 0,
                    "bg-light-blue-50": i % 2 !== 0,
                }
            )}
        >
            <p>{target}</p>
            <Button className="bg-white">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={shorted}
                    className="block font-semibold"
                >
                    {shorted}
                </a>
            </Button>
        </div>
    );
};
