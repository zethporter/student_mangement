import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";

import { themeAtom } from "~/styles/themeSettings";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default MyApp;
