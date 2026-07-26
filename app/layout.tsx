import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";


import "@/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/scrolltotop";
import { LanguageProvider } from "@/contexts/LanguageContext";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://paulnelaton.com"),

  title: {
    default: "Paul Nelaton | Software Engineer & Product Builder",
    template: "%s | Paul Nelaton",
  },

  description:
    "Paul Nelaton, ingénieur logiciel spécialisé dans la conception d'applications web fullstack, d'interfaces modernes et de produits numériques centrés sur les besoins utilisateurs.",

  authors: [{ name: "Paul Nelaton" }],
  creator: "Paul Nelaton",

  openGraph: {
    title: "Paul Nelaton | Software Engineer & Product Builder",
    description:
      "Paul Nelaton, ingénieur logiciel spécialisé dans la conception d'applications web fullstack, d'interfaces modernes et de produits numériques centrés sur les besoins utilisateurs.",
    url: "https://paulnelaton.com",
    siteName: "Paul Nelaton",
    images: [
      {
        url: "https://paulnelaton.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paul Nelaton - Software Engineer & Product Builder",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Paul Nelaton - Software Engineer & Product Builder",
    description: "Software engineer building modern fullstack applications and user-centered digital products.",
    images: [
      {
        url: "https://paulnelaton.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paul Nelaton - Software Engineer & Product Builder",
      },
    ],
  },

icons: {
  icon: [
    { url: "/favicon.ico" },
    {
      url: "/icon.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  apple: [
    {
      url: "/apple-icon.png",
      sizes: "256x256",
      type: "image/png",
    },
  ],
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="fr">
  <body className={`${plexSans.variable} ${plexMono.variable}`}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://paulnelaton.com/#person",
          name: "Paul Nelaton",
          url: "https://paulnelaton.com",
          jobTitle: "Software Engineer",
          sameAs: [
            "https://www.linkedin.com/in/paul-nelaton-791721aa",
            "https://github.com/Serobi",
          ],
        }).replace(/</g, "\\u003c"),
      }}
    />

    <LanguageProvider>
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  </body>
</html>
  );
}
