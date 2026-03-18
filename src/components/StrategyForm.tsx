"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MAIN_SERVICES = [
  { id: "dijital-reklam", label: "Dijital Reklam Yönetimi", href: "/hizmetler/dijital-reklam" },
  { id: "kreatif-psikolojisi", label: "Kreatif Psikolojisi", href: "/hizmetler/kreatif-psikolojisi" },
  { id: "raporlama-ve-analiz", label: "Raporlama ve Analiz", href: "/hizmetler/raporlama-ve-analiz" },
  { id: "seo", label: "SEO", href: "/hizmetler/seo" },
  { id: "sosyal-medya", label: "Sosyal Medya Yönetimi", href: "/hizmetler/sosyal-medya" },
  { id: "icerik-pazarlama", label: "İçerik Pazarlama", href: "/hizmetler/icerik-pazarlama" },
  { id: "web-tasarim", label: "Web Tasarım & Yazılım", href: "/hizmetler/web-tasarim" },
  { id: "donusum-optimizasyonu", label: "Dönüşüm Optimizasyonu (CRO)", href: "/hizmetler/donusum-optimizasyonu" },
];

function validateWebsite(url: string): boolean {
  if (!url.trim()) return true;
  try {
    new URL(url.startsWith("http") ? url : `https://${url}`);
    return true;
  } catch {
    return false;
  }
}

function validatePhone(phone: string): boolean {
  if (!phone.trim()) return true;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 11;
}

export function StrategyForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [service, setService] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const [fieldError, setFieldError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldError(null);

    const nameTrim = name.trim();
    const emailTrim = email.trim();

    if (!nameTrim) {
      setFieldError("Küçük bir eksik var, kontrol eder misin? Ad soyad alanını doldurun.");
      return;
    }
    if (!emailTrim) {
      setFieldError("Küçük bir eksik var, kontrol eder misin? E-posta adresinizi yazın.");
      return;
    }
    if (!validateWebsite(website)) {
      setFieldError("Web adresi geçerli görünmüyor. Örn: alamedya.com veya https://alamedya.com");
      return;
    }
    if (!validatePhone(phone)) {
      setFieldError("Telefon numarası 10–11 haneli olmalı. Başında 0 olmadan yazabilirsiniz.");
      return;
    }

    const serviceLabel = MAIN_SERVICES.find((s) => s.id === service)?.label ?? service ?? "—";

    const message = [
      "[Strateji Analizi]",
      `Hizmet: ${serviceLabel}`,
      `Web: ${website.trim() || "—"}`,
      `Telefon: ${phone.trim() || "—"}`,
      `Not: ${note.trim() || "—"}`,
    ].join("\n");

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameTrim,
          email: emailTrim,
          phone: phone.trim() || undefined,
          subject: "Strateji Analizi",
          message,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setService(null);
      setName("");
      setEmail("");
      setWebsite("");
      setPhone("");
      setNote("");
    } catch {
      setStatus("error");
      setFieldError("Gönderim sırasında bir şey ters gitti. Lütfen tekrar deneyin veya WhatsApp üzerinden yazın.");
    }
  };

  return (
    <div className="w-full px-6 py-16 sm:py-24 lg:px-12">
      <div
        id="iletisim-form"
        className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-2xl shadow-black/5 backdrop-blur-xl"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] animate-strategy-gradient"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 80% at 30% 20%, rgba(201, 168, 76, 0.45) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 70% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 50% 50%, rgba(15, 23, 42, 0.25) 0%, transparent 60%)
            `,
            backgroundSize: "200% 200%",
          }}
          aria-hidden
        />

        <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mx-auto max-w-2xl text-center"
              >
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-blue-600 sm:text-3xl"
                >
                  Başarıyoruz…
                </motion.p>
                <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                  Analiziniz Başladı. 8 Yıllık Refleksimiz Devrede.
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-[var(--muted)]">
                  Google Premier Partner ekibimiz 24 saat içinde size özel strateji dökümanını hazırlayacak. Bu sırada bizi Instagram&apos;da takip ederek güncel vaka analizlerimize göz atabilirsiniz.
                </p>
                <a
                  href="https://www.instagram.com/alamedya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:scale-105 hover:shadow-blue-600/30"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @alamedya
                </a>
              </motion.div>
            ) : (
              <motion.div
                key="classic-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mx-auto max-w-3xl"
              >
                <form onSubmit={handleSubmit}>
                  <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
                    Ücretsiz Strateji Analizi
                  </h2>
                  <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                    Kısa bir form doldurun, ekibimiz size özel yol haritasını paylaşsın.
                  </p>

                  <div className="mt-12 grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                        Hizmet seçimi
                      </label>
                      <select
                        value={service ?? ""}
                        onChange={(e) => setService(e.target.value || null)}
                        disabled={status === "loading"}
                        className="input-apple w-full text-lg sm:text-xl"
                      >
                        <option value="" disabled>
                          Seçiniz…
                        </option>
                        {MAIN_SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="strategy-name" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                        Ad Soyad
                      </label>
                      <input
                        id="strategy-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={status === "loading"}
                        placeholder="Ad Soyad"
                        className="input-apple w-full text-lg sm:text-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="strategy-email" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                        E-posta
                      </label>
                      <input
                        id="strategy-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading"}
                        placeholder="ornek@eposta.com"
                        className="input-apple w-full text-lg sm:text-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="strategy-phone" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                        Telefon (isteğe bağlı)
                      </label>
                      <input
                        id="strategy-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={status === "loading"}
                        placeholder="5xx xxx xx xx"
                        className="input-apple w-full text-lg sm:text-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="strategy-website" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                        Web sitesi (isteğe bağlı)
                      </label>
                      <input
                        id="strategy-website"
                        type="text"
                        inputMode="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        disabled={status === "loading"}
                        placeholder="alamedya.com"
                        className="input-apple w-full text-lg sm:text-xl"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="strategy-note" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                      Not (isteğe bağlı)
                    </label>
                    <textarea
                      id="strategy-note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      disabled={status === "loading"}
                      placeholder="Kısaca hedefiniz, bütçe aralığı, mevcut kanallar vb."
                      className="input-apple w-full resize-y text-lg leading-relaxed sm:text-xl"
                      rows={5}
                    />
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-blue-200/60 bg-blue-50/50 px-5 py-4">
                    <span className="inline-flex items-center gap-2 text-sm text-blue-800">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                      </span>
                      Stratejiniz AI destekli analizle değerlendirilir.
                    </span>
                  </div>

                  <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-[var(--muted)]">
                      Verileriniz KVKK uyumluluğuyla korunur. Spam yok, sadece strateji.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "loading" || !service}
                      className="btn-shimmer w-full shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.02] hover:shadow-blue-600/40 disabled:scale-100 disabled:opacity-70 sm:w-auto"
                    >
                      {status === "loading" ? "Gönderiliyor…" : "Gönder"}
                    </button>
                  </div>

                  {(fieldError || status === "error") && (
                    <p className="mt-4 text-base text-red-600">
                      {fieldError || "Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin."}
                    </p>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function SectorIcon({ type }: { type: "saglik" | "psikoloji" | "gayrimenkul" | "diger" }) {
  const c = "h-10 w-10 sm:h-12 sm:w-12 shrink-0";
  switch (type) {
    case "saglik":
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case "psikoloji":
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      );
    case "gayrimenkul":
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      );
    case "diger":
    default:
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      );
  }
}
