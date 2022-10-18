import React, {memo, useCallback, useContext, useEffect} from "react";
import {BiWallet} from "react-icons/bi";
import {LayoutContext} from "../../../modules/layout";
import ConnectWallet from "../../../modules/connect-wallet";
import {useTranslation} from "react-i18next";
import {useWeb3} from "@3rdweb/hooks";

type WalletButtonProps = {}

const WalletButton = ({}: WalletButtonProps) => {
    const {changeModalState, connectWalletRef} = useContext(LayoutContext);
    const {t} = useTranslation("translation", {useSuspense: false});

    return <>
        <button ref={connectWalletRef} className={"wallet-button"} onClick={() => changeModalState({
            visible: true,
            children: <ConnectWallet />,
            title: t("connectWalletText"),
            size: "small"
        })}>
            <BiWallet size={22}/>
        </button>
    </>

}

export default memo(WalletButton);
