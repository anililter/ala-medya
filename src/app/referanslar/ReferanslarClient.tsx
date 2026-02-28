"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  clientName: string | null;
  projectUrl: string | null;
  category: string | null;
};

export function ReferanslarClient({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [filter, setFilter] = useState("Tümünü Gör");

  const filtered =
    filter === "Tümünü Gör"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === cat
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:border-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="flex aspect-[3/2] items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:shadow-[var(--shadow)]"
          >
            {p.imageUrl ? (
              <div className="relative h-14 w-full">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>
            ) : (
              <div className="flex h-14 items-center justify-center text-2xl font-bold text-[var(--muted)]">
                {p.title.slice(0, 2)}
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-[var(--muted)]">
          Bu kategoride referans bulunamadı.
        </p>
      )}
    </>
  );
}
