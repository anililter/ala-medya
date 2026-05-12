import type { Metadata } from "next";
import { PsikolojiContent } from "./PsikolojiContent";

export const metadata: Metadata = {
  title: "Psikologlar İçin Profesyonel Pazarlama Kiti | Prof. Dr. Denetimli Stratejiler",
  description:
    "Psikologlar ve klinikler için akademik denetimli dijital büyüme stratejileri. Prof. Dr. eşliğinde reklam yönetimi, etik içerik pazarlaması ve KVKK uyumlu veri analitiği.",
};

export default function PsikolojiSektorPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <PsikolojiContent />
    </div>
  );
}
