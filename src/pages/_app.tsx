import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "../modules/layout";
import "./../styles/index.scss";
import {ThemeProvider} from "next-themes";
import './../config';
import React from "react";
import {ThirdwebWeb3Provider} from "@3rdweb/hooks";

const supportedChainIds = [1, 4];
const connectors = {
    injected: {}
}

function MyApp({Component, pageProps}: AppProps) {
    return <ThemeProvider enableSystem={true} attribute={'class'}>
        <React.Suspense fallback={<>Loading...</>}>
            <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThirdwebWeb3Provider>
        </React.Suspense>
    </ThemeProvider>
}

export default MyApp
