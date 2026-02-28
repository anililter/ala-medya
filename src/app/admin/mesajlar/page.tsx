import Link from "next/link";
import { prisma } from "@/lib/db";
import { AdminMarkRead } from "./AdminMarkRead";

export const dynamic = "force-dynamic";

export default async function AdminMesajlarPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        İletişim Mesajları
      </h1>
      <div className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-zinc-500">Henüz mesaj yok.</p>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`rounded-lg border p-4 ${
                m.read
                  ? "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                  : "border-amber-200 bg-amber-50/50 dark:border-amber-900/50 dark:bg-amber-950/20"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">{m.name}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{m.email}</p>
                  {m.subject && (
                    <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Konu: {m.subject}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{m.message}</p>
                  <p className="mt-2 text-xs text-zinc-400">
                    {new Date(m.createdAt).toLocaleString("tr-TR")}
                  </p>
                </div>
                <AdminMarkRead messageId={m.id} read={m.read} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
