import React, {memo, useEffect, useState} from "react";
import Button from "../button";
import {FaArrowUp} from "react-icons/fa";

type ScrollTopButtonProps = {}

const ScrollTopButton = ({}: ScrollTopButtonProps) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={""}>
            {isVisible &&
                <Button type={"small"} className={"scroll-button"} onClick={scrollToTop}>
                    <FaArrowUp color={"black"} />
                </Button>}
        </div>
    );

}

export default memo(ScrollTopButton);
