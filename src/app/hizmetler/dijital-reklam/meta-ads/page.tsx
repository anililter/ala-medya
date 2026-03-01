import { MetaAdsContent } from "./MetaAdsContent";

export const metadata = {
  title: "Meta Ads (Facebook & Instagram) Yönetimi | Ala Medya",
  description:
    "Meta reklamcılığı: veri bilimi ve psikolojik mühendislik. Advantage+, CAPI, Full-Funnel, AI kreatif. Lotus Dental, BHT Clinic, Xoom, Sonax referansları.",
};

export default function MetaAdsPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <MetaAdsContent />
    </div>
  );
}
