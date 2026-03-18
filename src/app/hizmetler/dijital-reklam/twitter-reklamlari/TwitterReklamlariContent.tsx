"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_ITEMS = [
  {
    title: "Görünürlük, Etkileşim ve Trafik Kampanyaları",
    desc: "Farkındalık (reach), video görüntüleme, takipçi kazanımı ve web trafiği hedefleri. Kampanya türüne göre teklif ve kreatif stratejisi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#F5F5F5" />
        <path d="M18 20h12M18 26h8M14 14h20v20H14z" stroke="#0F1419" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Hedefleme: İlgi Alanları, Anahtar Kelime, Benzer Kitle",
    desc: "İlgi alanları, anahtar kelime (keyword) ve benzer kitle (lookalike) ile doğru dinleyiciye ulaşma. Gündem ve etkinlik bazlı hedefleme.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#E8ECEF" />
        <circle cx="24" cy="18" r="6" stroke="#0F1419" strokeWidth="2" />
        <path d="M14 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#0F1419" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Kreatif ve Metin Varyasyonları",
    desc: "Tweet formatı, görsel ve metin varyasyonlarıyla A/B testleri. Kısa, dikkat çekici mesaj ve CTA optimizasyonu.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#E8ECEF" />
        <path d="M16 18h16M16 24h12M16 30h8" stroke="#0F1419" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const DATA_METRICS = [
  { metric: "Gösterim & Etkileşim", how: "İmpression, engagement (like, retweet, reply) ve video view; kampanya ve kreatif bazında rapor." },
  { metric: "Trafik & Dönüşüm", how: "Tıklama, site ziyareti ve dönüşüm takibi; hedefe göre CPC ve CPA optimizasyonu." },
  { metric: "Takipçi & Farkındalık", how: "Follower campaign ve reach; marka bilinirliği metrikleri." },
];

const FAQ_DATA = [
  { q: "X (Twitter) reklamları için minimum bütçe ne kadar?", a: "Anlamlı test için günlük minimum bütçe önerilerimizi paylaşıyoruz. Görünürlük ve etkileşim kampanyaları farklı eşiklerde başlayabilir." },
  { q: "Hangi kampanya türlerini yönetiyorsunuz?", a: "Reach, Video views, Followers, Website traffic ve Conversion kampanyaları. Hedefe göre en uygun türü seçip optimizasyon yapıyoruz." },
  { q: "Raporlama ne sıklıkta?", a: "Haftalık performans raporu ve optimizasyon aksiyonları; aylık strateji değerlendirmesi." },
];

function PerformanceChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="border-t border-[var(--border)] bg-[#0F1419] py-24 sm:py-32" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[900px]">
        <motion.h2
          className="text-3xl font-light tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Görünürlük ve Etkileşimde Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-white/70"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          X reklam metrikleri: gösterim, etkileşim ve trafik.
        </motion.p>
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-xl sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-white/80">Engagement trendi</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="xChartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M20 108 L70 85 L120 62 L170 45 L220 28 L260 16"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                style={{
                  strokeDasharray: 400,
                  strokeDashoffset: inView ? 0 : 400,
                  transition: "stroke-dashoffset 1.2s ease-out",
                }}
              />
              <path
                d="M20 108 L70 85 L120 62 L170 45 L220 28 L260 16 L260 140 L20 140 Z"
                fill="url(#xChartGrad)"
                style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease-out 0.4s" }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/70">Etkileşim performansı</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TwitterReklamlariContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f5f5] via-white to-[#e8ecef] py-28 sm:py-36 dark:from-[#0f1419] dark:via-[var(--background)] dark:to-[#1a1a1a]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-[#0F1419]/10 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0F1419]/20 bg-[#0F1419]/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0F1419] dark:border-white/20 dark:bg-white/5 dark:text-white">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X (Twitter) Reklamları
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Gündem ve İlgi Alanlarıyla{" "}
              <span className="text-[#0F1419] dark:text-white">
                Görünürlüğü Artırın
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              Görünürlük, etkileşim ve trafik kampanyaları; hedefleme ve kreatif testleri. Kampanya verilerini düzenli raporluyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-[#0F1419] px-7 py-3.5 text-sm font-medium text-white shadow-lg transition hover:opacity-90 dark:bg-white dark:text-[#0F1419]">
                Teklif Al
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#0F1419]/10 blur-xl dark:bg-white/10" />
            <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-[var(--border)] bg-white shadow-xl dark:bg-[#1a1a1a] dark:border-white/10 sm:h-60 sm:w-60">
              <svg className="h-24 w-24 sm:h-28 sm:w-28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <PerformanceChartSection />

      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Neleri Yönetiyoruz?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Görünürlük, etkileşim ve trafik kampanyaları; hedefleme (ilgi alanları, anahtar kelime, benzer kitle) ve kreatif varyasyonları; haftalık rapor + optimizasyon aksiyonları.
            </p>
            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {FEATURE_ITEMS.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-[var(--muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#f9fafb] py-24 sm:py-32 dark:bg-[var(--background)]">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Veri Şeffaflığı
            </h2>
            <p className="mt-3 max-w-xl text-base font-light text-[var(--muted)]">
              X (Twitter) reklam metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
            </p>
            <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-white dark:bg-[var(--card)]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--muted)]/5">
                    <th className="px-6 py-4 text-sm font-semibold text-[var(--foreground)]">Metrik</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[var(--foreground)]">Nasıl sunuyoruz?</th>
                  </tr>
                </thead>
                <tbody>
                  {DATA_METRICS.map((row, i) => (
                    <tr key={i} className="border-b border-[var(--border)] last:border-b-0">
                      <td className="px-6 py-4 font-medium text-[var(--foreground)]">{row.metric}</td>
                      <td className="px-6 py-4 font-light text-[var(--muted)]">{row.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
          <div className="mx-auto w-[90%] max-w-[720px]">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Sıkça Sorulan Sorular
            </h2>
            <div className="mt-12 divide-y divide-[var(--border)]">
              {FAQ_DATA.map((item, i) => (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="pr-4 text-base font-semibold">{item.q}</span>
                    <svg className={`h-5 w-5 shrink-0 text-[var(--muted)] transition-transform ${openFaq === i ? "rotate-45" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                    </svg>
                  </button>
                  {openFaq === i && <p className="pb-5 text-sm font-light leading-relaxed text-[var(--muted)]">{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-3xl">
            X&apos;te hedef kitlenize ulaşmaya hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            Görünürlük, etkileşim ve trafik kampanyaları ile <strong className="text-[var(--foreground)]">net raporlama</strong>.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-[#0F1419] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90 dark:bg-white dark:text-[#0F1419]">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
