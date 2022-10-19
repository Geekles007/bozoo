import React, {memo, useEffect} from "react";
import {ConnectWallet as WalletConnecter, useAddress} from "@thirdweb-dev/react";

type WalletButtonProps = {}

const WalletButton = ({}: WalletButtonProps) => {
    const address = useAddress();

    return <>
        <WalletConnecter />
        {/*<button ref={connectWalletRef} className={"wallet-button"} onClick={() => changeModalState({*/}
        {/*    visible: true,*/}
        {/*    children: <ConnectWallet />,*/}
        {/*    title: t("connectWalletText"),*/}
        {/*    size: "small"*/}
        {/*})}>*/}
        {/*    <BiWallet size={22}/>*/}
        {/*</button>*/}
    </>

}

export default memo(WalletButton);
