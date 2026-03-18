import type { Metadata } from "next";
import { LinkedInReklamlariContent } from "./LinkedInReklamlariContent";

export const metadata: Metadata = {
  title: "LinkedIn Reklamları | Ala Medya",
  description:
    "LinkedIn reklamları: B2B lead generation, hedef hesaplar, Lead Gen Forms, Sponsored Content. Düzenli raporlama. Ala Medya.",
};

export default function LinkedInReklamlariPage() {
  return <LinkedInReklamlariContent />;
}
