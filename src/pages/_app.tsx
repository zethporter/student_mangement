import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import SwrConfig from "~/components/config/SwrConfig";
import "~/styles/globals.css";
import DashboardLayout from "~/components/DashboardLayout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <SwrConfig>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </SwrConfig>
    </ClerkProvider>
  );
};

export default MyApp;
