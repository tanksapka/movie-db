import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Movie DB</title>
        <meta name="description" content="Movie database project" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
