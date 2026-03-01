"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const CARDS = [
  {
    title: "Trend Takibi",
    desc: "Platform algoritmaları ve günlük trendleri takip ediyoruz; içerikleri zamanlama ve formatla uyumlu hale getiriyoruz.",
    color: "from-amber-400/20 to-orange-500/20 border-amber-200/50 dark:border-amber-500/30",
  },
  {
    title: "Topluluk Yönetimi",
    desc: "Yorumlar, mesajlar ve etkileşimler üzerinden markanızla gerçek bağ kuran bir topluluk inşa ediyoruz.",
    color: "from-emerald-400/20 to-teal-500/20 border-emerald-200/50 dark:border-emerald-500/30",
  },
  {
    title: "Etkileşim Odaklı Tasarım",
    desc: "Görsel ve video içeriklerde etkileşimi artıran, paylaşılabilir ve konuşulan tasarım süreçleri.",
    color: "from-violet-400/20 to-purple-500/20 border-violet-200/50 dark:border-violet-500/30",
  },
  {
    title: "AI ile İçerik Planlama",
    desc: "Sosyal medya içerik planlamasında yapay zeka araçlarını kullanıyoruz: hem hız hem yaratıcılık.",
    color: "from-rose-400/20 to-pink-500/20 border-rose-200/50 dark:border-rose-500/30",
  },
];

export function SosyalMedyaContent() {
  return (
    <main className="bg-[var(--background)]">
      {/* Hero – renkli ama profesyonel */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-violet-100/30 to-emerald-100/40 dark:from-amber-950/20 dark:via-violet-950/20 dark:to-emerald-950/20" />
        <div className="relative mx-auto w-[90%] max-w-[900px]">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Marka hikayenizi dijitalde yeniden yazıyoruz
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Trend takibi, topluluk yönetimi ve etkileşim odaklı tasarım süreçleriyle sosyal medyada tutarlı bir marka sesi oluşturuyoruz. İçerik planlamasında yapay zeka ile hız ve yaratıcılığı bir araya getiriyoruz.
          </p>
          <div className="mt-10">
            <Link
              href="/#iletisim"
              className="inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Sosyal Medya Stratejisi Konuşalım
            </Link>
          </div>
        </div>
      </section>

      {/* Glassmorphism kartlar */}
      <AnimatedSection>
        <section className="py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Neler Yapıyoruz?
            </h2>
            <p className="mt-3 max-w-xl text-[var(--muted)]">
              Renkli ama profesyonel bir yaklaşımla sosyal medya yönetimini oyunlaştırıyoruz.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {CARDS.map((card, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border bg-white/70 p-8 shadow-lg backdrop-blur-xl dark:bg-black/30 ${card.color}`}
                >
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* AI vurgusu */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] py-16 sm:py-20">
          <div className="mx-auto w-[90%] max-w-[720px] text-center">
            <p className="text-base text-[var(--muted)]">
              Sosyal medya içerik planlamasında <strong className="text-[var(--foreground)]">yapay zeka araçlarını</strong> kullanıyoruz: hem üretim hızı hem yaratıcı varyasyonlar. Markanız her platformda tutarlı ve güncel kalsın.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <section className="border-t border-[var(--border)] py-24 sm:py-32">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Hikayenizi birlikte yazalım
          </h2>
          <Link
            href="/#iletisim"
            className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </main>
  );
}
