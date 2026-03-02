import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    default: "Paul Nelaton | Software Engineer & Cybersecurity",
    template: "%s | Paul Nelaton",
  },

  description:
    "Paul Nelaton, ingénieur spécialisé en développement fullstack, cybersécurité et automatisation. Découvrez mes projets et applications.",

  alternates: {
    canonical: "/",
    languages: {
      fr: "/fr",
      en: "/en",
    },
  },

  authors: [{ name: "Paul Nelaton" }],
  creator: "Paul Nelaton",

  openGraph: {
    title: "Paul Nelaton | Software Engineer & Cybersecurity",
    description:
      "Paul Nelaton, ingénieur spécialisé en développement fullstack, cybersécurité et automatisation. Découvrez mes projets et applications.",
    url: "https://paulnelaton.com",
    siteName: "Paul Nelaton",
    images: [
      {
        url: "https://paulnelaton.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paul Nelaton - Software Engineer & Cybersecurity",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Paul Nelaton | Software Engineer & Cybersecurity",
    description: "Software, Cybersecurity and Automation Engineer.",
    images: [
      {
        url: "https://paulnelaton.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paul Nelaton - Software Engineer & Cybersecurity",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon_apple.png", sizes: "256x256", type: "image/png" },
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
      <head>
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://paulnelaton.com/#person",
              name: "Paul Nelaton",
              url: "https://paulnelaton.com",
              jobTitle: "Software Engineer / Cybersecurity Engineer",
              sameAs: [
                "https://www.linkedin.com/in/paul-nelaton-791721aa",
                "https://github.com/Serobi",
              ],
            }),
          }}
        />
      </head>
      <body className={`${plexSans.variable} ${plexMono.variable}`}>
        <LanguageProvider>
          <ScrollToTop />
          <Header />
          <main className="page">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
