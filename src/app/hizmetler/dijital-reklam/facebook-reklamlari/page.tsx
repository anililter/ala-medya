import type { Metadata } from "next";
import { FacebookReklamlariContent } from "./FacebookReklamlariContent";

export const metadata: Metadata = {
  title: "Facebook Reklamları | Ala Medya",
  description:
    "Facebook reklam yönetimi: Feed, Story, video kampanyaları; hedefleme, kreatif testleri, lead ve satış optimizasyonu. Psikologlara özel. Ala Medya.",
};

export default function FacebookReklamlariPage() {
  return <FacebookReklamlariContent />;
}

