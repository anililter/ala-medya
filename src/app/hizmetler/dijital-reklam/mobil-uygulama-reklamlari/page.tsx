import type { Metadata } from "next";
import { MobilUygulamaReklamlariContent } from "./MobilUygulamaReklamlariContent";

export const metadata: Metadata = {
  title: "Mobil Uygulama Reklamları | Ferah Medya",
  description:
    "Uygulama reklamları: indirme, kayıt ve satın alma hedefleri. Kreatif ve mağaza uyumu, kalite odaklı optimizasyon. Ferah Medya.",
};

export default function MobilUygulamaReklamlariPage() {
  return <MobilUygulamaReklamlariContent />;
}
