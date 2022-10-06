import type { NextPage } from 'next'
import Head from 'next/head';
import dynamic from "next/dynamic";

const MainBanner = dynamic(() => import("../modules/main-banner"), {ssr: false});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BOZOO</title>
        <meta name="description" content="Afro NFT's marketplace" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <MainBanner />
      </main>
    </>
  )
}

export default Home
