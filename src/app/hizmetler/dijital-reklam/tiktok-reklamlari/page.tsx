import type { Metadata } from "next";
import { TikTokReklamlariContent } from "./TikTokReklamlariContent";

export const metadata: Metadata = {
  title: "TikTok Reklamları | Ferah Medya",
  description:
    "TikTok reklamları: kreatif test matrisi, hook/tempo/CTA, test → ölçek. Düzenli raporlama. Ferah Medya.",
};

export default function TikTokReklamlariPage() {
  return <TikTokReklamlariContent />;
}
