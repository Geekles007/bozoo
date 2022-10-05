import React, {memo} from "react";
import {useTheme} from "next-themes";
import {MdOutlineLightMode, MdOutlineNightlight} from "react-icons/md";

type ThemeSwitcherProps = {}

const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
    const {theme, setTheme} = useTheme();

    return <a onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }} className={"theme--switcher"}>
        {
            theme === "dark" ?
                <MdOutlineLightMode color={"#FFCB42"}/>
                : <MdOutlineNightlight/>
        }
    </a>

}

export default memo(ThemeSwitcher);
