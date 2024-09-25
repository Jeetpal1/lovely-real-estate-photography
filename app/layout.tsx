// app/layout.tsx
"use client";

"use client";

import { Inter } from "next/font/google";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../context/AuthContext";
import { metadata } from "./metadata";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta
          property="twitter:description"
          content={metadata.twitter.description}
        />
        <meta
          property="twitter:image"
          content={metadata.twitter.images[0].url}
        />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body className={`${inter.className} text-xs lg:text-base `}>
        <RecoilRoot>
          <AuthProvider>{children}</AuthProvider>
          <ToastContainer />
        </RecoilRoot>
      </body>
    </html>
  );
}
