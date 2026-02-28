import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminReferanslarPage() {
  const projects = await prisma.project.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    include: { service: true },
  });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Referanslar
        </h1>
        <Link
          href="/admin/referanslar/yeni"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          + Yeni referans
        </Link>
      </div>
      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="p-3 font-medium text-zinc-900 dark:text-zinc-50">Logo</th>
              <th className="p-3 font-medium text-zinc-900 dark:text-zinc-50">Başlık</th>
              <th className="p-3 font-medium text-zinc-900 dark:text-zinc-50">Kategori</th>
              <th className="p-3 font-medium text-zinc-900 dark:text-zinc-50">Yayında</th>
              <th className="p-3 font-medium text-zinc-900 dark:text-zinc-50">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-zinc-500">
                  Henüz referans eklenmemiş.
                </td>
              </tr>
            ) : (
              projects.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-zinc-100 dark:border-zinc-800/50"
                >
                  <td className="p-3">
                    {p.imageUrl ? (
                      <div className="relative h-10 w-20">
                        <Image
                          src={p.imageUrl}
                          alt={p.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-zinc-400">—</span>
                    )}
                  </td>
                  <td className="p-3 font-medium text-zinc-900 dark:text-zinc-50">
                    {p.title}
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    {p.category ?? "—"}
                  </td>
                  <td className="p-3">
                    {p.published ? (
                      <span className="text-green-600 dark:text-green-400">Evet</span>
                    ) : (
                      <span className="text-zinc-400">Hayır</span>
                    )}
                  </td>
                  <td className="p-3">
                    <Link
                      href={`/admin/referanslar/${p.id}/duzenle`}
                      className="text-zinc-600 hover:underline dark:text-zinc-400"
                    >
                      Düzenle
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
