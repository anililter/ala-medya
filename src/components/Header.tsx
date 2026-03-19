"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

const SERVICES_MENU = [
  {
    label: "Dijital Reklam Yönetimi",
    href: "/hizmetler/dijital-reklam",
    children: [
      { label: "Google Ads Yönetimi", href: "/hizmetler/dijital-reklam/google-ads" },
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
  { label: "Dönüşüm Optimizasyonu", href: "/hizmetler/donusum-optimizasyonu" },
];

const SEKTORLER_MENU = [
  { label: "Sağlık Turizmi (Lotus & BHT)", href: "/referanslar" },
  { label: "Otomotiv (Sonax Maslak)", href: "/referanslar" },
  { label: "Fitness (Xoom Training Club)", href: "/referanslar" },
  { label: "E-Ticaret & Retail", href: "/referanslar" },
];

const navLinkClass =
  "text-xs text-[#86868b] transition-all duration-200 hover:text-[var(--foreground)]";

export function Header({ active }: { active?: "referanslar" | "blog" }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sektorlerOpen, setSektorlerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const sektorlerTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  return (
    <header
      className="sticky top-0 z-50 h-12 border-b border-[var(--border)] bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70"
      style={{ height: "48px" }}
    >
      <div className="mx-auto flex h-full w-full items-center justify-between px-6 lg:px-12">
        {/* Sol: Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/ala-medya-logo.png"
            alt="Ala Medya"
            width={120}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Orta: Hizmetler, Sektörler, Veri Paneli, Blog */}
        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(servicesTimeout.current);
              setServicesOpen(true);
              setSektorlerOpen(false);
            }}
            onMouseLeave={() => {
              servicesTimeout.current = setTimeout(() => setServicesOpen(false), 150);
            }}
          >
            <span className={`cursor-pointer ${navLinkClass}`}>Hizmetler</span>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                <div className="min-w-[260px] rounded-xl border border-[var(--border)] bg-white/95 py-2 shadow-lg backdrop-blur-xl">
                  {SERVICES_MENU.map((item) =>
                    item.children ? (
                      <div key={item.label} className="relative">
                        <span className="block px-4 py-2.5 text-xs font-semibold text-[var(--foreground)] bg-[var(--border)]/20 cursor-default">
                          {item.label}
                        </span>
                        <div className="ml-2 border-l border-[var(--border)] pl-2">
                          {item.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="block px-3 py-2 text-xs text-[#86868b] transition hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]"
                              onClick={() => setServicesOpen(false)}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-xs text-[var(--foreground)] transition hover:bg-[var(--border)]/40"
                        onClick={() => setServicesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(sektorlerTimeout.current);
              setSektorlerOpen(true);
              setServicesOpen(false);
            }}
            onMouseLeave={() => {
              sektorlerTimeout.current = setTimeout(() => setSektorlerOpen(false), 150);
            }}
          >
            <span className={`cursor-pointer ${navLinkClass}`}>Sektörler</span>
            {sektorlerOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                <div className="min-w-[220px] rounded-xl border border-[var(--border)] bg-white/95 py-2 shadow-lg backdrop-blur-xl">
                  {SEKTORLER_MENU.map((item) => (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      className="block px-4 py-2.5 text-xs text-[var(--foreground)] transition hover:bg-[var(--border)]/40"
                      onClick={() => setSektorlerOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/hizmetler/raporlama-ve-analiz" className={navLinkClass}>
            Veri Paneli
          </Link>
          <Link
            href="/blog"
            className={
              active === "blog"
                ? "text-xs font-medium text-[var(--foreground)]"
                : navLinkClass
            }
          >
            Blog
          </Link>
        </nav>

        {/* Sağ: Ücretsiz Analiz + Mobil hamburger */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/#iletisim"
            className="rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5"
          >
            Ücretsiz Analiz
          </Link>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md text-[#86868b] transition hover:bg-[var(--border)]/50 hover:text-[var(--foreground)] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü aç"
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-12 z-40 border-b border-[var(--border)] bg-white shadow-lg md:hidden">
          <nav className="flex flex-col gap-0 px-4 py-4">
            <span className="px-3 py-2 text-xs font-semibold text-[var(--foreground)]">Hizmetler</span>
            {SERVICES_MENU.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <Link href={item.href} className="block rounded px-3 py-2.5 text-xs font-medium text-[var(--foreground)] hover:bg-[var(--border)]/40" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="block rounded px-5 py-2 text-xs text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>{c.label}</Link>
                  ))}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="block rounded px-3 py-2.5 text-xs text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>{item.label}</Link>
              )
            )}
            <span className="mt-2 px-3 py-2 text-xs font-semibold text-[var(--foreground)]">Sektörler</span>
            {SEKTORLER_MENU.map((item) => (
              <Link key={item.label} href={item.href} className="block rounded px-3 py-2.5 text-xs text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>{item.label}</Link>
            ))}
            <Link href="/hizmetler/raporlama-ve-analiz" className="mt-2 block rounded px-3 py-2.5 text-xs text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>Veri Paneli</Link>
            <Link href="/blog" className="block rounded px-3 py-2.5 text-xs text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>Blog</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
