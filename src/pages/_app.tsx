import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import "./../styles/index.scss";
import {ThemeProvider} from "next-themes";
import './../config';
import React from "react";
import GlobalLayout, {Layout} from "../modules/layout";
import {ThirdwebProvider, ChainId} from "@thirdweb-dev/react";

function MyApp({Component, pageProps}: AppProps) {
    return <ThemeProvider enableSystem={true} attribute={'class'}>
        <React.Suspense fallback={<>Loading...</>}>
            <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
                <GlobalLayout>
                    <Layout Component={Component} pageProps={pageProps} />
                </GlobalLayout>
            </ThirdwebProvider>
        </React.Suspense>
    </ThemeProvider>
}

export default MyApp
