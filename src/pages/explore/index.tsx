import React, {memo} from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const LinksUI = dynamic(() => import("../../common/components/nested-links"), {ssr: false});

interface ExploreProps {
    children: JSX.Element
}

const Explore = () => {
    return <div>This is the Teams landing page</div>;
};

const NestedLayout = ({children}: ExploreProps) => {

    return <section className={"explore--wrapper"}>
        <Head>
            <title>BOZOO - Explore</title>
            <meta name="description" content="Afro NFT's marketplace"/>
            <link rel="apple-touch-icon" href="/favicon.svg"/>
            <meta name="copyright" content="TONDJI NIAT J. Lee - Web & Mobile developer"/>
            <meta name="author" content="TONDJI NIAT J. Lee"/>
            <meta name="title" content="Afro NFTs Marketplace"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="icon" href="/favicon.svg"/>
        </Head>
        <LinksUI />
        {children}
    </section>

}

export const ExploreLayout = (page: JSX.Element) => <NestedLayout>{page}</NestedLayout>;

Explore.getLayout = ExploreLayout;

export default memo(Explore);
