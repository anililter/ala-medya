"use client";

import { useRouter } from "next/navigation";

export function AdminMarkRead({
  messageId,
  read,
}: { messageId: string; read: boolean }) {
  const router = useRouter();

  async function handleToggle() {
    await fetch(`/api/messages/${messageId}`, { method: "PATCH" });
    router.refresh();
  }

  if (read) return null;
  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded bg-amber-600 px-3 py-1 text-sm text-white hover:bg-amber-700"
    >
      Okundu işaretle
    </button>
  );
}
