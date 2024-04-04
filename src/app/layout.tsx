import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Fathom from "@/components/Fathom";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Welcome to Play MC",
  description:
    "The Vanilla Minecraft Experience - Coming Soon! Stay tuned for updates.",
  themeColor: "#111C2C",
  alternates: {
    canonical: "https://play.mc",
  }
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
