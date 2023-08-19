import Head from "next/head";
import { Inter } from "next/font/google";
import App from "./App";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hedge Zeppelin</title>
        <meta name="description" content="Hedge Zeppelin Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="content-container">
        <App />
      </main>
    </>
  );
}
