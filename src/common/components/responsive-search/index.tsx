import React, {memo} from "react";
import Button from "../button";
import {FaSearch} from "react-icons/all";

type ResponsiveSearchProps = {}

const ResponsiveSearch = ({}: ResponsiveSearchProps) => {

    return <div className={"responsive-search"}>
        <Button type={"medium"} className={"btn--icon"}><FaSearch /></Button>
    </div>

}

export default memo(ResponsiveSearch);
