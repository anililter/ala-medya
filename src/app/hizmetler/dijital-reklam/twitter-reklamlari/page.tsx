import type { Metadata } from "next";
import { TwitterReklamlariContent } from "./TwitterReklamlariContent";

export const metadata: Metadata = {
  title: "Twitter (X) Reklamları | Ferah Medya",
  description:
    "X reklamları: görünürlük, etkileşim ve trafik kampanyaları. Hedefleme, kreatif ve optimizasyon. Ferah Medya.",
};

export default function TwitterReklamlariPage() {
  return <TwitterReklamlariContent />;
}
