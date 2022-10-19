import React, {memo} from "react";
import Head from "next/head";
import {nestLayout} from "../../../common/helpers";
import {ExploreLayout} from "../index";

type ItemsPageProps = {
    children: JSX.Element;
}

const ItemsPage = () => {

    return <div className={"children--page"}>
        <Head>
            <title>BOZOO - NFTs</title>
            <meta name="description" content="Afro NFT's marketplace"/>
            <link rel="apple-touch-icon" href="/favicon.svg"/>
            <meta name="copyright" content="TONDJI NIAT J. Lee - Web & Mobile developer"/>
            <meta name="author" content="TONDJI NIAT J. Lee"/>
            <meta name="title" content="Afro NFTs Marketplace"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="icon" href="/favicon.svg"/>
        </Head>
        yo
    </div>

}

const NestedLayout = ({children}: ItemsPageProps) => {
    return <>
        {children}
    </>
}

const getLayout = (page: JSX.Element) => <NestedLayout>{page}</NestedLayout>;

export const ItemsPageLayout = nestLayout(ExploreLayout, getLayout);

ItemsPage.getLayout = ItemsPageLayout;

export default (ItemsPage);
