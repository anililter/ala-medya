"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsBand } from "@/components/StatsBand";
import type { SectorConfig } from "../config";

export function SektorPageContent({ sector }: { sector: SectorConfig }) {
  return (
    <main className="bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* Hero */}
        <section className="px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1000px] text-center">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#1d1d1f] sm:text-6xl md:text-7xl">
              {sector.heroTitle}
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)]">
              {sector.content}
            </p>
          </div>
        </section>

        {/* Sayılarla Uzmanlık */}
        <StatsBand stats={sector.stats} />

        {/* Vurgu (varsa) */}
        {sector.emphasis && (
          <AnimatedSection>
            <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-[900px]">
                <div className="rounded-2xl border border-blue-200 bg-blue-50/50 px-8 py-6 dark:border-blue-900/50 dark:bg-blue-950/20">
                  <p className="text-xl font-semibold tracking-tight text-blue-700 dark:text-blue-400">
                    {sector.emphasis}
                  </p>
                </div>
              </div>
            </section>
          </AnimatedSection>
        )}

        {/* Life on Mac style görsel */}
        {sector.imagePlaceholder && (
          <AnimatedSection>
            <section className="border-t border-[var(--border)] px-4 py-16 sm:py-24 lg:px-8">
              <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-[var(--background)]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={sector.imagePlaceholder}
                    alt={sector.title + " — Ala Medya uzmanlığı"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority={false}
                  />
                </div>
              </div>
            </section>
          </AnimatedSection>
        )}

        {/* 8 yıl vurgusu */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-2xl font-bold tracking-tight text-[#1d1d1f] sm:text-3xl">
                8 yıllık pazarlama verisiyle sektörünüzde büyüme mühendisi olarak yanınızdayız.
              </p>
              <p className="mt-6 text-xl text-[var(--muted)]">
                Ala Medya, sıradan bir reklam ajansı değil; her sektöre özel strateji ve veri odaklı kampanya yönetimi sunan bir ortağınızdır.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-28 sm:py-36 lg:px-8">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl">
                {sector.title} alanında büyümeye hazır mısınız?
              </h2>
              <div className="mt-12">
                <Link
                  href="/#iletisim"
                  className="btn-shimmer inline-flex rounded-full bg-blue-600 px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.02] hover:bg-blue-700 hover:shadow-blue-600/40 dark:bg-blue-500 dark:shadow-blue-500/25 dark:hover:bg-blue-600"
                >
                  Ücretsiz Analiz Alın
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
