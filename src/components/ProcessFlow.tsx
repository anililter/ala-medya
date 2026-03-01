"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { MethodologyStepIconWithId } from "./icons/LineIcons";

const STEPS = [
  {
    num: "01",
    title: "Kapsamlı Analiz",
    text: "Dijital varlıklarınız, rekabet analizi ve pazar araştırması ile mevcut durumunuz derinlemesine değerlendirilir.",
  },
  {
    num: "02",
    title: "Stratejik Planlama",
    text: "Hedeflerinize özel, veri destekli dijital pazarlama stratejisi ve ölçülebilir KPI'lar geliştirilir.",
  },
  {
    num: "03",
    title: "Uzman Uygulama",
    text: "Sertifikalı uzmanlarımız tarafından kampanyalar yayına alınır ve yapay zeka destekli sürekli optimizasyon sağlanır.",
  },
  {
    num: "04",
    title: "Detaylı Raporlama",
    text: "Performans metrikleri, stratejik öneriler ve aksiyon planları ile şeffaf ve veri odaklı iletişim kurulur.",
  },
];

export function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.15, 0.4, 0.65, 0.9], [0, 0.33, 0.66, 1]);
  const lineHeightPct = useTransform(lineProgress, (v) => `${v * 100}%`);
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (i >= 0) setActiveIndex(i);
        });
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatedSection>
      <section className="w-full bg-white py-20 sm:py-28" ref={containerRef}>
        <div className="w-full px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Profesyonel Çalışma Metodolojimiz
            </h2>
            <p className="mt-4 w-full text-xl leading-relaxed text-slate-400 dark:text-slate-500">
              Kanıtlanmış süreçlerle ölçülebilir sonuçlar
            </p>
            {/* AI entegrasyonu – teknolojik mühür */}
            <div className="mx-auto mt-8 flex w-full flex-wrap items-center justify-center gap-6 rounded-2xl border border-blue-100 bg-blue-50/80 px-4 py-4 backdrop-blur-sm">
              <span className="text-base font-medium text-[var(--muted)]">Destekleyen AI</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-xl border border-white bg-white/90 px-4 py-2.5 shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-lg font-bold text-blue-600">G</span>
                  <span className="text-sm font-semibold text-[var(--foreground)]">Gemini</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white bg-white/90 px-4 py-2.5 shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-lg font-bold text-amber-700">C</span>
                  <span className="text-sm font-semibold text-[var(--foreground)]">Claude</span>
                </div>
              </div>
              <span className="text-sm text-[var(--muted)]">strateji & analiz</span>
            </div>
          </div>

          <div className="mt-20 lg:flex lg:gap-16">
            <div className="relative hidden lg:block lg:w-48 lg:shrink-0">
              <div className="sticky top-32">
                <motion.div
                  className="text-7xl font-bold tracking-tighter text-blue-500 md:text-8xl"
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {STEPS[activeIndex]?.num ?? "01"}
                </motion.div>
                <div className="absolute left-14 top-4 h-[320px] w-0.5 bg-[var(--border)]" aria-hidden>
                  <motion.div
                    className="absolute left-0 top-0 w-full min-h-[4px] bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                    style={{ height: lineHeightPct }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex w-full flex-col gap-16 pl-0 lg:mt-0 lg:gap-24 lg:pl-4">
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  ref={(el) => { stepRefs.current[i] = el; }}
                >
                  <div className="mb-2 text-4xl font-bold tracking-tighter text-blue-500 lg:hidden">
                    {step.num}
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50/80 sm:h-16 sm:w-16">
                      <MethodologyStepIconWithId stepIndex={i as 0 | 1 | 2 | 3} className="h-8 w-8 sm:h-9 sm:w-9" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tighter text-[var(--foreground)] sm:text-3xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    {step.text}
                  </p>
                  {/* Adım 02 ve 03 sonrası AI mühürü – akış içi vurgu */}
                  {(i === 1 || i === 2) && (
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1.5 text-xs font-medium text-blue-700">
                        {i === 1 ? "Gemini destekli analiz" : "Claude destekli içerik"}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
