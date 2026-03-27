"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const WHAT_WE_DO = [
  {
    title: "Reklam Kreatifleri",
    desc: "Instagram, TikTok, Meta ve Google için dönüşüm odaklı görseller, videolar ve animasyonlar.",
  },
  {
    title: "Marka Görselleri",
    desc: "Logo, renk paleti, tipografi ve marka rehberi. Tutarlı ve akılda kalıcı bir kimlik.",
  },
  {
    title: "Sosyal Medya Tasarımı",
    desc: "Algoritmaları durduran, kullanıcıyı harekete geçiren; platforma özel içerik formatları.",
  },
  {
    title: "Landing Page Tasarımı",
    desc: "Reklam trafiğini müşteriye dönüştüren, psikolojik akışa göre kurgulanmış sayfalar.",
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
      <section className="mx-auto max-w-[900px] px-6 pt-36 pb-28 sm:pt-44 sm:pb-36">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          Reklam Tasarımı · Görsel Strateji · Kreatif Üretim
        </p>
        <h1 className="mt-7 text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          Tasarım değil,<br />
          <span className="text-[var(--muted)]">dönüştüren görsel.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-[var(--muted)]">
          Reklamlarınızın durdurma gücü; tasarımın güzelliğinden değil, <strong className="text-[var(--foreground)]">psikolojik doğruluğundan</strong> gelir. Ala Medya'da her kreatif, dönüşüm verisine dayalı görsel kararlarla üretilir.
        </p>
        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/#iletisim"
            className="btn-shimmer relative inline-flex rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            <span className="relative z-10">Kreatif Stratejinizi Konuşalım</span>
          </Link>
          <Link
            href="/referanslar"
            className="inline-flex rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/8"
          >
            Referansları İnceleyin
          </Link>
        </div>
      </section>

      {/* ─── NE YAPIYORUZ ─────────────────────────────────────── */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#fafafa] py-28 sm:py-36">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Hizmetler</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Ne üretiyoruz?
            </h2>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHAT_WE_DO.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── FARK NE ──────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-28 sm:py-36">
          <div className="mx-auto w-[90%] max-w-[960px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Kreatif Psikolojisi</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Güzel tasarım yetmez. Doğru tetikleyici lazım.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-[var(--muted)]">
              Her kreatif, kullanıcının karar verme sürecindeki belirli psikolojik eşikleri hedef alır. Bu eşikler veriye dayanır; sezgiye değil.
            </p>

            <div className="mt-14 grid gap-px border border-[var(--border)] rounded-3xl overflow-hidden bg-[var(--border)] sm:grid-cols-2">
              {BIASES.map((b) => (
                <div key={b.id} className="bg-white p-10 transition hover:bg-[#fafafa]">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">{b.id}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── PLATFORM UYUMU ───────────────────────────────────── */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#fafafa] py-28 sm:py-36">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Platform Uyumu</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Her platform farklı bir dil konuşur.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-[var(--muted)]">
              TikTok'ta işe yarayan kreatifte LinkedIn'de hiçbir şey dönüşmez. Platforma özel görsel dil ve format, performanstaki en büyük fark yaratan değişkendir.
            </p>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm">
                <div className="h-2 w-full bg-gradient-to-r from-rose-400 to-pink-400" />
                <div className="p-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">TikTok · Instagram Reels</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">Hareket ve Kanca</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    İlk 3 saniye kancası, problem-çözüm ritmi ve viral format uyumu. Kullanıcı reklam izlediğini değil, ilgisini çeken bir içerik gördüğünü hissetmeli.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm">
                <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-indigo-400" />
                <div className="p-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Meta · LinkedIn · Google Display</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">Güven ve Netlik</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    Otorite sinyalleri, temiz görsel hiyerarşi ve net aksiyon çağrısı. Karar vericiler için zaman değerlidir; kreatifiniz saniyeler içinde değer sunmalıdır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)] bg-white py-32 sm:py-44">
        <div className="mx-auto max-w-[640px] px-6 text-center">
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
