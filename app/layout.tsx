import type { Metadata } from "next";
import "./globals.css";
import { dmSerif, libreFranklin, geistMono } from "./fonts";

import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { Analytics } from "@/lib/analytics";
import { baseMetadata } from "@/lib/seo";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${libreFranklin.variable} ${geistMono.variable}`}
    >
      <body>
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
        <Analytics />
      </body>
    </html>
  );
}
