import type { Metadata } from "next";
import { YouTubeReklamlariContent } from "./YouTubeReklamlariContent";

export const metadata: Metadata = {
  title: "YouTube Reklamları | Ala Medya",
  description:
    "YouTube reklamları: In-Stream, Discovery, Bumper; video reklam stratejisi, huni ve dönüşüm. Düzenli raporlama. Ala Medya.",
};

export default function YouTubeReklamlariPage() {
  return <YouTubeReklamlariContent />;
}

