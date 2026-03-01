"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CASES_DETAIL } from "./cases";

type FilterId = "tumu" | "saglik" | "otomotiv" | "fitness" | "psikoloji";

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "tumu", label: "Tümü" },
  { id: "saglik", label: "Sağlık" },
  { id: "otomotiv", label: "Otomotiv" },
  { id: "fitness", label: "Fitness" },
  { id: "psikoloji", label: "Psikoloji" },
];

const CATEGORY_LABELS: Record<string, string> = {
  saglik: "Sağlık Turizmi",
  otomotiv: "Otomotiv",
  fitness: "Fitness",
  psikoloji: "Psikoloji",
};

const HERO_METRICS = [
  { value: "50M+", label: "Yönetilen Bütçe", unit: "TL" },
  { value: "%260", label: "Ortalama ROAS Artışı", unit: "" },
  { value: "29.500+", label: "Toplam Dönüşüm", unit: "" },
];

function HeroMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.65], [0.4, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: glowOpacity }}
      className="mt-16 grid grid-cols-1 gap-6 border-y border-[var(--border)] py-12 sm:grid-cols-3 sm:gap-8 sm:py-16"
    >
      {HERO_METRICS.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="relative flex flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)]/80 px-6 py-10 shadow-[0_0_40px_rgba(59,130,246,0.12)] backdrop-blur-sm sm:py-14"
        >
          <motion.span
            className="text-4xl font-bold tracking-tighter text-[#1d1d1f] sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
          >
            {m.value}
            {m.unit && <span className="text-2xl text-[var(--muted)] sm:text-3xl md:text-4xl"> {m.unit}</span>}
          </motion.span>
          <span className="mt-3 text-lg font-medium text-[var(--muted)]">{m.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function CaseCard({ item }: { item: (typeof CASES_DETAIL)[number] }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-lg shadow-black/5 transition-shadow hover:shadow-2xl hover:shadow-black/10">
      <Link href={`/vaka-analizleri/${item.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[3/2]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {/* Köşe etiketi – glassmorphism */}
          <div className="absolute right-4 top-4 rounded-xl border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-md">
            <span className="text-sm font-semibold uppercase tracking-wider text-white">
              {CATEGORY_LABELS[item.category] ?? item.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
            <span className="text-sm font-medium uppercase tracking-wider text-white/90">
              {item.subtitle}
            </span>
            <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {item.title}
            </h3>
            <motion.p
              className="mt-4 text-xl font-semibold text-[var(--gold)] sm:text-2xl"
              initial={false}
              whileHover={{ opacity: 1 }}
            >
              {item.metric}
            </motion.p>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-xl leading-relaxed text-[var(--muted)]">
            {item.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-blue-600 transition group-hover:gap-3">
            Detayları İncele
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}

export function VakaAnalizleriContent() {
  const [filter, setFilter] = useState<FilterId>("tumu");

  const filteredCases = useMemo(() => {
    if (filter === "tumu") return CASES_DETAIL;
    return CASES_DETAIL.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <main className="bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* Hero: İstatiksel Otorite */}
        <section className="px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-[1000px] text-center">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tighter text-[#1d1d1f] sm:text-6xl md:text-7xl">
              Veriyle Yazılan Başarı Hikayeleri.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)]">
              8 yıllık sektörel refleks ve Google Premier Partner gücüyle, markaların dijital dönüşümüne liderlik ediyoruz. Sadece rakamları değil, iş modellerini büyütüyoruz.
            </p>
          </div>
          <HeroMetrics />
          <div className="mx-auto mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-5 py-2.5 text-base font-medium tracking-tight transition ${
                  filter === f.id
                    ? "bg-[#1d1d1f] text-white"
                    : "bg-[var(--border)]/60 text-[var(--foreground)] hover:bg-[var(--border)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* Vaka Galerisi: Immersive Grid */}
        <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-[1400px]">
            {filteredCases.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
                {filteredCases.map((item, i) => (
                  <AnimatedSection key={item.slug} delay={i * 0.08}>
                    <CaseCard item={item} />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <p className="py-20 text-center text-xl text-[var(--muted)]">
                Bu kategoride henüz vaka bulunmuyor.
              </p>
            )}
          </div>
        </section>

        {/* Sosyal Kanıt ve Güven (Trust Signals) */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[900px] text-center">
              <blockquote className="text-3xl font-medium italic leading-relaxed tracking-tight text-[#1d1d1f] sm:text-4xl md:text-5xl">
                &ldquo;Ala Medya ile çalışmaya başladığımızda sadece reklam yönetimi beklemiyorduk; stratejik bir ortak bulduk. Veri şeffaflığı ve sonuç odaklılıkları, dijital dönüşümümüzü gerçekten değiştirdi.&rdquo;
              </blockquote>
              <footer className="mt-10">
                <cite className="not-italic">
                  <span className="block text-xl font-semibold text-[var(--foreground)]">
                    Lotus Diş Kliniği, Sonax, Xoom
                  </span>
                  <span className="mt-1 block text-lg text-[var(--muted)]">
                    Marka ve pazarlama ekipleri
                  </span>
                </cite>
              </footer>
              <p className="mt-12 max-w-2xl mx-auto text-xl leading-relaxed text-[var(--muted)]">
                Google&apos;ın en başarılı %3&apos;lük diliminde olmanın getirdiği veri disiplini, her vakamızın temelidir.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-20 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-3xl font-bold tracking-tighter text-[#1d1d1f] sm:text-4xl">
                Sizin markanızın hikayesini birlikte yazalım.
              </p>
              <Link
                href="/#iletisim-form"
                className="btn-shimmer mt-10 inline-flex rounded-full bg-blue-600 px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-105 hover:bg-blue-700"
              >
                Ücretsiz Strateji Analizi Al
              </Link>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
