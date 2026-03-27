"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const WHAT_WE_DO = [
  {
    num: "01",
    title: "Reklam Kreatifleri",
    desc: "Instagram, TikTok, Meta ve Google için dönüşüm odaklı görseller, videolar ve animasyonlar.",
    accent: "#3B82F6",
  },
  {
    num: "02",
    title: "Marka Görselleri",
    desc: "Logo, renk paleti, tipografi ve marka rehberi. Tutarlı ve akılda kalıcı bir kimlik.",
    accent: "#8B5CF6",
  },
  {
    num: "03",
    title: "Sosyal Medya Tasarımı",
    desc: "Algoritmaları durduran, kullanıcıyı harekete geçiren; platforma özel içerik formatları.",
    accent: "#F59E0B",
  },
  {
    num: "04",
    title: "Landing Page Tasarımı",
    desc: "Reklam trafiğini müşteriye dönüştüren, psikolojik akışa göre kurgulanmış sayfalar.",
    accent: "#10B981",
  },
];

const BIASES = [
  {
    id: "01",
    title: "İlk 3 Saniye",
    desc: "Kullanıcı kaymadan durmalı. Her kreatifte 'neden?' sorusu ilk kareye sığdırılır.",
  },
  {
    id: "02",
    title: "Sosyal Kanıt",
    desc: "Gerçek referanslar ve somut rakamlar, sezgisel güveni saniyeler içinde kurar.",
  },
  {
    id: "03",
    title: "Sadelik",
    desc: "Fazlalık dikkat çalmaz; satmaz. Her öğe bir neden taşır ya da kaldırılır.",
  },
  {
    id: "04",
    title: "Aksiyon Kolaylığı",
    desc: "Kullanıcının bir sonraki adımı tereddütsüz atması için görsel hiyerarşi bu adımı gösterir.",
  },
];

export function KreatifPsikolojisiContent() {
  return (
    <main className="bg-white text-[var(--foreground)]">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)] px-6 pt-36 pb-28 sm:pt-44 sm:pb-36">
        <div className="mx-auto max-w-[960px]">
          {/* Etiket */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-500">Reklam Tasarımı</span>
            <span className="text-[var(--border)]">·</span>
            <span className="rounded-full bg-purple-50 px-3 py-1 text-purple-500">Görsel Strateji</span>
            <span className="text-[var(--border)]">·</span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-500">Kreatif Üretim</span>
          </div>

          {/* Başlık */}
          <h1 className="mt-8 text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-[72px]">
            Tasarım değil,<br />
            <em className="not-italic text-[var(--muted)]">dönüştüren görsel.</em>
          </h1>

          {/* Açıklama + Butonlar yan yana */}
          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:items-end">
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              Reklamlarınızın durdurma gücü; tasarımın güzelliğinden değil,{" "}
              <strong className="text-[var(--foreground)]">psikolojik doğruluğundan</strong> gelir.
              Her kreatif, dönüşüm verisine dayalı görsel kararlarla üretilir.
            </p>
            <div className="flex flex-wrap gap-3 sm:justify-end">
              <Link
                href="/#iletisim"
                className="btn-shimmer relative inline-flex rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                <span className="relative z-10">Konuşalım</span>
              </Link>
              <Link
                href="/referanslar"
                className="inline-flex rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/8"
              >
                Referanslar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HİZMETLER ────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="border-b border-[var(--border)] bg-[#fafafa] py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[1100px]">

            {/* Bölüm başlığı */}
            <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-8">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ne üretiyoruz?</h2>
              <p className="hidden text-sm text-[var(--muted)] sm:block">Dört uzmanlık alanı</p>
            </div>

            {/* 4 kart — eşit yükseklik */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHAT_WE_DO.map((item) => (
                <div
                  key={item.num}
                  className="flex flex-col rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm transition hover:shadow-md"
                >
                  {/* Renk çizgisi */}
                  <div className="mb-6 h-0.5 w-10 rounded-full" style={{ backgroundColor: item.accent }} />
                  <p className="text-xs font-bold tabular-nums text-[var(--muted)]">{item.num}</p>
                  <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── PSİKOLOJİK PRENSİPLER ────────────────────────────── */}
      <AnimatedSection>
        <section className="border-b border-[var(--border)] bg-white py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[1100px]">

            {/* Bölüm başlığı */}
            <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-8">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Güzel tasarım yetmez.</h2>
              <p className="hidden text-sm text-[var(--muted)] sm:block">Doğru tetikleyici lazım</p>
            </div>

            {/* 4 kart — 2×2 grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {BIASES.map((b) => (
                <div
                  key={b.id}
                  className="group rounded-2xl border border-[var(--border)] bg-[#fafafa] p-8 transition hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-start gap-5">
                    <span className="min-w-[2rem] text-sm font-bold tabular-nums text-[var(--border)] group-hover:text-[var(--muted)] transition-colors">{b.id}</span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── PLATFORM UYUMU ───────────────────────────────────── */}
      <AnimatedSection>
        <section className="border-b border-[var(--border)] bg-[#fafafa] py-24 sm:py-32">
          <div className="mx-auto w-[90%] max-w-[1100px]">

            {/* Bölüm başlığı */}
            <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-8">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Her platform farklı bir dil konuşur.</h2>
              <p className="hidden text-sm text-[var(--muted)] sm:block">İki yaklaşım</p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {/* TikTok / Reels */}
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
                <div className="h-1.5 w-full bg-gradient-to-r from-rose-400 to-pink-400" />
                <div className="p-10">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">TikTok · Instagram Reels</p>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">Hareket ve Kanca</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    İlk 3 saniye kancası, problem-çözüm ritmi ve viral format uyumu. Kullanıcı reklam
                    izlediğini değil, ilgisini çeken bir içerik gördüğünü hissetmeli.
                  </p>
                </div>
              </div>

              {/* Meta / LinkedIn */}
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-400 to-indigo-400" />
                <div className="p-10">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Meta · LinkedIn · Google Display</p>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">Güven ve Netlik</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    Otorite sinyalleri, temiz görsel hiyerarşi ve net aksiyon çağrısı. Karar vericiler
                    için zaman değerlidir; kreatifiniz saniyeler içinde değer sunmalıdır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-white py-32 sm:py-44">
        <div className="mx-auto w-[90%] max-w-[720px] text-center">
          <p className="text-3xl font-light leading-snug text-[var(--foreground)] sm:text-4xl">
            Reklamlarınız görülsün değil;<br />
            <strong className="font-semibold">hissedilsin ve dönüştürsün.</strong>
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              href="/#iletisim"
              className="btn-shimmer relative inline-flex rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-white transition hover:opacity-90"
            >
              <span className="relative z-10">Kreatif Stratejinizi Başlatalım</span>
            </Link>
            <Link
              href="/hizmetler/dijital-reklam"
              className="inline-flex rounded-full border border-[var(--border)] px-8 py-4 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/8"
            >
              Dijital Reklam Hizmetleri
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
