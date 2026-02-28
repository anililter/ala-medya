"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface Partner {
  id: string;
  name: string;
  imageUrl: string;
  order: number;
  published: boolean;
}

export default function AdminPartnerlerPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [name, setName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function load() {
    const res = await fetch("/api/partners");
    if (res.ok) {
      const data = await res.json();
      setPartners(data);
    }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    if (!file || !name.trim()) return;

    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", "partners");
      const uploadRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!uploadRes.ok) throw new Error("Yükleme hatası");
      const { url } = await uploadRes.json();

      const createRes = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), imageUrl: url }),
      });
      if (!createRes.ok) throw new Error("Kaydetme hatası");

      setName("");
      if (fileRef.current) fileRef.current.value = "";
      await load();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Hata oluştu");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Bu partneri silmek istediğinize emin misiniz?")) return;
    await fetch(`/api/partners/${id}`, { method: "DELETE" });
    await load();
  }

  async function handleToggle(p: Partner) {
    await fetch(`/api/partners/${p.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: p.name, imageUrl: p.imageUrl, order: p.order, published: !p.published }),
    });
    await load();
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Partner Logoları
      </h1>

      <form onSubmit={handleAdd} className="mb-8 flex flex-wrap items-end gap-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Partner Adı</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ör: Google Premier"
            required
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Logo</label>
          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/svg+xml"
            required
            className="text-sm text-zinc-600 dark:text-zinc-400"
          />
        </div>
        <button
          type="submit"
          disabled={uploading}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {uploading ? "Yükleniyor…" : "+ Ekle"}
        </button>
      </form>

      {loading ? (
        <p className="text-zinc-500">Yükleniyor…</p>
      ) : partners.length === 0 ? (
        <p className="text-zinc-500">Henüz partner eklenmemiş.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {partners.map((p) => (
            <div
              key={p.id}
              className={`relative flex flex-col items-center gap-3 rounded-lg border bg-white p-4 dark:bg-zinc-950 ${
                p.published
                  ? "border-zinc-200 dark:border-zinc-800"
                  : "border-dashed border-zinc-300 opacity-50 dark:border-zinc-700"
              }`}
            >
              <div className="relative h-12 w-full">
                <Image src={p.imageUrl} alt={p.name} fill className="object-contain" sizes="160px" />
              </div>
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{p.name}</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggle(p)}
                  className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {p.published ? "Gizle" : "Yayınla"}
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(p.id)}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  Sil
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
