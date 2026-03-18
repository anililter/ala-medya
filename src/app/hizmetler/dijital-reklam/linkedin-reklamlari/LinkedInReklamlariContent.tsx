"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_ITEMS = [
  {
    title: "B2B Hedefleme: Unvan, Sektör, Şirket",
    desc: "Karar vericilere ulaşmak için unvan, sektör, şirket büyüklüğü ve ilgi alanı hedeflemesi. Matched Audiences ile CRM ve web ziyaretçisi yeniden hedefleme.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#EFF6FF" />
        <rect x="12" y="14" width="24" height="20" rx="2" stroke="#0A66C2" strokeWidth="2" />
        <path d="M18 22h12M18 28h8" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Lead Form & Web Dönüşümleri",
    desc: "LinkedIn Lead Gen Forms ve web yönlendirme; kalite sinyalleri ve dönüşüm takibi. B2B lead maliyeti (CPL) optimizasyonu.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#ECFDF5" />
        <path d="M16 26l6 6 12-12" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="14" width="20" height="20" rx="3" stroke="#059669" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Kreatif & Mesajlaşma (B2B)",
    desc: "Profesyonel dil ve görsel tutarlılık; başlık–görsel–CTA testleri. Sponsored Content, Message Ads ve InMail stratejisi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#F5F3FF" />
        <path d="M16 20h16M16 26h12M16 32h8" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const DATA_METRICS = [
  { metric: "Gösterim & Tıklama", how: "Hedef kitle ve format bazında gösterim, CTR ve CPC; anomali takibi." },
  { metric: "Lead maliyeti (CPL)", how: "Lead form ve web dönüşümleri için CPL; kalite skoru ve lead sayısı raporu." },
  { metric: "Dönüşüm (Satış / Randevu)", how: "Offline dönüşüm ve CRM entegrasyonu; satış kapalı lead oranı görünürlüğü." },
];

const FAQ_DATA = [
  { q: "LinkedIn reklamları için minimum bütçe ne kadar?", a: "B2B hedefleme dar kitlelerde daha yüksek CPM getirebilir. Anlamlı test için aylık minimum bütçe önerilerimizi ücretsiz ön görüşmede paylaşıyoruz." },
  { q: "Hedef hesaplar (Account-Based) destekleniyor mu?", a: "Evet. Matched Audiences ile hedef hesap listesi yükleyebilir; bu hesaplara özel kampanya ve kreatif kurgulayabiliyoruz." },
  { q: "Lead formları vs web yönlendirme?", a: "İkisini de kullanıyoruz. Lead formları düşük sürtünme ile lead toplar; web yönlendirme daha derin bilgi ve dönüşüm için. Hedefe göre seçiyoruz." },
  { q: "Raporlama ne sıklıkta?", a: "Haftalık performans raporu ve optimizasyon aksiyonları; aylık strateji değerlendirmesi ve lead kalitesi özeti." },
];

function PerformanceChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="border-t border-[var(--border)] bg-[#0a66c2] py-24 sm:py-32" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[900px]">
        <motion.h2
          className="text-3xl font-light tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          B2B Lead Performansında Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-white/80"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Gösterim, tıklama ve lead maliyeti: karar vericiye ulaşmanın verisi.
        </motion.p>
        <motion.div
          className="mt-14 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-white/20 bg-white/10 px-8 py-10 backdrop-blur-xl sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-white/90">CPL trendi</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="liChartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M20 100 L70 82 L120 65 L170 48 L220 32 L260 20"
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
                d="M20 100 L70 82 L120 65 L170 48 L220 32 L260 20 L260 140 L20 140 Z"
                fill="url(#liChartGrad)"
                style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease-out 0.4s" }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/80">Lead maliyeti iyileşmesi</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 px-8 py-10 backdrop-blur-xl sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-white/90">Kampanya türleri</span>
            <div className="flex flex-col gap-4">
              {["Sponsored Content", "Message Ads", "Lead Gen Forms"].map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-white" />
                  <span className="text-sm font-medium text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function LinkedInReklamlariContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eef4fc] via-white to-[#f0f9ff] py-28 sm:py-36 dark:from-[#0f172a] dark:via-[var(--background)] dark:to-[#0c4a6e]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-[#0A66C2]/10 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/30 bg-[#0A66C2]/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0A66C2] dark:text-blue-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn Reklamları
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              B2B&apos;de Doğru Karar Vericiye{" "}
              <span className="bg-gradient-to-r from-[#0A66C2] to-[#004182] bg-clip-text text-transparent">
                Ulaşın
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              Hedefleme, teklif ve kreatif kurguyu birlikte yönetiyoruz. <strong className="text-[var(--foreground)]">Lead kalitesini</strong> raporlarla görünür kılıyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-[#0A66C2] px-7 py-3.5 text-sm font-medium text-white shadow-lg transition hover:bg-[#004182]">
                Teklif Al
              </Link>
              <Link href="/hizmetler/dijital-reklam/tiktok-reklamlari" className="inline-flex items-center rounded-full border-2 border-[#0A66C2]/30 bg-white px-7 py-3.5 text-sm font-medium text-[#0A66C2] transition hover:bg-[#0A66C2]/5">
                TikTok Reklamları
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#0A66C2]/20 blur-xl" />
            <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-[#0A66C2]/20 bg-white/80 shadow-xl dark:bg-[var(--card)]/80 sm:h-60 sm:w-60">
              <svg className="h-28 w-28 sm:h-32 sm:w-32" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
              Hedef kitle (sektör, unvan, şirket büyüklüğü), lead form / web kurgusu ve B2B kreatif mesajlaşma; haftalık performans raporu ve optimizasyon aksiyonları.
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
              LinkedIn reklam metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
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
            B2B hedeflerinize LinkedIn ile ulaşmaya hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            Lead generation ve karar verici hedefleme ile <strong className="text-[var(--foreground)]">kaliteli lead</strong> topluyoruz.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-[#0A66C2] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#004182]">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
