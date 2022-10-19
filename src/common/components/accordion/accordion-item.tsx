import React, {memo} from "react";

type AccordionItemProps = {

}

const AccordionItem = ({}: AccordionItemProps) => {

    return <a className={"accordion--item"}>
        <div className="_img">
            <img src="https://africancrypto.com/wp-content/uploads/2021/10/1.jpg" alt="1mA Collective"/>
        </div>
        <div className="_infos">
            <strong>1mA Collective</strong>
            <strong>Floor: 0 ETH</strong>
        </div>
        <div className="_price">
            <strong>300.4 ETH</strong>
            <strong>24h</strong>
        </div>
    </a>

}

export default memo(AccordionItem);
