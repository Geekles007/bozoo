import React, {memo} from "react";
import dynamic from "next/dynamic";
import AccordionUI from "../../common/components/accordion";
const AmountFilter = dynamic(() => import("../../common/components/amount-filter"), {ssr: false});

type FiltersPanelProps = {}

const FiltersPanel = ({}: FiltersPanelProps) => {

    return <div className={"filters--panel"}>
        <div className="input--container">
            <label htmlFor="Search">Search</label>
            <div className="_inputs">
                <input className={"_input"} type="text" placeholder={"Search"}/>
            </div>
        </div>
        <AmountFilter />
        <AccordionUI/>
    </div>

}

export default memo(FiltersPanel);
