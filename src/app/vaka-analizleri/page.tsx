import type { Metadata } from "next";
import { VakaAnalizleriContent } from "./VakaAnalizleriContent";

export const metadata: Metadata = {
  title: "Vaka Analizleri (Case Studies) | Ala Medya — Veriyle Yazılan Başarı Hikayeleri",
  description:
    "Lotus Diş, Xoom, Sonax Maslak, Psikogenetik. 8 yıllık sektörel refleks ve Google Premier Partner standartlarındaki seçkin projelerimiz.",
};

export default function VakaAnalizleriPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <VakaAnalizleriContent />
    </div>
  );
}
