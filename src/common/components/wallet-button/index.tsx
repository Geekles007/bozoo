import React, {memo} from "react";
import {BiWallet} from "react-icons/bi";

type WalletButtonProps = {}

const WalletButton = ({}: WalletButtonProps) => {

    return <>
        <button className={"wallet-button"}>
            <BiWallet size={22}/>
        </button>
    </>

}

export default memo(WalletButton);
