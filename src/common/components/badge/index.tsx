import React, {memo} from "react";
import Image from "next/image";

type BadgeProps = {
    image: string;
    info: {
        label: string;
        text: string;
    }
}

const Badge = ({image, info}: BadgeProps) => {

    return <a className={"_badge"}>
        <div className="_avatar">
            <Image
                width={"100%"}
                height={"100%"}
                src={image}
                alt={"Author"}/>
        </div>
        <div className="_desc">
            <span>{info?.label}</span>
            <strong>{info?.text}</strong>
        </div>
    </a>

}

export default memo(Badge);
