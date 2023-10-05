import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import SwrConfig from "~/components/config/SwrConfig";
import "~/styles/globals.css";

import { themeAtom } from "~/styles/themeSettings";
import { Toaster } from "react-hot-toast";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <SwrConfig>
        <Toaster position="bottom-left" />
        <Component {...pageProps} />
      </SwrConfig>
    </ClerkProvider>
  );
};

export default MyApp;
