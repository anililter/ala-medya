import type { Metadata } from "next";
import { PsikolojiContent } from "./PsikolojiContent";

export const metadata: Metadata = {
  title: "Psikoloji Sektörü | Ala Medya — Etik ve Güven Odaklı Dijital Stratejiler",
  description:
    "Psikologlara özel dijital stratejiler. 8 yıllık tecrübe, Gemini ve Claude-3.5 ile empati odaklı içerik, KVKK uyumlu veri. Psikogenetik Merkezi referansı.",
};

export default function PsikolojiSektorPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <PsikolojiContent />
    </div>
  );
}
