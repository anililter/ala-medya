"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_ITEMS = [
  {
    title: "Profil Kurulum / Claim ve NAP Tutarlılığı",
    desc: "Google Business Profile (GBP) kurulumu veya claim; işletme adı, adres ve telefon (NAP) tutarlılığı. Temel bilgilerin doğruluğu lokal SEO'nun temelidir.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FEF2F2" />
        <path d="M24 12l8 6v10H16V18l8-6z" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="22" r="4" stroke="#EA4335" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Kategori, Açıklama ve Görsel Optimizasyonu",
    desc: "Doğru kategori ve hizmet alanları; işletme açıklaması ve anahtar kelime uyumu; fotoğraf ve görsel zenginliği. Lokal aramada görünürlüğü artırır.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#EFF6FF" />
        <rect x="10" y="10" width="28" height="20" rx="3" stroke="#4285F4" strokeWidth="2" />
        <circle cx="24" cy="20" r="5" stroke="#4285F4" strokeWidth="2" />
        <path d="M16 34c0-4 3.5-8 8-8s8 4 8 8" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Yorum Yönetimi ve Görünürlük Raporu",
    desc: "Yorum yönetimi için süreç ve yönergeler; müşteri yanıtları. Aylık görünürlük özeti (arama, tıklama, arama sorguları) ve iyileştirme önerileri.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#ECFDF5" />
        <path d="M14 28l6 6 12-12" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 18h16M16 22h12" stroke="#34A853" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const DATA_METRICS = [
  { metric: "Görünüm ve arama", how: "Haritalar ve arama sonuçlarında işletme görünüm sayısı; 'aramada bulundu' sorguları." },
  { metric: "Tıklama ve yönlendirme", how: "Web sitesi tıklaması, yönlendirme (directions), arama; ziyaret ve arama sorguları raporu." },
  { metric: "Yorum ve puan", how: "Yeni yorum sayısı, ortalama puan ve yanıt oranı; aylık özet." },
];

const FAQ_DATA = [
  { q: "İşletmem zaten listede görünüyor, ne yapıyoruz?", a: "Mevcut profili 'claim' edip sahipliği alıyoruz; ardından kategori, açıklama, görsel ve NAP bilgilerini optimize ediyoruz." },
  { q: "Birden fazla şube var, hepsini yönetiyor musunuz?", a: "Evet. Çok şubeli işletmeler için her lokasyon için ayrı GBP profili kurulumu ve toplu yönetim süreçleri sunuyoruz." },
  { q: "Raporlama ne sıklıkta?", a: "Aylık görünürlük özeti (arama, tıklama, sorgular) ve iyileştirme önerileri; isteğe göre çeyreklik strateji değerlendirmesi." },
];

function PerformanceChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="border-t border-[var(--border)] bg-[#f0f9ff] py-24 sm:py-32 dark:bg-[#0f172a]" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[900px]">
        <motion.h2
          className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Lokal Görünürlükte Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-[var(--muted)]"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Arama, tıklama ve ziyaret: Google Business Profile verisi.
        </motion.p>
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-blue-200 bg-white px-8 py-10 shadow-lg dark:border-blue-900/30 dark:bg-[var(--card)] sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">Görünürlük trendi</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="mapsChartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#4285F4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#4285F4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M20 98 L70 78 L120 55 L170 38 L220 24 L260 14"
                stroke="#4285F4"
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
                d="M20 98 L70 78 L120 55 L170 38 L220 24 L260 14 L260 140 L20 140 Z"
                fill="url(#mapsChartGrad)"
                style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease-out 0.4s" }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-[var(--muted)]">Arama ve tıklama performansı</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function GoogleHaritalaraKayitContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#f0fdf4] py-28 sm:py-36 dark:from-[#0f172a] dark:via-[var(--background)] dark:to-[#052e16]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Google Haritalara Kayıt
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Lokal Aramalarda Görünürlüğü{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Artırın
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              Google Business Profile kurulumu ve optimizasyonu: kategori, açıklama, görseller ve yorum stratejisi. İşletme profilinizi doğru kurar, süreci net kontrol listeleriyle yönetiriz.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-medium text-white shadow-lg transition hover:bg-blue-700">
                Teklif Al
              </Link>
              <Link href="/hizmetler/seo" className="inline-flex items-center rounded-full border-2 border-blue-200 bg-white px-7 py-3.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50 dark:border-blue-500/30 dark:bg-transparent dark:text-blue-400">
                SEO sayfası
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-blue-500/15 blur-xl" />
            <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-blue-200 bg-white shadow-xl dark:border-blue-500/20 dark:bg-[var(--card)] sm:h-60 sm:w-60">
              <svg className="h-28 w-28 sm:h-32 sm:w-32 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
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
              Profil kurulum/claim ve NAP tutarlılığı; kategori, hizmet alanları, açıklama ve görsel optimizasyonu; yorum yönetimi için süreç ve yönergeler; aylık görünürlük özeti ve iyileştirme önerileri.
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
              Google Business Profile metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
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
            İşletmenizi Harita sonuçlarında öne çıkarmaya hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            Google Business Profile ile <strong className="text-[var(--foreground)]">lokal görünürlük</strong>.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
