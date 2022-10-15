import React, {memo, useCallback, useEffect} from "react";
import {GiEarthAfricaEurope} from "react-icons/gi";
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

    return <button className={"lang--switcher"} onClick={handleLangChange}>
        <GiEarthAfricaEurope size={22} /> <strong>{lang}</strong>
    </button>

}

export default memo(LangSwitcher);
