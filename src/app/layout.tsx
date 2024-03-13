import "../styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jayden Dev Portfolio",
  description: "This is my portfolio",
  icons: [
    { rel: "icon", url: "/logo.svg" },
    { rel: "apple", url: "/logo.svg" },
  ],
};

type TRootLayoutProps = {
  readonly children: React.ReactNode;
};

export default function RootLayout({ children }: TRootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
