"use client";

import Link from "next/link";

export function FinalCta() {
  return (
    <section
      id="iletisim"
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
      >
        <div
          className="absolute -left-1/2 top-0 h-full w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.35)_0%,transparent_50%)]"
          style={{ animation: "aurora-shift 20s ease-in-out infinite alternate" }}
        />
        <div
          className="absolute -right-1/2 top-1/4 h-2/3 w-full bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(34,211,238,0.25)_0%,transparent_50%)]"
          style={{ animation: "aurora-shift 25s ease-in-out infinite alternate-reverse" }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-1/2 w-full -translate-x-1/2 bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,rgba(59,130,246,0.2)_0%,transparent_50%)]"
          style={{ animation: "aurora-shift 18s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/95 via-blue-500/90 to-cyan-500/95" />
      </div>

      <div className="relative w-full px-4 text-center sm:px-4">
        <h2 className="text-4xl font-bold leading-[1.1] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Markanızı Bir Sonraki Seviyeye Taşımaya Hazır mısınız?
        </h2>
        <p className="mt-6 w-full text-xl text-white/90">
          Yapay zeka destekli 360° dijital pazarlama çözümleriyle markanızı büyütün
        </p>
        <div className="mt-12">
          <Link
            href="#iletisim-form"
            className="cta-pulse inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-xl font-semibold text-blue-600 shadow-xl transition hover:scale-[1.02] hover:shadow-2xl"
          >
            Hemen İletişime Geç
          </Link>
        </div>
      </div>
    </section>
  );
}
