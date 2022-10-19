import React, {memo, useState} from "react";
import Button from "../button";
import {FaChevronDown} from "react-icons/fa";
import AccordionItem from "./accordion-item";

type AccordionUIProps = {}

const AccordionUI = ({}: AccordionUIProps) => {

    const [open, setOpen] = useState(true);

    return <div>
        <div id="accordion-collapse" data-accordion="collapse" className={"_accordion"}>
            <Button type={"medium"} className={`accordion--head ${open ? "_open" : ""}`} onClick={() => setOpen(old => !old)}>
                <span>Collections</span>
                <FaChevronDown />
            </Button>
            <div className={`accordion--body ${open ? "_open" : ""}`}>
                {
                    [1,2,3,4,5,6,7,8,9].map((item, index) => {
                        return <AccordionItem key={index} />
                    })
                }
            </div>
        </div>
    </div>

}

export default memo(AccordionUI);
