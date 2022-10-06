import React, {memo} from "react";
import {useTranslation} from "react-i18next";

type SearchInputProps = {}

const SearchInput = ({}: SearchInputProps) => {

    const {t} = useTranslation("translation", {useSuspense: false});

    return <div className={"search--input"}>
        <input type="text" placeholder={t("searchText")}/>
        <div className="_icon">/</div>
    </div>

}

export default memo(SearchInput);
