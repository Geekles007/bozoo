import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../common/components/layout";
import "../styles/header.scss";
import "../styles/search-input.scss";
import {ThemeProvider} from "next-themes";
import './../config';

function MyApp({Component, pageProps}: AppProps) {
    return <ThemeProvider defaultTheme={"dark"}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
}

export default MyApp
