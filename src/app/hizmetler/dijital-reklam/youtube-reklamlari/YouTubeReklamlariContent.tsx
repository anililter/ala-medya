"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_ITEMS = [
  {
    title: "In-Stream & Discovery Stratejisi",
    desc: "Skip’li ve skip’siz video reklamları; arama ve öneri yerleşimlerinde hedefleme. Hook ve ilk 5 saniye optimizasyonu.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FEF2F2" />
        <rect x="8" y="12" width="32" height="24" rx="4" stroke="#DC2626" strokeWidth="2" />
        <path d="M20 18l12 6-12 6V18z" fill="#DC2626" />
      </svg>
    ),
  },
  {
    title: "Huni Stratejisi: Farkındalık → Dönüşüm",
    desc: "Marka bilinirliği (awareness), değerlendirme (consideration) ve dönüşüm aşamalarında video içerik ve hedef kitle eşleşmesi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FFF7ED" />
        <path d="M24 10v28M14 20l10-5 10 5-10 5-10-5z" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="3" fill="#EA580C" />
      </svg>
    ),
  },
  {
    title: "Görüntüleme & Dönüşüm Metrikleri",
    desc: "CPV, view rate, watch time; GA4 ve dönüşüm takibi ile satış ve lead bağlantısı. Düzenli raporlama ve optimizasyon.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#ECFDF5" />
        <path d="M14 32V22h4v10h-4zM22 32V18h4v14h-4zM30 32V26h4v6h-4z" fill="#059669" />
        <path d="M12 36h24" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const FORMAT_ITEMS = [
  { label: "TrueView In-Stream", desc: "Skip’li uzun video", color: "bg-red-500" },
  { label: "Discovery", desc: "Arama ve öneri", color: "bg-red-600" },
  { label: "Bumper", desc: "6 sn. skip’siz", color: "bg-red-700" },
];

const DATA_METRICS = [
  { metric: "Görüntüleme (CPV)", how: "Maliyetli görüntüleme ve view rate; skip oranı ve izlenme süresi takibi." },
  { metric: "Etkileşim", how: "Tıklama, abone, kanal ziyareti; kampanya ve yerleşim bazında performans." },
  { metric: "Dönüşüm", how: "GA4 ve offline dönüşümlerle satış/lead bağlantısı; ROAS ve CPA raporlaması." },
];

const FAQ_DATA = [
  { q: "YouTube reklamları için minimum bütçe ne kadar?", a: "Anlamlı test için aylık minimum bütçe önerilerimizi ücretsiz ön görüşmede paylaşıyoruz. TrueView ve Bumper için farklı eşikler uygulanabilir." },
  { q: "Google Ads ile birlikte mi yönetiliyor?", a: "Evet. YouTube kampanyaları Google Ads üzerinden yönetilir; arama ve display ile bütçe paylaşımı ve hedef kitle senkronizasyonu yapıyoruz." },
  { q: "Video kreatifleri siz mi hazırlıyorsunuz?", a: "Kreatif strateji ve brief tarafımızdan; video prodüksiyon ihtiyacında iş ortağı stüdyolarla çalışıyoruz. Mevcut videolarınızla da kampanya kurgulayabiliriz." },
  { q: "Raporlama ne sıklıkta?", a: "Haftalık performans özeti; görüntüleme, etkileşim ve dönüşüm metrikleri aylık strateji toplantısında detaylı paylaşılır." },
];

function PerformanceChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="border-t border-[var(--border)] bg-[#0f0f0f] py-24 sm:py-32" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[900px]">
        <motion.h2
          className="text-3xl font-light tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Görüntüleme ve Dönüşümde Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-white/70"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Video reklam performansı: izlenme, etkileşim ve dönüşüm metrikleri.
        </motion.p>
        <motion.div
          className="mt-14 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="glass-card flex flex-col items-center rounded-2xl px-8 py-10 sm:px-12 sm:py-12">
            <span className="mb-6 text-xs font-semibold uppercase tracking-widest text-red-400">View rate trendi</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="ytChartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M20 95 L70 78 L120 58 L170 42 L220 28 L260 18"
                stroke="#ef4444"
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
                d="M20 95 L70 78 L120 58 L170 42 L220 28 L260 18 L260 140 L20 140 Z"
                fill="url(#ytChartGrad)"
                style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease-out 0.4s" }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/70">Görüntüleme performansı</p>
          </div>
          <div className="glass-card flex flex-col items-center rounded-2xl px-8 py-10 sm:px-12 sm:py-12">
            <span className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/80">Format karşılaştırma</span>
            <div className="flex h-24 items-end gap-4">
              {[60, 45, 80].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-14 rounded-lg bg-red-500/90"
                  initial={{ height: "0px" }}
                  animate={inView ? { height: `${h}px` } : { height: "0px" }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                />
              ))}
            </div>
            <p className="mt-4 text-center text-sm font-light text-white/70">In-Stream / Discovery / Bumper</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function YouTubeReklamlariContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fef2f2] via-white to-[#fff7ed] py-28 sm:py-36 dark:from-[#1c1917] dark:via-[var(--background)] dark:to-[#431407]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-red-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-red-700 dark:border-red-900 dark:bg-red-950/50 dark:text-red-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube Reklamları
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Video Reklamlarla Marka Bilinirliği,{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Talep ve Dönüşüm
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              In-Stream, Discovery ve Bumper formatlarında <strong className="text-[var(--foreground)]">video reklam stratejisi</strong>; hedefleme, hook ve dönüşüm hunisi kurgusu. İçerik ve medya planını raporluyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-[#FF0000] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-red-500/25 transition hover:bg-red-600">
                Teklif Al
              </Link>
              <Link href="/hizmetler/dijital-reklam/google-ads" className="inline-flex items-center rounded-full border-2 border-red-200 bg-white px-7 py-3.5 text-sm font-medium text-red-600 transition hover:border-red-300 hover:bg-red-50 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400">
                Google Ads sayfası
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0 items-center justify-center">
            <div className="flex flex-col gap-4 sm:max-w-[280px]">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-3 rounded-[2rem] opacity-50 blur-xl bg-red-500" />
                <div className="relative flex h-44 w-44 items-center justify-center rounded-3xl border border-white/60 bg-[#0f0f0f] shadow-2xl backdrop-blur-xl sm:h-52 sm:w-52">
                  <svg className="h-20 w-20 sm:h-24 sm:w-24" viewBox="0 0 24 24" fill="#FF0000">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              </div>
              {FORMAT_ITEMS.map((f) => (
                <div key={f.label} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 dark:bg-[var(--card)]/80">
                  <div className={`h-9 w-9 shrink-0 rounded-lg ${f.color} opacity-90`} />
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">{f.label}</p>
                    <p className="text-sm text-[var(--muted)]">{f.desc}</p>
                  </div>
                </div>
              ))}
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
              Hedefleme (ilgi alanı, niyet, yeniden hedefleme), video kreatif planı ve kanal/format seçimi; görüntüleme, etkileşim ve dönüşüm metriklerinin düzenli raporu.
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
              YouTube (Google Ads) reklam metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
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
            YouTube&apos;da video reklamlarla büyümeye hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            Farkındalık, değerlendirme ve dönüşüm hunisi için <strong className="text-[var(--foreground)]">video reklam</strong> stratejisi kurguluyoruz.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-[#FF0000] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-red-600">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
