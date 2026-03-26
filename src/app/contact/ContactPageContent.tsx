"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { StrategyForm } from "@/components/StrategyForm";

const TESTIMONIALS = [
  {
    name: "Lotus Health",
    role: "Sağlık Turizmi",
    quote: "Dijital reklam yatırımlarımızı Ala Medya ile yönettik. ROI'de belirgin artış gördük.",
  },
  {
    name: "Sonax Maslak",
    role: "Otomotiv",
    quote: "Marka bilinirliği ve satış hedeflerimize ulaşmamızda kritik bir ortak oldular.",
  },
  {
    name: "Xoom Training Club",
    role: "Fitness",
    quote: "Sosyal medya ve performans kampanyaları ile büyümemize katkı sağladılar.",
  },
];

function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrollY;
}

function CountUp({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - t) ** 2;
      setValue(Math.round(end * eased));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function ContactPageContent() {
  const scrollY = useScrollProgress();
  const gradientOpacity = Math.min(0.12 + (scrollY / 2000) * 0.15, 0.28);

  return (
    <main className="bg-[var(--background)]">
      {/* ─── 1. Hero: Gece mavisi + mavi/altın vurgu (sitenin paleti) ─── */}
      <section
        className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-24 pb-20 sm:px-8 sm:pt-28"
        style={{
          background: "var(--night)",
          boxShadow: "inset 0 -80px 120px -40px rgba(59, 130, 246, 0.12)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 20%, rgba(59, 130, 246, ${gradientOpacity}) 0%, transparent 50%),
                        radial-gradient(ellipse 60% 40% at 80% 60%, rgba(201, 168, 76, ${gradientOpacity * 0.4}) 0%, transparent 40%)`,
          }}
          aria-hidden
        />
        <motion.div
          className="relative z-10 max-w-4xl text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-4xl font-extralight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Birlikte Büyüyoruz
          </h1>
          <p className="mt-5 text-lg font-medium tracking-wide sm:text-xl text-[var(--gold-light)]">
            Dijital Yolculuğunuzun Başlangıç Noktası
          </p>
        </motion.div>
      </section>

      <div className="w-full px-6 lg:px-12">
      {/* ─── 2. Bento: Strateji + Testimonials (açık zemin) ─── */}
      <section className="relative border-t border-[var(--border)] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-8 shadow-lg shadow-[var(--shadow)] sm:p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative mb-8 flex h-40 w-40 items-center justify-center rounded-full border-2 border-[var(--gold)]/30 bg-[var(--gold-muted)]">
                  <svg className="h-24 w-24 text-[var(--gold)]" viewBox="0 0 64 64" fill="none" aria-hidden>
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                    <path d="M32 8v12M32 44v12M8 32h12M44 32h12" stroke="currentColor" strokeWidth="2" />
                    <path d="M32 20l-6 12 6 6 6-6-6-12z" fill="currentColor" opacity="0.9" />
                    <path d="M20 32l12-6 6 6-12 6-6-6z" fill="currentColor" opacity="0.7" />
                    <path d="M44 32l-12 6-6-6 12-6 6 6z" fill="currentColor" opacity="0.7" />
                    <path d="M32 44l6-12-6-6-6 6 6 12z" fill="currentColor" opacity="0.5" />
                  </svg>
                  <div className="absolute -bottom-1 -right-1 h-16 w-16 rounded-full border-2 border-blue-200 bg-blue-50" />
                  <div className="absolute -top-1 -left-1 h-12 w-12 rounded-full border-2 border-blue-200 bg-blue-50" />
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
                  Doğru Strateji, Gerçek Sonuçlar
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                  Veri odaklı medya planlama ve ölçülebilir kampanyalarla hedeflerinize ulaşın.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-6 shadow-lg shadow-[var(--shadow)] sm:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="mb-6 text-center text-lg font-semibold text-[var(--foreground)]">
                Müşteri Yorumları
              </h3>
              <TestimonialsCarousel items={TESTIMONIALS} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3. Strateji Analiz Formu (Cam Panel) ─── */}
      <section className="relative border-t border-[var(--border)] bg-[var(--background)]">
        <StrategyForm />
      </section>

      {/* ─── 4. WhatsApp + iletişim bilgileri ─── */}
      <section className="relative border-t border-[var(--border)] bg-[var(--background)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="flex flex-col items-center justify-center gap-8 rounded-3xl border border-[var(--border)] bg-white p-8 shadow-lg sm:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://wa.me/905319443885"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border-2 border-green-500/40 bg-green-50 px-6 py-4 transition hover:bg-green-100 dark:border-green-500/50 dark:bg-green-950/30 dark:hover:bg-green-950/40"
            >
              <svg className="h-8 w-8 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-lg font-semibold text-green-700 dark:text-green-300">WhatsApp ile Yazın</span>
            </a>
            <a
              href="tel:+905319443885"
              className="text-2xl font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--gold)]"
            >
              +90 531 944 38 85
            </a>
            <div className="flex flex-col items-center gap-4 text-center">
              <svg className="h-12 w-12 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-[var(--muted)]">
                Cumhuriyet Mah. E-5 Karayolu Firuze Sokak İstanbul Outlet Park Outlet Park 2. Katında Merkez, K:2 D:64, 34500 Büyükçekmece/İstanbul
              </p>
              <a href="mailto:info@alamedya.com" className="font-medium text-[var(--gold)] hover:underline">
                info@alamedya.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. Sayılarla Başarı ─── */}
      <section className="relative border-t border-[var(--border)] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="grid gap-8 sm:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="border-b border-[var(--border)] pb-8 text-center sm:border-b-0 sm:border-r sm:border-[var(--border)] sm:pr-8 sm:pb-0">
              <p className="text-4xl font-extralight tracking-tight text-[var(--gold)] sm:text-5xl md:text-6xl">
                <CountUp end={8} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
                Yıl Sektörel Tecrübe
              </p>
            </div>
            <div className="border-b border-[var(--border)] pb-8 text-center sm:border-b-0 sm:border-r sm:border-[var(--border)] sm:px-8 sm:pb-0">
              <p className="text-4xl font-extralight tracking-tight text-[var(--gold)] sm:text-5xl md:text-6xl">
                <CountUp end={500} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
                Başarıyla Yönetilen Kampanya
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extralight tracking-tight text-[var(--gold)] sm:text-5xl md:text-6xl">
                <CountUp end={100} suffix="%" />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
                Şeffaf ve Veri Odaklı Yönetim
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      </div>
    </main>
  );
}

function TestimonialsCarousel({ items }: { items: typeof TESTIMONIALS }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="min-w-[260px] flex-1 shrink-0 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="mb-3 h-12 w-12 overflow-hidden rounded-full bg-[var(--gold-muted)]" />
            <p className="text-sm leading-relaxed text-[var(--foreground)]">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-3 font-semibold text-[var(--foreground)]">{item.name}</p>
            <p className="text-xs text-[var(--muted)]">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

