import Link from "next/link";
import Image from "next/image";
import { MegaMenu } from "./MegaMenu";

export function Header({ active }: { active?: "referanslar" | "blog" }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-[90%] max-w-[1600px] items-center justify-between py-4 sm:px-0">
        <Link href="/">
          <Image src="/ala-medya-logo.png" alt="Ala Medya" width={180} height={48} className="h-10 w-auto sm:h-12" priority />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            Anasayfa
          </Link>
          <MegaMenu />
          <Link
            href="/referanslar"
            className={
              active === "referanslar"
                ? "font-medium text-[var(--foreground)]"
                : "text-[var(--muted)] transition hover:text-[var(--foreground)]"
            }
          >
            Referanslar
          </Link>
          <Link
            href="/blog"
            className={
              active === "blog"
                ? "font-medium text-[var(--foreground)]"
                : "text-[var(--muted)] transition hover:text-[var(--foreground)]"
            }
          >
            Blog
          </Link>
          <Link
            href="/#iletisim"
            className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
          >
            İletişime Geç
          </Link>
        </nav>
      </div>
    </header>
  );
}
