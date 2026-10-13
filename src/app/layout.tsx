import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import AdmissionsDispatchPopup from "@/components/home/AdmissionsDispatchPopup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://universalpatran.com";
const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Universal College Patran | Degree & Vocational Education in Patiala, Punjab",
    template: "%s | Universal College Patran",
  },
  description:
    "Universal College Patran (Est. 2014) is affiliated with MRSPTU Bathinda & Jagat Guru Nanak Dev PSOU. Offering BCA, B.Com, BA, PGDCA, M.Sc & ITI technical trades with 100% PMSS Scholarship in Patran, Punjab.",
  keywords: [
    "Universal College Patran",
    "MRSPTU Bathinda Affiliated College",
    "PSOU Study Centre Patran",
    "BCA College in Patran Patiala",
    "PMSS Scholarship Punjab",
    "Universal ITI Patran",
    "Degree College Patran",
    "Vocational Education Punjab",
  ],
  authors: [{ name: "Universal College Patran (Dashmesh Charitable Trust)" }],
  openGraph: {
    title: "Universal College Patran | Higher Education & Vocational Excellence",
    description:
      "Affiliated with MRSPTU Bathinda & JGND PSOU. Comprehensive Degree, Diploma & ITI technical education with 100% Post-Matric SC Scholarship support.",
    url: siteUrl,
    siteName: "Universal College Patran",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/campus/hero-exterior-wide.webp",
        width: 1200,
        height: 630,
        alt: "Universal College Patran Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal College Patran",
    description:
      "Degree & Vocational Education in Patran, Patiala, Punjab. Affiliated with MRSPTU Bathinda.",
    images: ["/assets/campus/hero-exterior-wide.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#f9f9f7] text-[#1a1a1a]">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#f9f9f7] min-h-screen`}
      >
        <SmoothScroll>{children}</SmoothScroll>
        <AdmissionsDispatchPopup />
      </body>
    </html>
  );
}
