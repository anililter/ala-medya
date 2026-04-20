"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";
import { FOLDER_REFERENCES } from "@/data/folderReferences";

type Project = { id: string; title: string; imageUrl: string | null };

export function TrustMarquee({ projects }: { projects: Project[] }) {
  const items =
    projects.length > 0
      ? projects
      : FOLDER_REFERENCES.map((r) => ({ id: r.id, title: r.title, imageUrl: r.src }));

  return (
    <AnimatedSection>
      <section className="w-full bg-[#fafafa] py-24 sm:py-32 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-50" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-50" />

        <div className="w-full px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              8 Yıldır Güvenle Büyüttüğümüz Markalar
            </h2>
            <div className="mt-6 flex flex-col gap-2">
              <p className="text-xl font-medium text-blue-600">
                Pazar Liderleri ve Yenilikçi Markalar
              </p>
              <p className="mx-auto max-w-2xl text-lg text-slate-400">
                Lotus Diş, Sonax, Xoom, BHT Clinic ve daha fazlasını dijitalde başarıya taşıyoruz.
              </p>
            </div>
          </div>

          <div className="relative mt-20 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#fafafa] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#fafafa] to-transparent" />

            <div className="flex w-max animate-trust-marquee items-center gap-16 sm:gap-24">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center gap-16 sm:gap-24">
                  {items.map((p) => (
                    <Link
                      key={`${p.id}-${copy}`}
                      href="/referanslar"
                      className="group relative flex h-20 w-32 shrink-0 items-center justify-center sm:h-24 sm:w-44 transition-transform duration-500 hover:scale-105"
                    >
                      {p.imageUrl ? (
                        <div className="relative h-full w-full">
                          <Image
                            src={p.imageUrl}
                            alt={p.title}
                            fill
                            className="object-contain logo-grayscale"
                            sizes="(max-width: 640px) 144px, 176px"
                          />
                        </div>
                      ) : (
                        <span className="text-2xl font-bold text-slate-300 transition-colors duration-300 group-hover:text-blue-600">
                          {p.title.slice(0, 2)}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/referanslar"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/40 hover:-translate-y-1 active:translate-y-0"
            >
              Başarı Hikayelerimiz 
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>›</span>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

