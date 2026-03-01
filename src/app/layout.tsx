import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingActions } from "@/components/FloatingActions";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
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
  title: "Ala Medya — Yapay Zeka Destekli 360 Dijital Pazarlama Ajansı",
  description:
    "Yeni nesil yapay zeka destekli dijital reklam, SEO, sosyal medya ve kreatif çözümler. Sertifikalı uzmanlık, birebir iletişim.",
  icons: {
    icon: "/ala-medya-logo.png",
    apple: "/ala-medya-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <SEO />
        <Navbar />
        <div className="w-full">
          {children}
        </div>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
