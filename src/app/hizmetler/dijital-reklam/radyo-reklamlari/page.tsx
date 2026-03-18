import type { Metadata } from "next";
import { RadyoReklamlariContent } from "./RadyoReklamlariContent";

export const metadata: Metadata = {
  title: "Radyo Reklamları | Ala Medya",
  description:
    "Radyo reklam planlama: hedef kitle, mecra seçimi, yayın planı ve ölçüm. Net brieften yayına uçtan uca süreç. Ala Medya.",
};

export default function RadyoReklamlariPage() {
  return <RadyoReklamlariContent />;
}
