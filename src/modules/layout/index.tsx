import React, {createContext, memo} from "react";
import dynamic from "next/dynamic";
import {useGlobal} from "../../common/hooks/use-global";
import ScrollTopButton from "../../common/components/scroll-top-button";
import Modal from "../../common/components/modal";

const HeaderUI = dynamic(() => import("../../common/components/header"), {ssr: false});
const FooterUI = dynamic(() => import("../../common/components/footer"), {ssr: false});
const Drawer = dynamic(() => import("../../common/components/drawer"), {ssr: false});

type LayoutProps = {
    children: JSX.Element;
}

export const LayoutContext = createContext<any>(null);

const Layout = ({children}: LayoutProps) => {

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

export default memo(Layout);
