import React, {memo} from "react";
import Link from "next/link";
import {IHeader} from "../../models/IHeader";
import dynamic from "next/dynamic";
import {useTranslation} from "react-i18next";
import WalletButton from "../wallet-button";
import ResponsiveSearch from "../responsive-search";
import Hamburger from "../hamburger";

const ThemeSwitcher = dynamic(() => import("../theme-switcher"), {ssr: false});
const LangSwitcher = dynamic(() => import("../lang-switcher"), {ssr: false});
const SearchInput = dynamic(() => import("../search-input"), {ssr: false});

type HeaderUIProps = {}

const HeaderUI = ({}: HeaderUIProps) => {

    const headers: Array<IHeader> = [
        {
            title: "explorePageLinkText",
            route: "explore"
        },
        {
            title: "collectionsPageLinkText",
            route: "collections"
        },
    ];

    const {t} = useTranslation("translation", {useSuspense: false});

    return <div className={"_header"}>
        <div className={"_left"}>
            <Link href={"/"}>
                <a className={"_logo"} />
            </Link>
            <SearchInput />
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
