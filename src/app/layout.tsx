import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Fathom from "@/components/Fathom";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gamertag.com - The Ultimate Gaming Domain",
  description:
    "Gamertag.com is one of the most iconic gaming domains. Own the brand that speaks to millions of gamers worldwide.",
  themeColor: "#111C2C",
  alternates: {
    canonical: "https://gamertag.com",
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/icon-light.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/icon-dark.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Fathom />
        {children}
      </body>
    </html>
  );
}
