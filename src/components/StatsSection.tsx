"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const STATS = [
  { value: 150, suffix: "+", label: "Mutlu Müşteri" },
  { value: 80, suffix: "+", label: "Profesyonel Ekip" },
  { value: 284, suffix: "+", label: "Tamamlanan Proje" },
  { value: 20, suffix: "+", label: "Sektörel Tecrübe" },
];

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1000 / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function Counter({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const count = useCountUp(value, 2, start);
  return (
    <span className="tabular-nums text-5xl font-bold tracking-tight text-white sm:text-6xl">
      {count}
      <span className="text-blue-300">{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f9f9f9] py-24 sm:py-32" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[1200px]">
        {/* Üst: Başlık + Açıklama */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Premier Strateji, Yapay Zeka Gücü:{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Dijitalde Ala Dönemi Başlıyor
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            8 yıllık sektörel reflekslerimizi, Google&apos;ın en başarılı %3&apos;lük diliminde yer alan
            bir Premier Partner vizyonuyla birleştiriyoruz. Dijital yükümlülüklerinizi devralıyor;
            markanızı Gemini, ChatGPT ve Claude destekli akıllı stratejilerle rakiplerinizin
            ötesine taşıyoruz.
          </p>
          <div className="mt-8">
            <Link
              href="/referanslar"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
            >
              Keşfet
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Alt: İstatistik Kartları */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-1"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-6 py-10 text-center sm:py-14 ${
                  i < STATS.length - 1 ? "border-r border-white/[0.06]" : ""
                } ${i < 2 ? "border-b border-white/[0.06] lg:border-b-0" : ""}`}
              >
                <Counter value={stat.value} suffix={stat.suffix} start={inView} />
                <span className="mt-3 text-sm font-medium text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
