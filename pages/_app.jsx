import { SessionProvider } from "next-auth/react";

import "../styles/index.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className=" overflow-x-hidden">
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}

export default MyApp;
