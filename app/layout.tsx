import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/scrolltotop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

// Métadonnées adaptées à ton portfolio pour le référencement (SEO)
export const metadata: Metadata = {
  title: "Paul Nelaton | Portfolio & Apps",
  description:
    "Découvrez le portfolio de Paul Nelaton, créateur d'applications, ainsi que ses projets comme Brain Eaters et son générateur de CV interactif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${plexSans.variable} ${plexMono.variable}`}>
        <ScrollToTop />
        <Header />

        <main className="page">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
