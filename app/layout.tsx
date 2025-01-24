"use client";

import './ui/global.css';
import Head from "next/head";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <title>AIndex: search AIs</title>
          <meta name="viewport" content="width-device-width, initial-scale=1.0" />
        </Head>
        <div className="flex flex-col min-h-screen
                        font-sans text-text-light dark:text-text-dark 
                      bg-bg-light dark:bg-bg-dark 
                      border-b-bg-lightBorder dark:border-b-bg-darkBorder">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
