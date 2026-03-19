"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const FOOTER_COLUMNS = [
  {
    title: "Hizmetler",
    links: [
      { label: "Google Ads (Premier Partner Gücü)", href: "/hizmetler/dijital-reklam/google-ads" },
      { label: "SEO & İçerik Pazarlaması", href: "/hizmetler/seo" },
      { label: "Kreatif Psikolojisi & Tasarım", href: "/hizmetler/kreatif-psikolojisi" },
    ],
  },
  {
    title: "Sektörel Uzmanlık",
    links: [
      { label: "Sağlık Turizmi (Lotus & BHT)", href: "/referanslar" },
      { label: "Otomotiv (Sonax Maslak)", href: "/referanslar" },
      { label: "Fitness (Xoom Training Club)", href: "/referanslar" },
      { label: "E-Ticaret & Retail", href: "/referanslar" },
    ],
  },
  {
    title: "Teknoloji & Veri",
    links: [
      { label: "AI Entegrasyon (Gemini 1.5 & Claude 3.5)", href: "/hizmetler/kreatif-psikolojisi" },
      { label: "Raporlama & Analiz", href: "/hizmetler/raporlama-ve-analiz" },
      { label: "Sunucu Taraflı İzleme (CAPI)", href: "/hizmetler/dijital-reklam/facebook-reklamlari" },
      { label: "Google Premier Partnerlik", href: "/hizmetler/dijital-reklam/google-ads" },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda (8 Yıllık Tecrübe)", href: "/#hakkimizda" },
      { label: "Vaka Analizleri (Case Studies)", href: "/vaka-analizleri" },
      { label: "Kariyer", href: "/#kariyer" },
      { label: "Marka Kimliği", href: "/#marka" },
    ],
  },
  {
    title: "İletişim & Destek",
    links: [
      { label: "WhatsApp Hattı", href: "https://wa.me/905319443885" },
      { label: "+90 531 944 38 85", href: "tel:+905319443885" },
      { label: "info@alamedya.com", href: "mailto:info@alamedya.com" },
      { label: "Strateji Analiz Formu", href: "/#iletisim" },
      { label: "Teknik Destek", href: "/#iletisim" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Gizlilik Politikası", href: "/gizlilik" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "X", href: "#", icon: "x" },
  { label: "YouTube", href: "#", icon: "youtube" },
];

const APPLE_FOOTER_GRAY = "text-[#86868b]";

function SocialIcon({ name }: { name: string }) {
  const className = "h-4 w-4";
  switch (name) {
    case "instagram":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "x":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  const [openColumn, setOpenColumn] = useState<number | null>(null);

  return (
    <>
      <footer className="w-full border-t border-[var(--border)] bg-white">
        <div className="w-full px-4 py-14 lg:py-16">
          {/* 5 sütun – desktop grid, mobil accordion */}
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
            {FOOTER_COLUMNS.map((col, index) => (
              <div
                key={col.title}
                className="border-b border-[var(--border)] md:border-b-0"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left md:pointer-events-none md:py-0"
                  onClick={() =>
                    setOpenColumn(openColumn === index ? null : index)
                  }
                  aria-expanded={openColumn === index}
                >
                  <h4 className="text-xs font-semibold text-[var(--foreground)]">
                    {col.title}
                  </h4>
                  <svg
                    className={`h-4 w-4 transition-transform md:hidden ${APPLE_FOOTER_GRAY} ${
                      openColumn === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <ul
                  className={`overflow-hidden transition-all duration-200 md:block ${
                    openColumn === index ? "max-h-[500px]" : "max-h-0 md:max-h-none"
                  }`}
                >
                  {col.links.map((link, i) => (
                    <li
                      key={i}
                      className="py-2 first:pt-4 md:first:pt-5 md:py-2.5"
                      style={{ paddingTop: i === 0 ? undefined : undefined }}
                    >
                      <Link
                        href={link.href}
                        className={`text-xs font-light transition-colors hover:text-[var(--foreground)] ${APPLE_FOOTER_GRAY}`}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* En alt bant: Legal & Social */}
        <div
          className="border-t border-[var(--border)]"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex w-full flex-col items-center justify-between gap-4 py-6 px-4 lg:flex-row">
            <p className={`text-xs font-light ${APPLE_FOOTER_GRAY}`}>
              Telif Hakkı © 2026 Ala Medya. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-light transition-colors hover:text-[var(--foreground)] ${APPLE_FOOTER_GRAY}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className={`flex items-center gap-5 ${APPLE_FOOTER_GRAY}`}>
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.icon}
                  href={item.href}
                  aria-label={item.label}
                  className="transition-opacity hover:opacity-70"
                >
                  <SocialIcon name={item.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
