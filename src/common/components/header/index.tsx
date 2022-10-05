import React, {memo} from "react";
import Link from "next/link";
import Image from 'next/image';
import {IHeader} from "../../models/IHeader";
import dynamic from "next/dynamic";
import {useTheme} from "next-themes";
import {useTranslation} from "react-i18next";
import WalletButton from "../wallet-button";

const ThemeSwitcher = dynamic(() => import("../theme-switcher"), {ssr: false});
const LangSwitcher = dynamic(() => import("../lang-switcher"), {ssr: false});
const SearchInput = dynamic(() => import("../search-input"), {ssr: false});

type HeaderUIProps = {}

const HeaderUI = ({}: HeaderUIProps) => {

    const {theme, setTheme} = useTheme();
    const {t} = useTranslation("translation", {useSuspense: false});

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

    return <div className={"_header"}>
        <div className={"_left"}>
            <Link href={"/"} className={"_logo"}>
                <a>
                    <Image src={theme === "dark" ? "/logo-white.svg" : "/logo.svg"} height={60} width={100}/>
                </a>
            </Link>
            <SearchInput />
        </div>

        <div className="_right">
            {
                headers.map((item, index) => {
                    return <Link key={index} href={`/${item?.route}`}>
                        <a>
                            {t(item?.title)}
                        </a>
                    </Link>
                })
            }
            <ThemeSwitcher/>
            <LangSwitcher />
            <WalletButton />
        </div>
    </div>

}

export default memo(HeaderUI);
