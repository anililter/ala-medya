import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSectorBySlug, getAllSectorSlugs, type SectorSlug } from "../config";
import { SektorPageContent } from "./SektorPageContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSectorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return { title: "Sektör | Ala Medya" };
  return {
    title: `${sector.title} | Ala Medya — Büyüme Mühendisi`,
    description: sector.navDescription + ". " + sector.content.slice(0, 140) + "...",
  };
}

export default async function SektorPage({ params }: Props) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <SektorPageContent sector={sector} />
    </div>
  );
}
