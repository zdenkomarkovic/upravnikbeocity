import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Profesionalni upravnik zgrade Beograd`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "profesionalni upravnik zgrade Beograd",
    "upravljanje stambenom zajednicom Beograd",
    "upravnik zgrade Beograd",
    "upravljanje zgradama Beograd",
    "stambena zajednica upravnik",
    "profesionalni upravnik stambene zajednice",
    "registar stambenih zajednica",
    "tekuće održavanje zgrade Beograd",
    "hitne intervencije u zgradi",
    "Beo City Upravnik",
    "upravljanje stambenim objektima",
    "upravnik stambene zajednice cena",
    "zakon o stanovanju i održavanju zgrada",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Profesionalni upravnik zgrade Beograd`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/logo.jpeg`,
        width: 800,
        height: 600,
        alt: `${SITE_NAME} – Profesionalni upravnik zgrada Beograd`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Profesionalni upravnik zgrade Beograd`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/logo.jpeg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    "geo.region": "RS-00",
    "geo.placename": "Beograd",
    "geo.position": "44.8125;20.465",
    ICBM: "44.8125, 20.465",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
