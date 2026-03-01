"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const BENTO_ITEMS = [
  {
    title: "LinkedIn Ads · B2B Uzmanlığı",
    desc: "Profesyonel lead generation: doğru karar vericilere ulaşın. Şirket büyüklüğü, pozisyon ve ilgi alanlarına göre hedefleme ile kaliteli lead.",
    size: "large",
    gradient: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
  },
  {
    title: "TikTok Ads · Viral Büyüme",
    desc: "Kısa video ve trend odaklı stratejilerle genç ve etkileşimli kitlelere ulaşın. Yaratıcı formatlarla marka bilinirliği ve dönüşüm.",
    size: "large",
    gradient: "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
  },
  {
    title: "Trend Analizi",
    desc: "Kampanya yönetiminde Gemini ve Claude kullanarak trend analizi yapıyoruz; içerik ve teklif stratejilerini veriyle senkronize ediyoruz.",
    size: "small",
    gradient: "from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30",
  },
  {
    title: "Lead Kalitesi",
    desc: "Sadece form doldurma değil; satış ekibine hazır, nitelikli lead üretimi.",
    size: "small",
    gradient: "from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30",
  },
];

export function TikTokLinkedInContent() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--border)] bg-[var(--background)] py-20 sm:py-28">
        <div className="mx-auto w-[90%] max-w-[1100px]">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            İş Dünyası ve Viral Büyüme Bir Arada
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            LinkedIn tarafında B2B uzmanlığı ve profesyonel lead generation; TikTok tarafında viral büyüme stratejileri. Kampanya yönetiminde Gemini ve Claude ile trend analizi yapıyoruz.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <AnimatedSection>
        <section className="bg-[var(--background)] py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {BENTO_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border border-[var(--border)] bg-gradient-to-br ${item.gradient} p-8 transition hover:shadow-lg ${
                    item.size === "large" ? "sm:col-span-1" : "sm:col-span-1"
                  }`}
                >
                  <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* AI vurgusu */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[var(--card)] py-16 sm:py-20">
          <div className="mx-auto w-[90%] max-w-[1100px] text-center">
            <p className="text-base text-[var(--muted)]">
              Kampanya yönetiminde <strong className="text-[var(--foreground)]">Gemini</strong> ve <strong className="text-[var(--foreground)]">Claude</strong> kullanarak trend analizi yapıyor; stratejinizi veriyle güncelliyoruz.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA – Apple Mavisi */}
      <section className="border-t border-[var(--border)] bg-[var(--background)] py-24 sm:py-32">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            B2B Stratejinizi Belirleyelim
          </h2>
          <p className="mt-4 text-base text-[var(--muted)]">
            LinkedIn lead generation veya TikTok viral kampanyaları için uzman ekibimizle tanışın.
          </p>
          <Link
            href="/#iletisim"
            className="mt-8 inline-flex rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#0077ed] hover:shadow-blue-500/30"
          >
            B2B Stratejinizi Belirleyelim
          </Link>
        </div>
      </section>
    </main>
  );
}
