import React, {memo} from "react";
import {useTranslation} from "react-i18next";

type AmountFilterProps = {}

const AmountFilter = ({}: AmountFilterProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});

    return <div className={"input--container amount--filter"}>
        <label htmlFor="amount">{t("filterByText")} {t("priceText")}</label>
        <div className="_inputs _many">
            <input className={"_input"} type="text" placeholder={"Min"}/>
            <input className={"_input"} type="text" placeholder={"Max"}/>
        </div>
    </div>

}

export default memo(AmountFilter);
