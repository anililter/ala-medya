"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const SERVICES = [
  {
    icon: (
      <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    bg: "bg-blue-500/10",
    title: "Reklam Kreatifleri",
    desc: "Instagram, TikTok, Meta ve Google için dönüşüm odaklı görseller, videolar ve animasyonlar.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.38 3.395a15.995 15.995 0 004.769-2.95m-4.769 9.75a21 21 0 00-3.342 9.365m-3.342-9.365a21 21 0 013.342 9.365" />
      </svg>
    ),
    bg: "bg-purple-500/10",
    title: "Marka Görselleri",
    desc: "Logo, renk paleti, tipografi ve marka rehberi. Tutarlı ve akılda kalıcı bir kimlik.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
      </svg>
    ),
    bg: "bg-amber-500/10",
    title: "Sosyal Medya Tasarımı",
    desc: "Algoritmaları durduran, kullanıcıyı harekete geçiren; platforma özel içerik formatları.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    bg: "bg-emerald-500/10",
    title: "Landing Page Tasarımı",
    desc: "Reklam trafiğini müşteriye dönüştüren, psikolojik akışa göre kurgulanmış sayfalar.",
  },
];

const BIASES = [
  {
    num: "01",
    title: "İlk 3 Saniye",
    desc: "Kullanıcı kaymadan durmalı. Her kreatifte 'neden?' sorusu ilk kareye sığdırılır.",
  },
  {
    num: "02",
    title: "Sosyal Kanıt",
    desc: "Gerçek referanslar ve somut rakamlar güveni saniyeler içinde tesis eder.",
  },
  {
    num: "03",
    title: "Bilişsel Sadelik",
    desc: "Fazlalık dikkat çalmaz; satmaz. Her öğe bir neden taşır ya da kaldırılır.",
  },
  {
    num: "04",
    title: "Aksiyon Kolaylığı",
    desc: "Görsel hiyerarşi kullanıcının bir sonraki adımı tereddütsüz atmasını sağlar.",
  },
];

export function KreatifPsikolojisiContent() {
  return (
    <main className="bg-white">
      <div className="w-full px-6 lg:px-12">

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="px-4 pt-28 pb-24 sm:px-6 sm:pt-36 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-[1000px] text-center">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#1d1d1f] sm:text-6xl md:text-7xl">
              Tasarım değil,<br className="hidden sm:block" />{" "}
              dönüştüren görsel.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[var(--muted)]">
              Reklamlarınızın durdurma gücü, tasarımın güzelliğinden değil{" "}
              <strong className="text-[#1d1d1f]">psikolojik doğruluğundan</strong> gelir.
              Her kreatif, dönüşüm verisine dayalı görsel kararlarla üretilir.
            </p>
            <p className="mt-6 text-2xl font-semibold tracking-tight text-blue-600">
              Reklam Tasarımı. Marka Kimliği. Kreatif Üretim.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/#iletisim"
                className="btn-shimmer relative inline-flex rounded-full bg-[#1d1d1f] px-8 py-4 text-base font-medium text-white transition hover:opacity-90"
              >
                <span className="relative z-10">Kreatif Stratejinizi Konuşalım</span>
              </Link>
              <Link
                href="/referanslar"
                className="inline-flex rounded-full border border-[var(--border)] px-8 py-4 text-base font-medium text-[#1d1d1f] transition hover:bg-[var(--muted)]/8"
              >
                Referansları İnceleyin
              </Link>
            </div>
          </div>
        </section>

        {/* ─── HİZMETLER ────────────────────────────────────── */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-center text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Ne üretiyoruz?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-xl text-[var(--muted)]">
                Dört uzmanlık alanında, veriye dayalı görsel üretim.
              </p>
              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {SERVICES.map((s) => (
                  <div key={s.title} className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm transition hover:shadow-md">
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${s.bg}`}>
                      {s.icon}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">{s.title}</h3>
                    <p className="mt-4 leading-relaxed text-[var(--muted)]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ─── PSİKOLOJİK ALTYAPI ───────────────────────────── */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <div className="flex flex-col items-center text-center">
                <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-500/10">
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                  Güzel tasarım yetmez.
                </h2>
                <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)]">
                  Reklamlarda dönüşüm sağlayan şey görsellik değil, psikolojik doğruluktur. Ala Medya'da her kreatif, kullanıcının karar verme sürecindeki spesifik eşikleri hedef alacak şekilde kurgulanır.
                </p>
                <p className="mt-6 text-2xl font-semibold tracking-tight text-blue-600">
                  Doğru tetikleyici. Doğru anda. Doğru formatta.
                </p>
              </div>

              <div className="mt-16 grid gap-6 sm:grid-cols-2">
                {BIASES.map((b) => (
                  <div key={b.num} className="rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm transition hover:shadow-md">
                    <p className="text-4xl font-bold text-[var(--border)]">{b.num}</p>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#1d1d1f]">{b.title}</h3>
                    <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ─── PLATFORM PSİKOLOJİSİ ─────────────────────────── */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Her platform farklı bir dil konuşur.
              </h2>
              <p className="mt-6 max-w-2xl text-xl text-[var(--muted)]">
                TikTok'ta işe yarayan kreatifte LinkedIn'de hiçbir şey dönüşmez. Platforma özel görsel dil ve format, performanstaki en büyük fark yaratan değişkendir.
              </p>
              <div className="mt-16 grid gap-8 sm:grid-cols-2">
                <div className="rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
                  <div className="mb-6 h-1 w-full rounded-full bg-gradient-to-r from-rose-400 to-pink-400" />
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--muted)]">TikTok · Instagram Reels</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1d1d1f]">Hareket ve Kanca</h3>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    İlk 3 saniye kancası, problem-çözüm ritmi ve viral format uyumu. Kullanıcı reklam
                    izlediğini değil, ilgisini çeken bir içerik gördüğünü hissetmeli.
                  </p>
                </div>
                <div className="rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
                  <div className="mb-6 h-1 w-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-400" />
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--muted)]">Meta · LinkedIn · Google Display</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1d1d1f]">Güven ve Netlik</h3>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    Otorite sinyalleri, temiz görsel hiyerarşi ve net aksiyon çağrısı. Karar vericiler
                    için zaman değerlidir; kreatifiniz saniyeler içinde değer sunmalıdır.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ─── NEDEN ALA MEDYA ──────────────────────────────── */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-center text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                Neden Ala Medya?
              </h2>
              <div className="mt-16 grid gap-10 sm:grid-cols-2">
                <div className="rounded-3xl border border-[var(--border)] bg-white p-10">
                  <p className="text-xl font-semibold text-blue-600">Google Premier Partner</p>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    Tasarladığımız her kreatif, Google Ads ve SEO stratejilerinizle tam uyumlu bir
                    ekosistem içinde çalışır. Veriyle tasarım; birbirinden ayrı değil.
                  </p>
                </div>
                <div className="rounded-3xl border border-[var(--border)] bg-white p-10">
                  <p className="text-xl font-semibold text-blue-600">8 Yıllık Kreatif Birikim</p>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    Sağlıktan gayrimenkule, e-ticaretten eğitime yüzlerce markayla üretilen veriye
                    dayalı bir görsel hafıza; her yeni projeye transfer edilir.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ─── CTA ──────────────────────────────────────────── */}
        <AnimatedSection>
          <section className="border-t border-[var(--border)] px-4 py-28 sm:py-36 lg:px-8">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl">
                Reklamlarınız görülsün değil;<br />
                hissedilsin ve dönüştürsün.
              </h2>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Link
                  href="/#iletisim"
                  className="btn-shimmer inline-flex rounded-full bg-blue-600 px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.02] hover:bg-blue-700"
                >
                  Kreatif Stratejinizi Başlatalım
                </Link>
                <Link
                  href="/hizmetler/dijital-reklam"
                  className="inline-flex rounded-full border border-[var(--border)] px-10 py-5 text-xl font-medium text-[#1d1d1f] transition hover:bg-[var(--muted)]/8"
                >
                  Dijital Reklam
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

      </div>
    </main>
  );
}
