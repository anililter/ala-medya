"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { href: "/admin/mesajlar", label: "Mesajlar", perm: "mesajlar" },
  { href: "/admin/referanslar", label: "Referanslar", perm: "referanslar" },
  { href: "/admin/partnerler", label: "Partnerler", perm: "partnerler" },
  { href: "/admin/blog", label: "Blog", perm: "blog" },
  { href: "/admin/kullanicilar", label: "Kullanıcılar", perm: "kullanicilar" },
];

const ROLE_PERMS: Record<string, string[]> = {
  admin: ["blog", "referanslar", "partnerler", "mesajlar", "kullanicilar"],
  editor: ["blog", "referanslar", "partnerler", "mesajlar"],
  viewer: ["mesajlar"],
};

export function AdminShell({
  children,
  userName,
  userRole,
}: {
  children: React.ReactNode;
  userName: string;
  userRole: string;
}) {
  const router = useRouter();
  const perms = ROLE_PERMS[userRole] ?? [];

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/giris");
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/admin" className="font-semibold text-zinc-900 dark:text-zinc-50">
            Ala Medya Admin
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            {NAV_ITEMS.filter((item) => perms.includes(item.perm)).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Siteye dön →
            </Link>
            <span className="text-xs text-zinc-400">{userName}</span>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-md bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              Çıkış
            </button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
