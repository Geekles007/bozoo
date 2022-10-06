import React, {memo} from "react";
import Tag from "../../common/components/tag";
import Badge from "../../common/components/badge";
import {useTranslation} from "react-i18next";
import Button from "../../common/components/button";
import Image from "next/image";
import {FaCertificate} from "react-icons/all";
import Link from "next/link";

type MainBannerProps = {}

const MainBanner = ({}: MainBannerProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});

    return <div className={"main--banner"}>
        <div className="_content">
            <div className="_left">
                <div className="_infos">
                    <Tag>{t("soonDropText")}</Tag>
                    <span>Jan 6, 2022</span>
                </div>
                <h2>Discover New NFTs</h2>
                <div className="_badges">
                    <Badge
                        info={{
                            label: t("createdByText"),
                            text: "@johndoedesign"
                        }}
                        image={"/avatar.jpeg"}/>
                    <div className="_separator" />
                    <Badge
                        info={{
                            label: t("collectionText"),
                            text: "Outcast"
                        }}
                        image={"/bozoo.png"}/>
                </div>
                <div className="_actions">
                    <Button className={""} type={"large"}>{t("exploreText")}</Button>
                    <Button className={"_bordered "} type={"large"}>View NFT</Button>
                </div>
            </div>
            <div className="_right">
                <div className="_slide">
                    <Image layout={"fill"} src={"/nft.jpeg"}/>
                    <Link href={"/"}>
                        <a className="_naming">
                            <span>John Doe NFT</span> <FaCertificate className={"certificate--icon"} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>

}

export default memo(MainBanner);
