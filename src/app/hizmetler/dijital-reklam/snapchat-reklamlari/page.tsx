import type { Metadata } from "next";
import { SnapchatReklamlariContent } from "./SnapchatReklamlariContent";

export const metadata: Metadata = {
  title: "Snapchat Reklamları | Ala Medya",
  description:
    "Snapchat reklam yönetimi: kreatif format, A/B testleri, test → ölçek. Düzenli raporlama. Ala Medya.",
};

export default function SnapchatReklamlariPage() {
  return <SnapchatReklamlariContent />;
}
