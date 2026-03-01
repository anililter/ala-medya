"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const STATS = [
  { value: 150, suffix: "+", label: "Mutlu Müşteri", highlight: false },
  { value: 8, suffix: "", label: "Yıllık Tecrübe", highlight: true },
  { value: 284, suffix: "+", label: "Tamamlanan Proje", highlight: false },
  { value: 3, suffix: "%", label: "Premier Partner", highlight: true },
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

function Counter({
  value,
  suffix,
  start,
  highlight,
}: {
  value: number;
  suffix: string;
  start: boolean;
  highlight: boolean;
}) {
  const count = useCountUp(value, 2, start);
  return (
    <span
      className={`tabular-nums font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ${
        highlight ? "text-[var(--gold)] drop-shadow-[0_0_20px_rgba(201,168,76,0.4)]" : "text-white"
      }`}
    >
      {count}
      <span className={highlight ? "text-[var(--gold-light)]" : "text-blue-300/90"}>{suffix}</span>
    </span>
  );
}

const cardGlow = "0 0 0 1px rgba(255,255,255,0.06), 0 0 24px rgba(59,130,246,0.08)";
const cardGlowGold = "0 0 0 1px rgba(201,168,76,0.2), 0 0 32px rgba(201,168,76,0.15)";

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-24 sm:py-32"
      ref={ref}
      style={{ backgroundColor: "#030712" }}
    >
      <div className="w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full text-center"
        >
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Premier Strateji, Yapay Zeka Gücü:{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
              Dijitalde Ala Dönemi Başlıyor
            </span>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-slate-400">
            8 yıllık sektörel reflekslerimizi, Google&apos;ın en başarılı %3&apos;lük diliminde yer alan
            bir Premier Partner vizyonuyla birleştiriyoruz.
          </p>
          <div className="mt-10">
            <Link
              href="/referanslar"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition hover:border-blue-400/50 hover:bg-white/10"
            >
              Keşfet
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              className="flex flex-col items-center justify-center rounded-2xl px-4 py-10 text-center backdrop-blur-xl sm:px-6 sm:py-14"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: stat.highlight ? cardGlowGold : cardGlow,
              }}
            >
              <Counter value={stat.value} suffix={stat.suffix} start={inView} highlight={stat.highlight} />
              <span className="mt-3 text-base font-medium text-slate-400">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
