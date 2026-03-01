"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const PAIN_POINTS = [
  {
    title: "Etik İhlal Riski",
    content:
      "Generic reklamlar, meslek etik kurallarına zarar verebilir. Biz, hassas politikaları (Healthcare & Medicines) %100 uyumlu yönetiyoruz.",
    icon: "shield",
  },
  {
    title: "Mekanik Mesajlar",
    content:
      "Claude-3.5 ile empati odaklı metin yazarak, kriz anındaki kullanıcıya 'satış' değil, 'güven ve çözüm' sunuyoruz.",
    icon: "heart",
  },
  {
    title: "Niteliksiz Trafik",
    content:
      "Sadece 'psikolog' aramasına değil, 'anksiyete terapisti' gibi spesifik ve çözüm arayan niş niyetlere (Search Intent) odaklanıyoruz.",
    icon: "target",
  },
];

const FUNNEL_STEPS = [
  { label: "Analiz & Keşif", sub: "Gemini destekli pazar ve niyet analizi", color: "blue" },
  { label: "Etik Kreatif", sub: "Claude ile empati odaklı içerik üretimi", color: "green" },
  { label: "Niyet Hedefleme", sub: "Spesifik niyet aramalarına odaklanma", color: "amber" },
  { label: "Veri Optimizasyonu", sub: "Google Premier Partner gücüyle sürekli gelişim", color: "gold" },
];

const DASHBOARD_DATA = [
  { ay: "1. Ay", danisan: 20, maliyet: 100, organik: 15 },
  { ay: "2. Ay", danisan: 35, maliyet: 82, organik: 28 },
  { ay: "3. Ay", danisan: 52, maliyet: 65, organik: 45 },
  { ay: "4. Ay", danisan: 78, maliyet: 48, organik: 68 },
  { ay: "5. Ay", danisan: 95, maliyet: 38, organik: 88 },
  { ay: "6. Ay", danisan: 120, maliyet: 32, organik: 110 },
];

const BENTO_ITEMS = [
  { title: "Google Ads (Hassas Kampanya)", desc: "Etik uyum ve niş hedefleme.", icon: "ads" as const },
  { title: "SEO (Otorite İnşası)", desc: "Organik görünürlük ve güvenli içerik.", icon: "seo" as const },
  { title: "Dönüşüm & Web Tasarım", desc: "Apple estetiğinde, dingin ve randevu odaklı web deneyimi.", icon: "web" as const },
  { title: "Veri Analitiği (KVKK Uyumlu)", desc: "Server-Side tracking ve anonim veri işleme.", icon: "data" as const },
];

function BentoIcon({ type }: { type: "ads" | "seo" | "web" | "data" }) {
  const size = "h-8 w-8";
  const stroke = "stroke-[1.5]";
  if (type === "ads") {
    return (
      <svg className={`${size} text-blue-600 ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    );
  }
  if (type === "seo") {
    return (
      <svg className={`${size} text-emerald-600 ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    );
  }
  if (type === "web") {
    return (
      <svg className={`${size} text-amber-600 ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    );
  }
  return (
    <svg className={`${size} text-[var(--gold)] ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

export function PsikolojiContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const flowOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const trustScale = useTransform(scrollYProgress, [0.35, 0.7], [0.8, 1]);
  const trustOpacity = useTransform(scrollYProgress, [0.4, 0.75], [0, 1]);

  return (
    <main className="bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* 1. Hero – Empati ve Otorite */}
        <section
          ref={heroRef}
          className="relative overflow-hidden px-4 pt-28 pb-24 sm:px-6 sm:pt-36 sm:pb-32 lg:px-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-emerald-50/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
          <motion.div
            style={{ opacity: flowOpacity }}
            className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-full border border-blue-200/40 bg-gradient-to-br from-blue-100/30 to-transparent" style={{ animation: "spin 25s linear infinite" }} />
            <div className="absolute inset-8 rounded-full border border-emerald-200/40 bg-gradient-to-br from-emerald-100/20 to-transparent" style={{ animation: "spin 20s linear infinite reverse" }} />
            <div className="absolute inset-16 rounded-full border border-blue-300/30 bg-gradient-to-br from-blue-50/40 to-transparent" style={{ animation: "spin 15s linear infinite" }} />
          </motion.div>
          <motion.div
            style={{ scale: trustScale, opacity: trustOpacity }}
            className="pointer-events-none absolute left-1/2 top-[55%] flex -translate-x-1/2 -translate-y-1/2 justify-center"
            aria-hidden
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100/80 shadow-lg">
              <svg className="h-12 w-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </motion.div>

          <div className="relative z-10 mx-auto max-w-[1000px] text-center">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#1d1d1f] sm:text-6xl md:text-7xl">
              Etik Büyüme, Nitelikli Danışan: Psikologlara Özel Dijital Stratejiler.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)]">
              Sıradan bir reklam ajansı değil; ruh sağlığı alanının hassasiyetini bilen, 8 yıllık tecrübeye sahip çözüm ortağınız. Gemini destekli pazar analizi ve Claude-3.5 destekli metin yazımı ile &apos;reklam&apos; değil &apos;çözüm&apos; sunuyoruz.
            </p>
          </div>
        </section>

        {/* 2. Pain Points & Solutions */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Neden Genel Reklam Ajansları Psikologlar İçin Çalışmaz?
              </h2>
              <div className="mt-16 grid gap-8 sm:grid-cols-3">
                {PAIN_POINTS.map((p, i) => (
                  <AnimatedSection key={p.title} delay={i * 0.1}>
                    <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                        {p.icon === "shield" && (
                          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                        )}
                        {p.icon === "heart" && (
                          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                        )}
                        {p.icon === "target" && (
                          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16 12.12m-3.5-.68a14.98 14.98 0 01-6.16-12.12m3.5 1.68a14.98 14.98 0 001.5-7.62m-1.5 7.62a14.98 14.98 0 01-1.5-7.62m3.5 1.68a14.98 14.98 0 001.5 7.62" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{p.title}</h3>
                      <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">{p.content}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 3. 4 Adımlı Huni – Glassmorphism */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-center text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Ala Medya&apos;nın Fark Yaratan 4 Adımlı Hunisi
              </h2>
              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {FUNNEL_STEPS.map((step, i) => (
                  <AnimatedSection key={step.label} delay={i * 0.08}>
                    <div className="relative">
                      {i > 0 && (
                        <div className="absolute -left-3 top-14 hidden h-0.5 w-6 bg-gradient-to-r from-[var(--border)] to-transparent lg:block" aria-hidden />
                      )}
                      <div
                        className={`rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-xl ${
                          step.color === "blue" ? "shadow-blue-200/30" : ""
                        } ${step.color === "green" ? "shadow-emerald-200/30" : ""} ${
                          step.color === "amber" ? "shadow-amber-200/30" : ""
                        } ${step.color === "gold" ? "shadow-[var(--gold)]/20" : ""}`}
                      >
                        <div
                          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                            step.color === "blue"
                              ? "bg-blue-500/15 text-blue-600"
                              : step.color === "green"
                                ? "bg-emerald-500/15 text-emerald-600"
                                : step.color === "amber"
                                  ? "bg-amber-500/15 text-amber-600"
                                  : "bg-[var(--gold-muted)] text-[var(--gold)]"
                          }`}
                        >
                          <span className="text-xl font-bold">{i + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">{step.label}</h3>
                        <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">{step.sub}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 4. Veri Dashboard – Şeffaf Veri */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1000px]">
              <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Şeffaf Veri, Otorite Kanıtı.
              </h2>
              <p className="mt-6 text-xl text-[var(--muted)]">
                Nitelikli danışan talebi, randevu maliyeti ve organik erişilebilirlik metriklerinin sembolik ivmesi.
              </p>
              <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-6 shadow-lg sm:p-8">
                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={DASHBOARD_DATA} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <defs>
                        <filter id="line-glow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <linearGradient id="line-danisan" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#059669" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#059669" stopOpacity={1} />
                        </linearGradient>
                        <linearGradient id="line-maliyet" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity={1} />
                        </linearGradient>
                        <linearGradient id="line-organik" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#c9a84c" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#c9a84c" stopOpacity={1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="ay" tick={{ fontSize: 14, fill: "var(--muted)" }} />
                      <YAxis tick={{ fontSize: 14, fill: "var(--muted)" }} />
                      <Tooltip
                        contentStyle={{ borderRadius: "12px", border: "1px solid var(--border)", fontSize: "16px" }}
                        formatter={(value: number | undefined, name?: string) => [
                          value ?? 0,
                          name === "danisan" ? "Nitelikli Danışan" : name === "maliyet" ? "Maliyet Endeksi" : "Organik Erişim",
                        ]}
                      />
                      <Line type="monotone" dataKey="danisan" stroke="url(#line-danisan)" strokeWidth={2} dot={{ r: 5, filter: "url(#line-glow)" }} name="danisan" />
                      <Line type="monotone" dataKey="maliyet" stroke="url(#line-maliyet)" strokeWidth={2} dot={{ r: 5, filter: "url(#line-glow)" }} name="maliyet" />
                      <Line type="monotone" dataKey="organik" stroke="url(#line-organik)" strokeWidth={2} dot={{ r: 5, filter: "url(#line-glow)" }} name="organik" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 5. Bento Grid */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Sektörel Uzmanlık Matrisi
              </h2>
              <div className="mt-16 grid gap-6 sm:grid-cols-2">
                {BENTO_ITEMS.map((b, i) => (
                  <AnimatedSection key={b.title} delay={i * 0.06}>
                    <div className="flex gap-6 rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--background)]">
                        <BentoIcon type={b.icon} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{b.title}</h3>
                        <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">{b.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 6. Trust – KVKK & AI */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-gradient-to-br from-blue-50/50 to-emerald-50/50 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[900px]">
              <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Gizlilik ve KVKK: Danışan Verisinin Kutsallığı
              </h2>
              <p className="mt-8 text-xl leading-relaxed text-[var(--foreground)]">
                Sunucu taraflı izleme (Server-Side Tracking) ile verileri anonimleştirerek işliyor, KVKK uyumluluğunu ve Google algoritmalarını Premier Partner standartlarında besliyoruz.
              </p>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-6 py-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <span className="text-lg font-bold text-blue-600">G</span>
                  </div>
                  <span className="font-semibold text-[var(--foreground)]">Gemini</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-6 py-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                    <span className="text-lg font-bold text-amber-700">C</span>
                  </div>
                  <span className="font-semibold text-[var(--foreground)]">Claude</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-6 py-4 shadow-sm">
                  <svg className="h-12 w-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="font-semibold text-[var(--foreground)]">CAPI & KVKK</span>
                </div>
              </div>
              <p className="mt-10 text-center text-lg text-[var(--muted)]">
                Psikogenetik Merkezi gibi hassas alanlardaki 8 yıllık tecrübemizle, danışan güvenini veri güvenliğiyle birleştiriyoruz.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* 7. Final CTA */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-28 sm:py-36 lg:px-8">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl">
                Dijitalde Gerçek Büyümeyi Birlikte Başlatalım.
              </h2>
              <p className="mt-6 text-xl text-[var(--muted)]">
                Markanızın dijital yolculuğunu pürüzsüzleştirip, uzmanlığınızı doğru kitleyle buluşturalım.
              </p>
              <div className="mt-12">
                <Link
                  href="/#iletisim-form"
                  className="btn-shimmer inline-flex rounded-full bg-blue-600 px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-105 hover:bg-blue-700 hover:shadow-blue-600/40"
                >
                  Ücretsiz Strateji Analizi Al
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
