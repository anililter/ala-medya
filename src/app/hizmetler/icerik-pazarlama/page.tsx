import { IcerikPazarlamaContent } from "./IcerikPazarlamaContent";

export const metadata = {
  title: "İçerik Pazarlama | Ala Medya",
  description:
    "Veriyle beslenen, yapay zekayla zenginleşen içerikler. Blog, video prodüksiyon ve marka otoritesi. Dijital dergi kalitesinde strateji.",
};

export default function IcerikPazarlamaPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <IcerikPazarlamaContent />
    </div>
  );
}
