import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dijital Reklam Yönetimi | Ala Medya",
  description:
    "Google Ads, Instagram, Facebook, YouTube, TikTok, LinkedIn ve diğer platformlarda reklam yönetimi. Performans odaklı kampanya stratejileri.",
};

const CHILDREN = [
  { label: "Google Ads Yönetimi", href: "/hizmetler/dijital-reklam/google-ads" },
  { label: "Instagram Reklamları", href: "/hizmetler/dijital-reklam/instagram-reklamlari" },
  { label: "Facebook Reklamları", href: "/hizmetler/dijital-reklam/facebook-reklamlari" },
  { label: "YouTube Reklamları", href: "/hizmetler/dijital-reklam/youtube-reklamlari" },
  { label: "LinkedIn Reklamları", href: "/hizmetler/dijital-reklam/linkedin-reklamlari" },
  { label: "TikTok Reklamları", href: "/hizmetler/dijital-reklam/tiktok-reklamlari" },
  { label: "Twitter (X) Reklamları", href: "/hizmetler/dijital-reklam/twitter-reklamlari" },
  { label: "Snapchat Reklamları", href: "/hizmetler/dijital-reklam/snapchat-reklamlari" },
  { label: "Gmail Reklamları", href: "/hizmetler/dijital-reklam/gmail-reklamlari" },
  { label: "Mobil Uygulama Reklamları", href: "/hizmetler/dijital-reklam/mobil-uygulama-reklamlari" },
  { label: "Radyo Reklamları", href: "/hizmetler/dijital-reklam/radyo-reklamlari" },
  { label: "Google Haritalara Kayıt", href: "/hizmetler/dijital-reklam/google-haritalara-kayit" },
];

export default function DijitalReklamPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Dijital Reklam Yönetimi
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Google, Meta, TikTok ve LinkedIn platformlarında reklam kampanyaları. Veri odaklı optimizasyon.
          </p>
        </div>
        <ul className="mx-auto mt-12 flex max-w-md flex-col gap-3">
          {CHILDREN.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="block rounded-xl border border-[var(--border)] bg-white/80 px-4 py-3 text-base font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]/20 hover:bg-[var(--border)]/20"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
