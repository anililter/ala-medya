import { Metadata } from "next";
import { YapayZekaContent } from "./YapayZekaContent";

export const metadata: Metadata = {
  title: "Dijital Pazarlamada Yapay Zeka Devrimi | Ala Medya",
  description:
    "Dijital pazarlamada çığır açan yapay zeka araçlarını keşfedin. ChatGPT, Midjourney, Sora 2 ve daha fazlasıyla markanızı geleceğe hazırlayın.",
};

export default function YapayZekaPage() {
  return <YapayZekaContent />;
}
