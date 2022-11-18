import Head from "next/head";
import { UsersProvider } from "context/UsersContext";

import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <UsersProvider>
        <Component {...pageProps} />
      </UsersProvider>
    </>
  );
}

export default MyApp;
