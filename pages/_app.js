import { Fragment } from "react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Movie DB</title>
        <meta name="description" content="Movie database project" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
