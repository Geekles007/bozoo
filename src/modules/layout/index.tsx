import React, {createContext, memo} from "react";
import dynamic from "next/dynamic";
import {useDrawer} from "../../common/hooks/use-drawer";

const HeaderUI = dynamic(() => import("../../common/components/header"), {ssr: false});
const FooterUI = dynamic(() => import("../../common/components/footer"), {ssr: false});
const Drawer = dynamic(() => import("../../common/components/drawer"), {ssr: false});

type LayoutProps = {
    children: JSX.Element;
}

export const LayoutContext = createContext<any>(null);

const Layout = ({children}: LayoutProps) => {

    const {drawerVisible, changeDrawerState} = useDrawer();

    return <LayoutContext.Provider value={{drawerVisible, changeDrawerState}}>
        <HeaderUI />
        <main>{children}</main>
        <FooterUI />
        <Drawer />
    </LayoutContext.Provider>

}

export default memo(Layout);
