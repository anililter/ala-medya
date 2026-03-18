"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

function SektorIcon({ type }: { type: string }) {
  const className = "h-5 w-5";
  switch (type) {
    case "health":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case "psychology":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      );
    case "realestate":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      );
    case "auto":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-1.607-1.464-2.836-3.064-2.404A6.5 6.5 0 0011.42 3.5h1.5c.485 0 .964.12 1.378.337.413.218.768.516 1.044.868.276.352.472.757.576 1.188m0 0l-.415 2.583M16.5 18.75v.958c0 1.607 1.464 2.836 3.064 2.404.682-.217 1.32-.513 1.878-.896.558-.384 1.024-.84 1.378-1.344.354-.504.592-1.05.704-1.622m0 0l-.415-2.583m0 0c.02-.115.03-.23.03-.345 0-.31-.12-.6-.335-.822-.215-.223-.5-.34-.785-.34h-.015c-.26 0-.51.1-.695.28-.185.182-.29.428-.29.694z" />
        </svg>
      );
    case "fitness":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      );
    default:
      return null;
  }
}

function HizmetIcon({ type }: { type: string }) {
  const className = "h-5 w-5 shrink-0";
  switch (type) {
    case "cro":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18l7.5-7.5 4.5 4.5 6-6" />
        </svg>
      );
    default:
      return null;
  }
}

const SERVICES_MENU: Array<{
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
  icon?: string;
  description?: string;
}> = [
  {
    label: "Dijital Reklam Yönetimi",
    href: "/hizmetler/dijital-reklam",
    children: [
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
    ],
  },
  { label: "Kreatif Psikolojisi", href: "/hizmetler/kreatif-psikolojisi" },
  { label: "Raporlama ve Analiz", href: "/hizmetler/raporlama-ve-analiz" },
  { label: "SEO", href: "/hizmetler/seo" },
  { label: "Sosyal Medya Yönetimi", href: "/hizmetler/sosyal-medya" },
  { label: "İçerik Pazarlama", href: "/hizmetler/icerik-pazarlama" },
  { label: "Web Tasarım & Yazılım", href: "/hizmetler/web-tasarim" },
  {
    label: "Dönüşüm Optimizasyonu (CRO)",
    href: "/hizmetler/donusum-optimizasyonu",
    icon: "cro",
    description: "Satış ve Randevu Odaklı Veri Mühendisliği",
  },
];

const SEKTORLER_MENU = [
  { slug: "saglik-turizmi", label: "Sağlık Turizmi", description: "Global Hasta Trafiği", icon: "health" },
  { slug: "psikoloji", label: "Psikoloji", description: "Etik ve Güven Odaklı", icon: "psychology" },
  { slug: "gayrimenkul", label: "Gayrimenkul", description: "Yüksek Değer, Veri Odaklı", icon: "realestate" },
  { slug: "otomotiv", label: "Otomotiv", description: "Marka Otoritesi ve Lokal Hakimiyet", icon: "auto" },
  { slug: "fitness", label: "Fitness", description: "Topluluk ve Sadakat Yönetimi", icon: "fitness" },
];

const navLinkClass =
  "flex h-16 items-center text-base leading-none tracking-tight text-[#86868b] transition-all duration-200 hover:text-[var(--foreground)]";

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dijitalSubOpen, setDijitalSubOpen] = useState(false);
  const [sektorlerOpen, setSektorlerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDijitalOpen, setMobileDijitalOpen] = useState(false);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const dijitalSubTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const sektorlerTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70"
      style={{ minHeight: "64px" }}
    >
      <div className="flex h-16 w-full items-center justify-between px-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/ala-medya-logo.png"
            alt="Ala Medya"
            width={224}
            height={59}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden h-16 items-center gap-8 md:flex">
          <Link href="/" className={navLinkClass}>
            Anasayfa
          </Link>
          <Link href="/hakkimizda" className={navLinkClass}>
            Hakkımızda
          </Link>
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(servicesTimeout.current);
              setServicesOpen(true);
            }}
            onMouseLeave={() => {
              servicesTimeout.current = setTimeout(() => {
                setServicesOpen(false);
                setDijitalSubOpen(false);
              }, 150);
            }}
          >
            <span className={`cursor-pointer ${navLinkClass}`}>Hizmetler</span>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                <div className="min-w-[280px] rounded-xl border border-[var(--border)] bg-white/95 py-2 shadow-lg backdrop-blur-xl">
                  {SERVICES_MENU.map((item) =>
                    item.children ? (
                      <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => {
                          clearTimeout(dijitalSubTimeout.current);
                          setDijitalSubOpen(true);
                        }}
                        onMouseLeave={() => {
                          dijitalSubTimeout.current = setTimeout(() => setDijitalSubOpen(false), 120);
                        }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between px-4 py-2.5 text-base tracking-tight text-[var(--foreground)] transition hover:bg-[var(--border)]/40"
                          onClick={() => setServicesOpen(false)}
                        >
                          {item.label}
                          <svg className="h-4 w-4 shrink-0 text-[#86868b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.06l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                          </svg>
                        </Link>
                        {dijitalSubOpen && (
                          <div className="absolute left-full top-0 z-50 ml-1 min-w-[240px] rounded-xl border border-[var(--border)] bg-white/98 py-2 shadow-lg backdrop-blur-xl">
                            {item.children.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                className="block px-4 py-2.5 text-base tracking-tight text-[#86868b] transition hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]"
                                onClick={() => {
                                  setServicesOpen(false);
                                  setDijitalSubOpen(false);
                                }}
                              >
                                {c.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (item.icon || item.description) ? (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 px-4 py-3 text-base transition hover:bg-[var(--border)]/40"
                        onClick={() => setServicesOpen(false)}
                      >
                        {item.icon && (
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--foreground)]/5 text-[var(--foreground)]">
                            <HizmetIcon type={item.icon} />
                          </span>
                        )}
                        <div className="min-w-0">
                          <span className="block font-medium tracking-tight text-[var(--foreground)]">
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="mt-0.5 block text-sm text-[#86868b]">
                              {item.description}
                            </span>
                          )}
                        </div>
                      </Link>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-base tracking-tight text-[var(--foreground)] transition hover:bg-[var(--border)]/40"
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
            }}
            onMouseLeave={() => {
              sektorlerTimeout.current = setTimeout(() => setSektorlerOpen(false), 150);
            }}
          >
            <span className={`cursor-pointer ${navLinkClass}`}>Sektörler</span>
            {sektorlerOpen && (
              <div
                className="fixed left-0 right-0 top-16 z-50 pt-2"
                onMouseEnter={() => {
                  clearTimeout(sektorlerTimeout.current);
                  setSektorlerOpen(true);
                }}
                onMouseLeave={() => {
                  sektorlerTimeout.current = setTimeout(() => setSektorlerOpen(false), 150);
                }}
              >
                <div className="w-full rounded-xl border border-[var(--border)] bg-white py-6 shadow-lg px-4 lg:px-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {SEKTORLER_MENU.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/sektorler/${item.slug}`}
                        className="group flex items-start gap-4 rounded-lg px-4 py-3 transition hover:bg-[var(--border)]/30"
                        onClick={() => setSektorlerOpen(false)}
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--foreground)]/5 text-[var(--foreground)] transition group-hover:bg-blue-500/10 group-hover:text-blue-600">
                          <SektorIcon type={item.icon} />
                        </span>
                        <div>
                          <span className="block text-base font-medium tracking-tight text-[var(--foreground)]">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-base text-[#86868b]">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/hizmetler/raporlama-ve-analiz" className={navLinkClass}>
            Raporlama
          </Link>
          <Link href="/vaka-analizleri" className={navLinkClass}>
            Vaka Analizleri
          </Link>
          <Link href="/blog" className={navLinkClass}>
            Blog
          </Link>
          <Link href="/contact" className={navLinkClass}>
            İletişim
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/#iletisim"
            className="rounded-full border border-[var(--foreground)]/30 bg-transparent px-5 py-2.5 text-base font-medium tracking-tight text-[var(--foreground)] transition-all duration-200 hover:border-[var(--foreground)] hover:bg-[var(--foreground)]/5"
          >
            Ücretsiz Analiz
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-[#86868b] transition hover:bg-[var(--border)]/50 hover:text-[var(--foreground)] md:hidden"
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

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-16 z-40 border-b border-[var(--border)] bg-white shadow-lg md:hidden">
          <nav className="flex flex-col gap-0 px-4 py-4">
            <Link href="/" className="block rounded px-3 py-2.5 text-base font-medium tracking-tight text-[var(--foreground)] hover:bg-[var(--border)]/40" onClick={() => setMobileOpen(false)}>Anasayfa</Link>
            <Link href="/hakkimizda" className="block rounded px-3 py-2.5 text-base tracking-tight text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>Hakkımızda</Link>
            <span className="mt-2 px-3 py-2 text-sm font-semibold text-[var(--foreground)]">Hizmetler</span>
            {SERVICES_MENU.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded px-3 py-2.5 text-left text-base font-medium tracking-tight text-[var(--foreground)] hover:bg-[var(--border)]/40"
                    onClick={() => setMobileDijitalOpen((prev) => !prev)}
                    aria-expanded={mobileDijitalOpen}
                    aria-controls="mobile-dijital-submenu"
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 shrink-0 text-[#86868b] transition-transform ${mobileDijitalOpen ? "rotate-90" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.06l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div id="mobile-dijital-submenu" className={mobileDijitalOpen ? "block" : "hidden"}>
                    <Link href={item.href} className="block rounded px-5 py-2 text-base tracking-tight text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>Genel</Link>
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block rounded px-5 py-2 text-base tracking-tight text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>{c.label}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="block rounded px-3 py-2.5 text-base tracking-tight text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>{item.label}</Link>
              )
            )}
            <span className="mt-4 px-3 py-2 text-sm font-semibold text-[var(--foreground)]">Sektörler</span>
            {SEKTORLER_MENU.map((item) => (
              <Link key={item.slug} href={`/sektorler/${item.slug}`} className="block rounded px-3 py-2.5 text-base tracking-tight text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/hizmetler/raporlama-ve-analiz" className="mt-2 block rounded px-3 py-2.5 text-base tracking-tight text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>Raporlama</Link>
            <Link href="/vaka-analizleri" className="block rounded px-3 py-2.5 text-base tracking-tight text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>Vaka Analizleri</Link>
            <Link href="/blog" className="block rounded px-3 py-2.5 text-base tracking-tight text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/contact" className="block rounded px-3 py-2.5 text-base tracking-tight text-[#86868b] hover:bg-[var(--border)]/40 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>İletişim</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
