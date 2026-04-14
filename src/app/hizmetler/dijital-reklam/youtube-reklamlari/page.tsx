import type { Metadata } from "next";
import { YouTubeReklamlariContent } from "./YouTubeReklamlariContent";

export const metadata: Metadata = {
  title: "YouTube Reklamları | Ferah Medya",
  description:
    "YouTube reklamları: In-Stream, Discovery, Bumper; video reklam stratejisi, huni ve dönüşüm. Düzenli raporlama. Ferah Medya.",
};

export default function YouTubeReklamlariPage() {
  return <YouTubeReklamlariContent />;
}

