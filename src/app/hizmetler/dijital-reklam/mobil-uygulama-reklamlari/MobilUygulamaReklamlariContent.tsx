"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_ITEMS = [
  {
    title: "İndirme / Kayıt / Satın Alma Hunisi",
    desc: "App install, kayıt (sign-up) ve in-app event / satın alma hedefleri. Funnel aşamasına göre kampanya ve teklif stratejisi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#EDE9FE" />
        <rect x="14" y="10" width="20" height="28" rx="4" stroke="#7C3AED" strokeWidth="2" />
        <path d="M24 18v12M20 26l4 4 4-4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Kreatif ve Mağaza Sayfası Uyumu",
    desc: "Reklam kreatifi ile App Store / Play Store sayfası (icon, screenshot, açıklama) uyumu; A/B test planı ile indirme dönüşümü artırma.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#DBEAFE" />
        <rect x="12" y="12" width="24" height="24" rx="6" stroke="#2563EB" strokeWidth="2" />
        <circle cx="24" cy="24" r="4" fill="#2563EB" />
      </svg>
    ),
  },
  {
    title: "Kullanıcı Kalitesi ve Retention",
    desc: "Event bazlı optimizasyon (retention, purchase); kaliteli kullanıcı edinimi. Haftalık raporlama ve aylık strateji değerlendirmesi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#D1FAE5" />
        <path d="M16 28l6 6 12-12" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 20h6v8h-6zM22 16h6v12h-6zM30 22h6v6h-6z" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const DATA_METRICS = [
  { metric: "İndirme maliyeti (CPI)", how: "App install kampanyalarında CPI; ağ ve kreatif bazında karşılaştırma." },
  { metric: "Kayıt ve event", how: "Kayıt (sign-up) ve in-app event dönüşümleri; maliyet ve oran takibi." },
  { metric: "ROAS / Satın alma", how: "In-app purchase ve gelir bağlantılı ROAS; kalite sinyali ile optimizasyon." },
];

const FAQ_DATA = [
  { q: "Hangi ağlarda uygulama reklamı yönetiyorsunuz?", a: "Google (UAC), Meta (App Install), TikTok, Apple Search Ads ve diğer ağlarda uygulama kampanyaları kurup optimize ediyoruz. Hedefe göre ağ seçimi yapıyoruz." },
  { q: "Store sayfası optimizasyonu dahil mi?", a: "Kreatif ve store sayfası uyumu stratejimizin parçası. Icon, screenshot ve açıklama önerileri; prodüksiyon ihtiyacında iş ortağı yönlendirmesi yapıyoruz." },
  { q: "Raporlama ne sıklıkta?", a: "Haftalık performans raporu (CPI, kayıt, event); aylık strateji değerlendirmesi ve retention özeti." },
];

function PerformanceChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="border-t border-[var(--border)] bg-[#1e1b4b] py-24 sm:py-32" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[900px]">
        <motion.h2
          className="text-3xl font-light tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Uygulama Ediniminde Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-white/70"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          CPI, kayıt ve event metrikleri: funnel performansı.
        </motion.p>
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 px-8 py-10 backdrop-blur-xl sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-violet-300">Funnel performansı</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="appChartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M20 100 L70 75 L120 52 L170 35 L220 22 L260 14"
                stroke="#a78bfa"
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
                d="M20 100 L70 75 L120 52 L170 35 L220 22 L260 14 L260 140 L20 140 Z"
                fill="url(#appChartGrad)"
                style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease-out 0.4s" }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/70">İndirme → Kayıt → Event</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function MobilUygulamaReklamlariContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe] py-28 sm:py-36 dark:from-[#1e1b4b] dark:via-[var(--background)] dark:to-[#0f0a1e]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-violet-500/15 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300 bg-violet-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
              </svg>
              Mobil Uygulama Reklamları
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              İndirme Maliyetini Düşürün,{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                Kaliteli Kullanıcı Edinin
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              İndirme, kayıt ve satın alma hedefleri için kampanya kurgusu; kreatif ve mağaza sayfası uyumu; kullanıcı kalitesi (retention / event) odaklı optimizasyon. Kurulumdan optimizasyona tüm adımları raporluyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-violet-600 px-7 py-3.5 text-sm font-medium text-white shadow-lg transition hover:bg-violet-700">
                Teklif Al
              </Link>
              <Link href="/hizmetler/dijital-reklam/google-ads" className="inline-flex items-center rounded-full border-2 border-violet-200 bg-white px-7 py-3.5 text-sm font-medium text-violet-600 transition hover:bg-violet-50 dark:border-violet-500/30 dark:bg-transparent dark:text-violet-400">
                Google Ads sayfası
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-violet-500/20 blur-xl" />
            <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-violet-200 bg-white shadow-xl dark:border-violet-500/20 dark:bg-[var(--card)] sm:h-60 sm:w-60">
              <svg className="h-28 w-28 sm:h-32 sm:w-32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="10" y="4" width="28" height="40" rx="4" className="text-violet-500" />
                <circle cx="24" cy="36" r="2" className="text-violet-500" />
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
              İndirme / kayıt / satın alma funnel kurgusu; kreatif ve mağaza sayfası uyumu + test planı; kullanıcı kalitesi odaklı optimizasyon; haftalık raporlama ve aylık strateji değerlendirmesi.
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
              Uygulama reklam metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
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
            Uygulamanızı büyütmeye hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            İndirme, kayıt ve <strong className="text-[var(--foreground)]">kaliteli kullanıcı</strong> odaklı kampanyalar.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-violet-700">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
