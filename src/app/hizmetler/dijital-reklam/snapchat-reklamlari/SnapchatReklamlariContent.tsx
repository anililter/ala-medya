"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_ITEMS = [
  {
    title: "Kreatif Format ve A/B Testleri",
    desc: "Single Image, Video, Collection ve Story reklam formatları; hızlı A/B testleri ile kazanan varyasyonların ölçeklendirilmesi.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FFF4E5" />
        <rect x="10" y="10" width="28" height="28" rx="6" stroke="#FFFC00" strokeWidth="2" />
        <path d="M22 22l4 4 8-8" stroke="#FFFC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Hedefleme ve Bütçe: Test → Ölçek",
    desc: "Yaş, ilgi alanı ve davranış hedeflemesi; dar test bütçesi ile kazananları tespit, sonra ölçek fazında bütçe artışı.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FFF4E5" />
        <circle cx="24" cy="20" r="8" stroke="#FFFC00" strokeWidth="2" />
        <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#FFFC00" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Trafik ve Dönüşüm Optimizasyonu",
    desc: "Web trafiği, uygulama indirme ve lead hedefleri; Snap Pixel ile dönüşüm takibi. Haftalık performans raporu ve aksiyon planı.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FFF4E5" />
        <path d="M16 26l8 8 12-12" stroke="#FFFC00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="14" width="20" height="20" rx="3" stroke="#FFFC00" strokeWidth="2" />
      </svg>
    ),
  },
];

const DATA_METRICS = [
  { metric: "Gösterim & Swipe", how: "Story ve Discover yerleşimlerinde gösterim; swipe-up (tıklama) oranı takibi." },
  { metric: "Video görüntüleme", how: "Video reklamlarda view rate ve ortalama izlenme süresi; format bazında karşılaştırma." },
  { metric: "Dönüşüm maliyeti", how: "Web, uygulama ve lead dönüşümleri için CPA; Snap Pixel ile veri doğruluğu." },
];

const FAQ_DATA = [
  { q: "Snapchat reklamları için minimum bütçe ne kadar?", a: "Genç kitleye ulaşmak için anlamlı test bütçesi önerilerimizi paylaşıyoruz. Test → ölçek yaklaşımıyla başlayıp bütçeyi performansa göre artırıyoruz." },
  { q: "Hangi formatları yönetiyorsunuz?", a: "Single Image, Video, Collection, Story Ads ve Filters. Hedefe göre en uygun formatı seçip kreatif testleri yapıyoruz." },
  { q: "Raporlama ne sıklıkta?", a: "Haftalık performans raporu ve bir sonraki hafta aksiyon planı; isteğe göre canlı dashboard." },
];

function PerformanceChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="border-t border-[var(--border)] bg-[#1a1a1a] py-24 sm:py-32" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[900px]">
        <motion.h2
          className="text-3xl font-light tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Genç Kitle Performansında Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-white/70"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Swipe oranı ve dönüşüm: test–ölçek verisi.
        </motion.p>
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-[#FFFC00]/20 bg-[#FFFC00]/5 px-8 py-10 backdrop-blur-xl sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-[#FFFC00]">Swipe rate trendi</span>
            <svg viewBox="0 0 280 140" className="h-40 w-full max-w-[320px] sm:h-52" fill="none">
              <defs>
                <linearGradient id="snapChartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#FFFC00" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#FFFC00" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M20 100 L70 78 L120 55 L170 38 L220 24 L260 14"
                stroke="#FFFC00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                style={{
                  strokeDasharray: 400,
                  strokeDashoffset: inView ? 0 : 400,
                  transition: "stroke-dashoffset 1.2s ease-out",
                }}
              />
              <path
                d="M20 100 L70 78 L120 55 L170 38 L220 24 L260 14 L260 140 L20 140 Z"
                fill="url(#snapChartGrad)"
                style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease-out 0.4s" }}
              />
            </svg>
            <p className="mt-4 text-center text-sm font-light text-white/70">Etkileşim performansı</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SnapchatReklamlariContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff9e6] via-white to-[#fff4e5] py-28 sm:py-36 dark:from-[#1a1a1a] dark:via-[var(--background)] dark:to-[#0d0d0d]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-[#FFFC00]/15 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FFFC00]/40 bg-[#FFFC00]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#8B6914] dark:text-[#FFFC00]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#FFFC00">
                <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.299-1.788.299-.42 0-.839-.06-1.213-.149l-.031-.015c-.061-.029-.119-.059-.18-.089-.6-.254-1.049-.554-1.049-.895 0-.329.36-.644 1.033-.839.263-.075.538-.119.793-.149-.075-.135-.119-.254-.149-.36-.569-1.784-.434-3.741-.359-4.852.12-1.763.06-3.472-.479-4.688C15.651.985 13.544.793 12.206.793zm-.023 2.848c.569 0 2.612.135 3.582 2.064.24.569.27 1.784.195 3.029-.023.36-.075.719-.149 1.063-.659-.075-1.468-.135-2.352-.135-.6 0-1.198.03-1.788.074-.045-.42-.076-.839-.09-1.244-.09-1.198-.015-2.397.27-3.241.629-1.838 2.391-2.649 3.391-2.649zM5.475 7.916c.24-.015.42-.029.569-.029.24 0 .419.015.539.03.6.149.99.479.99.853 0 .479-.524.853-1.273 1.092-.09.03-.21.076-.345.12-.449.134-1.138.298-1.787.298-.42 0-.839-.059-1.212-.149l-.031-.014c-.061-.03-.12-.06-.181-.09-.599-.254-1.048-.554-1.048-.894 0-.329.36-.644 1.033-.839.254-.075.538-.12.793-.149-.074-.135-.119-.254-.149-.359-.569-1.784-.434-3.741-.359-4.852.12-1.763.06-3.472-.479-4.688C2.643 8.108.537 7.916-.801 7.916c.69 0 2.642.276 3.612 2.105.24.569.27 1.784.195 3.029-.023.36-.075.719-.149 1.063-.659-.075-1.468-.135-2.352-.135-.6 0-1.198.03-1.788.074-.045-.42-.076-.839-.09-1.244-.09-1.198-.015-2.397.27-3.241.629-1.838 2.391-2.649 3.391-2.649zm13.416 3.756c.075.405.12.823.135 1.242.074 1.198-.015 2.397-.27 3.241-.629 1.838-2.391 2.649-3.391 2.649-.569 0-2.612-.135-3.582-2.064-.24-.569-.27-1.784-.195-3.029.023-.36.075-.719.149-1.063.659.075 1.468.135 2.352.135.6 0 1.198-.03 1.788-.074.045.42.076.839.09 1.244.09 1.198.015 2.397-.27 3.241-.629 1.838-2.391 2.649-3.391 2.649-.569 0-2.612-.135-3.582-2.064-.24-.569-.27-1.784-.195-3.029.023-.36.075-.719.149-1.063.659.075 1.468.135 2.352.135.6 0 1.198-.03 1.788-.074.045.42.076.839.09 1.244.09 1.198.015 2.397-.27 3.241-.36.988-1.074 1.838-2.102 2.273-.3.135-.644.24-1.033.329-.03.405-.075.809-.119 1.199-.06.57-.12 1.109-.195 1.614.72.195 1.533.299 2.397.299 2.102 0 4.347-.569 5.931-2.979.54-1.049.839-2.397.839-3.791 0-1.362-.3-2.649-.839-3.713-.36-.674-.809-1.273-1.333-1.763.075-.27.149-.539.195-.809.015-.06.03-.135.045-.195.36-1.473.27-2.921-.18-4.102-.24-.629-.569-1.168-.96-1.593.42-.195.823-.42 1.198-.674.36-.24.674-.509.93-.793.36-.405.614-.853.75-1.317.12-.435.18-.884.18-1.338 0-.36-.045-.719-.149-1.063.36-.24.704-.509 1.033-.809.36-.329.659-.689.899-1.074.24-.39.42-.809.525-1.244.12-.48.18-.975.18-1.469 0-.674-.12-1.318-.36-1.913.6-.36 1.138-.809 1.593-1.333.51-.599.899-1.273 1.153-2.002.27-.765.404-1.559.404-2.397 0-1.198-.27-2.337-.779-3.357-.57-1.138-1.408-2.102-2.457-2.792C19.864.985 18.562.614 17.16.614c-1.273 0-2.457.36-3.477 1.008-1.138.72-2.022 1.773-2.577 3.044-.494 1.138-.749 2.382-.749 3.681 0 .6.06 1.198.165 1.763-.6.36-1.138.809-1.593 1.333-.51.599-.899 1.273-1.153 2.002-.27.765-.404 1.559-.404 2.397 0 1.198.27 2.337.779 3.357.57 1.138 1.408 2.102 2.457 2.792 1.102.72 2.404 1.092 3.806 1.092 1.273 0 2.457-.36 3.477-1.008 1.138-.72 2.022-1.773 2.577-3.044.494-1.138.749-2.382.749-3.681 0-.6-.06-1.198-.165-1.763.6-.36 1.138-.809 1.593-1.333.51-.599.899-1.273 1.153-2.002.27-.765.404-1.559.404-2.397 0-.674-.12-1.318-.36-1.913.6-.36 1.138-.809 1.593-1.333.51-.599.899-1.273 1.153-2.002.27-.765.404-1.559.404-2.397 0-1.198-.27-2.337-.779-3.357-.57-1.138-1.408-2.102-2.457-2.792C18.277 2.294 16.975 1.922 15.573 1.922c-1.407 0-2.727.389-3.876 1.092-1.049.69-1.887 1.654-2.457 2.792-.51 1.02-.779 2.159-.779 3.357 0 .838.135 1.632.404 2.397.254.729.644 1.403 1.153 2.002.455.524.993.973 1.593 1.333-.24.595-.36 1.239-.36 1.913 0 .838.135 1.632.404 2.397.254.729.644 1.403 1.153 2.002.455.524.993.973 1.593 1.333.24.595.36 1.239.36 1.913 0 1.198-.27 2.337-.779 3.357-.57 1.138-1.408 2.102-2.457 2.792-1.102.72-2.404 1.092-3.806 1.092-1.273 0-2.457-.36-3.477-1.008-1.138-.72-2.022-1.773-2.577-3.044-.494-1.138-.749-2.382-.749-3.681 0-.6.06-1.198.165-1.763-.6-.36-1.138-.809-1.593-1.333-.51-.599-.899-1.273-1.153-2.002-.27-.765-.404-1.559-.404-2.397 0-1.198.27-2.337.779-3.357.57-1.138 1.408-2.102 2.457-2.792 1.102-.72 2.404-1.092 3.806-1.092 1.273 0 2.457.36 3.477 1.008 1.138.72 2.022 1.773 2.577 3.044.494 1.138.749 2.382.749 3.681 0 .6-.06 1.198-.165 1.763z" />
              </svg>
              Snapchat Reklamları
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Genç Kitlelere Hızlı ve Yaratıcı{" "}
              <span className="bg-gradient-to-r from-[#8B6914] to-[#FFFC00] bg-clip-text text-transparent dark:from-[#FFFC00] dark:to-[#fff]">
                Formatlarla Ulaşın
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              Kreatif format seçimi ve hızlı A/B testleri; hedefleme ve bütçe kurgusu (test → ölçek). Trafik ve dönüşüm optimizasyonu; haftalık performans raporu ve aksiyon planı.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-[#FFFC00] px-7 py-3.5 text-sm font-medium text-[#0D0D0D] shadow-lg transition hover:bg-[#e6e600]">
                Teklif Al
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#FFFC00]/20 blur-xl" />
            <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-[#FFFC00]/30 bg-[#fffef0] shadow-xl dark:bg-[#1a1a1a] dark:border-[#FFFC00]/20 sm:h-60 sm:w-60">
              <svg className="h-24 w-24 sm:h-28 sm:w-28" viewBox="0 0 24 24" fill="#FFFC00">
                <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.299-1.788.299-.42 0-.839-.06-1.213-.149l-.031-.015c-.061-.029-.119-.059-.18-.089-.6-.254-1.049-.554-1.049-.895 0-.329.36-.644 1.033-.839.263-.075.538-.119.793-.149-.075-.135-.119-.254-.149-.36-.569-1.784-.434-3.741-.359-4.852.12-1.763.06-3.472-.479-4.688C15.651.985 13.544.793 12.206.793z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <PerformanceChartSection />

      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Neleri Yönetiyoruz?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Kreatif format seçimi ve hızlı A/B testleri; hedefleme ve bütçe kurgusu (test → ölçek); trafik ve dönüşüm optimizasyonu; haftalık performans raporu ve aksiyon planı.
            </p>
            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {FEATURE_ITEMS.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-[var(--muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#f9fafb] py-24 sm:py-32 dark:bg-[var(--background)]">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Veri Şeffaflığı
            </h2>
            <p className="mt-3 max-w-xl text-base font-light text-[var(--muted)]">
              Snapchat reklam metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
            </p>
            <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-white dark:bg-[var(--card)]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--muted)]/5">
                    <th className="px-6 py-4 text-sm font-semibold text-[var(--foreground)]">Metrik</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[var(--foreground)]">Nasıl sunuyoruz?</th>
                  </tr>
                </thead>
                <tbody>
                  {DATA_METRICS.map((row, i) => (
                    <tr key={i} className="border-b border-[var(--border)] last:border-b-0">
                      <td className="px-6 py-4 font-medium text-[var(--foreground)]">{row.metric}</td>
                      <td className="px-6 py-4 font-light text-[var(--muted)]">{row.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
          <div className="mx-auto w-[90%] max-w-[720px]">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Sıkça Sorulan Sorular
            </h2>
            <div className="mt-12 divide-y divide-[var(--border)]">
              {FAQ_DATA.map((item, i) => (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="pr-4 text-base font-semibold">{item.q}</span>
                    <svg className={`h-5 w-5 shrink-0 text-[var(--muted)] transition-transform ${openFaq === i ? "rotate-45" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                    </svg>
                  </button>
                  {openFaq === i && <p className="pb-5 text-sm font-light leading-relaxed text-[var(--muted)]">{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-3xl">
            Snapchat&apos;te genç kitlenize ulaşmaya hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            Test–ölçek yaklaşımıyla <strong className="text-[var(--foreground)]">performans odaklı</strong> kampanyalar.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-[#FFFC00] px-8 py-4 text-base font-semibold text-[#0D0D0D] shadow-lg transition hover:bg-[#e6e600]">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
