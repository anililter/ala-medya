"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { ServiceLineIconWithId } from "./icons/LineIcons";

const SERVICES: Array<{
  title: string;
  href: string;
  description: string;
  iconType: "ads" | "seo" | "social" | "content" | "web" | "conversion";
}> = [
  {
    title: "Dijital Reklam",
    href: "/hizmetler/dijital-reklam/google-ads",
    description: "Google Ads, Yandex, Meta, Retargeting ile kaliteli kullanıcıları sitenize getiriyoruz.",
    iconType: "ads",
  },
  {
    title: "SEO",
    href: "/hizmetler/seo",
    description: "Organik trafik, dönüşüm oranları ve marka görünürlüğünüzü artırıyoruz.",
    iconType: "seo",
  },
  {
    title: "Sosyal Medya",
    href: "/hizmetler/sosyal-medya",
    description: "Gerçek insanlarla gerçek zamanlı bağlantı, marka bilinirliği.",
    iconType: "social",
  },
  {
    title: "İçerik Pazarlama",
    href: "/hizmetler/icerik-pazarlama",
    description: "Özgün, kaliteli ve kullanıcı odaklı içerik ile marka otoritesi.",
    iconType: "content",
  },
  {
    title: "Web Tasarım",
    href: "/hizmetler/web-tasarim",
    description: "Modern tasarımlı siteler, markanızın dijital deneyimi.",
    iconType: "web",
  },
  {
    title: "Dönüşüm Optimizasyonu",
    href: "/hizmetler/donusum-optimizasyonu",
    description: "Performans ve gelir artışı için sürekli iyileştirme.",
    iconType: "conversion",
  },
];

const GLOW_MAP: Record<(typeof SERVICES)[0]["iconType"], { className: string; position: string }> = {
  ads: { className: "bg-blue-400/40 blur-2xl", position: "right-2 bottom-2 h-28 w-28 sm:h-32 sm:w-32" },
  seo: { className: "bg-cyan-400/40 blur-2xl", position: "right-2 top-2 h-28 w-28 sm:h-32 sm:w-32" },
  social: { className: "bg-violet-400/40 blur-2xl", position: "left-1/2 top-2 -translate-x-1/2 h-24 w-32 sm:h-28 sm:w-36" },
  content: { className: "bg-amber-400/40 blur-2xl", position: "right-2 top-1/2 -translate-y-1/2 h-28 w-28" },
  web: { className: "bg-sky-400/40 blur-2xl", position: "right-2 bottom-2 h-28 w-28 sm:h-32 sm:w-32" },
  conversion: { className: "bg-orange-400/40 blur-2xl", position: "right-4 top-4 h-24 w-24 sm:h-28 sm:w-28" },
};

function BentoCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const glow = GLOW_MAP[service.iconType];
  return (
    <AnimatedSection delay={index * 0.06}>
      <Link href={service.href} className="group block h-full">
        <motion.div
          className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-6 shadow-md transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/8 sm:p-8"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
        >
          {/* Servis renginde hafif parlama – her zaman görünür, hover'da güçlenir */}
          <div
            className={`pointer-events-none absolute rounded-full opacity-60 transition-opacity duration-300 group-hover:opacity-90 ${glow.className} ${glow.position}`}
            aria-hidden
          />

          <div className="relative flex flex-1 flex-col">
            {/* 3D Glassmorphism ikon konteyneri – 2x boyut, cam efekti */}
            <div className="mb-6 flex shrink-0 items-center justify-center">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24">
                <div
                  className="absolute inset-0 rounded-2xl bg-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl border border-white/60"
                  aria-hidden
                />
                <div className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
                  <ServiceLineIconWithId type={service.iconType} className="h-full w-full" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold tracking-tighter text-[var(--foreground)] sm:text-2xl">
              {service.title}
            </h3>
            <p className="mt-3 line-clamp-2 text-base leading-relaxed text-slate-400 sm:text-lg dark:text-slate-500">
              {service.description}
            </p>
            <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
              Detay
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </motion.div>
      </Link>
    </AnimatedSection>
  );
}

export function BentoGrid() {
  return (
    <section id="hizmetler" className="w-full bg-white pb-20 pt-20 sm:pb-28 sm:pt-28 px-4">
      <div className="w-full">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-snug tracking-tighter text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Dijitalde işinizi büyütecek çözümlerimiz
            </h2>
            <p className="mt-4 w-full text-xl leading-relaxed text-slate-400 dark:text-slate-500">
              360° AI uzmanlığı ile hizmetlerimiz
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, i) => (
            <BentoCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
