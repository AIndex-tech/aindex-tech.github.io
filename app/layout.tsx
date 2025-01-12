import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import './global.css'

export const noto = Noto_Sans({
  subsets: ["latin"], weight: ["200", "400", "600"]
});

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "A Next.js web application on GitHub Pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
