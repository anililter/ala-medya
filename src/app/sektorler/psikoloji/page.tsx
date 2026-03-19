import type { Metadata } from "next";
import { PsikolojiContent } from "./PsikolojiContent";

export const metadata: Metadata = {
  title: "Psikoloji Sektörü | Ala Medya — Etik ve Güven Odaklı Dijital Stratejiler",
  description:
    "Psikologlara özel dijital stratejiler. 8 yıllık tecrübe, Gemini 3.1 Pro ve Claude 4.6 Sonnet ile empati odaklı içerik, KVKK uyumlu veri. Psikogenetik Merkezi referansı.",
};

export default function PsikolojiSektorPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <PsikolojiContent />
    </div>
  );
}
