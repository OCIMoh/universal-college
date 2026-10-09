import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Universal College Patran",
  description: "A premium, cinematic scrollytelling experience of Universal College Patran.",
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
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#f9f9f7] min-h-screen`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
