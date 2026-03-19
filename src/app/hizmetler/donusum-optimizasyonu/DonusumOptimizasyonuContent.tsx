"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const SECTOR_CRO = [
  {
    title: "Sağlık & Psikoloji",
    desc: "Uluslararası hasta adayının güven bariyerini aşan form tasarımları ve randevu hunileri.",
  },
  {
    title: "Gayrimenkul",
    desc: "Milyonluk yatırımlar için yüksek kaliteli lead (talep) toplama mühendisliği.",
  },
];

const STATS = [
  { value: "%40+", label: "Ortalama Dönüşüm Artışı" },
  { value: "8", label: "Yıllık Sektörel Refleks" },
  { value: "Premier Partner", label: "Google Onayı" },
];

export function DonusumOptimizasyonuContent() {
  return (
    <main className="bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* 1. Hero – Sonuç odaklı giriş + labirent → çizgi grafik */}
        <section className="relative overflow-hidden px-4 pt-28 pb-24 sm:px-6 sm:pt-36 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-[1000px] text-center">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#1d1d1f] sm:text-6xl md:text-7xl">
              Tıklamalar Sadece Başlangıçtır. Dönüşümler İse Hedef.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)]">
              Reklam bütçenizi sadece trafik çekmek için değil, sonuç almak için harcıyoruz. 8 yıllık veri mühendisliğiyle, her ziyaretçinin müşteriye dönüşme yolculuğunu pürüzsüzleştiriyoruz.
            </p>
          </div>
          {/* Labirent → düz çizgi (satışa giden yol) – minimalist parlayan grafik */}
          <AnimatedSection delay={0.15}>
            <div className="relative mx-auto mt-16 max-w-[700px] sm:mt-20">
              <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-b from-[var(--background)] to-white p-8 shadow-xl sm:p-12">
                <svg viewBox="0 0 400 180" className="w-full" aria-hidden>
                  <defs>
                    <linearGradient id="cro-path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(148 163 184)" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="rgb(34 197 94)" stopOpacity="1" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Labirent benzeri kıvrımlı yol (sol yarı) */}
                  <path
                    d="M 20 90 Q 60 50 100 90 T 180 90 Q 220 130 260 90 T 340 90"
                    fill="none"
                    stroke="url(#cro-path-grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 4"
                    opacity="0.7"
                    filter="url(#glow)"
                  />
                  {/* Düz çizgi – hedef (sağ yarı, satış) */}
                  <path
                    d="M 200 90 L 380 90"
                    fill="none"
                    stroke="url(#cro-path-grad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <circle cx="20" cy="90" r="6" fill="rgb(148 163 184)" className="opacity-80" />
                  <circle cx="380" cy="90" r="8" fill="rgb(34 197 94)" filter="url(#glow)" />
                  <text x="12" y="75" fill="var(--muted)" fontSize="10" fontWeight="600">Trafik</text>
                  <text x="358" y="75" fill="rgb(34 197 94)" fontSize="10" fontWeight="600">Satış</text>
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* 2. Neden CRO? – Stratejik derinlik */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[900px]">
              <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Neden CRO?
              </h2>
              <p className="mt-8 text-xl leading-relaxed text-[var(--foreground)]">
                Trafik getirmek bir reklamcının görevidir; o trafiği ciroya dönüştürmek ise bir stratejistin işidir. Google Premier Partner vizyonumuzla, web sitenizi sadece &apos;güzel&apos; değil, &apos;ikna edici&apos; bir satış makinesine dönüştürüyoruz.
              </p>
              <p className="mt-10 text-2xl font-semibold tracking-tight text-blue-600">
                Daha az bütçeyle, daha çok randevu. İşte Ala Medya farkı.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* 3. AI Laboratuvarı – Glassmorphism Bento */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-center text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Yapay Zeka Laboratuvarı: AI Destekli A/B Testleri
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-xl text-[var(--muted)]">
                Kullanıcı davranışlarını tahmin etmiyoruz, onları AI ile analiz ediyoruz.
              </p>
              <div className="mt-16 grid gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl backdrop-blur-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                    <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h7.5m-7.5 0l.5 1.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">Gemini 3.1 Pro & Claude 4.6 Sonnet Analitiği</h3>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    Gemini 3.1 Pro ve Claude 4.6 Sonnet modellerimizle ısı haritalarını ve tıklama verilerini işliyoruz. Kullanıcı niyetini (Search Intent) analiz ederek sürtünme noktalarını tespit ediyoruz.
                  </p>
                </div>
                <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl backdrop-blur-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
                    <svg className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">Psikolojik Tetikleyiciler</h3>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    Claude 4.6 Sonnet kullanarak, kullanıcıyı aksiyona geçirecek en güçlü metin ve buton kombinasyonlarını kurguluyoruz.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 4. Sektörel CRO Uzmanlığı */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Sektörel CRO Uzmanlığı
              </h2>
              <p className="mt-6 max-w-2xl text-xl text-[var(--muted)]">
                Her sektörün dönüşüm psikolojisi farklı; biz buna göre tasarlıyoruz.
              </p>
              <div className="mt-16 grid gap-8 sm:grid-cols-2">
                {SECTOR_CRO.map((s, i) => (
                  <AnimatedSection key={s.title} delay={i * 0.08}>
                    <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
                      <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{s.title}</h3>
                      <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">{s.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 5. Sayılarla Başarı – devasa altın rakamlar */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-center text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Teknik Şeffaflık: Sayılarla Başarı
              </h2>
              <div className="mt-16 grid gap-12 border-t border-[var(--border)] pt-16 sm:grid-cols-3">
                {STATS.map((s, i) => (
                  <AnimatedSection key={s.label} delay={i * 0.1}>
                    <div className="text-center">
                      <div className="text-5xl font-bold tracking-tight text-[var(--gold)] sm:text-6xl md:text-7xl">
                        {s.value}
                      </div>
                      <div className="mt-3 text-xl font-medium text-[var(--muted)]">{s.label}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 6. Final CTA – Strateji Analizi kartı */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1000px]">
              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-blue-50 to-indigo-50/50 p-10 shadow-xl sm:p-14">
                <h2 className="text-center text-4xl font-bold leading-tight tracking-tight text-[#1d1d1f] sm:text-5xl">
                  Web sitenizin gerçek potansiyelini keşfetmeye hazır mısınız?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-center text-xl text-[var(--muted)]">
                  Mevcut trafiğinizi daha verimli kullanmak için bugün analiz başlatalım.
                </p>
                <div className="mt-10 flex justify-center">
                  <Link
                    href="/#iletisim-form"
                    className="btn-shimmer inline-flex rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-105 hover:shadow-blue-600/40"
                  >
                    Strateji Analizi Başlat
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
