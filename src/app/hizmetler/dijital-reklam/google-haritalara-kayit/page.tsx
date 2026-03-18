import type { Metadata } from "next";
import { GoogleHaritalaraKayitContent } from "./GoogleHaritalaraKayitContent";

export const metadata: Metadata = {
  title: "Google Haritalara Kayıt | Ala Medya",
  description:
    "Google Business Profile kurulumu ve optimizasyonu: kategori, açıklama, görseller, yorum stratejisi. Lokal görünürlük. Ala Medya.",
};

export default function GoogleHaritalaraKayitPage() {
  return <GoogleHaritalaraKayitContent />;
}
