import React, {memo, useState} from "react";
import Image from "next/image";
import {FaCertificate, FaChevronDown, FaChevronUp, FaRegEye} from "react-icons/fa";
import Numbers from "../numbers";
import Button from "../button";

type TopCollectionItemProps = {
    rank: number;
}

const TopCollectionItem = ({rank}: TopCollectionItemProps) => {

    const [opened, setOpened] = useState<boolean>(false);

    return <a className={`_item ${opened ? "_opened" : ""}`}>
        <div className="main--item">
            <div className={"_rank"}>{rank}</div>
            <div className="nft--image">
                <Image src={"/beauty.jpeg"} layout={"fill"} />
            </div>
            <div className="_infos">
                <div className="_main">
                    <strong>Ajaverse</strong>
                    <FaCertificate className={"certificate--icon"} />
                    <FaRegEye />
                </div>
                <div className="bottom--main">
                    <div className="b--item">
                        <div className="b--head">Floor</div>
                        <Numbers topNumber={"1.78"} minus={-1.48}/>
                    </div>
                    <div className="b--item">
                        <div className="b--head">24h Vol</div>
                        <Numbers topNumber={"1.78"} minus={+1.48}/>
                    </div>
                    <div className="b--item">
                        <div className="b--head">Total vol</div>
                        <Numbers topNumber={"33,000"}/>
                    </div>
                    <div className="b--item">
                        <div className="b--head">Owners</div>
                        <Numbers topNumber={"1.78"}/>
                    </div>
                    <div className="b--item">
                        <div className="b--head">Items</div>
                        <Numbers topNumber={"1.78"}/>
                    </div>
                </div>
            </div>
        </div>
        <Button type={"medium"} className={"_opener"} onClick={() => setOpened(old => !old)}>
            {
                opened ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />
            }
        </Button>
        <div className="secondary--item">
            <Numbers topNumber={"1.78"} minus={-1.48}/>
        </div>
        <div className="secondary--item">
            <Numbers topNumber={"1.78"} minus={40.48}/>
        </div>
        <div className="secondary--item">
            <Numbers topNumber={"1.78"}/>
        </div>
        <div className="secondary--item"><Numbers topNumber={"33,000"}/></div>
        <div className="secondary--item"><Numbers topNumber={"340"}/></div>
    </a>

}

export default memo(TopCollectionItem);
