import type { Metadata } from "next";
import { Grid, Box } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import ClientProviders from "./ui/client-providers";
import "tailwindcss/tailwind.css";

import Header from "./ui/layout/header";
import Footer from "./ui/layout/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <Grid className="min-h-screen grid-rows-[auto,1fr,auto]">
            <Box className="row-start-1 row-end-2">
              <Header />
            </Box>
            <Box className="row-start-2 row-end-3 overflow-auto">
              <Box className="mx-auto max-w-7xl px-4 py-8">
                {children}
              </Box>
            </Box>
            <Box className="row-start-3 row-end-4">
              <Footer />
            </Box>
          </Grid>
        </ClientProviders>
      </body>
    </html>
  );
}
