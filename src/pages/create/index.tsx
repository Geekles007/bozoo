import React, {memo} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

type CreateProps = {}

const Create = ({}: CreateProps) => {

    return <div>
        <Head>
            <title>BOZOO - Creates</title>
            <meta name="description" content="Afro NFT's marketplace"/>
            <link rel="apple-touch-icon" href="/public/favicon.svg"/>
            <meta name="copyright" content="TONDJI NIAT J. Lee - Web & Mobile developer"/>
            <meta name="author" content="TONDJI NIAT J. Lee"/>
            <meta name="title" content="Afro NFTs Marketplace"/>
            <link rel="manifest" href="/public/manifest.json"/>
            <link rel="icon" href="/public/favicon.svg"/>
        </Head>
        Create
    </div>

}

export default memo(Create);
