import React, {memo, useContext} from "react";
import {IHeader} from "../../models/IHeader";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import Button from "../button";
import Socials from "../socials";
import {VscChromeClose} from "react-icons/vsc";
import {LayoutContext} from "../../../modules/layout";

type DrawerProps = {}

const Drawer = ({}: DrawerProps) => {

    const {drawerVisible, changeDrawerState} = useContext(LayoutContext);

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
        {
            title: "aboutPageLinkText",
            route: "about"
        },
        {
            title: "helpPageLinkText",
            route: "help"
        },
    ];

    return <div className={`_drawer ${drawerVisible ? "_visible" : "_hidden"}`}>
        <div className="drawer--content">
            <div className="_links">
                <a className={"_closer"} onClick={() => changeDrawerState(false)}>
                    <VscChromeClose size={22} />
                </a>
                <div className="_content">
                    <div className="_top">
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
                    <div className="_bottom">
                        <Button type={"large"} className={"w-full"}>{t("connectWalletText")}</Button>
                        <hr/>
                        <Socials className={"justify-around w-2/4"} />
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default memo(Drawer);
