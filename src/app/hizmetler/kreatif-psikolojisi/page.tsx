import { KreatifPsikolojisiContent } from "./KreatifPsikolojisiContent";

export const metadata = {
  title: "Kreatif Psikolojisi | Ala Medya – Dijital Reklamda Davranış Mühendisliği",
  description:
    "Nöro-pazarlama, platform psikolojisi (TikTok, LinkedIn, Meta) ve AI destekli kreatif testleri. 8 yıllık birikimle tıklama ile görmezden gelme arasındaki farkı mühendisliğe dönüştürüyoruz.",
};

export default function KreatifPsikolojisiPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <KreatifPsikolojisiContent />
    </div>
  );
}
