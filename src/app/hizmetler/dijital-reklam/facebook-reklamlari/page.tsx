import type { Metadata } from "next";
import { FacebookReklamlariContent } from "./FacebookReklamlariContent";

export const metadata: Metadata = {
  title: "Facebook Reklamları | Ferah Medya",
  description:
    "Facebook reklam yönetimi: Feed, Story, video kampanyaları; hedefleme, kreatif testleri, lead ve satış optimizasyonu. Psikologlara özel. Ferah Medya.",
};

export default function FacebookReklamlariPage() {
  return <FacebookReklamlariContent />;
}

