import type { NextPage } from "next";
import Head from "next/head";
import ActiveStreamsGallery from "../components/ActiveStreamsGallery";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen w-full text-white">
      <Head>
        <title>talkfree.xyz</title>
        <meta
          name="description"
          content="Start an audio broadcast with one click"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full container bg-gray-800 mx-auto">
        <ActiveStreamsGallery />
      </main>
    </div>
  );
};

export default Home;
