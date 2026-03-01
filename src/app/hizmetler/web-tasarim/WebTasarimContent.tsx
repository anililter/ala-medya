"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const VERTICALS = [
  {
    title: "Sağlık & Psikoloji",
    desc: "Güven veren, sade ve randevu odaklı (conversion-heavy) tasarımlar.",
  },
  {
    title: "Gayrimenkul",
    desc: "Yüksek kaliteli görsel sunum ve hızlı lead (talep) toplama formları.",
  },
  {
    title: "E-Ticaret & Kurumsal",
    desc: "Hızlı yüklenen, mobil uyumlu ve global standartlarda marka kimliği.",
  },
];

export function WebTasarimContent() {
  return (
    <main className="bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* 1. Hero – devasa başlık + mockup */}
        <section className="relative overflow-hidden px-4 pt-28 pb-24 sm:px-6 sm:pt-36 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-[1000px] text-center">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#1d1d1f] sm:text-6xl md:text-7xl">
              Sadece Bir Web Sitesi Değil; Bir Dönüşüm Makinesi.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)]">
              8 yıllık pazarlama verisini, Apple estetiği ve Next.js hızıyla birleştiriyoruz. Tasarımlarımız sadece bakmak için değil, sonuç almak içindir.
            </p>
          </div>
          {/* Devasa web mockup – derinlik efektli placeholder */}
          <AnimatedSection delay={0.15}>
            <div className="relative mx-auto mt-16 max-w-[900px] sm:mt-20">
              <div className="relative overflow-hidden rounded-2xl border-2 border-[var(--border)] bg-[var(--background)] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15),0_20px_40px_-12px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--background)] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="aspect-video bg-gradient-to-br from-blue-50 via-white to-cyan-50/50 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mx-auto h-16 w-48 rounded-lg bg-[#1d1d1f]/10" />
                    <div className="mx-auto mt-6 h-4 w-64 rounded bg-[#1d1d1f]/5" />
                    <div className="mx-auto mt-3 h-4 w-56 rounded bg-[#1d1d1f]/5" />
                    <div className="mx-auto mt-8 h-12 w-36 rounded-full bg-blue-500/20" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* 2. Tasarım Felsefesi – Design is How it Works */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <div className="flex flex-col items-center text-center">
                <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-500/10">
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.38 3.395a15.995 15.995 0 004.769-2.95m-4.769 9.75a21 21 0 00-3.342 9.365m-3.342-9.365a21 21 0 013.342 9.365" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                  Design is How it Works
                </h2>
                <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)]">
                  Steve Jobs&apos;ın dediği gibi; tasarım sadece nasıl göründüğü değil, nasıl çalıştığıdır. Ala Medya olarak; Lotus Diş veya Xoom gibi markalarımızda, kullanıcı deneyimini (UX) reklam verilerinden gelen içgörülerle şekillendiriyoruz.
                </p>
                <p className="mt-8 text-2xl font-semibold tracking-tight text-blue-600">
                  Hız, Mobil Öncelik ve Kusursuz Tipografi.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 3. AI Destekli Geliştirme – Bento Grid */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-center text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                AI Destekli Geliştirme Süreci
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-xl text-[var(--muted)]">
                Temiz kod, Core Web Vitals ve AI optimizasyonu.
              </p>
              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                    <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25M8.25 9.75L10.5 12l-2.25 2.25M4.5 9.75L6.75 12 4.5 14.25" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">Cursor, Claude, ChatGPT-4</h3>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    Web sitelerimizi kodlarken hatasız ve optimize edilmiş yapılar kuruyoruz.
                  </p>
                </div>
                <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                    <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">Temiz Kod</h3>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    Next.js ve Tailwind CSS ile Google&apos;ın Core Web Vitals kriterlerinde tam puan.
                  </p>
                </div>
                <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm sm:col-span-2 lg:col-span-1">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
                    <svg className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">AI Optimizasyonu</h3>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    İçerik yerleşimi ve kullanıcı akışları AI simülasyonlarıyla test edilir.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 4. Sektörel Dikey Çözümler */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Sektörel Dikey Çözümler
              </h2>
              <p className="mt-6 max-w-2xl text-xl text-[var(--muted)]">
                Her sektöre özel, dönüşüm odaklı web tasarımı.
              </p>
              <div className="mt-16 grid gap-8 sm:grid-cols-3">
                {VERTICALS.map((v, i) => (
                  <AnimatedSection key={v.title} delay={i * 0.08}>
                    <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
                      <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{v.title}</h3>
                      <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">{v.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 5. Neden Ala Medya? */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-center text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Neden Ala Medya?
              </h2>
              <div className="mt-16 grid gap-10 sm:grid-cols-2">
                <div className="rounded-3xl border border-[var(--border)] bg-white p-10">
                  <p className="text-xl font-semibold text-blue-600">Google Premier Partner</p>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    Google Premier Partner olmanın getirdiği veri odaklılık. Tasarladığımız her site, Google Ads ve SEO stratejilerinizle tam uyumlu bir ekosistem olarak doğar.
                  </p>
                </div>
                <div className="rounded-3xl border border-[var(--border)] bg-white p-10">
                  <p className="text-xl font-semibold text-blue-600">8 Yıllık Tecrübe</p>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    Binlerce kampanya verisiyle optimize edilmiş kullanıcı yolculukları.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 6. Final CTA – shimmer Apple mavisi buton */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-28 sm:py-36 lg:px-8">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl">
                Dijitaldeki Yeni Evinizi Bugün Tasarlayalım.
              </h2>
              <div className="mt-12">
                <Link
                  href="/#iletisim"
                  className="btn-shimmer inline-flex rounded-full bg-blue-600 px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.02] hover:bg-blue-700 hover:shadow-blue-600/40 dark:bg-blue-500 dark:shadow-blue-500/25 dark:hover:bg-blue-600"
                >
                  Projenizi Başlatalım
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
