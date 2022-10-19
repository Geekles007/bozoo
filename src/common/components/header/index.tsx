import React, {memo, useEffect, useState} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import WalletButton from "../wallet-button";
import useWindowDimensions from "../../hooks/use-window-dimensions.hook";
import HeaderLinks from "../header-links";

const ThemeSwitcher = dynamic(() => import("../theme-switcher"), {ssr: false});
const LangSwitcher = dynamic(() => import("../lang-switcher"), {ssr: false});
const SearchInput = dynamic(() => import("../search-input"), {ssr: false});
const Hamburger = dynamic(() => import("../hamburger"), {ssr: false});
const ResponsiveSearch = dynamic(() => import("../responsive-search"), {ssr: false});

type HeaderUIProps = {}

const HeaderUI = ({}: HeaderUIProps) => {

    const {width} = useWindowDimensions();
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        if(width < 768) {
            setVisible(false);
        } else {
            setVisible(true)
        }
    }, [width])

    return <div className={"_header"}>
        <div className={"_left"}>
            <Link href={"/"}>
                <a className={"_logo"} />
            </Link>
            {
                visible ? <SearchInput /> : null
            }
            <ResponsiveSearch />
        </div>

        <div className="_right">
            <HeaderLinks />
            <ThemeSwitcher/>
            <LangSwitcher />
            <WalletButton />
            <Hamburger />
        </div>
    </div>

}

export default memo(HeaderUI);
