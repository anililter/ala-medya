import type { Metadata } from "next";
import { InstagramAdsContent } from "./InstagramAdsContent";

export const metadata: Metadata = {
  title: "Instagram Reklamları | Ferah Medya",
  description:
    "Instagram reklam yönetimi: Reels, Story, Feed reklamları; hedef kitle, kreatif testleri, dönüşüm optimizasyonu. Psikologlara özel kampanyalar. Ferah Medya.",
};

export default function InstagramReklamlariPage() {
  return <InstagramAdsContent />;
}

