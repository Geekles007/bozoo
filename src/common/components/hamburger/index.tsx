import React, {memo, useContext} from "react";
import {VscMenu} from "react-icons/vsc";
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
