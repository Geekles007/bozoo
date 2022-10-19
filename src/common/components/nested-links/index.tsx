import {IHeader} from "../../models/IHeader";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";
import Link from "next/link";
import {MAIN_ROUTES} from "../../constants";
import React, {memo} from "react";

const LinksUI = () => {
    const {t} = useTranslation("translation", {useSuspense: false});
    const {route} = useRouter();

    const links: Array<IHeader> = [
        {
            title: "NFTs",
            route: "items"
        },
        {
            title: "Collections",
            route: "collections"
        }
    ];

    return <div className="_links">
        {
            links?.map((item, index) => {
                return <Link key={index} href={item?.route}>
                    <a className={route === `/${MAIN_ROUTES.explore}/${item?.route}` ? "_active" : ""}>{t(item?.title)}</a>
                </Link>
            })
        }
    </div>
}

export default memo(LinksUI);
