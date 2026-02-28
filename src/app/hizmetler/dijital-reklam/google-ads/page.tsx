import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAdsContent } from "./GoogleAdsContent";

export const metadata = {
  title: "Google Ads Yönetimi | Ala Medya - Google Premier Partner",
  description:
    "Google Premier Partner Ala Medya ile AI destekli Google Ads yönetimi. Arama ağı, P-Max, remarketing ve YouTube reklamlarıyla ROI odaklı kampanyalar.",
};

export default function GoogleAdsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <GoogleAdsContent />
      <Footer />
    </div>
  );
}
