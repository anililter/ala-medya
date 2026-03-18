import type { Metadata } from "next";
import Link from "next/link";
import { getAllSectorSlugs, getSectorBySlug, type SectorConfig } from "./config";

export const metadata: Metadata = {
  title: "Sektörler | Ala Medya — Sağlık Turizmi, Psikoloji, Gayrimenkul",
  description:
    "Sağlık turizmi, psikoloji, gayrimenkul, otomotiv ve fitness sektörlerinde dijital pazarlama ve reklam çözümleri.",
};

export default function SektorlerPage() {
  const slugs = getAllSectorSlugs();
  const sectors: SectorConfig[] = slugs
    .map((slug) => getSectorBySlug(slug))
    .filter((s): s is SectorConfig => Boolean(s));

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Sektörler
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Uzmanlık alanlarımız. Sektörünüze özel dijital pazarlama ve büyüme çözümleri.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          {sectors.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/sektorler/${s.slug}`}
                className="block rounded-xl border border-[var(--border)] bg-white/80 px-4 py-3 text-base font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]/20 hover:bg-[var(--border)]/20"
              >
                <span className="block">{s.title}</span>
                <span className="mt-1 block text-sm font-normal text-[var(--muted)]">
                  {s.navDescription}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
