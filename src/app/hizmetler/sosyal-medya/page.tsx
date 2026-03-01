import { SosyalMedyaContent } from "./SosyalMedyaContent";

export const metadata = {
  title: "Sosyal Medya Yönetimi | Ala Medya",
  description:
    "Marka hikayenizi dijitalde yeniden yazıyoruz. Trend takibi, topluluk yönetimi, etkileşim odaklı tasarım. AI ile sosyal medya içerik planlaması.",
};

export default function SosyalMedyaPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SosyalMedyaContent />
    </div>
  );
}
