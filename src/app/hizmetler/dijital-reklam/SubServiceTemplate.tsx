import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  bullets: string[];
  relatedHref?: string;
  relatedLabel?: string;
};

export function SubServiceTemplate({
  title,
  subtitle,
  bullets,
  relatedHref,
  relatedLabel,
}: Props) {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="w-full px-4 pt-24 pb-14 sm:pt-32 sm:pb-16">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
            Dijital Reklam Yönetimi
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="w-full px-4 pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-3xl rounded-3xl border border-[var(--border)] bg-white/70 p-8 shadow-lg shadow-black/5 backdrop-blur-xl sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Neleri yönetiyoruz?
          </h2>
          <ul className="mt-6 space-y-3 text-[var(--muted)]">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#iletisim-form"
              className="btn-shimmer inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
            >
              Teklif isteyin
            </Link>
            {relatedHref && relatedLabel ? (
              <Link
                href={relatedHref}
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/60 px-7 py-3.5 text-base font-semibold text-[var(--foreground)] transition hover:bg-white"
              >
                {relatedLabel}
              </Link>
            ) : (
              <Link
                href="/hizmetler/dijital-reklam"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/60 px-7 py-3.5 text-base font-semibold text-[var(--foreground)] transition hover:bg-white"
              >
                Dijital reklam hizmetleri
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

