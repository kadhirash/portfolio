import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
