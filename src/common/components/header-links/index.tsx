import React, {memo} from "react";
import Link from "next/link";
import {IHeader} from "../../models/IHeader";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";
import {MAIN_ROUTES} from "../../constants";

type HeaderLinksProps = {}

const HeaderLinks = ({}: HeaderLinksProps) => {

    const {t} = useTranslation("translation", {useSuspense: false});
    const {route} = useRouter();

    const headers: Array<IHeader> = [
        {
            title: "explorePageLinkText",
            route: `/${MAIN_ROUTES.explore}/items`,
            mainRoute: `${MAIN_ROUTES.explore}`
        },
        {
            title: "createPageLinkText",
            route: `/${MAIN_ROUTES.create}/`,
            mainRoute: `${MAIN_ROUTES.create}`
        },
    ];

    return <>
        <div className="_links">
            {
                headers.map((item, index) => {
                    const regex = new RegExp(`^\/${item?.mainRoute}(?:$|.*$)`, "gmi");
                    return <Link key={index} href={`${item?.route}`}>
                        <a className={regex.test(route) ? "_active" : ""}>
                            {t(item?.title)}
                        </a>
                    </Link>
                })
            }
        </div>
    </>

}

export default memo(HeaderLinks);
