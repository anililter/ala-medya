"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import type { CaseDetail } from "../cases";

const CHART_DATA = [
  { ay: "1. Ay", maliyet: 100, donusum: 20 },
  { ay: "2. Ay", maliyet: 85, donusum: 28 },
  { ay: "3. Ay", maliyet: 72, donusum: 38 },
  { ay: "4. Ay", maliyet: 58, donusum: 52 },
  { ay: "5. Ay", maliyet: 48, donusum: 68 },
  { ay: "6. Ay", maliyet: 42, donusum: 85 },
];

export function VakaDetayContent({ caseData }: { caseData: CaseDetail }) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-80px" });

  return (
    <main className="bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* Hero + Metrik paneli – dikey akış başlangıcı */}
        <section className="px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-[1000px]">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tighter text-[#1d1d1f] sm:text-6xl md:text-7xl">
              {caseData.heroTitle}
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-[var(--muted)]">
              8 yıllık sektörel tecrübe ve Google Premier Partner gücüyle yazılan bir başarı dökümü.
            </p>
            <div className="mt-16 grid grid-cols-1 gap-6 border-y border-[var(--border)] py-10 sm:grid-cols-3 sm:gap-8 sm:py-14">
              <AnimatedSection delay={0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold tracking-tighter text-[var(--gold)] sm:text-5xl md:text-6xl">
                    {caseData.metrics.roas}
                  </div>
                  <div className="mt-2 text-lg font-medium text-[var(--muted)]">ROAS</div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="text-center">
                  <div className="text-4xl font-bold tracking-tighter text-[var(--gold)] sm:text-5xl md:text-6xl">
                    {caseData.metrics.cpl}
                  </div>
                  <div className="mt-2 text-lg font-medium text-[var(--muted)]">CPL İyileşmesi</div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="text-center">
                  <div className="text-4xl font-bold tracking-tighter text-[var(--gold)] sm:text-5xl md:text-6xl">
                    {caseData.metrics.toplamDonusum}
                  </div>
                  <div className="mt-2 text-lg font-medium text-[var(--muted)]">Toplam Dönüşüm</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Meydan Okuma – Apple spec tarzı satır */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1000px]">
              <h2 className="text-3xl font-bold tracking-tighter text-[#1d1d1f] sm:text-4xl lg:text-5xl">
                {caseData.challenge.title}
              </h2>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--foreground)]">
                {caseData.challenge.content}
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Strateji Nasıl Kurgulandı? – AI paneli (Gemini & Claude mühür) */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1000px]">
              <h2 className="text-3xl font-bold tracking-tighter text-[#1d1d1f] sm:text-4xl lg:text-5xl">
                Strateji Nasıl Kurgulandı?
              </h2>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[var(--muted)]">
                Pazar verileri Gemini ve Claude modellerimizle analiz edildi; insan zekası ile AI hızı birleştirildi.
              </p>
              {/* Teknolojik mühür paneli */}
              <div className="mt-12 flex flex-wrap items-center gap-6 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-blue-50/50 px-6 py-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">G</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">Gemini</span>
                    <p className="text-sm text-[var(--muted)]">Pazar ve niyet analizi</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-amber-50/50 px-6 py-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-xl font-bold text-amber-700">C</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">Claude</span>
                    <p className="text-sm text-[var(--muted)]">İçerik ve kreatif strateji</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 space-y-8">
                <div className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                  <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">Full-Funnel Mimarisi</h3>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    {caseData.solution.fullFunnel}
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                  <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">AI-First Optimizasyon</h3>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    {caseData.solution.aiFirst}
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                  <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">CAPI & Veri Hattı</h3>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    {caseData.solution.capi}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Veri ve Grafik – framer-motion ile canlanan grafik */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1000px]">
              <h2 className="text-3xl font-bold tracking-tighter text-[#1d1d1f] sm:text-4xl lg:text-5xl">
                Veri ve Grafikler
              </h2>
              <p className="mt-6 text-xl text-[var(--muted)]">
                {caseData.chartLabel}
              </p>
              <motion.div
                ref={chartRef}
                initial={{ opacity: 0, y: 24 }}
                animate={chartInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-12 overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={CHART_DATA} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="ay" tick={{ fontSize: 14, fill: "var(--muted)" }} />
                      <YAxis yAxisId="left" tick={{ fontSize: 14, fill: "var(--muted)" }} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 14, fill: "var(--muted)" }} />
                      <Tooltip
                        contentStyle={{
                          borderRadius: "12px",
                          border: "1px solid var(--border)",
                          fontSize: "16px",
                        }}
                        formatter={(value: number | undefined) => [value ?? 0, ""]}
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="maliyet"
                        name="Maliyet Endeksi"
                        stroke="var(--gold)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="donusum"
                        name="Dönüşüm Endeksi"
                        stroke="#007AFF"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Sektörel vurgu */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[900px] text-center">
              <p className="text-2xl font-bold tracking-tighter text-blue-600 sm:text-3xl">
                {caseData.sectorEmphasis}
              </p>
              <p className="mt-6 text-xl leading-relaxed text-[var(--muted)]">
                {caseData.sectorMessage}
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Sosyal Kanıt – büyük tırnak, italik */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[900px] text-center">
              <blockquote className="text-3xl font-medium italic leading-relaxed tracking-tight text-[#1d1d1f] sm:text-4xl md:text-5xl">
                &ldquo;{caseData.quote.text}&rdquo;
              </blockquote>
              <footer className="mt-10">
                <cite className="not-italic">
                  <span className="block text-xl font-semibold text-[var(--foreground)]">
                    {caseData.quote.author}
                  </span>
                  <span className="mt-1 block text-lg text-[var(--muted)]">
                    {caseData.quote.role}
                  </span>
                </cite>
              </footer>
              <p className="mt-12 text-xl leading-relaxed text-[var(--muted)]">
                Google&apos;ın en başarılı %3&apos;lük diliminde olmanın getirdiği veri disiplini, her vakamızın temelidir.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-4xl font-bold leading-tight tracking-tighter text-[#1d1d1f] sm:text-5xl">
                Sizin İçin de Başarabiliriz
              </h2>
              <p className="mt-6 text-xl text-[var(--muted)]">
                Markanızın veriyle yazılan bir sonraki başarı hikayesine hazır mısınız?
              </p>
              <Link
                href="/#iletisim-form"
                className="btn-shimmer mt-10 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-105 hover:shadow-blue-600/40"
              >
                Strateji Analizi Başlat
              </Link>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
