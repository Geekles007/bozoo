import React, {memo} from "react";
import {fetcher} from "../../common/helpers";
import useSWR from "swr";
import {IWallet, TFunction} from "../../common/models/IWallet";
import {useWeb3} from "@3rdweb/hooks";

type ConnectWalletProps = {}

const ConnectWallet = ({}: ConnectWalletProps) => {
    const { data, error } = useSWR<string>('/api/staticWallet', fetcher);
    const {connectWallet, disconnectWallet, address} = useWeb3();

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const wallets: IWallet[] = JSON.parse(data ?? "[]");

    const connect = (value: TFunction) => {
        connectWallet(value).then(res => {
            console.log(res);
        }).catch(err => {
            console.log("err >>>", err);
        })
    }

    return <div className={"connect--wallet"}>
        <div className="wallet--list">
            {
                wallets?.map((item, index) => {
                    return <button key={index} className="wallet--item" onClick={() => connect(item?.function)}>
                        <div className="wallet--logo">
                            <img
                                src={item?.logo}
                                alt={item?.title}/>
                        </div>
                        <strong>{item?.title}</strong>
                    </button>
                })
            }
        </div>
    </div>

}

export default memo(ConnectWallet);
