"use client";

import { AnimatedSection } from "./AnimatedSection";

const SERVICES = [
  {
    title: "Dijital Reklam",
    description:
      "Tıklama başı maliyetli Google Ads, Yandex, Meta, Retargeting reklamlarının yanı sıra özel medya planlama ile sitenize kaliteli kullanıcıları getiriyoruz.",
    color: "#EEF2FF",
    icon: (
      <svg viewBox="0 0 120 120" fill="none" className="h-32 w-32 sm:h-40 sm:w-40">
        <rect x="30" y="10" width="60" height="100" rx="12" fill="#1E293B" />
        <rect x="34" y="18" width="52" height="80" rx="4" fill="#fff" />
        <rect x="40" y="26" width="40" height="20" rx="3" fill="#DBEAFE" />
        <rect x="40" y="50" width="18" height="6" rx="2" fill="#93C5FD" />
        <rect x="62" y="50" width="18" height="6" rx="2" fill="#60A5FA" />
        <rect x="40" y="60" width="40" height="4" rx="2" fill="#F1F5F9" />
        <rect x="40" y="68" width="28" height="4" rx="2" fill="#F1F5F9" />
        <circle cx="80" cy="38" r="6" fill="#3B82F6" />
        <path d="M78 38l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="102" r="4" fill="#374151" />
      </svg>
    ),
  },
  {
    title: "SEO",
    description:
      "Uzman SEO ekibimiz, web sitenizi optimize ederek organik trafiğinizi iyileştirmenize; dönüşüm oranlarını ve marka görünürlüğünüzü artırmanıza yardımcı olur.",
    color: "#FEF2F2",
    icon: (
      <svg viewBox="0 0 120 120" fill="none" className="h-32 w-32 sm:h-40 sm:w-40">
        <rect x="15" y="30" width="90" height="60" rx="6" fill="#1E293B" />
        <rect x="19" y="34" width="82" height="48" rx="3" fill="#fff" />
        <rect x="25" y="40" width="30" height="5" rx="2" fill="#FCA5A5" />
        <rect x="25" y="48" width="50" height="4" rx="2" fill="#F1F5F9" />
        <rect x="25" y="55" width="40" height="4" rx="2" fill="#F1F5F9" />
        <rect x="25" y="62" width="45" height="4" rx="2" fill="#F1F5F9" />
        <circle cx="85" cy="50" r="12" fill="#FECACA" />
        <path d="M82 50l3 3 5-6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 90h20" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <rect x="55" y="90" width="30" height="8" rx="4" fill="#E2E8F0" />
        <circle cx="38" cy="105" r="3" fill="#3B82F6" />
        <circle cx="48" cy="105" r="3" fill="#10B981" />
        <circle cx="58" cy="105" r="3" fill="#EF4444" />
        <path d="M70 42l8-3M82 42l5 3" stroke="#FCA5A5" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Sosyal Medya Yönetimi",
    description:
      "Markanıza en uygun platformda, gerçek insanlarla gerçek zamanlı olarak bağlantı kurmanızı sağlıyor. Marka bilinirliğinizi arttırıyoruz.",
    color: "#F0FDF4",
    icon: (
      <svg viewBox="0 0 120 120" fill="none" className="h-32 w-32 sm:h-40 sm:w-40">
        <path d="M30 100c20-15 40-10 60-20" stroke="#86EFAC" strokeWidth="3" fill="none" />
        <path d="M80 40c0 0 5-25 15-15s-10 20-10 20" fill="#A78BFA" />
        <path d="M75 45c0 0 8-20 18-12s-5 18-5 18" fill="#C4B5FD" />
        <circle cx="65" cy="90" r="15" fill="#FDE68A" />
        <circle cx="65" cy="85" r="8" fill="#FBBF24" />
        <path d="M60 95h10" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="25" y="50" width="35" height="25" rx="5" fill="#fff" stroke="#E2E8F0" strokeWidth="1.5" />
        <circle cx="33" cy="58" r="4" fill="#60A5FA" />
        <rect x="40" y="56" width="14" height="3" rx="1.5" fill="#E2E8F0" />
        <rect x="40" y="62" width="10" height="2" rx="1" fill="#F1F5F9" />
        <rect x="28" y="68" width="28" height="3" rx="1.5" fill="#F1F5F9" />
        <circle cx="33" cy="33" r="6" fill="#F472B6" />
        <circle cx="50" cy="28" r="4" fill="#818CF8" />
        <circle cx="45" cy="42" r="3" fill="#34D399" />
      </svg>
    ),
  },
  {
    title: "İçerik Pazarlama",
    description:
      "Web veya mobil uygulamanıza özel özgün, kaliteli ve kullanıcı odaklı içerik üretimi sağlayarak markanızın otoritesini arttırıyoruz.",
    color: "#F0FDF4",
    icon: (
      <svg viewBox="0 0 120 120" fill="none" className="h-32 w-32 sm:h-40 sm:w-40">
        <rect x="20" y="25" width="70" height="55" rx="6" fill="#1E293B" />
        <rect x="24" y="29" width="62" height="44" rx="3" fill="#D9F99D" />
        <rect x="30" y="35" width="22" height="12" rx="2" fill="#fff" />
        <text x="34" y="44" fontSize="7" fill="#1E293B" fontWeight="bold">BLOG</text>
        <rect x="56" y="35" width="24" height="3" rx="1.5" fill="#fff" />
        <rect x="56" y="41" width="18" height="3" rx="1.5" fill="#fff" opacity="0.7" />
        <rect x="30" y="52" width="50" height="3" rx="1.5" fill="#fff" opacity="0.5" />
        <rect x="30" y="58" width="40" height="3" rx="1.5" fill="#fff" opacity="0.5" />
        <rect x="30" y="64" width="45" height="3" rx="1.5" fill="#fff" opacity="0.5" />
        <path d="M55 80h20" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <rect x="50" y="80" width="30" height="8" rx="4" fill="#E2E8F0" />
        <circle cx="95" cy="55" r="10" fill="#84CC16" />
        <path d="M92 55l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Web Tasarım",
    description:
      "En yeni altyapıya sahip modern tasarımlı internet siteleri geliştiriyor, markanızın dijital deneyimini kullanıcılarınıza sunuyoruz.",
    color: "#EFF6FF",
    icon: (
      <svg viewBox="0 0 120 120" fill="none" className="h-32 w-32 sm:h-40 sm:w-40">
        <rect x="10" y="20" width="65" height="50" rx="5" fill="#1E293B" />
        <rect x="13" y="28" width="59" height="36" rx="2" fill="#fff" />
        <rect x="13" y="23" width="59" height="6" rx="2" fill="#334155" />
        <circle cx="17" cy="26" r="1.5" fill="#EF4444" />
        <circle cx="22" cy="26" r="1.5" fill="#FBBF24" />
        <circle cx="27" cy="26" r="1.5" fill="#22C55E" />
        <rect x="18" y="33" width="20" height="8" rx="2" fill="#DBEAFE" />
        <rect x="42" y="33" width="25" height="8" rx="2" fill="#FEE2E2" />
        <rect x="18" y="45" width="49" height="3" rx="1.5" fill="#F1F5F9" />
        <rect x="18" y="51" width="35" height="3" rx="1.5" fill="#F1F5F9" />
        <rect x="18" y="57" width="42" height="3" rx="1.5" fill="#F1F5F9" />
        <path d="M42 70h12" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <rect x="75" y="35" width="35" height="55" rx="8" fill="#1E293B" />
        <rect x="79" y="42" width="27" height="40" rx="3" fill="#fff" />
        <rect x="83" y="47" width="19" height="8" rx="2" fill="#DBEAFE" />
        <rect x="83" y="59" width="19" height="3" rx="1.5" fill="#F1F5F9" />
        <rect x="83" y="65" width="14" height="3" rx="1.5" fill="#F1F5F9" />
        <rect x="83" y="71" width="16" height="3" rx="1.5" fill="#F1F5F9" />
        <path d="M48 70v8" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <rect x="37" y="78" width="22" height="3" rx="1.5" fill="#CBD5E1" />
      </svg>
    ),
  },
  {
    title: "Dönüşüm Optimizasyonu",
    description:
      "Web sitenizin veya mobil uygulamanızın performansını arttırarak daha fazla gelir elde etmenizi sağlıyoruz.",
    color: "#FFF7ED",
    icon: (
      <svg viewBox="0 0 120 120" fill="none" className="h-32 w-32 sm:h-40 sm:w-40">
        <rect x="25" y="15" width="70" height="50" rx="5" fill="#1E293B" />
        <rect x="29" y="23" width="62" height="36" rx="2" fill="#fff" />
        <rect x="29" y="18" width="62" height="6" rx="2" fill="#334155" />
        <rect x="34" y="28" width="20" height="12" rx="2" fill="#FED7AA" />
        <rect x="58" y="28" width="28" height="12" rx="2" fill="#FECACA" />
        <rect x="34" y="44" width="52" height="3" rx="1.5" fill="#F1F5F9" />
        <rect x="34" y="50" width="38" height="3" rx="1.5" fill="#F1F5F9" />
        <path d="M60 65h16" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <rect x="50" y="65" width="36" height="6" rx="3" fill="#E2E8F0" />
        <rect x="15" y="75" width="30" height="35" rx="6" fill="#F97316" />
        <rect x="19" y="80" width="22" height="24" rx="3" fill="#fff" />
        <rect x="22" y="84" width="16" height="4" rx="2" fill="#FDBA74" />
        <rect x="22" y="91" width="12" height="3" rx="1.5" fill="#F1F5F9" />
        <rect x="22" y="96" width="14" height="3" rx="1.5" fill="#F1F5F9" />
        <path d="M80 60l10 20M85 60l5 20M90 60l0 20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        <circle cx="80" cy="58" r="3" fill="#10B981" />
        <circle cx="85" cy="55" r="3" fill="#10B981" />
        <circle cx="90" cy="52" r="3" fill="#10B981" />
      </svg>
    ),
  },
];

export function BentoGrid() {
  return (
    <section id="hizmetler" className="bg-white pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="max-w-xl mx-auto text-3xl font-bold leading-snug tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-[2.75rem]">
              Dijitalde işinizi büyütecek çözümlerimiz
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.06}>
              <div className="flex flex-col items-center text-center">
                <div
                  className="flex items-center justify-center rounded-2xl p-4"
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-[var(--foreground)] sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
