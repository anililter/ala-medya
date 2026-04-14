import type { Metadata } from "next";
import { GmailReklamlariContent } from "./GmailReklamlariContent";

export const metadata: Metadata = {
  title: "Gmail Reklamları | Ferah Medya",
  description:
    "Gmail reklamları: ilgi alanı ve niyet kitleleriyle görünürlük ve trafik. Kreatif, hedefleme ve optimizasyon. Ferah Medya.",
};

export default function GmailReklamlariPage() {
  return <GmailReklamlariContent />;
}
