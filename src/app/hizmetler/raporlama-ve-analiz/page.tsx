import { RaporlamaVeAnalizContent } from "./RaporlamaVeAnalizContent";

export const metadata = {
  title: "Raporlama ve Analiz | Ala Medya – Veri Görselleştirme ve Şeffaflık",
  description:
    "Gerçek zamanlı dashboard, AI destekli içgörüler, sektörel KPI'lar. Meta, Google, LinkedIn, TikTok verileri tek merkezde. CAPI ve sunucu taraflı raporlama ile kayıpsız veri.",
};

export default function RaporlamaVeAnalizPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[var(--foreground)]">
      <RaporlamaVeAnalizContent />
    </div>
  );
}
