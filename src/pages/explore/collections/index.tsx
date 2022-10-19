import React, {memo} from "react";
import Head from "next/head";
import {nestLayout} from "../../../common/helpers";
import {ExploreLayout} from "../index";

type CollectionsPageProps = {
    children: JSX.Element;
}

const CollectionsPage = ({}: CollectionsPageProps) => {

    return <div className={"children--page"}>
        <Head>
            <title>BOZOO - Collections</title>
            <meta name="description" content="Afro NFT's marketplace"/>
            <link rel="apple-touch-icon" href="/favicon.svg"/>
            <meta name="copyright" content="TONDJI NIAT J. Lee - Web & Mobile developer"/>
            <meta name="author" content="TONDJI NIAT J. Lee"/>
            <meta name="title" content="Afro NFTs Marketplace"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="icon" href="/favicon.svg"/>
        </Head>
        Collections
    </div>

}

const NestedLayout = ({children}: CollectionsPageProps) => {
    return <>
        {children}
    </>
}

const getLayout = (page: JSX.Element) => <NestedLayout>{page}</NestedLayout>;

export const CollectionsPageLayout = nestLayout(ExploreLayout, getLayout);

CollectionsPage.getLayout = CollectionsPageLayout;

export default (CollectionsPage);
