import type { Metadata } from "next";
import { SnapchatReklamlariContent } from "./SnapchatReklamlariContent";

export const metadata: Metadata = {
  title: "Snapchat Reklamları | Ferah Medya",
  description:
    "Snapchat reklam yönetimi: kreatif format, A/B testleri, test → ölçek. Düzenli raporlama. Ferah Medya.",
};

export default function SnapchatReklamlariPage() {
  return <SnapchatReklamlariContent />;
}
