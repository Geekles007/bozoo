import React, {memo} from "react";
import {FaEthereum} from "react-icons/fa";

type NumbersProps = {
    topNumber: string;
    minus?: number;
}

const Numbers = ({topNumber, minus}: NumbersProps) => {

    return <div className={"_numbers"}>
        <div className="_top">
            <FaEthereum size={13} className={"_icon"} /> <span>{topNumber}</span>
        </div>
        {
            minus ? <span className={`_subtract ${minus > 0 ? "text-green-700" : "text-red-700"}`}>{`${minus > 0 ? "+" : ""}${minus}%`}</span> : null
        }
    </div>

}

export default memo(Numbers);
