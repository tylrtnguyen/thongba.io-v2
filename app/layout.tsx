import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Head from "next/head";

const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

export const metadata: Metadata = {
  title: "Thong Nguyen - Software Developer - Portfolio",
  description: "Thong Nguyen, Developer @ Scotiabank, Toronto, ON Canada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
