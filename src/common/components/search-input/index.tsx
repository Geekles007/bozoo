import React, {memo, useContext} from "react";
import {useTranslation} from "react-i18next";
import {VscClose} from "react-icons/vsc";
import {LayoutContext} from "../../../modules/layout";

type SearchInputProps = {
    className?: string;
    closable?: boolean;
}

const SearchInput = ({className, closable = false}: SearchInputProps) => {

    const {t} = useTranslation("translation", {useSuspense: false});
    const {changeSearchState} = useContext(LayoutContext);

    return <div className={`search--input ${className}`}>
        <input type="text" placeholder={t("searchText")}/>
        {
            closable ? <a className={`_icon px-2`} onClick={() => changeSearchState(false)}><VscClose size={15} /></a> : <div className="_icon">/</div>
        }
    </div>

}

export default memo(SearchInput);
