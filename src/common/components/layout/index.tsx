import React, {memo} from "react";
import dynamic from "next/dynamic";

const HeaderUI = dynamic(() => import("../header"), {ssr: false});

type LayoutProps = {
    children: JSX.Element;
}

const Layout = ({children}: LayoutProps) => {

    return <div>
        <HeaderUI />
        <main>{children}</main>
        <footer>Footer</footer>
    </div>

}

export default memo(Layout);
