import React, {createRef, memo, useCallback, useContext, useEffect, useRef} from "react";
import {LayoutContext} from "../../../modules/layout";
import Button from "../button";
import {VscChromeClose} from "react-icons/vsc";
import theme from "tailwindcss/defaultTheme";
import useOutsideClick from "../../hooks/use-outside-click";

interface ModalProps {

}

const Modal = ({}: ModalProps) => {

    const {modal, changeModalState, connectWalletRef} = useContext(LayoutContext);

    const handleOutsideClick = () => {
        if(modal?.visible) {
            changeModalState({
                visible: false,
                children: null,
                title: ""
            })
        }
    }

    useOutsideClick<HTMLDivElement>(connectWalletRef, handleOutsideClick);

    return <div className={`_modal ${modal?.visible ? "_visible" : "_hidden"}`}>
        <div className="_content" ref={connectWalletRef}>
            <div className="_head">
                <span>{modal?.title}</span>
                <Button type={"medium"} className={"_opener"} onClick={() => changeModalState({
                    visible: false,
                    children: null,
                    title: null
                })}>
                    <VscChromeClose size={18} color={theme.white}/>
                </Button>
            </div>
            {modal?.children}
        </div>
    </div>

}

export default memo(Modal);
