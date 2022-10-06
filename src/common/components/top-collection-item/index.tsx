import React, {memo} from "react";
import Image from "next/image";
import {FaCertificate, FaRegEye} from "react-icons/fa";
import Numbers from "../numbers";

type TopCollectionItemProps = {
    rank: number;
}

const TopCollectionItem = ({rank}: TopCollectionItemProps) => {

    return <a className="_item">
        <div className="main--item">
            <span>{rank}</span>
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

}

export default memo(TopCollectionItem);
