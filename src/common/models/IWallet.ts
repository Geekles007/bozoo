export type TFunction = "injected" | "walletconnect" | "walletlink";

export type IWallet = {
    id: number;
    title: string;
    logo: string;
    function: TFunction
}
