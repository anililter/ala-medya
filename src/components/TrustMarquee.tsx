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
      <section className="w-full bg-[#f9f9f9] py-20 sm:py-28">
        <div className="w-full px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              8 Yıldır Güvenle Büyüttüğümüz Markalar
            </h2>
            <p className="mt-4 w-full text-xl leading-relaxed text-[var(--muted)]">
              Lotus Diş, Sonax, Xoom ve daha fazlası
            </p>
          </div>

          <div className="relative mt-14 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#f9f9f9] to-transparent sm:w-20" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#f9f9f9] to-transparent sm:w-20" />

            <div className="flex w-max animate-trust-marquee items-center gap-12 sm:gap-16">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center gap-12 sm:gap-16">
                  {items.map((p) => (
                    <Link
                      key={`${p.id}-${copy}`}
                      href="/referanslar"
                      className="group relative flex h-16 w-28 shrink-0 items-center justify-center sm:h-20 sm:w-36"
                    >
                      {p.imageUrl ? (
                        <Image
                          src={p.imageUrl}
                          alt={p.title}
                          width={144}
                          height={80}
                          className="object-contain opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 grayscale"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-[var(--muted)] transition-colors duration-300 group-hover:text-blue-600">
                          {p.title.slice(0, 2)}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/referanslar"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-blue-600/35"
            >
              Başarı Hikayelerimiz <span aria-hidden>›</span>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
