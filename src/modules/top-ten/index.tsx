import React, {memo} from "react";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import {FaCertificate, FaRegEye} from "react-icons/fa";
import Numbers from "../../common/components/numbers";
import TopCollectionItem from "../../common/components/top-collection-item";

type TopTenTodayProps = {}

const TopTenToday = ({}: TopTenTodayProps) => {

    const {t} = useTranslation("translation", {useSuspense: false});

    return <div className={"top--ten"}>
        <h3>{t("topCollectionsToday")}</h3>
        <div className="_list">
            <div className="_head">
                <div className="main--head">Collection</div>
                <div className="secondary--head">Floor</div>
                <div className="secondary--head">24h Vol</div>
                <div className="secondary--head">Total Vol</div>
                <div className="secondary--head">Owners</div>
                <div className="secondary--head">Items</div>
            </div>
            {
                [1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                    return <TopCollectionItem key={index} rank={index + 1} />
                })
            }
        </div>
    </div>

}

export default memo(TopTenToday);
