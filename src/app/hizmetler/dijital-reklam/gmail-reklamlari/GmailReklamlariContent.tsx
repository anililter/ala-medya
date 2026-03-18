"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_ITEMS = [
  {
    title: "Hedef Kitle ve Niyet Sinyalleri",
    desc: "İlgi alanı, demografi ve niyet kitleleriyle segmentasyon; Gmail ağı (YouTube, Discover) ile geniş erişim.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FEF2F2" />
        <rect x="10" y="12" width="28" height="24" rx="3" stroke="#EA4335" strokeWidth="2" />
        <path d="M10 18l14 8 14-8" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Reklam Metni ve Görsel Varyasyonları",
    desc: "Collapsed ve expanded görünümde başlık–görsel–CTA uyumu; A/B testleri ile kazanan kombinasyonların ölçeklendirilmesi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#EFF6FF" />
        <path d="M16 18h16M16 24h12M16 30h8" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
        <rect x="14" y="14" width="20" height="20" rx="2" stroke="#4285F4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Trafik ve Dönüşüm Optimizasyonu",
    desc: "Web trafiği ve lead hedefleri; Google Ads dönüşüm takibi ile CPA optimizasyonu. Haftalık rapor + bir sonraki aksiyonlar.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#ECFDF5" />
        <path d="M16 26l6 6 12-12" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="14" width="20" height="20" rx="3" stroke="#34A853" strokeWidth="2" />
      </svg>
    ),
  },
];

const DATA_METRICS = [
  { metric: "Gösterim & Açılma", how: "Inbox yerleşiminde gösterim; açılma (expand) oranı ve tıklama takibi." },
  { metric: "Tıklama oranı (CTR)", how: "Collapsed ve expanded CTR; kreatif ve hedef kitle bazında performans." },
  { metric: "Dönüşüm maliyeti", how: "Web ve lead dönüşümleri için CPA; Google Ads dönüşüm takibi ile optimizasyon." },
];

const FAQ_DATA = [
  { q: "Gmail reklamları için minimum bütçe ne kadar?", a: "Anlamlı test için aylık minimum bütçe önerilerimizi paylaşıyoruz. Gmail, Google Ads ağında arama ve YouTube ile bütçe paylaşımı yapılabilir." },
  { q: "Google Ads ile birlikte mi yönetiliyor?", a: "Evet. Gmail kampanyaları Google Ads üzerinden yönetilir; arama ve display ile tek panelde bütçe ve hedef kitle stratejisi kurguluyoruz." },
  { q: "Raporlama ne sıklıkta?", a: "Haftalık performans raporu ve bir sonraki hafta aksiyonları; aylık strateji değerlendirmesi." },
];

function PerformanceChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="border-t border-[var(--border)] bg-[#f8fafb] py-24 sm:py-32 dark:bg-[#1a1a2e]" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[900px]">
        <motion.h2
          className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Inbox Performansında Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-[var(--muted)]"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Görünürlük ve trafik: açılma ve tıklama metrikleri.
        </motion.p>
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-[var(--border)] bg-white px-8 py-10 shadow-lg dark:bg-[var(--card)] sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-[#EA4335]">Açılma / Tıklama trendi</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="gmailChartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#EA4335" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#EA4335" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M20 102 L70 82 L120 58 L170 42 L220 26 L260 16"
                stroke="#EA4335"
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
                d="M20 102 L70 82 L120 58 L170 42 L220 26 L260 16 L260 140 L20 140 Z"
                fill="url(#gmailChartGrad)"
                style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease-out 0.4s" }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-[var(--muted)]">Performans trendi</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function GmailReklamlariContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fef2f2] via-white to-[#eff6ff] py-28 sm:py-36 dark:from-[#1a1a2e] dark:via-[var(--background)] dark:to-[#0f172a]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-[#EA4335]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-[280px] w-[280px] rounded-full bg-[#4285F4]/10 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#EA4335]/30 bg-[#EA4335]/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#EA4335]">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.585l8.073-6.092C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
              Gmail Reklamları
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Doğru Niyet Kitlelerine,{" "}
              <span className="bg-gradient-to-r from-[#EA4335] to-[#4285F4] bg-clip-text text-transparent">
                Doğru Mesajla
              </span>{" "}
              Ulaşın.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              Gmail ağında hedef kitle ve niyet sinyalleriyle segmentasyon; reklam metni ve görsel varyasyonlarıyla test. Kampanya kurgusu ve performans takibini net raporlarla paylaşıyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-[#EA4335] px-7 py-3.5 text-sm font-medium text-white shadow-lg transition hover:bg-[#d33426]">
                Teklif Al
              </Link>
              <Link href="/hizmetler/dijital-reklam/google-ads" className="inline-flex items-center rounded-full border-2 border-[#EA4335]/30 bg-white px-7 py-3.5 text-sm font-medium text-[#EA4335] transition hover:bg-[#EA4335]/5 dark:bg-transparent dark:border-[#EA4335]/50 dark:text-[#EA4335]">
                Google Ads sayfası
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#EA4335]/10 blur-xl" />
            <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-[var(--border)] bg-white shadow-xl dark:bg-[var(--card)] sm:h-60 sm:w-60">
              <svg className="h-24 w-24 sm:h-28 sm:w-28" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.585l8.073-6.092C21.69 2.28 24 3.434 24 5.457z" />
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
              Hedef kitle ve niyet sinyalleriyle segmentasyon; reklam metni ve görsel varyasyonlarıyla test; trafik ve dönüşüm optimizasyonu; haftalık rapor + bir sonraki aksiyonlar.
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
              Gmail (Google Ads) reklam metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
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
            Gmail&apos;de hedef kitlenize ulaşmaya hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            Niyet kitleleri ve <strong className="text-[var(--foreground)]">doğru mesaj</strong> ile trafik ve dönüşüm kampanyaları.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-[#EA4335] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d33426]">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
