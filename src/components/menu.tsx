import { Box } from "@chakra-ui/react";
import { Button } from "./button";
import { NextLink } from "./next.link";

export interface MenuProps {
    logged?: boolean;
}

export const Menu: React.FC<MenuProps> = ({ logged }) => {
    return (
        <div className="p-4 white border-b-4 border-light-blue-50">
            <div className="w-full max-w-screen-lg flex justify-between m-auto">
                <NextLink href="/">
                    <img src="/logo.svg" width="150px" />
                </NextLink>
                {!logged && (
                    <div className="grid grid-cols-2 items-center gap-4 text-md font-medium">
                        <NextLink href="/register">
                            <Button className="bg-light-blue-50">
                                register
                            </Button>
                        </NextLink>

                        <NextLink href="login">login</NextLink>
                    </div>
                )}
            </div>
        </div>
    );
};
