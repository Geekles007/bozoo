import React, {memo} from "react";
import {FaCertificate, FaEthereum} from "react-icons/fa";

type NftItemProps = {}

const NftItem = ({}: NftItemProps) => {

    return <button className={"nft--item"}>
        <div className="nft--image">
            <img src={"/beauty.jpeg"} alt={"nft"} />
        </div>
        <span className="collection--name">Afro <FaCertificate className={"certificate--icon"} /></span>
        <strong>NFT's name</strong>
        <div className="_price">
            <FaEthereum />
            <span>0.02 ETH</span>
        </div>
        <a className="make--offer">Make offer</a>
    </button>

}

export default memo(NftItem);
