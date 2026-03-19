"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

/* ─── Premier Partner: Apple-style icons ─── */
const PREMIER_ITEMS = [
  {
    title: "Doğrudan Google Desteği",
    desc: "Google'dan alınan doğrudan hesap desteği ile sorunlarınız hızlıca çözülür.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#EEF2FF" />
        <path d="M24 14l2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7.9-5.6-4-3.9 5.6-.8L24 14z" fill="#4285F4" />
      </svg>
    ),
  },
  {
    title: "Beta Özelliklere Erken Erişim",
    desc: "Yeni ürünlere (Beta) erken erişim ile rakiplerinizden önce test edin.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#F0FDF4" />
        <path d="M16 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#10a37f" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="28" r="2" fill="#10a37f" />
        <path d="M20 20l-2-4M28 20l2-4M24 18v-4" stroke="#10a37f" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Gelişmiş Kampanya İçgörüleri",
    desc: "Raporlama ve strateji için gelişmiş kampanya içgörülerine erişim.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FFF7ED" />
        <rect x="14" y="16" width="20" height="16" rx="3" stroke="#F59E0B" strokeWidth="2.5" />
        <path d="M18 24h4M18 28h8M18 32h6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="22" r="2" fill="#F59E0B" />
      </svg>
    ),
  },
];

/* ─── Psikoloji & Ruh Sağlığı: 3'lü teknik kartlar ─── */
const PSIKOLOJI_CARDS = [
  {
    title: "Niyet Odaklı Hedefleme",
    desc: "Sadece 'Psikolog' kelimesine değil; 'Kaygı bozukluğu', 'Aile danışmanlığı' veya 'Ergen terapisi' gibi spesifik ve çözüm arayan niş aramalara odaklanıyoruz. AI modellerimizle kriz anındaki aramalar ile bilgi arayan kullanıcıları birbirinden ayırıyoruz.",
  },
  {
    title: "Google Reklam Politikaları Yönetimi",
    desc: "Google Premier Partner olmanın avantajıyla, sağlık ve hassas içerik politikalarına (Healthcare & Medicines) %100 uyumlu kampanyalar yönetiyoruz. Reklamlarınızın kısıtlanmasını veya askıya alınmasını önleyen 'Beyaz Liste' (Whitelist) stratejileri uyguluyoruz.",
  },
  {
    title: "Dönüşüm Hunisi (Therapy Funnel)",
    desc: "Danışan adayı için ilk temas noktası olan Landing Page'lerinizi (İniş Sayfaları), güven sarsıcı 'agresif' butonlardan arındırıyor; Apple sadeliğinde, profesyonel ve huzur veren bir kullanıcı deneyimiyle optimize ediyoruz.",
  },
];

/* ─── Veri şeffaflığı tablosu (Apple gizlilik tarzı) ─── */
const DATA_METRICS = [
  { metric: "Tıklama oranı (CTR)", how: "Kampanya ve anahtar kelime bazında gerçek zamanlı takip; anomali uyarıları." },
  { metric: "Dönüşüm oranı", how: "GA4 + GTM ile sayfa ve eylem bazlı dönüşüm; hedefe göre optimize edilmiş raporlama." },
  { metric: "ROAS", how: "Gelir / reklam harcaması oranı; ürün ve kampanya düzeyinde net görünürlük." },
];

const FAQ_DATA = [
  { q: "Google Premier Partner ne anlama gelir?", a: "Google tarafından belirlenen harcama, büyüme ve sertifika kriterlerini karşılayan en iyi %3'lük ajans dilimini ifade eder. Bu statü, yeni beta özelliklere erken erişim ve doğrudan Google hesap desteği anlamına gelir." },
  { q: "Bütçem nasıl yönetilir?", a: "Her kuruşun dönüşüm odaklı harcandığından emin olmak için günlük takip ve anlık müdahale yapılır. Bütçe dağılımı, kampanya performansına göre sürekli optimize edilir." },
  { q: "Raporları ne sıklıkla alırım?", a: "İstediğiniz an görebileceğiniz canlı Looker Studio panelinin yanı sıra haftalık performans özetleri ve aylık detaylı stratejik analizler sunuyoruz." },
  { q: "Minimum reklam bütçesi ne kadar olmalı?", a: "Sektöre ve hedeflere göre değişmekle birlikte, anlamlı veri toplayıp optimize edebilmek için aylık minimum bütçe önerilerimizi ücretsiz ön görüşmede paylaşıyoruz." },
  { q: "Sonuçları ne zaman görmeye başlarım?", a: "İlk veriler birkaç gün içinde akmaya başlar. Anlamlı optimizasyon sonuçları genellikle 2-4 hafta içinde görülür; tam performansa ulaşma süreci sektöre göre 1-3 ay arasında değişir." },
];

/* ─── Reklam Performansında Şeffaflık: Apple Health/Stocks tarzı grafik ─── */
function PerformanceDashboardSection() {
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
          Reklam Performansında Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-white/70"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Bütçenin ROAS&apos;a dönüşümü: veri odaklı, şeffaf raporlama.
        </motion.p>
        <motion.div
          className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-center sm:gap-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="glass-card flex flex-col items-center rounded-2xl px-8 py-10 sm:px-12 sm:py-12">
            <span className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">8 Yıllık Veri Birikimi</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Yukarı ivme çizgisi – Apple Stocks tarzı */}
              <path
                d="M20 120 L60 95 L100 78 L140 52 L180 38 L220 22 L260 12"
                stroke="var(--gold)"
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
                d="M20 120 L60 95 L100 78 L140 52 L180 38 L220 22 L260 12 L260 140 L20 140 Z"
                fill="url(#chartGrad)"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: "opacity 0.8s ease-out 0.4s",
                }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/70">Bütçe → ROAS dönüşüm trendi</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── AI Engine: Gemini, Claude, ChatGPT → Ala Medya (ışık hüzmeleri) ─── */
function AIEngineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="border-t border-[var(--border)] bg-[var(--night)] py-24 sm:py-32" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[1000px]">
        <motion.h2
          className="text-center text-3xl font-light tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          İnsan Zekası + AI Hızı
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-xl text-center text-base font-light text-white/70"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Gemini 3.1 Pro, Claude 4.6 Sonnet ve GPT-5.4 Thinking entegrasyonu ile reklam optimizasyonu.
        </motion.p>

        <motion.div
          className="relative mt-16 flex flex-wrap items-center justify-center gap-6 sm:mt-20 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {/* Arka planda merkeze akan çizgiler (ışık hüzmeleri) */}
          <svg className="absolute left-1/2 top-1/2 h-24 w-full max-w-md -translate-x-1/2 -translate-y-1/2 sm:h-28" viewBox="0 0 400 100" fill="none">
            <motion.path
              d="M 40 50 Q 200 50 200 50"
              stroke="var(--gold)"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeLinecap="round"
              strokeDasharray="180"
              initial={{ strokeDashoffset: 180 }}
              animate={inView ? { strokeDashoffset: 0 } : { strokeDashoffset: 180 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            />
            <motion.path
              d="M 200 15 L 200 50"
              stroke="var(--gold)"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeLinecap="round"
              strokeDasharray="40"
              initial={{ strokeDashoffset: 40 }}
              animate={inView ? { strokeDashoffset: 0 } : { strokeDashoffset: 40 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.path
              d="M 360 50 Q 200 50 200 50"
              stroke="var(--gold)"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeLinecap="round"
              strokeDasharray="180"
              initial={{ strokeDashoffset: 180 }}
              animate={inView ? { strokeDashoffset: 0 } : { strokeDashoffset: 180 }}
              transition={{ duration: 0.9, delay: 0.55 }}
            />
          </svg>

          {/* Sol: Gemini */}
          <motion.div
            className="glass-card flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl sm:h-20 sm:w-20"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14 8H20L15 11L17 17L12 14L7 17L9 11L4 8H10L12 2Z" fill="url(#gemini)" />
              <defs>
                <linearGradient id="gemini" x1="4" y1="2" x2="20" y2="17">
                  <stop stopColor="#8E75B2" />
                  <stop offset="1" stopColor="#4285F4" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Orta-sol: Claude */}
          <motion.div
            className="glass-card flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl sm:h-20 sm:w-20"
            initial={{ opacity: 0, y: -15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#D97706" strokeWidth="2" />
              <path d="M8 12l3 3 5-6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* Merkez: Ala Medya (çip) */}
          <motion.div
            className="glass-card flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-[var(--gold)]/40 sm:h-24 sm:w-24"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <span className="text-xl font-bold text-[var(--gold)] sm:text-2xl">A</span>
          </motion.div>

          {/* Orta-sağ: ChatGPT */}
          <motion.div
            className="glass-card flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl sm:h-20 sm:w-20"
            initial={{ opacity: 0, y: -15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#10A37F" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-12 text-center text-sm font-light text-white/60"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Smart Bidding, PMax ve anahtar kelime analizi — veri + makine öğrenimi ile yönetiliyor.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Sektörel Başarı: App Store tarzı büyük kartlar + altın metrik ─── */
const SECTOR_CARDS = [
  {
    sector: "Sağlık Turizmi",
    client: "Lotus Diş",
    desc: "Global hasta odaklı, yüksek kaliteli lead toplama stratejileri.",
    metric: "%300 ROAS artışı",
  },
  {
    sector: "Otomotiv & Hizmet",
    client: "Sonax",
    desc: "Lokal aramada dominasyon ve marka bilinirliği odaklı video reklam modelleri.",
    metric: "%180 dönüşüm artışı",
  },
  {
    sector: "Fitness",
    client: "Xoom Training Club",
    desc: "Performans kampanyaları ile büyüme ve üye kazanımı.",
    metric: "%250 ROAS",
  },
];

function SectorSuccessCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" ref={ref}>
      {SECTOR_CARDS.map((row, i) => (
        <motion.div
          key={row.client}
          className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-lg transition hover:shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="absolute right-4 top-4 rounded-xl bg-[var(--night)] px-3 py-1.5 text-right">
            <span className="text-sm font-semibold text-[var(--gold)]">{row.metric}</span>
          </div>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--night)]/5">
            <span className="text-2xl font-bold text-[var(--foreground)]">{row.client.charAt(0)}</span>
          </div>
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">{row.sector}</span>
          <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{row.client}</p>
          <p className="mt-4 font-light leading-relaxed text-[var(--muted)]">{row.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function GoogleAdsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      {/* Hero – Zirvenin %3'lük dilimi */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8faff] via-white to-[#eef4ff] py-28 sm:py-36">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-[320px] w-[320px] rounded-full bg-cyan-100/30 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" fill="#FBBC05" />
              </svg>
              <strong>Google Premier Partner</strong>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Veriyle Yönetilen,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                AI ile Güçlendirilen
              </span>{" "}
              Google Ads.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              <strong className="text-[var(--foreground)]">Google&apos;ın en başarılı %3&apos;lük diliminde</strong> yer alan bir Premier Partner ile çalışmanın farkını yaşayın. <strong className="text-[var(--foreground)]">8 yıllık</strong> sektörel tecrübemizi, en yeni yapay zeka araçlarıyla birleştirerek ROI odaklı kampanyalar kurguluyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="#iletisim" className="inline-flex items-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition hover:scale-[1.02] hover:bg-blue-700">
                Ücretsiz Hesap Denetimi Al
              </Link>
              <Link href="/referanslar" className="inline-flex items-center rounded-full border-2 border-blue-200 bg-white px-7 py-3.5 text-sm font-medium text-blue-600 transition hover:border-blue-300 hover:bg-blue-50">
                Başarı Hikayelerini İncele
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0 items-center justify-center">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
              {/* Google Premier Partner rozeti – altın parlama */}
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute -inset-3 rounded-[2rem] opacity-60 blur-xl"
                  style={{ boxShadow: "0 0 48px 12px rgba(201, 168, 76, 0.35)" }}
                />
                <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-white/60 bg-white/50 shadow-2xl backdrop-blur-xl sm:h-60 sm:w-60">
                  <svg className="h-24 w-24 sm:h-28 sm:w-28" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
              </div>
              {/* Apple tarzı cam kartlar: erişim maddeleri */}
              <div className="flex flex-col gap-4 sm:max-w-[260px]">
                <div className="rounded-2xl border border-white/60 bg-white/40 px-5 py-4 shadow-lg backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--foreground)]">Google verilerine doğrudan erişim</p>
                      <p className="mt-0.5 text-sm text-[var(--muted)]">Kampanya ve hesap içgörülerine tam erişim.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/40 px-5 py-4 shadow-lg backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--foreground)]">Beta özelliklere öncelikli katılım</p>
                      <p className="mt-0.5 text-sm text-[var(--muted)]">Yeni ürünlere rakiplerden önce erişim.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reklam Performansında Şeffaflık – minimalist yukarı ivme grafiği */}
      <PerformanceDashboardSection />

      {/* Bölüm 1: Premier Partner Ayrıcalığı */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Premier Partner Ayrıcalığı
            </h2>
            <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-[var(--foreground)]">
              <strong className="font-semibold">Google&apos;ın en başarılı %3&apos;lük diliminde</strong> yer alan bir Premier Partner ile çalışmanın farkını yaşayın.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              Google&apos;dan alınan doğrudan destek, yeni ürünlere (Beta) erken erişim ve gelişmiş kampanya içgörüleri ile reklamlarınızı bir adım önde yönetiyoruz.
            </p>
            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {PREMIER_ITEMS.map((item, i) => (
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

      {/* Bölüm 2: AI Optimizasyon Süreci – İnsan Zekası + AI Hızı */}
      <AIEngineSection />

      {/* Bölüm 2 (eski metin): Gemini destekli – kısa metin blokları */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#f9fafb] py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              <strong className="font-semibold">Gemini 3.1 Pro</strong> destekli reklam optimizasyonu
            </h2>
            <p className="mt-8 text-base font-light leading-relaxed text-[var(--muted)] sm:text-lg">
              Smart Bidding (Akıllı Teklif) stratejilerini veri ve makine öğrenimi ile yönetiyoruz. Bütçenizi sadece harcamıyoruz; her kuruşun en yüksek dönüşümü getirmesi için makine öğrenimi modellerini (<strong className="text-[var(--foreground)]">PMax</strong>) eğitiyoruz.
            </p>
            <ul className="mt-10 space-y-4 font-light text-[var(--muted)]">
              <li className="flex gap-3">
                <span className="text-[var(--foreground)]">·</span>
                Maximize conversions, Target ROAS ve Target CPA ile hedefe özel teklif stratejileri
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--foreground)]">·</span>
                Performans Max kampanyalarında otomatik yerleşim ve kreatif optimizasyonu
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--foreground)]">·</span>
                <strong className="text-[var(--foreground)]">Gemini 3.1 Pro</strong> ve <strong className="text-[var(--foreground)]">Claude 4.6 Sonnet</strong> entegrasyonu ile pazar ve anahtar kelime analizi
              </li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* Bölüm 3: Sektörel Dikey Uzmanlık (Performance Matrix) */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Sektörel Dikey Uzmanlık
            </h2>
            <p className="mt-3 max-w-xl text-base font-light text-[var(--muted)]">
              Kanıtlanmış sonuçlar: sektöre özel Google Ads başarı metrikleri.
            </p>
            <SectorSuccessCards />

            {/* Psikoloji & Ruh Sağlığı – Apple meditasyon tarzı "Huzur" kartı */}
            <div className="mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50/90 via-sky-50/50 to-teal-50/40 py-20 sm:py-24 dark:from-slate-900/40 dark:via-sky-950/20 dark:to-teal-950/20">
              <div className="relative mx-auto max-w-[1000px] px-6 sm:px-10">
                {/* Soyut huzur ikonu – yumuşak daire + dalga */}
                <div className="flex justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-teal-100/80 dark:from-sky-900/40 dark:to-teal-900/30 sm:h-44 sm:w-44">
                    <svg className="h-20 w-20 text-sky-400/80 dark:text-sky-500/60 sm:h-24 sm:w-24" viewBox="0 0 64 64" fill="none" aria-hidden>
                      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                      <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.4" />
                      <path d="M32 8v6M32 50v6M8 32h6M50 32h6M14 14l4 4M46 46l4 4M46 14l-4 4M14 46l-4 4" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                    </svg>
                  </div>
                </div>
                <span className="mt-8 block text-center text-xs font-medium uppercase tracking-widest text-sky-700/80 dark:text-sky-400/80">
                  Psikoloji & Ruh Sağlığı
                </span>
                <h3 className="mt-4 text-center text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-3xl">
                  Dijitalde Güven İnşası: Ruh Sağlığı Uzmanlığı
                </h3>
                <p className="mx-auto mt-8 max-w-2xl text-center text-base font-light leading-relaxed text-[var(--muted)]">
                  Psikoloji alanında reklam yönetimi, standart pazarlama kurallarının ötesindedir. Potansiyel danışanlarınızın en hassas anlarındaki arama niyetlerini analiz ediyoruz. <strong className="text-[var(--foreground)]">Claude 4.6 Sonnet</strong> ve <strong className="text-[var(--foreground)]">Gemini 3.1 Pro</strong> ile &quot;çözüm ve güven odaklı&quot; reklam metinleri kurguluyoruz. <strong className="text-[var(--foreground)]">8 yıllık</strong> tecrübemizle, etik sınırları koruyarak uzmanlığınızı doğru kitleyle buluşturuyoruz.
                </p>
                <div className="mt-14 grid gap-6 sm:grid-cols-3">
                  {PSIKOLOJI_CARDS.map((card, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-sky-100/80 bg-white/90 p-6 shadow-sm dark:border-sky-900/50 dark:bg-[var(--card)]/80"
                    >
                      <h4 className="text-base font-semibold text-[var(--foreground)]">{card.title}</h4>
                      <p className="mt-3 text-sm font-light leading-relaxed text-[var(--muted)]">{card.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
                  <div className="relative aspect-[4/3] min-h-[200px] overflow-hidden rounded-2xl bg-sky-100/50 dark:bg-sky-950/30">
                    <Image
                      src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80"
                      alt="Profesyonel ve huzur veren danışmanlık ortamı"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                      Gizlilik ve KVKK: Danışan Verisinin Kutsallığı
                    </h4>
                    <p className="mt-4 text-sm font-light leading-relaxed text-[var(--muted)]">
                      Sunucu taraflı izleme ile danışan verilerini anonimleştiriyor, hem Google algoritmalarını besliyor hem de KVKK uyumluluğunu en üst düzeyde tutuyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Bölüm 4: Veri Şeffaflığı – Apple gizlilik tarzı tablo */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#f9fafb] py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Veri Şeffaflığı
            </h2>
            <p className="mt-3 max-w-xl text-base font-light text-[var(--muted)]">
              Tüm metrikleri nasıl takip ettiğimizi net ve anlaşılır biçimde sunuyoruz.
            </p>
            <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
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
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32">
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

      {/* Bütünsel Büyüme: Ads ve SEO Sinerjisi */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-gradient-to-br from-slate-50 to-blue-50/50 py-24 sm:py-32 dark:from-slate-900/50 dark:to-blue-950/20">
          <div className="mx-auto w-[90%] max-w-[800px] text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Bütünsel Büyüme: Ads ve SEO Sinerjisi
            </h2>
            <p className="mt-8 text-base font-light leading-relaxed text-[var(--muted)] sm:text-lg">
              Ads ile anlık sonuç, SEO ile kalıcı otorite. Ala Medya&apos;nın <strong className="text-[var(--foreground)]">360°</strong> yaklaşımıyla reklam verilerinden gelen içgörüleri SEO stratejimize entegre ederek, dijital pazarlama bütçenizi en verimli şekilde kullanıyoruz.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/hizmetler/seo" className="inline-flex rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/10 dark:bg-[var(--card)]">
                SEO Hizmetlerini İncele
              </Link>
              <Link href="/#iletisim" className="inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Bütünsel Strateji Konuşalım
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-3xl">
            Markanızı zirveye taşımaya hazırız.
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            <strong className="text-[var(--foreground)]">8 yıllık</strong> tecrübe ve <strong className="text-[var(--foreground)]">Premier Partner</strong> gücüyle tanışın.
          </p>
          <Link href="#iletisim" className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700">
            Hemen Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
