import React, {createContext, memo} from "react";
import dynamic from "next/dynamic";
import {useGlobal} from "../../common/hooks/use-global";

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
    </LayoutContext.Provider>

}

export default memo(Layout);
