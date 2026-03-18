import type { Metadata } from "next";
import { MobilUygulamaReklamlariContent } from "./MobilUygulamaReklamlariContent";

export const metadata: Metadata = {
  title: "Mobil Uygulama Reklamları | Ala Medya",
  description:
    "Uygulama reklamları: indirme, kayıt ve satın alma hedefleri. Kreatif ve mağaza uyumu, kalite odaklı optimizasyon. Ala Medya.",
};

export default function MobilUygulamaReklamlariPage() {
  return <MobilUygulamaReklamlariContent />;
}
