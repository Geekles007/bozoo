import React, {memo, useEffect, useState} from "react";
import Link from "next/link";
import {IHeader} from "../../models/IHeader";
import dynamic from "next/dynamic";
import {useTranslation} from "react-i18next";
import WalletButton from "../wallet-button";
import useWindowDimensions from "../../hooks/use-window-dimensions.hook";

const ThemeSwitcher = dynamic(() => import("../theme-switcher"), {ssr: false});
const LangSwitcher = dynamic(() => import("../lang-switcher"), {ssr: false});
const SearchInput = dynamic(() => import("../search-input"), {ssr: false});
const Hamburger = dynamic(() => import("../hamburger"), {ssr: false});
const ResponsiveSearch = dynamic(() => import("../responsive-search"), {ssr: false});

type HeaderUIProps = {}

const HeaderUI = ({}: HeaderUIProps) => {

    const headers: Array<IHeader> = [
        {
            title: "explorePageLinkText",
            route: "explore"
        },
        {
            title: "collectionsPageLinkText",
            route: "collections/0x974f80A5B9570d1bE469A95abc2ee8396DdE60B0"
        },
    ];

    const {t} = useTranslation("translation", {useSuspense: false});

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
            <div className="_links">
                {
                    headers.map((item, index) => {
                        return <Link key={index} href={`/${item?.route}`}>
                            <a>
                                {t(item?.title)}
                            </a>
                        </Link>
                    })
                }
            </div>
            <ThemeSwitcher/>
            <LangSwitcher />
            <WalletButton />
            <Hamburger />
        </div>
    </div>

}

export default memo(HeaderUI);
