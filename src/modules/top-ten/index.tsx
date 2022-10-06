import React, {memo} from "react";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import {FaCertificate, FaRegEye} from "react-icons/fa";
import Numbers from "../../common/components/numbers";

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
                    return <a className="_item">
                        <div className="main--item">
                            <span>{index + 1}</span>
                            <div className="nft--image">
                                <Image src={"/nft.jpeg"} layout={"fill"} />
                            </div>
                            <strong>Ajaverse</strong>
                            <FaCertificate className={"certificate--icon"} />
                            <FaRegEye />
                        </div>
                        <div className="secondary--item">
                            <Numbers topNumber={"1.78"} minus={-1.48}/>
                        </div>
                        <div className="secondary--item">
                            <Numbers topNumber={"1.78"} minus={40.48}/>
                        </div>
                        <div className="secondary--item">
                            <Numbers topNumber={"1.78"}/>
                        </div>
                        <div className="secondary--item">33,000</div>
                        <div className="secondary--item">340</div>
                    </a>
                })
            }
        </div>
    </div>

}

export default memo(TopTenToday);
