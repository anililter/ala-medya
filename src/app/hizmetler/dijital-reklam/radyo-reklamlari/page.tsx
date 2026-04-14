import type { Metadata } from "next";
import { RadyoReklamlariContent } from "./RadyoReklamlariContent";

export const metadata: Metadata = {
  title: "Radyo Reklamları | Ferah Medya",
  description:
    "Radyo reklam planlama: hedef kitle, mecra seçimi, yayın planı ve ölçüm. Net brieften yayına uçtan uca süreç. Ferah Medya.",
};

export default function RadyoReklamlariPage() {
  return <RadyoReklamlariContent />;
}
