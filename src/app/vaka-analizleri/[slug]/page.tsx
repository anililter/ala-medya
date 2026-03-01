import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseBySlug, getAllCaseSlugs } from "../cases";
import { VakaDetayContent } from "./VakaDetayContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);
  if (!caseData) return { title: "Vaka Analizi | Ala Medya" };
  return {
    title: `${caseData.title} — Vaka Analizi | Ala Medya`,
    description: caseData.description,
  };
}

export default async function VakaDetayPage({ params }: Props) {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);
  if (!caseData) notFound();
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <VakaDetayContent caseData={caseData} />
    </div>
  );
}
