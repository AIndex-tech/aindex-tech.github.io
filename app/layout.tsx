import './ui/global.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// export const noto = Noto_Sans({
//   subsets: ["latin"], weight: ["200"] // , "400", "600"
// });

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-[#333333] min-h-screen text-white`}>
        {children}
      </body>
    </html>
  );
}
