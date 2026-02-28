import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Blog
        </h1>
        <Link
          href="/admin/blog/yeni"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          + Yeni yazı
        </Link>
      </div>
      <div className="space-y-3">
        {posts.length === 0 ? (
          <p className="text-zinc-500">Henüz blog yazısı yok.</p>
        ) : (
          posts.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-50">
                  {p.title}
                </span>
                {!p.published && (
                  <span className="ml-2 text-xs text-amber-600 dark:text-amber-400">
                    Taslak
                  </span>
                )}
                <p className="text-sm text-zinc-500">
                  {new Date(p.createdAt).toLocaleDateString("tr-TR")}
                </p>
              </div>
              <Link
                href={`/admin/blog/${p.id}/duzenle`}
                className="text-sm text-zinc-600 hover:underline dark:text-zinc-400"
              >
                Düzenle
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
