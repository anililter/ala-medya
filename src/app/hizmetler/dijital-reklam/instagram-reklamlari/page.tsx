import type { Metadata } from "next";
import { InstagramAdsContent } from "./InstagramAdsContent";

export const metadata: Metadata = {
  title: "Instagram Reklamları | Ala Medya",
  description:
    "Instagram reklam yönetimi: Reels, Story, Feed reklamları; hedef kitle, kreatif testleri, dönüşüm optimizasyonu. Psikologlara özel kampanyalar. Ala Medya.",
};

export default function InstagramReklamlariPage() {
  return <InstagramAdsContent />;
}

