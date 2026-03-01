"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURES = [
  {
    title: "Blog yazımı",
    desc: "Arama niyetine ve marka sesine uygun, SEO dostu metinler. Veriyle beslenen, yapay zekayla zenginleşen içerikler.",
  },
  {
    title: "Video prodüksiyon stratejileri",
    desc: "Kısa ve uzun format videolarla hikaye anlatımı; platformlara özel kurgu ve dağıtım.",
  },
  {
    title: "Marka otoritesi",
    desc: "Tutarlı içerik takvimi ve uzman görünürlüğü ile sektörde referans noktası olmak.",
  },
];

const TEASER_POSTS = [
  { title: "Dijital pazarlamada AI kullanımı", slug: "ai-dijital-pazarlama" },
  { title: "Marka hikayesi nasıl anlatılır?", slug: "marka-hikayesi" },
  { title: "Video içerik stratejileri 2025", slug: "video-icerik-2025" },
];
const TEASER_IMAGES = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
];

export function IcerikPazarlamaContent() {
  return (
    <main className="bg-[var(--background)]">
      {/* Hero – dergi zarafeti, nefes alan metin */}
      <section className="mx-auto max-w-[900px] px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          İçerik Pazarlama
        </p>
        <h1 className="mt-6 font-[350] tracking-tight text-[var(--foreground)] text-4xl leading-[1.2] sm:text-5xl md:text-6xl">
          Veriyle beslenen, yapay zekayla zenginleşen içerikler
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          Blog yazımı, video prodüksiyon stratejileri ve marka otoritesi oluşturma ile dijitalde kalıcı bir iz bırakıyoruz. Her içerik hem insan hem arama motoru için anlamlı.
        </p>
        <div className="mt-12">
          <Link
            href="/#iletisim"
            className="inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            İçerik Stratejisi Konuşalım
          </Link>
        </div>
      </section>

      {/* Placeholder görsel + metin – nefes alan bloklar */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] py-16 sm:py-24">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--muted)]/20">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                  alt="İçerik ve strateji"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl font-[350] tracking-tight text-[var(--foreground)] sm:text-3xl">
                  Strateji ve üretim bir arada
                </h2>
                <p className="text-base leading-relaxed text-[var(--muted)]">
                  İçerik takvimi, konu seçimi ve format kararları veriyle alınıyor; metin ve görsel üretiminde yapay zeka ile hız ve tutarlılık sağlıyoruz. Sonuç: dergi kalitesinde, nefes alan sayfalar.
                </p>
                <ul className="space-y-4">
                  {FEATURES.map((f, i) => (
                    <li key={i}>
                      <span className="font-semibold text-[var(--foreground)]">{f.title}</span>
                      <span className="text-[var(--muted)]"> — {f.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* İkinci görsel blok */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[var(--card)] py-16 sm:py-24">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h2 className="text-2xl font-[350] tracking-tight text-[var(--foreground)] sm:text-3xl">
                  Marka otoritesi uzun soluklu iş
                </h2>
                <p className="text-base leading-relaxed text-[var(--muted)]">
                  Düzenli blog, video ve sosyal içeriklerle markanızı sektörde “bilen ve anlatan” konumuna taşıyoruz. Veriyle beslenen, yapay zekayla zenginleşen içerikler hem arama hem kullanıcı güveni kazandırır.
                </p>
              </div>
              <div className="relative order-1 aspect-[3/2] overflow-hidden rounded-2xl bg-[var(--muted)]/20 lg:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Veri ve içerik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Son Yazılar – blog teaser */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-[350] tracking-tight text-[var(--foreground)] sm:text-3xl">
                Son Yazılar
              </h2>
              <Link
                href="/blog"
                className="text-sm font-medium text-[var(--foreground)] underline underline-offset-4 hover:no-underline"
              >
                Tüm yazılar →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TEASER_POSTS.map((post, i) => (
                <Link
                  key={i}
                  href="/blog"
                  className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] bg-[var(--muted)]/20">
                    <Image
                      src={TEASER_IMAGES[i]}
                      alt=""
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[var(--foreground)] group-hover:underline">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex rounded-full border border-[var(--border)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/10"
              >
                Bloğu Keşfet
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <section className="border-t border-[var(--border)] py-24 sm:py-32">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-2xl font-[350] tracking-tight text-[var(--foreground)] sm:text-3xl">
            İçerik stratejinizi birlikte kuralım.
          </h2>
          <Link
            href="/#iletisim"
            className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Teklif Alın
          </Link>
        </div>
      </section>
    </main>
  );
}
