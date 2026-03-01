import type { Metadata } from "next";
import { HakkimizdaContent } from "./HakkimizdaContent";

export const metadata: Metadata = {
  title: "Hakkımızda | Ala Medya — Sekiz Yıllık Tecrübe, Yapay Zeka ile Geleceğe",
  description:
    "2018'den bugüne dijital reklam yolculuğumuz. Google Premier Partner Ala Medya; veri, AI ve sektörel uzmanlıkla markanızı büyütüyor.",
};

export default function HakkimizdaPage() {
  return <HakkimizdaContent />;
}
