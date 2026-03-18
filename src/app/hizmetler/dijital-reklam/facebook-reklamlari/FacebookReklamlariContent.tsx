"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_ITEMS = [
  {
    title: "Feed & Story Kampanya Mimarisi",
    desc: "News Feed ve Story yerleşimlerinde mesaj–teklif uyumu (creative–offer fit); A/B testleri ile kazanan varyasyonların ölçeklendirilmesi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#EFF6FF" />
        <rect x="10" y="8" width="28" height="20" rx="3" stroke="#2563EB" strokeWidth="2" />
        <path d="M10 32h28M14 36h20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Prospecting + Remarketing Dengesi",
    desc: "Yeni kitle edinme (prospecting) ile yeniden hedefleme bütçe dağılımı; dönüşüm aşamasına göre teklif stratejileri.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#F0FDF4" />
        <path d="M24 14v20M14 24h20" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" stroke="#059669" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Lead & Satış Optimizasyonu",
    desc: "Form, Messenger ve web dönüşümleri; Meta Pixel ve CAPI ile veri doğruluğu, kalite skoru ve maliyet takibi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FEF3C7" />
        <path d="M16 26l6 6 12-12" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="14" width="20" height="20" rx="3" stroke="#D97706" strokeWidth="2" />
      </svg>
    ),
  },
];

const PSIKOLOJI_CARDS = [
  {
    title: "Güven Odaklı Kreatif Dili",
    desc: "Facebook’ta psikolog ve terapist reklamlarında Meta hassas içerik politikalarına uyum; danışan odaklı, sade ve güven veren mesajlar.",
  },
  {
    title: "Hedefleme ve Gizlilik",
    desc: "İlgi alanı ve davranış hedeflemesinde etik sınırlar; KVKK uyumlu landing sayfaları ve form verisi yönetimi.",
  },
  {
    title: "Dönüşüm Hunisi (Terapi Funnel)",
    desc: "Randevu ve bilgi talebi odaklı iniş sayfaları; agresif CTA yerine huzur veren, profesyonel kullanıcı deneyimi.",
  },
];

const DATA_METRICS = [
  { metric: "Erişim & Gösterim", how: "Feed, Story ve Reels yerleşimlerinde gösterim ve benzersiz erişim; yaş ve cinsiyet dağılımı." },
  { metric: "Tıklama oranı (CTR)", how: "Yerleşim ve hedef kitle bazında CTR; düşük performanslı kombinasyonların tespiti ve kapatılması." },
  { metric: "Lead / Satış maliyeti", how: "Form ve satış dönüşümleri için CPA; haftalık optimizasyon ile hedefe yakın maliyet." },
];

const FAQ_DATA = [
  { q: "Facebook reklamları için minimum bütçe ne kadar?", a: "Anlamlı test ve öğrenme için aylık minimum bütçe önerilerimizi ücretsiz ön görüşmede paylaşıyoruz. Sektör ve hedefe göre değişir." },
  { q: "Instagram ile birlikte mi yönetiliyor?", a: "Evet. Facebook ve Instagram, Meta Ads Manager üzerinden tek panelde yönetilir; bütçe ve hedef kitle dağılımını birlikte optimize ediyoruz." },
  { q: "Lead formları ve Messenger entegrasyonu var mı?", a: "Evet. Facebook Lead Ad’ler, Instant Forms ve Messenger entegrasyonu ile lead toplama ve takip süreçlerini kuruyoruz." },
  { q: "Raporlama ne sıklıkta?", a: "Haftalık performans özeti ve bir sonraki hafta aksiyonları; isteğe göre canlı dashboard erişimi sağlanabilir." },
];

function PerformanceChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="border-t border-[var(--border)] bg-[var(--night)] py-24 sm:py-32" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[900px]">
        <motion.h2
          className="text-3xl font-light tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Performans Şeffaflığı
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-white/70"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Bütçe dağılımı ve dönüşüm trendi: veri odaklı raporlama.
        </motion.p>
        <motion.div
          className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-center sm:gap-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="glass-card flex flex-col items-center rounded-2xl px-8 py-10 sm:px-12 sm:py-12">
            <span className="mb-6 text-xs font-semibold uppercase tracking-widest text-blue-400">Harcama → Dönüşüm</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="fbChartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M20 110 L70 88 L120 70 L170 48 L220 30 L260 18"
                stroke="#3b82f6"
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
                d="M20 110 L70 88 L120 70 L170 48 L220 30 L260 18 L260 140 L20 140 Z"
                fill="url(#fbChartGrad)"
                style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease-out 0.4s" }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/70">Dönüşüm verimliliği trendi</p>
          </div>
          <div className="glass-card flex flex-col items-center rounded-2xl px-8 py-10 sm:px-12 sm:py-12">
            <span className="mb-6 text-xs font-semibold uppercase tracking-widest text-sky-400">Yerleşim dağılımı</span>
            <svg viewBox="0 0 160 160" className="h-40 w-40 sm:h-52 sm:w-52" fill="none">
              <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
              <circle cx="80" cy="80" r="70" stroke="#2563EB" strokeWidth="12" strokeDasharray="147 293" strokeLinecap="round" transform="rotate(-90 80 80)" />
              <circle cx="80" cy="80" r="70" stroke="#0EA5E9" strokeWidth="12" strokeDasharray="147 293" strokeDashoffset="-147" strokeLinecap="round" transform="rotate(-90 80 80)" />
              <circle cx="80" cy="80" r="70" stroke="#06B6D4" strokeWidth="12" strokeDasharray="147 293" strokeDashoffset="-294" strokeLinecap="round" transform="rotate(-90 80 80)" />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/70">Feed / Story / Reels</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const FORMAT_CARDS = [
  { label: "Feed", desc: "Haber akışı reklamları", color: "from-blue-500 to-blue-600" },
  { label: "Stories", desc: "Hikaye reklamları", color: "from-sky-500 to-cyan-500" },
  { label: "Video", desc: "Video ve canlı", color: "from-indigo-500 to-blue-600" },
];

export function FacebookReklamlariContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#e0f2fe] py-28 sm:py-36 dark:from-[#0f172a] dark:via-[var(--background)] dark:to-[#0c4a6e]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-[320px] w-[320px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Meta (Facebook) Reklamları
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Doğru Teklif, Doğru Kitle,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Sürdürülebilir Sonuç
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              Feed, Story ve video reklamlarında <strong className="text-[var(--foreground)]">kampanya mimarisi</strong>, kreatif–teklif uyumu ve lead / satış odaklı optimizasyon; sonuçları anlaşılır raporlarla paylaşıyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-[#1877F2] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600">
                Teklif Al
              </Link>
              <Link href="/hizmetler/dijital-reklam/instagram-reklamlari" className="inline-flex items-center rounded-full border-2 border-blue-200 bg-white px-7 py-3.5 text-sm font-medium text-blue-600 transition hover:border-blue-300 hover:bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400">
                Instagram Reklamları
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0 items-center justify-center">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-3 rounded-[2rem] opacity-50 blur-xl bg-blue-500" />
                <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-white/60 bg-white/50 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/10 sm:h-60 sm:w-60">
                  <svg className="h-28 w-28 sm:h-32 sm:w-32" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:max-w-[260px]">
                {FORMAT_CARDS.map((f) => (
                  <div key={f.label} className="rounded-2xl border border-white/60 bg-white/40 px-5 py-4 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br ${f.color} opacity-90`} />
                      <div>
                        <p className="font-semibold text-[var(--foreground)]">{f.label}</p>
                        <p className="text-sm text-[var(--muted)]">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
              Kampanya mimarisi, kreatif varyasyonları ve lead / satış odaklı optimizasyon; haftalık raporlama ve aylık strateji değerlendirmesi.
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
        <section className="border-t border-[var(--border)] bg-[#eff6ff] py-24 sm:py-32 dark:bg-slate-900/30">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50/90 via-blue-50/40 to-sky-50/40 py-20 sm:py-24 dark:from-slate-900/40 dark:via-blue-950/20 dark:to-sky-950/20">
              <div className="relative mx-auto max-w-[1000px] px-6 sm:px-10">
                <div className="flex justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-sky-100/80 dark:from-blue-900/40 dark:to-sky-900/30 sm:h-44 sm:w-44">
                    <svg className="h-20 w-20 text-blue-400/80 dark:text-blue-500/60 sm:h-24 sm:w-24" viewBox="0 0 64 64" fill="none" aria-hidden>
                      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                      <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.4" />
                      <path d="M32 8v6M32 50v6M8 32h6M50 32h6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                    </svg>
                  </div>
                </div>
                <span className="mt-8 block text-center text-xs font-medium uppercase tracking-widest text-blue-700/80 dark:text-blue-400/80">
                  Psikologlara Özel
                </span>
                <h3 className="mt-4 text-center text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-3xl">
                  Ruh Sağlığı Uzmanları İçin Facebook Reklamları
                </h3>
                <p className="mx-auto mt-8 max-w-2xl text-center text-base font-light leading-relaxed text-[var(--muted)]">
                  Psikolog ve terapist reklamlarında Meta politikalarına uyumlu, <strong className="text-[var(--foreground)]">güven odaklı</strong> kreatifler ve hedefleme. Etik sınırlar ve danışan gizliliği ön planda.
                </p>
                <div className="mt-14 grid gap-6 sm:grid-cols-3">
                  {PSIKOLOJI_CARDS.map((card, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-blue-100/80 bg-white/90 p-6 shadow-sm dark:border-blue-900/50 dark:bg-[var(--card)]/80"
                    >
                      <h4 className="text-base font-semibold text-[var(--foreground)]">{card.title}</h4>
                      <p className="mt-3 text-sm font-light leading-relaxed text-[var(--muted)]">{card.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
                  <div className="relative aspect-[4/3] min-h-[200px] overflow-hidden rounded-2xl bg-blue-100/50 dark:bg-blue-950/30">
                    <Image
                      src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80"
                      alt="Danışmanlık ortamı – güven ve profesyonellik"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                      Gizlilik ve KVKK
                    </h4>
                    <p className="mt-4 text-sm font-light leading-relaxed text-[var(--muted)]">
                      Ruh sağlığı alanında danışan verisinin kutsallığı ön planda. Landing sayfalarında KVKK uyumlu form ve bilgilendirme; reklam verilerinde anonimleştirme ile etik sınırları koruyoruz.
                    </p>
                  </div>
                </div>
              </div>
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
              Facebook (Meta) reklam metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
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
            Facebook&apos;ta hedef kitlenize ulaşmaya hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            Feed, Story ve video reklamları ile <strong className="text-[var(--foreground)]">lead</strong> ve <strong className="text-[var(--foreground)]">satış odaklı</strong> kampanyalar kurguluyoruz.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-[#1877F2] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-600">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
