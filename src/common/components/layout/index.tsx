import React, {memo} from "react";
import dynamic from "next/dynamic";

const HeaderUI = dynamic(() => import("../header"), {ssr: false});
const FooterUI = dynamic(() => import("../footer"), {ssr: false});

type LayoutProps = {
    children: JSX.Element;
}

const Layout = ({children}: LayoutProps) => {

    return <div>
        <HeaderUI />
        <main>{children}</main>
        <FooterUI />
    </div>

}

export default memo(Layout);
