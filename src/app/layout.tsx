import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingActions } from "@/components/FloatingActions";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ContactDrawer } from "@/components/ContactDrawer";
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
  title: "Ferah Medya — Yapay Zeka Destekli 360 Dijital Pazarlama Ajansı",
  description:
    "Yeni nesil yapay zeka destekli dijital reklam, SEO, sosyal medya ve kreatif çözümler. Google Premier Partner vizyonu, 8 yıllık sektörel tecrübe ve veriye dayalı strateji.",
  keywords: ["dijital pazarlama ajansı", "yapay zeka reklam ajansı", "google ads yönetimi", "seo hizmeti", "sosyal medya yönetimi", "dönüşüm optimizasyonu"],
  authors: [{ name: "Ferah Medya" }],
  openGraph: {
    title: "Ferah Medya — Yapay Zeka Destekli 360 Dijital Pazarlama Ajansı",
    description: "Yeni nesil yapay zeka destekli dijital reklam, SEO, sosyal medya ve kreatif çözümler.",
    url: "https://ferahmedya.com",
    siteName: "Ferah Medya",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/ferah-medya-logo.png", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/ferah-medya-logo.png", sizes: "180x180", type: "image/png" },
    ],
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
        <ContactDrawer />
      </body>
    </html>
  );
}
