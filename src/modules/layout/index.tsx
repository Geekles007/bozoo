import React, {createContext, memo, ReactElement, ReactNode} from "react";
import dynamic from "next/dynamic";
import {useGlobal} from "../../common/hooks/use-global";
import ScrollTopButton from "../../common/components/scroll-top-button";
import Modal from "../../common/components/modal";
import {AppProps} from "next/app";
import {NextPage} from "next";

const HeaderUI = dynamic(() => import("../../common/components/header"), {ssr: false});
const FooterUI = dynamic(() => import("../../common/components/footer"), {ssr: false});
const Drawer = dynamic(() => import("../../common/components/drawer"), {ssr: false});

type LayoutProps = {
    children: JSX.Element;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = Omit<AppProps, "router"> & {
    Component: NextPageWithLayout
}

export const LayoutContext = createContext<any>(null);

const GlobalLayout = ({children}: LayoutProps) => {

    const values = useGlobal();

    return <LayoutContext.Provider value={values}>
        <HeaderUI />
        <main>{children}</main>
        <FooterUI />
        <Drawer />
        <ScrollTopButton />
        <Modal />
    </LayoutContext.Provider>

}

export default memo(GlobalLayout);

export const Layout = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
    if (Component.getLayout) {
        return Component.getLayout(<Component {...pageProps} />) as JSX.Element;
    } else {
        return <Component {...pageProps} />;
    }
};
