"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type ReferenceFormData = {
  title: string;
  slug: string;
  clientName: string;
  category: string;
  projectUrl: string;
  description: string;
  imageUrl: string;
  published: boolean;
};

const DEFAULT: ReferenceFormData = {
  title: "",
  slug: "",
  clientName: "",
  category: "",
  projectUrl: "",
  description: "",
  imageUrl: "",
  published: true,
};

export function ReferenceForm({
  initial,
  referenceId,
}: {
  initial?: ReferenceFormData;
  referenceId?: string;
}) {
  const router = useRouter();
  const [form, setForm] = useState<ReferenceFormData>(initial ?? DEFAULT);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function slugify(s: string) {
    return s
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function handleTitleChange(title: string) {
    setForm((f) => ({ ...f, title, slug: f.slug || slugify(title) }));
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.set("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Yükleme başarısız");
      }
      const { url } = await res.json();
      setForm((f) => ({ ...f, imageUrl: url }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Yükleme başarısız");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const url = referenceId
        ? `/api/references/${referenceId}`
        : "/api/references";
      const method = referenceId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          slug: form.slug || slugify(form.title),
          clientName: form.clientName || undefined,
          category: form.category || undefined,
          projectUrl: form.projectUrl || undefined,
          description: form.description || undefined,
          imageUrl: form.imageUrl || undefined,
          published: form.published,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || data.error || "Kaydetme başarısız");
      }
      router.push("/admin/referanslar");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Kaydetme başarısız");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Başlık / Marka adı *
        </label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Slug (URL)
        </label>
        <input
          type="text"
          value={form.slug}
          onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Logo
        </label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="text-sm text-zinc-600 dark:text-zinc-400"
          />
          {uploading && (
            <span className="text-sm text-zinc-500">Yükleniyor…</span>
          )}
        </div>
        {form.imageUrl && (
          <div className="relative mt-2 h-20 w-32">
            <Image
              src={form.imageUrl}
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Kategori (filtre: Sağlık, E-Ticaret, Turizm vb.)
        </label>
        <input
          type="text"
          value={form.category}
          onChange={(e) =>
            setForm((f) => ({ ...f, category: e.target.value }))
          }
          placeholder="Örn: Sağlık"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Müşteri / Firma adı
        </label>
        <input
          type="text"
          value={form.clientName}
          onChange={(e) =>
            setForm((f) => ({ ...f, clientName: e.target.value }))
          }
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Proje / Site URL
        </label>
        <input
          type="url"
          value={form.projectUrl}
          onChange={(e) =>
            setForm((f) => ({ ...f, projectUrl: e.target.value }))
          }
          placeholder="https://..."
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Kısa açıklama
        </label>
        <textarea
          value={form.description}
          onChange={(e) =>
            setForm((f) => ({ ...f, description: e.target.value }))
          }
          rows={2}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="published"
          checked={form.published}
          onChange={(e) =>
            setForm((f) => ({ ...f, published: e.target.checked }))
          }
          className="h-4 w-4 rounded border-zinc-300"
        />
        <label
          htmlFor="published"
          className="text-sm text-zinc-700 dark:text-zinc-300"
        >
          Yayında göster
        </label>
      </div>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {saving ? "Kaydediliyor…" : referenceId ? "Güncelle" : "Kaydet"}
        </button>
        <Link
          href="/admin/referanslar"
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          İptal
        </Link>
      </div>
    </form>
  );
}
