"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const SECTOR_KPIS = [
  {
    sector: "Sağlık Turizmi",
    clients: "Lotus Diş, BHT Clinic",
    metrics: ["CPL (Potansiyel Hasta Başı Maliyet)", "Randevu Dönüşüm Oranı"],
    pillLabel: "Sağlık",
  },
  {
    sector: "E-Ticaret & Otomotiv",
    clients: "Sonax",
    metrics: ["ROAS (Reklam Getirisi)", "Sepet Terk Oranı"],
    pillLabel: "E-Ticaret",
  },
  {
    sector: "Fitness",
    clients: "Xoom",
    metrics: ["Üyelik Başı Maliyet", "LTV (Müşteri Yaşam Boyu Değeri)"],
    pillLabel: "Fitness",
  },
];

export function RaporlamaVeAnalizContent() {
  return (
    <main className="bg-[#f5f5f7]">
      {/* Hero: Detaylı raporlama + iletişim */}
      <section className="px-6 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
            Detaylı Raporlama ve Şeffaf İletişim
          </p>
          <h1 className="mt-6 font-semibold tracking-tight text-[var(--foreground)] text-4xl sm:text-5xl">
            Rakamları Yalınlaştırır, Aksiyona Çeviririz
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Meta, Google, LinkedIn ve TikTok çalışmalarınızı tek bir formatta raporlayıp size düzenli olarak iletiyoruz. <strong className="text-[var(--foreground)]">8 yıllık</strong> refleksimizle yalnızca “ne oldu?”yu değil, “neden oldu?”yu ve “şimdi ne yapıyoruz?”u netleştiriyoruz.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Haftalık Rapor", desc: "Performans özeti + aksiyonlar" },
              { title: "Aylık Toplantı", desc: "Strateji + hedef güncellemesi" },
              { title: "KPI Takibi", desc: "Sektöre özel metrikler" },
              { title: "Net İletişim", desc: "Tek kontaktan hızlı dönüş" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="text-sm font-medium text-[var(--muted)]">{item.title}</p>
                <p className="mt-1 font-semibold text-[var(--foreground)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rapor formatı: Neleri iletiyoruz */}
      <AnimatedSection>
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto w-[90%] max-w-[1200px]">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 shadow-lg dark:from-slate-800/80 dark:via-blue-950/30 dark:to-indigo-950/30">
              <div className="p-8 sm:p-12">
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                  Rapor İçeriği: Özet + İçgörü + Aksiyon
                </h2>
                <p className="mt-6 max-w-2xl leading-relaxed text-[var(--muted)]">
                  Her rapor, anlaşılır bir özetle başlar; ardından veriyi yorumlar, son olarak da bir sonraki haftanın net aksiyon planını yazarız. Böylece “sadece rapor” değil, yönetilebilir bir süreç teslim ederiz.
                </p>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Harcama, gösterim, tıklama, dönüşüm",
                    "CPL / CPA / ROAS / LTV yorumları",
                    "Hedef kitle & kreatif performansı",
                    "Landing / CRO notları (varsa)",
                    "Riskler ve fırsatlar (kısa liste)",
                    "Gelecek hafta aksiyon planı",
                  ].map((t) => (
                    <div key={t} className="rounded-2xl border border-[var(--border)] bg-white/80 p-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden />
                        <p className="font-medium text-[var(--foreground)]">{t}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* İletişim ritmi */}
      <AnimatedSection>
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto w-[90%] max-w-[1200px]">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                  Haftalık Rapor
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Kısa özet, metrikler, kreatif & hedef kitle performansı ve bir sonraki hafta aksiyonları.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
                  {[
                    "Toplam harcama ve bütçe dağılımı",
                    "Dönüşümler ve maliyetler (CPL/CPA)",
                    "En iyi / en zayıf kampanyalar",
                    "Deneme planı (A/B) ve optimizasyonlar",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--foreground)]" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                  Aylık Strateji Toplantısı
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Hedef güncellemesi, kanal kırılımı, bütçe kararları ve büyüme planı.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    Net aksiyon planı
                  </span>
                  <span className="rounded-full bg-[var(--muted)]/15 px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                    KPI hedefleri
                  </span>
                  <span className="rounded-full bg-[var(--muted)]/15 px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                    Kreatif öncelikleri
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Sektörel Özel Metrikler – Apple Health tarzı pill + kartlar */}
      <AnimatedSection>
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto w-[90%] max-w-[1200px]">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Sektörel Özel Metrikler
            </h2>
            <p className="mt-3 max-w-xl text-[var(--muted)]">
              Her sektörün KPI&apos;sı farklı; rapor formatı buna göre şekillenir.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SECTOR_KPIS.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <span className="inline-block rounded-full bg-[var(--muted)]/15 px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                    {item.pillLabel}
                  </span>
                  <h3 className="mt-4 font-semibold text-[var(--foreground)]">{item.sector}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.clients}</p>
                  <ul className="mt-4 space-y-2">
                    {item.metrics.map((m, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--foreground)]" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Kayıpsız Veri Hattı – CAPI */}
      <AnimatedSection>
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto w-[90%] max-w-[1200px]">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                Doğru Ölçüm: Sağlam Veri Temeli
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-[var(--muted)]">
                iOS 14+ sonrası yaşanan veri kayıplarını, ölçüm altyapısını güçlendirerek azaltırız. Amacımız; raporlarda “yanlış iyimserlik” değil, karar aldıran netlik üretmek.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/5 px-5 py-3">
                  <span className="text-sm font-semibold text-[var(--foreground)]">Ölçüm</span>
                  <span className="text-sm text-[var(--muted)]">UTM & event standartları</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/5 px-5 py-3">
                  <span className="text-sm font-semibold text-[var(--foreground)]">Tutarlılık</span>
                  <span className="text-sm text-[var(--muted)]">Kanal kırılımı aynı format</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/5 px-5 py-3">
                  <span className="text-sm font-semibold text-[var(--foreground)]">Aksiyon</span>
                  <span className="text-sm text-[var(--muted)]">Her raporda net next-step</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA */}
      <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <p className="text-2xl font-light leading-relaxed text-[var(--foreground)] sm:text-3xl">
            Raporlarınız “dosya” değil, karar mekanizmanız olsun. Ala Medya ile büyümeyi şansa değil, net aksiyona bağlayın.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/#iletisim"
              className="btn-shimmer relative inline-flex rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-medium text-white transition hover:opacity-95"
            >
              <span className="relative z-10">Rapor Örneği İsteyin</span>
            </Link>
            <Link
              href="/hizmetler/dijital-reklam/google-ads"
              className="inline-flex rounded-full border border-[var(--border)] bg-transparent px-8 py-4 text-base font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/10"
            >
              Google Ads Yönetimi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
