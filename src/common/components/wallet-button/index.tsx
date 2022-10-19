import React, {memo} from "react";
import {ConnectWallet as WalletConnecter, useAddress} from "@thirdweb-dev/react";

type WalletButtonProps = {}

const WalletButton = ({}: WalletButtonProps) => {
    const address = useAddress();

    return <div className={"wallet--trigger"}>
        <WalletConnecter/>
        {/*<button ref={connectWalletRef} className={"wallet-button"} onClick={() => changeModalState({*/}
        {/*    visible: true,*/}
        {/*    children: <ConnectWallet />,*/}
        {/*    title: t("connectWalletText"),*/}
        {/*    size: "small"*/}
        {/*})}>*/}
        {/*    <BiWallet size={22}/>*/}
        {/*</button>*/}
    </div>

}

export default memo(WalletButton);
