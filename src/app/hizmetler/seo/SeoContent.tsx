"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export function SeoContent() {
  return (
    <main className="bg-[var(--background)]">
      {/* Hero – Algoritmik Otorite ve Kalıcı Büyüme */}
      <section className="mx-auto max-w-[900px] px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          Arama Motoru Optimizasyonu
        </p>
        <h1 className="mt-6 font-light tracking-tight text-[var(--foreground)] text-4xl leading-[1.15] sm:text-5xl md:text-6xl">
          Algoritmik Otorite ve Kalıcı Büyüme
        </h1>
        <p className="mt-12 max-w-2xl text-lg font-light leading-relaxed text-[var(--muted)]">
          <strong className="font-semibold text-[var(--foreground)]">Google&apos;ın en başarılı %3&apos;lük dilimindeki</strong> bir Premier Partner&apos;in SEO vizyonu: organik trafiği sürdürülebilir büyüme hattına taşımak.
        </p>
        <div className="mt-14">
          <Link href="/#iletisim" className="inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
            SEO Analizi Başlat
          </Link>
        </div>
      </section>

      {/* Bölüm 1: E-E-A-T ve Otorite İnşası */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Deneyim, Uzmanlık, Otorite ve Güven <span className="font-semibold">(E-E-A-T)</span>
            </h2>
            <p className="mt-4 text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
              Kavramı sayfanın merkezine koyuyoruz
            </p>
            <p className="mt-10 max-w-3xl text-2xl font-light leading-relaxed text-[var(--foreground)] sm:text-3xl">
              Biz sadece anahtar kelime yerleştirmiyoruz; markanızı Google&apos;ın gözünde bir <strong className="font-semibold">&quot;Otorite Figürü&quot;</strong>ne dönüştürüyoruz.
            </p>
            <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-[var(--muted)]">
              E-E-A-T, arama kalite rehberlerinin temelidir. İçerikleri deneyim (Experience), uzmanlık (Expertise), otorite (Authoritativeness) ve güven (Trustworthiness) ile besleyerek sıralamaları kalıcı hale getiriyoruz.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Bölüm 2: Semantik SEO ve AI-Native İçerik */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#f9fafb] py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Semantik SEO ve AI-Native İçerik
            </h2>
            <p className="mt-8 text-base font-light leading-relaxed text-[var(--muted)] sm:text-lg">
              <strong className="text-[var(--foreground)]">Claude</strong> ve <strong className="text-[var(--foreground)]">Gemini</strong> kullanarak, rakiplerinizin kapsamadığı içerik boşluklarını (Content Gaps) saniyeler içinde tespit ediyor ve kullanıcı niyetine (Search Intent) en uygun içerik kümelerini (Topic Clusters) oluşturuyoruz.
            </p>
            <ul className="mt-10 space-y-4 font-light text-[var(--muted)]">
              <li className="flex gap-3">
                <span className="text-[var(--foreground)]">·</span>
                Content Gaps: Rakiplerde eksik, sizin sahipleneceğiniz konular
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--foreground)]">·</span>
                Search Intent: Bilgi, işlem ve navigasyon niyetine göre sayfa yapısı
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--foreground)]">·</span>
                Topic Clusters: Ana konu + alt konular ile entity ve anlamsal sinyal güçlendirme
              </li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* Bölüm 3: Teknik Kusursuzluk (Invisible Engineering) */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Teknik Kusursuzluk <span className="font-normal text-[var(--muted)]">(Invisible Engineering)</span>
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                <p className="text-base font-light leading-relaxed text-[var(--muted)]">
                  <strong className="text-[var(--foreground)]">8 yıllık</strong> sektörel birikimle; Core Web Vitals, JSON-LD yapılandırılmış veriler ve tarama bütçesi (Crawl Budget) yönetimini kusursuzlaştırıyoruz.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                <p className="text-base font-light leading-relaxed text-[var(--muted)]">
                  <strong className="text-[var(--foreground)]">Apple.com</strong> hızında, mobil öncelikli (Mobile-First) teknik altyapı desteği.
                </p>
              </div>
            </div>
            <p className="mt-8 max-w-2xl text-sm font-light text-[var(--muted)]">
              Görünmeyen mühendislik: kullanıcı sadece hızlı ve doğru sonuçları görür; arka planda indekslenme, yapı ve sinyaller optimize edilir.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Bölüm 4: Sektörel Başarı Kanıtı – Lotus %200 grafik */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#f9fafb] py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Sektörel Başarı Kanıtı
            </h2>
            <p className="mt-3 max-w-xl text-base font-light text-[var(--muted)]">
              Rekabetin en yüksek olduğu sağlık sektöründe organik trafik büyümesi.
            </p>
            <div className="mt-14 rounded-2xl border border-[var(--border)] bg-white p-8 sm:p-10">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <span className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">Lotus Diş</span>
                  <p className="mt-2 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
                    Organik trafik <strong className="text-green-600 dark:text-green-400">%200</strong> artış
                  </p>
                  <p className="mt-2 text-sm font-light text-[var(--muted)]">
                    Sağlık sektöründe rekabet yoğun; E-E-A-T ve teknik altyapı ile sürdürülebilir büyüme sağlandı.
                  </p>
                </div>
                {/* Başarı grafiği – görsel çubuk */}
                <div className="flex items-end gap-2 sm:gap-3">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-24 w-12 rounded-t bg-[var(--muted)]/30 sm:w-14" title="Başlangıç" />
                    <span className="text-xs font-light text-[var(--muted)]">Önce</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-40 w-12 rounded-t bg-green-500/80 sm:h-48 sm:w-14" title="%200 artış" />
                    <span className="text-xs font-semibold text-[var(--foreground)]">Sonra</span>
                  </div>
                </div>
              </div>
              <p className="mt-8 border-t border-[var(--border)] pt-6 text-sm font-light text-[var(--muted)]">
                Lotus Diş gibi rekabetin en yüksek olduğu sağlık sektöründe, organik trafiği <strong className="text-[var(--foreground)]">%200</strong> nasıl artırdığımızı semantik SEO, teknik iyileştirme ve içerik stratejisi ile gerçekleştirdik.
              </p>
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
              <Link href="/hizmetler/dijital-reklam/google-ads" className="inline-flex rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/10 dark:bg-[var(--card)]">
                Google Ads Hizmetlerini İncele
              </Link>
              <Link href="/#iletisim" className="inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Bütünsel Strateji Konuşalım
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <section className="border-t border-[var(--border)] py-24 sm:py-32">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-3xl">
            Organik büyüme hattınızı birlikte kuralım.
          </h2>
          <Link href="/#iletisim" className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
            Ücretsiz SEO Önerisi Alın
          </Link>
        </div>
      </section>
    </main>
  );
}
