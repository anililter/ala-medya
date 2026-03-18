"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_ITEMS = [
  {
    title: "Kreatif Test Matrisi: Hook, Tempo, CTA",
    desc: "Kısa video reklamlarda hook (ilk 1 sn), tempo ve CTA varyasyonları; kazanan kombinasyonların hızlı ölçeklendirilmesi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#0D0D0D" />
        <rect x="10" y="8" width="28" height="32" rx="4" stroke="#00F2EA" strokeWidth="2" />
        <path d="M20 18l12 6-12 6V18z" fill="#FF0050" />
      </svg>
    ),
  },
  {
    title: "Hedefleme & Bütçe: Test → Ölçek",
    desc: "Dar test bütçesi ile kazanan kreatifleri tespit; sonra ölçek fazında bütçe artışı ve hedef kitle genişletme.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#0D0D0D" />
        <path d="M14 34V14h6v20h-6zM22 34V20h6v14h-6zM30 34V24h6v10h-6z" fill="#00F2EA" />
        <path d="M12 36h24" stroke="#00F2EA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Dönüşüm & Kalite Takibi",
    desc: "Uygulama indirme, web ve lead dönüşümleri; TikTok Pixel ve Events API. Haftalık kazanan kreatifler + sonraki test planı raporu.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#0D0D0D" />
        <path d="M16 26l6 6 12-12" stroke="#FF0050" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="14" width="20" height="20" rx="3" stroke="#00F2EA" strokeWidth="2" />
      </svg>
    ),
  },
];

const DATA_METRICS = [
  { metric: "Gösterim & View", how: "Video görüntüleme (6 sn. ve tam izlenme); CPM ve view rate takibi." },
  { metric: "Tıklama & Etkileşim", how: "CTR, like, share, yorum; kreatif performans karşılaştırması." },
  { metric: "Dönüşüm maliyeti", how: "Uygulama, web ve lead CPA; Pixel ve Events API ile veri doğruluğu." },
];

const FAQ_DATA = [
  { q: "TikTok reklamları için minimum bütçe ne kadar?", a: "Kreatif test için anlamlı veri toplamak üzere günlük minimum bütçe önerilerimizi paylaşıyoruz. Test fazından sonra ölçek bütçesi ayrı planlanır." },
  { q: "Kreatifleri siz mi üretiyorsunuz?", a: "Kreatif strateji ve brief tarafımızdan; kısa video prodüksiyonunda iş ortağı ekiplerle çalışıyoruz. Markanızın mevcut videolarıyla da kampanya kurabiliriz." },
  { q: "LinkedIn ile birlikte paket var mı?", a: "Evet. TikTok & LinkedIn Ads sayfamızda iki platformu birlikte yöneten paket ve raporlama yapısını inceleyebilirsiniz." },
  { q: "Raporlama ne sıklıkta?", a: "Haftalık rapor: kazanan kreatifler, performans metrikleri ve bir sonraki hafta test planı. İsteğe göre canlı dashboard." },
];

function PerformanceChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="border-t border-[var(--border)] bg-[#0D0D0D] py-24 sm:py-32" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[900px]">
        <motion.h2
          className="text-3xl font-light tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Kreatif Performansında Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-white/70"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          View rate, etkileşim ve dönüşüm: kazanan kreatiflerin verisi.
        </motion.p>
        <motion.div
          className="mt-14 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-xl sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-[#00F2EA]">View rate trendi</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="ttChartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#00F2EA" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#00F2EA" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M20 105 L70 80 L120 58 L170 38 L220 24 L260 14"
                stroke="#00F2EA"
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
                d="M20 105 L70 80 L120 58 L170 38 L220 24 L260 14 L260 140 L20 140 Z"
                fill="url(#ttChartGrad)"
                style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease-out 0.4s" }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/70">Kreatif performansı</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-xl sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-[#FF0050]">Test → Ölçek</span>
            <div className="flex items-end gap-3">
              {[40, 55, 75].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-16 rounded-t-lg bg-gradient-to-t from-[#FF0050] to-[#00F2EA] opacity-90"
                  initial={{ height: "0px" }}
                  animate={inView ? { height: `${h}px` } : { height: "0px" }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                />
              ))}
            </div>
            <p className="mt-4 text-center text-sm font-light text-white/70">Faz 1 / 2 / 3</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TikTokReklamlariContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] py-28 sm:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F2EA]/10 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00F2EA]/40 bg-[#00F2EA]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#00F2EA]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88 2.07v-8.1h-3.45v8.1a6.34 6.34 0 0 0 10.82 4.48 6.34 6.34 0 0 0 2.66-4.48V9.94a4.85 4.85 0 0 0 3.77-4.25z" />
              </svg>
              TikTok Reklamları
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Hızlı Kreatif Testleri,{" "}
              <span className="bg-gradient-to-r from-[#00F2EA] to-[#FF0050] bg-clip-text text-transparent">
                Kazanan İçerikler
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 lg:mx-0 sm:text-lg">
              Kısa video reklamlarda <strong className="text-white">hook, tempo ve CTA</strong> test matrisi; kazananları ölçekler, maliyeti optimize ederiz. Süreci net raporlarla takip edersiniz.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#0D0D0D] shadow-lg transition hover:bg-white/90">
                Teklif Al
              </Link>
              <Link href="/hizmetler/dijital-reklam/linkedin-reklamlari" className="inline-flex items-center rounded-full border-2 border-[#00F2EA]/50 bg-transparent px-7 py-3.5 text-sm font-medium text-[#00F2EA] transition hover:bg-[#00F2EA]/10">
                LinkedIn Reklamları
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#00F2EA]/20 blur-xl" />
            <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-white/10 bg-[#1a1a1a] shadow-2xl sm:h-60 sm:w-60">
              <svg className="h-28 w-28 sm:h-32 sm:w-32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88 2.07v-8.1h-3.45v8.1a6.34 6.34 0 0 0 10.82 4.48 6.34 6.34 0 0 0 2.66-4.48V9.94a4.85 4.85 0 0 0 3.77-4.25z" />
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
              Kreatif üretim brief’i ve test matrisi (hook / tempo / CTA); hedefleme ve bütçe stratejisi (test → ölçek); dönüşüm odaklı optimizasyon. Haftalık kazanan kreatifler + sonraki test planı.
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
              TikTok reklam metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
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
            TikTok&apos;ta kreatif gücünüzü büyütmeye hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            Hızlı test kültürü ve <strong className="text-[var(--foreground)]">kazanan kreatifler</strong> ile performans odaklı kampanyalar.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-[#0D0D0D] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#1a1a1a] dark:bg-white dark:text-[#0D0D0D] dark:hover:bg-white/90">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
