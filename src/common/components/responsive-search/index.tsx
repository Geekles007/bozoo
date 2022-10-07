import React, {memo, useContext} from "react";
import Button from "../button";
import {FaSearch} from "react-icons/all";
import SearchInput from "../search-input";
import {LayoutContext} from "../../../modules/layout";

type ResponsiveSearchProps = {}

const ResponsiveSearch = ({}: ResponsiveSearchProps) => {

    const {searchVisible, changeSearchState} = useContext(LayoutContext);

    return <div className={"responsive-search"}>
        <Button type={"medium"} className={"btn--icon"} onClick={() => changeSearchState(true)}><FaSearch /></Button>
        <div className={`_search ${searchVisible ? "_visible" : "_hidden"}`}>
            <SearchInput className={"block"} closable={true} />
        </div>
    </div>

}

export default memo(ResponsiveSearch);
