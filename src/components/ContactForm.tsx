"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value || undefined,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 disabled:opacity-50 transition";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" name="name" placeholder="Adınız" required disabled={status === "loading"} className={inputClass} />
      <input type="email" name="email" placeholder="E-posta" required disabled={status === "loading"} className={inputClass} />
      <input type="text" name="subject" placeholder="Konu" disabled={status === "loading"} className={inputClass} />
      <textarea name="message" placeholder="Mesajınız" rows={4} required disabled={status === "loading"} className={inputClass} />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-[#0EA5E9] px-4 py-3.5 font-medium text-white transition hover:bg-[#0284C7] disabled:opacity-50"
      >
        {status === "loading" ? "Gönderiliyor…" : "Gönder"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-600">Mesajınız alındı.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">Bir hata oluştu. Tekrar deneyin.</p>
      )}
    </form>
  );
}
