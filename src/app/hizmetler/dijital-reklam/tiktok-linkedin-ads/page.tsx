import { TikTokLinkedInContent } from "./TikTokLinkedInContent";

export const metadata = {
  title: "TikTok & LinkedIn Ads Yönetimi | Ala Medya",
  description:
    "LinkedIn'de B2B lead generation, TikTok'ta viral büyüme. Gemini ve Claude ile trend analizi. Profesyonel kampanya yönetimi.",
};

export default function TikTokLinkedInAdsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <TikTokLinkedInContent />
    </div>
  );
}
