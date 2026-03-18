import type { Metadata } from "next";
import { TwitterReklamlariContent } from "./TwitterReklamlariContent";

export const metadata: Metadata = {
  title: "Twitter (X) Reklamları | Ala Medya",
  description:
    "X reklamları: görünürlük, etkileşim ve trafik kampanyaları. Hedefleme, kreatif ve optimizasyon. Ala Medya.",
};

export default function TwitterReklamlariPage() {
  return <TwitterReklamlariContent />;
}
