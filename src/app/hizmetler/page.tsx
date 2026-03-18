import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetler | Ala Medya — Dijital Reklam, SEO, Sosyal Medya",
  description:
    "Dijital reklam yönetimi, SEO, sosyal medya, içerik pazarlama, web tasarım ve dönüşüm optimizasyonu. 360° reklam ajansı hizmetleri.",
};

const SERVICES = [
  {
    label: "Dijital Reklam Yönetimi",
    href: "/hizmetler/dijital-reklam/google-ads",
    children: [
      { label: "Google Ads", href: "/hizmetler/dijital-reklam/google-ads" },
      { label: "Instagram Reklamları", href: "/hizmetler/dijital-reklam/instagram-reklamlari" },
      { label: "Facebook Reklamları", href: "/hizmetler/dijital-reklam/facebook-reklamlari" },
    ],
  },
  { label: "Kreatif Psikolojisi", href: "/hizmetler/kreatif-psikolojisi" },
  { label: "Raporlama ve Analiz", href: "/hizmetler/raporlama-ve-analiz" },
  { label: "SEO", href: "/hizmetler/seo" },
  { label: "Sosyal Medya Yönetimi", href: "/hizmetler/sosyal-medya" },
  { label: "İçerik Pazarlama", href: "/hizmetler/icerik-pazarlama" },
  { label: "Web Tasarım & Yazılım", href: "/hizmetler/web-tasarim" },
  { label: "Dönüşüm Optimizasyonu (CRO)", href: "/hizmetler/donusum-optimizasyonu" },
];

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Hizmetlerimiz
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            360° dijital pazarlama ve reklam ajansı hizmetleri. Aşağıdan detaylı sayfalarımıza geçebilirsiniz.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          {SERVICES.map((s) =>
            "children" in s && s.children ? (
              <li key={s.href}>
                <span className="block rounded-xl border border-[var(--border)] bg-white/80 px-4 py-3 text-base font-medium text-[var(--foreground)]">
                  {s.label}
                </span>
                <ul className="mt-2 ml-4 space-y-1">
                  {s.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        className="block rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="block rounded-xl border border-[var(--border)] bg-white/80 px-4 py-3 text-base font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]/20 hover:bg-[var(--border)]/20"
                >
                  {s.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
