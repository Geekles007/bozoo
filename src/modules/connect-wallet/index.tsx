import React, {memo} from "react";
import {fetcher} from "../../common/helpers";
import useSWR from "swr";
import {IWallet} from "../../common/models/IWallet";

type ConnectWalletProps = {}

const ConnectWallet = ({}: ConnectWalletProps) => {
    const { data, error } = useSWR<string>('/api/staticWallet', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const wallets: IWallet[] = JSON.parse(data ?? "[]");

    return <div className={"connect--wallet"}>
        <div className="wallet--list">
            {
                wallets?.map((item, index) => {
                    return <button key={index} className="wallet--item">
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
