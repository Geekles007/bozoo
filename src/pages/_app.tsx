import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "../modules/layout";
import "./../styles/index.scss";
import {ThemeProvider} from "next-themes";
import './../config';
import React from "react";

function MyApp({Component, pageProps}: AppProps) {
    return <ThemeProvider enableSystem={true} attribute={'class'}>
        <React.Suspense fallback={<>Loading...</>}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Suspense>
    </ThemeProvider>
}

export default MyApp
