import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center px-6 text-center">
      <div className="mx-auto w-full max-w-[600px] px-6 lg:px-12">
        <p className="text-6xl font-bold tracking-tighter text-[var(--muted)]/30 sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl md:text-5xl">
          Bu sayfa bulunamadı
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--muted)]">
          Aradığınız içerik taşınmış veya kaldırılmış olabilir. Ana sayfadan devam edebilirsiniz.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition hover:opacity-90"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/#iletisim-form"
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--border)] px-8 py-4 text-lg font-semibold text-[var(--foreground)] transition hover:border-[var(--foreground)] hover:bg-[var(--background)]"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  );
}
