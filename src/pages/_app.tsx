import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ChakraTheme } from "../lib/chakra.theme";

import "../styles/main.css";
import { Menu } from "../components/menu";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="h-full">
            <Menu />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
