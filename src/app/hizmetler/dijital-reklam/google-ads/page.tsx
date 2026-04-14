import type { Metadata } from "next";
import { GoogleAdsContent } from "./GoogleAdsContent";
import { SEO } from "@/components/SEO";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ferahmedya.com";

export const metadata = {
  title: "Google Ads Yönetimi | Ferah Medya - Google Premier Partner",
  description:
    "Google Premier Partner Ferah Medya ile AI destekli Google Ads yönetimi. Arama ağı, P-Max, remarketing ve YouTube reklamlarıyla ROI odaklı kampanyalar.",
};

export default function GoogleAdsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SEO
        skipOrganization
        service={{
          name: "Google Ads Yönetimi",
          description:
            "Google Premier Partner Ferah Medya ile AI destekli Google Ads yönetimi. Arama ağı, Performance Max, remarketing ve YouTube reklamlarıyla ROI odaklı kampanyalar. Healthcare ve yerel işletme politikalarına uyumlu hesap yönetimi.",
          url: `${SITE_URL}/hizmetler/dijital-reklam/google-ads`,
          areaServed: "TR",
          expertiseLevel: "Google Premier Partner",
        }}
      />
      <GoogleAdsContent />
    </div>
  );
}
