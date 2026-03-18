"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";


/* Öne çıkan özellikler – ikonlu kartlar */
const FEATURE_ITEMS = [
  {
    title: "Reels & Story Odaklı Strateji",
    desc: "Kısa video ve hikaye formatlarında A/B testleri; kazanan kreatiflerin ölçeklendirilmesi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FDF2F8" />
        <rect x="12" y="10" width="24" height="28" rx="4" stroke="#DB2777" strokeWidth="2" />
        <circle cx="24" cy="24" r="6" stroke="#DB2777" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Hedef Kitle & Yeniden Hedefleme",
    desc: "İlgi alanları, davranış ve özel kitlelerle segmentasyon; remarketing ile dönüşüm odaklı takip.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#F5F3FF" />
        <circle cx="24" cy="18" r="6" stroke="#7C3AED" strokeWidth="2" />
        <path d="M14 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Dönüşüm & Lead Optimizasyonu",
    desc: "Form, WhatsApp ve web dönüşümlerinin takibi; Meta Pixel ve dönüşüm API ile veri doğruluğu.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#ECFDF5" />
        <path d="M16 24l6 6 12-12" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="14" width="20" height="20" rx="3" stroke="#059669" strokeWidth="2" />
      </svg>
    ),
  },
];

/* Psikologlara özel – 3'lü teknik kartlar */
const PSIKOLOJI_CARDS = [
  {
    title: "Hassas İçerik ve Güven Odaklı Kreatif",
    desc: "Psikolog ve terapist reklamlarında Meta politikalarına uyumlu, danışan odaklı mesajlar. Kriz aramaları ile bilgi arayan kullanıcıları ayıran hedefleme; agresif CTA yerine güven veren, sade görsel dil.",
  },
  {
    title: "Gizlilik ve Etik Sınırlar",
    desc: "Ruh sağlığı alanında reklam verirken danışan gizliliği ve etik sınırlar ön planda. Hassas kategoride onaylı kampanya yapısı ve landing sayfalarında KVKK uyumlu form ve bilgilendirme.",
  },
  {
    title: "Niyet Odaklı Hedefleme",
    desc: "Sadece 'psikolog' aramasına değil; 'kaygı desteği', 'online terapi', 'çift terapisi' gibi niş ilgi alanlarına odaklanarak doğru danışan adayına ulaşıyoruz.",
  },
];

/* Metrik tablosu */
const DATA_METRICS = [
  { metric: "Erişim & Gösterim", how: "Reels, Story ve Feed yerleşimlerinde gösterim ve benzersiz erişim takibi." },
  { metric: "Tıklama oranı (CTR)", how: "Format ve hedef kitle bazında CTR; anomali ve düşük performans uyarıları." },
  { metric: "Dönüşüm maliyeti (CPA)", how: "Lead ve satış dönüşümleri için CPA; hedefe göre bütçe dağılımı optimizasyonu." },
];

const FAQ_DATA = [
  { q: "Instagram reklamları için minimum bütçe ne kadar?", a: "Anlamlı veri toplamak ve test yapabilmek için aylık minimum bütçe önerilerimizi ücretsiz ön görüşmede paylaşıyoruz. Sektör ve hedefe göre değişir." },
  { q: "Reels ve Story reklamları ayrı mı yönetiliyor?", a: "Evet. Reels, Story ve Feed için ayrı kreatif setleri ve yerleşim optimizasyonu yapıyoruz; kazanan formatları ölçeklendiriyoruz." },
  { q: "Meta Ads (Facebook) ile birlikte mi çalışıyorsunuz?", a: "Evet. Instagram reklamları Meta reklam yöneticisi üzerinden yönetilir; Facebook ve Instagram hedeflerini tek panelde birleştirip bütçe dağılımını optimize ediyoruz." },
  { q: "Raporlama ne sıklıkta sunuluyor?", a: "Haftalık performans özeti ve bir sonraki hafta aksiyonları ile birlikte; isteğe göre canlı dashboard erişimi sağlanabilir." },
];

/* Performans grafiği – engagement trend */
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
          Erişim ve Etkileşimde Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-white/70"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Reels, Story ve Feed performansı: veri odaklı raporlama.
        </motion.p>
        <motion.div
          className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-center sm:gap-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="glass-card flex flex-col items-center rounded-2xl px-8 py-10 sm:px-12 sm:py-12">
            <span className="mb-6 text-xs font-semibold uppercase tracking-widest text-pink-400">Etkileşim trendi</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="instaChartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M20 100 L70 85 L120 65 L170 45 L220 28 L260 18"
                stroke="url(#instaChartStroke)"
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
              <defs>
                <linearGradient id="instaChartStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#833AB4" />
                  <stop offset="50%" stopColor="#FD1D1D" />
                  <stop offset="100%" stopColor="#FCAF45" />
                </linearGradient>
              </defs>
              <path
                d="M20 100 L70 85 L120 65 L170 45 L220 28 L260 18 L260 140 L20 140 Z"
                fill="url(#instaChartGrad)"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: "opacity 0.8s ease-out 0.4s",
                }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/70">Erişim → Etkileşim trendi</p>
          </div>
          <div className="glass-card flex flex-col items-center rounded-2xl px-8 py-10 sm:px-12 sm:py-12">
            <span className="mb-6 text-xs font-semibold uppercase tracking-widest text-amber-400">Format dağılımı</span>
            <svg viewBox="0 0 160 160" className="h-40 w-40 sm:h-52 sm:w-52" fill="none">
              <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
              {/* 3 eşit dilim: Reels, Story, Feed */}
              <circle cx="80" cy="80" r="70" stroke="#833AB4" strokeWidth="12" strokeDasharray="147 293" strokeLinecap="round" transform="rotate(-90 80 80)" />
              <circle cx="80" cy="80" r="70" stroke="#FD1D1D" strokeWidth="12" strokeDasharray="147 293" strokeDashoffset="-147" strokeLinecap="round" transform="rotate(-90 80 80)" />
              <circle cx="80" cy="80" r="70" stroke="#FCAF45" strokeWidth="12" strokeDasharray="147 293" strokeDashoffset="-294" strokeLinecap="round" transform="rotate(-90 80 80)" />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/70">Reels / Story / Feed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Reklam formatları – görsel kartlar */
const FORMAT_CARDS = [
  { label: "Reels", desc: "Kısa video", color: "from-violet-500 to-fuchsia-500" },
  { label: "Stories", desc: "Hikaye reklamları", color: "from-pink-500 to-rose-500" },
  { label: "Feed", desc: "Akış reklamları", color: "from-amber-400 to-orange-500" },
];

export function InstagramAdsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#faf5ff] via-white to-[#fff5f7] py-28 sm:py-36 dark:from-[#1a0a1f] dark:via-[var(--background)] dark:to-[#1f0a14]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-[#833AB4]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-[320px] w-[320px] rounded-full bg-[#FD1D1D]/10 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-pink-700 dark:border-pink-800 dark:bg-pink-950/50 dark:text-pink-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="url(#igLogo)">
                <defs>
                  <linearGradient id="igLogo" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#833AB4" />
                    <stop offset="50%" stopColor="#FD1D1D" />
                    <stop offset="100%" stopColor="#FCAF45" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
              Meta (Instagram) Reklamları
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Hedef Kitleye Doğru İçerikle,{" "}
              <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] bg-clip-text text-transparent">
                Doğru Frekansta
              </span>{" "}
              Ulaşın.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              Reels, Story ve Feed reklamlarında <strong className="text-[var(--foreground)]">kreatif testleri</strong>, hedef kitle segmentasyonu ve dönüşüm optimizasyonu ile kampanya kurgusu; net raporlarla performansı takip ediyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-pink-500/25 transition hover:opacity-95">
                Teklif Al
              </Link>
              <Link href="/hizmetler/dijital-reklam/facebook-reklamlari" className="inline-flex items-center rounded-full border-2 border-pink-200 bg-white px-7 py-3.5 text-sm font-medium text-pink-600 transition hover:border-pink-300 hover:bg-pink-50 dark:border-pink-800 dark:bg-pink-950/30 dark:text-pink-400 dark:hover:bg-pink-950/50">
                Facebook Reklamları
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0 items-center justify-center">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-3 rounded-[2rem] opacity-50 blur-xl bg-gradient-to-r from-[#833AB4] to-[#FCAF45]" />
                <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-white/60 bg-white/50 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/10 sm:h-60 sm:w-60">
                  <svg className="h-28 w-28 sm:h-32 sm:w-32" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="12" fill="url(#heroIgGrad)" />
                    <defs>
                      <linearGradient id="heroIgGrad" x1="0" y1="0" x2="48" y2="48">
                        <stop stopColor="#833AB4" />
                        <stop offset="0.5" stopColor="#FD1D1D" />
                        <stop offset="1" stopColor="#FCAF45" />
                      </linearGradient>
                    </defs>
                    <rect x="12" y="12" width="24" height="24" rx="6" stroke="white" strokeWidth="2" fill="none" />
                    <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="2" fill="none" />
                    <circle cx="30" cy="18" r="1.5" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:max-w-[260px]">
                {FORMAT_CARDS.map((f, i) => (
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

      {/* Özellikler */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Neleri Yönetiyoruz?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Hedef kitleye doğru içerikle, doğru frekansta ulaşırız. Kampanya kurgusu, kreatif testleri ve optimizasyonları net raporlarla iletiyoruz.
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

      {/* Psikologlara özel */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#faf5ff] py-24 sm:py-32 dark:bg-slate-900/30">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50/90 via-pink-50/40 to-violet-50/40 py-20 sm:py-24 dark:from-slate-900/40 dark:via-pink-950/20 dark:to-violet-950/20">
              <div className="relative mx-auto max-w-[1000px] px-6 sm:px-10">
                <div className="flex justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-violet-100/80 dark:from-pink-900/40 dark:to-violet-900/30 sm:h-44 sm:w-44">
                    <svg className="h-20 w-20 text-pink-400/80 dark:text-pink-500/60 sm:h-24 sm:w-24" viewBox="0 0 64 64" fill="none" aria-hidden>
                      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                      <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.4" />
                      <path d="M32 8v6M32 50v6M8 32h6M50 32h6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                    </svg>
                  </div>
                </div>
                <span className="mt-8 block text-center text-xs font-medium uppercase tracking-widest text-pink-700/80 dark:text-pink-400/80">
                  Psikologlara Özel
                </span>
                <h3 className="mt-4 text-center text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-3xl">
                  Ruh Sağlığı Uzmanları İçin Instagram Reklamları
                </h3>
                <p className="mx-auto mt-8 max-w-2xl text-center text-base font-light leading-relaxed text-[var(--muted)]">
                  Psikolog ve terapist reklamları, standart ticari kampanyalardan farklıdır. Danışan adaylarının hassas arama niyetlerini anlayarak, <strong className="text-[var(--foreground)]">Meta politikalarına uyumlu</strong> ve <strong className="text-[var(--foreground)]">güven odaklı</strong> kreatifler kurguluyoruz. Etik sınırlar ve gizlilik ön planda; reklam metinlerinde agresif CTA yerine huzur veren, profesyonel bir dil kullanıyoruz.
                </p>
                <div className="mt-14 grid gap-6 sm:grid-cols-3">
                  {PSIKOLOJI_CARDS.map((card, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-pink-100/80 bg-white/90 p-6 shadow-sm dark:border-pink-900/50 dark:bg-[var(--card)]/80"
                    >
                      <h4 className="text-base font-semibold text-[var(--foreground)]">{card.title}</h4>
                      <p className="mt-3 text-sm font-light leading-relaxed text-[var(--muted)]">{card.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
                  <div className="relative aspect-[4/3] min-h-[200px] overflow-hidden rounded-2xl bg-pink-100/50 dark:bg-pink-950/30">
                    <Image
                      src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80"
                      alt="Psikolog ve danışanlık ortamı – güven ve huzur"
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
                      Ruh sağlığı alanında danışan verisinin kutsallığı ön planda. Landing sayfalarında KVKK uyumlu form ve bilgilendirme; reklam verilerinde anonimleştirme ile hem Meta algoritmalarını besliyor hem de etik sınırları koruyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Veri şeffaflığı */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#f9fafb] py-24 sm:py-32 dark:bg-[var(--background)]">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Veri Şeffaflığı
            </h2>
            <p className="mt-3 max-w-xl text-base font-light text-[var(--muted)]">
              Instagram (Meta) reklam metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
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

      {/* SSS */}
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

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-3xl">
            Instagram&apos;da hedef kitlenize ulaşmaya hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            Reels, Story ve Feed reklamları ile <strong className="text-[var(--foreground)]">kreatif</strong> ve <strong className="text-[var(--foreground)]">dönüşüm odaklı</strong> kampanyalar kurguluyoruz.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-95">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
