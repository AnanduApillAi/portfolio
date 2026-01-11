import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";

import ScrollRestoration from "@/components/ScrollRestoration";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnakeTeaser from "@/components/SnakeTeaser";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anandu A Pillai — Frontend-First Full Stack Developer",
  description:
    "Frontend-first full stack developer building clean, responsive, and user-friendly web experiences with React, Next.js, TypeScript, and modern UI tools.",
  icons: {
    icon: "/image/favicon.ico",
    apple: "/image/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoFlex.variable} antialiased bg-zinc-950 text-zinc-100 relative min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <SnakeTeaser />
        <ScrollRestoration />
      </body>
    </html>
  );
}
