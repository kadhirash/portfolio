import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kadhirash Sivakumar",
  description: "Software engineer building things with Next.js and trading in my free time",
  openGraph: {
    title: "Kadhirash Sivakumar",
    description: "Software engineer building things with Next.js and trading in my free time",
    url: "https://kadhirash.vercel.app",
    siteName: "Kadhirash Sivakumar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kadhirash Sivakumar",
    description: "Software engineer building things with Next.js and trading in my free time",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
