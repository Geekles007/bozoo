import React, {memo, useContext} from "react";
import {BiWallet} from "react-icons/bi";
import {LayoutContext} from "../../../modules/layout";
import ConnectWallet from "../../../modules/connect-wallet";
import {useTranslation} from "react-i18next";

type WalletButtonProps = {}

const WalletButton = ({}: WalletButtonProps) => {
    const {changeModalState, connectWalletRef} = useContext(LayoutContext);
    const {t} = useTranslation("translation", {useSuspense: false});

    return <>
        <button ref={connectWalletRef} className={"wallet-button"} onClick={() => changeModalState({
            visible: true,
            children: <ConnectWallet />,
            title: t("connectWalletText")
        })}>
            <BiWallet size={22}/>
        </button>
    </>

}

export default memo(WalletButton);
