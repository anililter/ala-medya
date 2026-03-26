"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export type ReferenceProject = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  imageUrl: string | StaticImageData | null;
  clientName: string | null;
  projectUrl: string | null;
  category: string | null;
};

export function ReferanslarClient({
  projects,
  categories,
}: {
  projects: ReferenceProject[];
  categories: string[];
}) {
  const [filter, setFilter] = useState("Tümünü Gör");

  const filtered =
    filter === "Tümünü Gör"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Tabs Navigation */}
      <div className="mb-12 flex justify-center">
        <div className="inline-flex w-full flex-wrap justify-center gap-1 rounded-2xl bg-[var(--card)] p-1.5 shadow-sm border border-[var(--border)] sm:w-auto">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`
                  relative px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl
                  ${isActive 
                    ? "bg-[var(--foreground)] text-[var(--background)] shadow-md" 
                    : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]/10"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="group relative flex aspect-square flex-col items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all duration-500 hover:border-[var(--foreground)]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1"
          >
            {p.imageUrl ? (
              <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-3xl font-bold text-[var(--muted)]/40">
                {p.title.slice(0, 2)}
              </div>
            )}
            
            {/* Hover Info */}
            <div className="absolute inset-x-0 bottom-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)]">
                {p.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-[var(--muted)]">
            Bu kategoride henüz referans bulunmuyor.
          </p>
        </div>
      )}
    </>
  );
}
