"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
}

export function StatsBand({ stats, className = "" }: { stats: StatItem[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`border-y border-[var(--border)] bg-[var(--background)] py-16 sm:py-20 ${className}`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl">
                {item.value}
              </div>
              <div className="mt-2 text-xl text-[var(--muted)]">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
