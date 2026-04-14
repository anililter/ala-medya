import type { Metadata } from "next";
import { WebTasarimContent } from "./WebTasarimContent";

export const metadata: Metadata = {
  title: "Web Tasarım & Yazılım | Ferah Medya — Dönüşüm Odaklı, Apple Estetiği",
  description:
    "Next.js, AI destekli geliştirme ve Apple estetiğiyle dönüşüm odaklı web siteleri. Core Web Vitals, mobil öncelik, sektörel çözümler.",
};

export default function WebTasarimPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <WebTasarimContent />
    </div>
  );
}
