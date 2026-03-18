"use client";

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
  return (
    <AnimatedSection>
      <section className="w-full bg-white py-20 sm:py-28">
        <div className="w-full px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Profesyonel Çalışma Metodolojimiz
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
              4 adımda net süreç: analiz → plan → uygulama → raporlama.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-4">
            <span className="text-sm font-medium text-[var(--muted)]">AI destek</span>
            <span className="rounded-full border border-white bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] shadow-sm">
              Gemini
            </span>
            <span className="rounded-full border border-white bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] shadow-sm">
              Claude
            </span>
            <span className="rounded-full border border-white bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] shadow-sm">
              GPT
            </span>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:shadow-lg"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
                  aria-hidden
                />
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50/80">
                    <MethodologyStepIconWithId stepIndex={i as 0 | 1 | 2 | 3} className="h-8 w-8" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-[0.25em] text-blue-600">{step.num}</span>
                      {(i === 1 || i === 2) && (
                        <span className="rounded-full border border-blue-200/80 bg-blue-50/80 px-2.5 py-1 text-[10px] font-medium text-blue-700">
                          {i === 1 ? "AI plan" : "AI optimizasyon"}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
