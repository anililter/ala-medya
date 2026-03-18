"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const SERVICES_MENU = [
  {
    label: "Dijital Reklam Yönetimi",
    href: "/hizmetler/dijital-reklam",
    children: [
      { label: "Google Ads Yönetimi", href: "/hizmetler/dijital-reklam/google-ads" },
      { label: "Instagram Reklamları", href: "/hizmetler/dijital-reklam/instagram-reklamlari" },
      { label: "Facebook Reklamları", href: "/hizmetler/dijital-reklam/facebook-reklamlari" },
      { label: "Dijital Reklam (Tümü)", href: "/hizmetler/dijital-reklam" },
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

export function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const subTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function enter() {
    clearTimeout(timeout.current);
    setOpen(true);
  }
  function leave() {
    timeout.current = setTimeout(() => {
      setOpen(false);
      setSubOpen(null);
    }, 200);
  }
  function subEnter(key: string) {
    clearTimeout(subTimeout.current);
    setSubOpen(key);
  }
  function subLeave() {
    subTimeout.current = setTimeout(() => setSubOpen(null), 150);
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        className="flex items-center gap-1 text-[var(--muted)] transition hover:text-[var(--foreground)]"
      >
        Hizmetlerimiz
        <svg className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
          <div className="min-w-[240px] rounded-xl border border-[var(--border)] bg-white/95 py-2 shadow-lg backdrop-blur-xl">
            {SERVICES_MENU.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && subEnter(item.label)}
                onMouseLeave={() => item.children && subLeave()}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-[var(--border)]/50"
                  onClick={() => { setOpen(false); setSubOpen(null); }}
                >
                  {item.label}
                  {item.children && (
                    <svg className="h-3.5 w-3.5 text-[var(--muted)]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>

                {item.children && subOpen === item.label && (
                  <div
                    className="absolute left-full top-0 z-50 pl-2"
                    onMouseEnter={() => subEnter(item.label)}
                    onMouseLeave={subLeave}
                  >
                    <div className="min-w-[260px] rounded-xl border border-[var(--border)] bg-white/95 py-2 shadow-lg backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-[var(--border)]/50"
                          onClick={() => { setOpen(false); setSubOpen(null); }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
