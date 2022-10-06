import React, {memo} from "react";
import {IHeader} from "../../models/IHeader";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import dynamic from "next/dynamic";
import {FaDiscord, FaInstagram, FaTwitter} from "react-icons/all";

const LangSwitcher = dynamic(() => import("./../lang-switcher"), {ssr: false});

type FooterUIProps = {}

const FooterUI = ({}: FooterUIProps) => {

    const {t} = useTranslation("translation", {useSuspense: false});

    const links: Array<IHeader> = [
        {
            title: "aboutPageLinkText",
            route: "about"
        },
        {
            title: "contactPageLinkText",
            route: "contact"
        },
        {
            title: "helpPageLinkText",
            route: "help"
        },
        {
            title: "brandPageLinkText",
            route: "brand"
        },
        {
            title: "termOfServicePageLinkText",
            route: "termOfService"
        },
        {
            title: "businessPageLinkText",
            route: "business"
        },
    ];

    return <div className={"_footer"}>
        <div className="_content">
            <div className="_top">
                <span>© {(new Date()).getFullYear()} Bozoo Inc.</span>
                <div className="_separator" />
                <span>By NFT people, for NFT people</span>
            </div>
            <div className="_bottom">
                <div className="_left">
                    {
                        links?.map((item, index) => {
                            return <Link key={index} href={item?.route}>
                                <a className={"footer--link"}>
                                    {t(item?.title)}
                                </a>
                            </Link>
                        })
                    }
                </div>
                <div className="_right">
                    <a href="#">
                        <FaDiscord />
                    </a>
                    <a href="#">
                        <FaInstagram />
                    </a>
                    <a href="#">
                        <FaTwitter />
                    </a>
                    <LangSwitcher />
                </div>
            </div>
        </div>
    </div>

}

export default memo(FooterUI);
