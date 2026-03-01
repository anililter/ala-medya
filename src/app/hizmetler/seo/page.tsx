import { SeoContent } from "./SeoContent";

export const metadata = {
  title: "SEO (Arama Motoru Optimizasyonu) | Ala Medya",
  description:
    "Semantik SEO ve AI destekli içerik stratejisi. Google Premier Partner vizyonu. Teknik SEO ile içerik pazarlaması bir arada.",
};

export default function SeoPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SeoContent />
    </div>
  );
}
