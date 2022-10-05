import React, {memo, useCallback, useEffect} from "react";
import {IoEarthOutline} from "react-icons/all";
import i18n from "i18next";

type LangSwitcherProps = {}

const LangSwitcher = ({}: LangSwitcherProps) => {
    const [lang, setLang] = React.useState<string | null>(i18n.language || "en");

    useEffect(() => {
        i18n.changeLanguage(lang ?? i18n.language).then(r => {
            // console.log("lang changed", r);
        });
    }, [lang]);

    const handleLangChange = useCallback(() => {
        setLang(oldLang => oldLang === "fr" ? "en" : "fr");
    }, [setLang]);

    return <a className={"lang--switcher"} onClick={handleLangChange}>
        <IoEarthOutline size={22} /> <strong>{lang}</strong>
    </a>

}

export default memo(LangSwitcher);
