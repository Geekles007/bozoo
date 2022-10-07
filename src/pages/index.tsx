import type {NextPage} from 'next'
import Head from 'next/head';
import dynamic from "next/dynamic";

const MainBanner = dynamic(() => import("../modules/main-banner"), {ssr: false});
const TopTenToday = dynamic(() => import("../modules/top-ten"), {ssr: false});
const CreateCollectionSlider = dynamic(() => import("../modules/create-collection-slider"), {ssr: false});

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>BOZOO</title>
                <meta name="description" content="Afro NFT's marketplace"/>
                <link rel="apple-touch-icon" href="/favicon.svg"/>
                <meta name="copyright" content="TONDJI NIAT J. Lee - Web & Mobile developer"/>
                <meta name="author" content="TONDJI NIAT J. Lee"/>
                <meta name="title" content="Afro NFTs Marketplace"/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="icon" href="/favicon.svg"/>
            </Head>

            <main>
                <MainBanner/>
                <TopTenToday/>
                <CreateCollectionSlider />
            </main>
        </>
    )
}

export default Home
