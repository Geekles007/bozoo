import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "../modules/layout";
import "../styles/header.scss";
import "../styles/footer.scss";
import "../styles/home.scss";
import "../styles/top-ten.scss";
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
