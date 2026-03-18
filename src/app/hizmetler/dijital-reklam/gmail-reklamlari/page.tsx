import type { Metadata } from "next";
import { GmailReklamlariContent } from "./GmailReklamlariContent";

export const metadata: Metadata = {
  title: "Gmail Reklamları | Ala Medya",
  description:
    "Gmail reklamları: ilgi alanı ve niyet kitleleriyle görünürlük ve trafik. Kreatif, hedefleme ve optimizasyon. Ala Medya.",
};

export default function GmailReklamlariPage() {
  return <GmailReklamlariContent />;
}
