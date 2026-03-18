import { RaporlamaVeAnalizContent } from "./RaporlamaVeAnalizContent";

export const metadata = {
  title: "Raporlama ve Analiz | Ala Medya – Detaylı Raporlama ve Şeffaf İletişim",
  description:
    "Haftalık ve aylık performans raporları, sektör bazlı KPI takibi ve net aksiyon planı. Meta, Google, LinkedIn ve TikTok için tek formatta, anlaşılır raporlama ve düzenli iletişim.",
};

export default function RaporlamaVeAnalizPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[var(--foreground)]">
      <RaporlamaVeAnalizContent />
    </div>
  );
}
