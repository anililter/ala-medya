import type { Metadata } from "next";
import { DonusumOptimizasyonuContent } from "./DonusumOptimizasyonuContent";

export const metadata: Metadata = {
  title: "Dönüşüm Optimizasyonu (CRO) | Ala Medya — Tıklamadan Satışa",
  description:
    "Reklam bütçenizi ciroya dönüştürüyoruz. AI destekli A/B testleri, ısı haritaları ve sektörel CRO ile daha az bütçeyle daha çok randevu.",
};

export default function DonusumOptimizasyonuPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <DonusumOptimizasyonuContent />
    </div>
  );
}
