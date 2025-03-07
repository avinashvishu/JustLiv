import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
       <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />
      </Head>
  <Component {...pageProps} />
  </>)
}
