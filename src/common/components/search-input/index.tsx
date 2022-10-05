import React, {memo} from "react";

type SearchInputProps = {}

const SearchInput = ({}: SearchInputProps) => {

    return <div className={"search--input"}>
        <input type="text" placeholder={"Search"}/>
        <div className="_icon">/</div>
    </div>

}

export default memo(SearchInput);
