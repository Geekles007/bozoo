import React, {memo, useContext} from "react";
import {IHeader} from "../../models/IHeader";
import {VscMenu} from "react-icons/all";
import {LayoutContext} from "../../../modules/layout";

type HamburgerProps = {

}

const Hamburger = ({}: HamburgerProps) => {

    const {changeDrawerState} = useContext(LayoutContext);

    return <>
        <button className={"drawer--button"} onClick={() => changeDrawerState(true)}>
            <VscMenu size={22} />
        </button>
    </>

}

export default memo(Hamburger);
