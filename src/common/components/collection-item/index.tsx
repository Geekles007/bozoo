import React, {memo} from "react";
import Link from "next/link";

type CollectionItemProps = {}

const CollectionItem = ({}: CollectionItemProps) => {

    return <div className={"collection--item"}>
        <Link href={"/"}>
            <a className={"collec--content"}>
                <div className="collection--cover">
                    <img src="/beauty.jpeg" alt="Collection"/>
                </div>
                <strong>Auction Ended</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </a>
        </Link>
    </div>

}

export default memo(CollectionItem);
