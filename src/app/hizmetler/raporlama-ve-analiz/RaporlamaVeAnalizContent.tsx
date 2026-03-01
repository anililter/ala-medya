"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

/* ─── Apple-style minimalist palette ─── */
const CHART_COLORS = {
  primary: "#34C759",
  secondary: "#007AFF",
  tertiary: "#8E8E93",
  fill: "rgba(52, 199, 89, 0.12)",
};

const MOCK_ROAS_DATA = [
  { ay: "Oca", roas: 2.1 },
  { ay: "Şub", roas: 2.4 },
  { ay: "Mar", roas: 2.2 },
  { ay: "Nis", roas: 2.8 },
  { ay: "May", roas: 3.1 },
  { ay: "Haz", roas: 2.9 },
];

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
      {/* Hero + Bento: Gerçek Zamanlı Şeffaflık */}
      <section className="px-6 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
            Veri Görselleştirme ve Şeffaflık
          </p>
          <h1 className="mt-6 font-semibold tracking-tight text-[var(--foreground)] text-4xl sm:text-5xl">
            Karmaşıklığı Netliğe Dönüştüren Bir Dashboard
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Reklam bütçenizin her kuruşunu, Apple ekosistemi kadar akıcı bir panelde takip edin. Meta, Google, LinkedIn ve TikTok verilerini tek bir merkezde topluyor, manuel raporlama hatalarını ortadan kaldırıyoruz. <strong className="text-[var(--foreground)]">8 yıllık</strong> deneyimimizle, sadece rakamları değil, o rakamların arkasındaki ticari potansiyeli gösteriyoruz.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Meta", "Google", "LinkedIn", "TikTok"].map((platform) => (
              <div
                key={platform}
                className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <span className="text-sm font-medium text-[var(--muted)]">{platform}</span>
                <p className="mt-1 font-semibold tabular-nums text-[var(--foreground)]">Tek panelde</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento: AI-Powered Insights – gradyan kart */}
      <AnimatedSection>
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto w-[90%] max-w-[1200px]">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 shadow-lg dark:from-slate-800/80 dark:via-blue-950/30 dark:to-indigo-950/30">
              <div className="p-8 sm:p-12">
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                  Rakamlar Konuşur, Yapay Zeka Anlatır
                </h2>
                <p className="mt-6 max-w-2xl leading-relaxed text-[var(--muted)]">
                  <strong className="text-[var(--foreground)]">Gemini</strong> ve <strong className="text-[var(--foreground)]">Claude-3.5</strong> entegrasyonumuz sayesinde, tabloların arasında kaybolmanıza izin vermiyoruz. Panelimiz, reklam performansınızdaki dalgalanmaları otomatik olarak analiz eder ve size &quot;Neden?&quot; sorusunun cevabını insan dilinde verir: <em>&quot;Bu hafta ROAS artışının sebebi, 25-34 yaş aralığındaki etkileşim artışıdır.&quot;</em>
                </p>
                <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white/80 p-4 dark:bg-black/20">
                  <p className="text-sm font-medium text-[var(--muted)]">Örnek AI yorumu</p>
                  <p className="mt-2 font-medium tabular-nums text-[var(--foreground)]">
                    25-34 yaş · Etkileşim +%18 · ROAS 3.2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Bento: Mini grafik + Sektörel KPI pill kartları */}
      <AnimatedSection>
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto w-[90%] max-w-[1200px]">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Sol: ROAS trend grafiği (Recharts) */}
              <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">ROAS Trendi</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">Örnek veri · Minimalist palet</p>
                <div className="mt-6 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={MOCK_ROAS_DATA} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="roasFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.2} />
                          <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="ay" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "var(--muted)" }} />
                      <YAxis hide domain={["dataMin - 0.5", "dataMax + 0.5"]} />
                      <Tooltip
                        contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }}
                        formatter={(value: number | undefined) => [value != null ? value.toFixed(1) : "", "ROAS"]}
                        labelFormatter={(label) => `Ay: ${label}`}
                      />
                      <Area
                        type="monotone"
                        dataKey="roas"
                        stroke={CHART_COLORS.primary}
                        strokeWidth={2}
                        fill="url(#roasFill)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              {/* Sağ: Partner rozeti / güven kartı */}
              <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">Tek Merkez, Tek Gerçek</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  Tüm kanallarınızın verisi tek panelde. Manuel raporlama hatalarına son.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    Google Premier Partner
                  </span>
                  <span className="rounded-full bg-[var(--muted)]/15 px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                    CAPI & Server-Side
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
              Her sektörün KPI&apos;sı farklı; paneliniz buna göre özelleştirilir.
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
                %100 Doğruluk: Kayıpsız Veri Hattı
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-[var(--muted)]">
                iOS 14+ sonrası yaşanan veri kayıplarını, <strong className="text-[var(--foreground)]">Google Ads Premier Partner</strong> yetkinliğimizle sunucu taraflı izleme (Server-Side Tracking) kullanarak aşıyoruz. Panelinizdeki her veri, tarayıcı kısıtlamalarına takılmadan doğrudan sunucudan beslenir. Yanıltıcı verilere değil, mutlak gerçeğe yatırım yapın.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/5 px-5 py-3">
                  <span className="text-2xl font-bold tabular-nums text-[var(--foreground)]">%100</span>
                  <span className="text-sm text-[var(--muted)]">Veri doğruluğu</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/5 px-5 py-3">
                  <span className="text-sm font-semibold text-[var(--foreground)]">CAPI</span>
                  <span className="text-sm text-[var(--muted)]">Meta Conversions API</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/5 px-5 py-3">
                  <span className="text-sm font-semibold text-[var(--foreground)]">Server-Side</span>
                  <span className="text-sm text-[var(--muted)]">Sunucu taraflı izleme</span>
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
            Veriyi izlemekle kalmayın, onu yönetin. Ala Medya ile dijital büyümenizi şansa değil, matematiğe emanet edin.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/#iletisim"
              className="btn-shimmer relative inline-flex rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-medium text-white transition hover:opacity-95"
            >
              <span className="relative z-10">Paneli Keşfedin</span>
            </Link>
            <Link
              href="/hizmetler/dijital-reklam/google-ads"
              className="inline-flex rounded-full border border-[var(--border)] bg-transparent px-8 py-4 text-base font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/10"
            >
              Google Ads Raporlama
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
