"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEP_SECTOR = 1;
const STEP_GOAL = 2;
const STEP_CONTACT = 3;

const SECTORS = [
  { id: "saglik-turizmi", label: "Sağlık", icon: "saglik" as const },
  { id: "psikoloji", label: "Psikoloji", icon: "psikoloji" as const },
  { id: "gayrimenkul", label: "Gayrimenkul", icon: "gayrimenkul" as const },
  { id: "diger", label: "Diğer", icon: "diger" as const },
];

const GOALS = [
  { id: "satis", label: "Satış Artışı" },
  { id: "marka", label: "Marka Bilinirliği" },
  { id: "randevu", label: "Randevu Sayısı" },
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
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [sector, setSector] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");

  const [fieldError, setFieldError] = useState<string | null>(null);

  const progressPercent = (step / 3) * 100;

  const goNext = useCallback(() => {
    setDirection("next");
    setFieldError(null);
    if (step === STEP_SECTOR && sector) setStep(STEP_GOAL);
    else if (step === STEP_GOAL && goal) setStep(STEP_CONTACT);
  }, [step, sector, goal]);

  const goPrev = useCallback(() => {
    setDirection("prev");
    setFieldError(null);
    if (step === STEP_CONTACT) setStep(STEP_GOAL);
    else if (step === STEP_GOAL) setStep(STEP_SECTOR);
  }, [step]);

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

    const sectorLabel = SECTORS.find((s) => s.id === sector)?.label ?? sector ?? "—";
    const goalLabel = GOALS.find((g) => g.id === goal)?.label ?? goal ?? "—";

    const message = [
      "[Strateji Analizi]",
      `Sektör: ${sectorLabel}`,
      `Ana hedef: ${goalLabel}`,
      `Web: ${website.trim() || "—"}`,
      `Telefon: ${phone.trim() || "—"}`,
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
      setSector(null);
      setGoal(null);
      setName("");
      setEmail("");
      setWebsite("");
      setPhone("");
      setStep(1);
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

        {/* Progress bar – en üstte ince Apple mavisi */}
        <div className="relative h-1 w-full bg-[var(--border)]">
          <motion.div
            className="absolute left-0 top-0 h-full rounded-r-full bg-blue-500"
            initial={false}
            animate={{ width: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

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
                key={`step-${step}`}
                initial={{ opacity: 0, x: direction === "next" ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "next" ? -80 : 80 }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                className="mx-auto max-w-3xl"
              >
                {/* Step 1 – Sektör */}
                {step === STEP_SECTOR && (
                  <>
                    <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
                      Hangi sektörde devleşiyoruz?
                    </h2>
                    <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                      Bir seçenek seçin; bir sonraki adımda hedefinizi belirleyeceğiz.
                    </p>
                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {SECTORS.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSector(sector === s.id ? null : s.id)}
                          className={`flex flex-col items-center gap-4 rounded-2xl border-2 px-6 py-8 text-center transition duration-200 ${
                            sector === s.id
                              ? "border-blue-500 bg-blue-50/90 text-blue-700 shadow-lg shadow-blue-500/20"
                              : "border-[var(--border)] bg-white/80 text-[var(--foreground)] hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md"
                          }`}
                        >
                          <SectorIcon type={s.icon} />
                          <span className="text-xl font-semibold">{s.label}</span>
                        </button>
                      ))}
                    </div>
                    <div className="mt-12 flex justify-end">
                      <button
                        type="button"
                        onClick={goNext}
                        disabled={!sector}
                        className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 disabled:opacity-40 disabled:shadow-none"
                      >
                        Devam
                      </button>
                    </div>
                  </>
                )}

                {/* Step 2 – Hedef */}
                {step === STEP_GOAL && (
                  <>
                    <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
                      Ana hedefiniz nedir?
                    </h2>
                    <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                      Strateji önerimizi buna göre şekillendireceğiz.
                    </p>
                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                      {GOALS.map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setGoal(goal === g.id ? null : g.id)}
                          className={`rounded-2xl border-2 px-6 py-8 text-center text-xl font-semibold transition duration-200 ${
                            goal === g.id
                              ? "border-blue-500 bg-blue-50/90 text-blue-700 shadow-lg shadow-blue-500/20"
                              : "border-[var(--border)] bg-white/80 text-[var(--foreground)] hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md"
                          }`}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                    <div className="mt-12 flex justify-between">
                      <button
                        type="button"
                        onClick={goPrev}
                        className="rounded-full border-2 border-[var(--border)] bg-white/80 px-8 py-4 text-lg font-semibold text-[var(--foreground)] transition hover:border-blue-300 hover:bg-blue-50/50"
                      >
                        Geri
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        disabled={!goal}
                        className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 disabled:opacity-40 disabled:shadow-none"
                      >
                        Devam
                      </button>
                    </div>
                  </>
                )}

                {/* Step 3 – İletişim */}
                {step === STEP_CONTACT && (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
                      Sizinle nasıl iletişime geçelim?
                    </h2>
                    <p className="mt-4 text-xl leading-relaxed text-[var(--muted)]">
                      Adınız, e-posta ve isteğe bağlı web/telefon yeterli.
                    </p>

                    <div className="mt-12 space-y-8">
                      <div>
                        <label htmlFor="strategy-name" className="sr-only">
                          Ad Soyad
                        </label>
                        <input
                          id="strategy-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled={status === "loading"}
                          placeholder="Ad Soyad"
                          className="input-apple w-full text-2xl sm:text-3xl"
                        />
                      </div>
                      <div>
                        <label htmlFor="strategy-email" className="sr-only">
                          E-posta
                        </label>
                        <input
                          id="strategy-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={status === "loading"}
                          placeholder="E-posta"
                          className="input-apple w-full text-2xl sm:text-3xl"
                        />
                      </div>
                      <div>
                        <label htmlFor="strategy-website" className="sr-only">
                          Web sitesi
                        </label>
                        <input
                          id="strategy-website"
                          type="text"
                          inputMode="url"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          disabled={status === "loading"}
                          placeholder="Web sitesi (isteğe bağlı)"
                          className="input-apple w-full text-2xl sm:text-3xl"
                        />
                      </div>
                      <div>
                        <label htmlFor="strategy-phone" className="sr-only">
                          Telefon
                        </label>
                        <input
                          id="strategy-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          disabled={status === "loading"}
                          placeholder="Telefon (isteğe bağlı)"
                          className="input-apple w-full text-2xl sm:text-3xl"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-blue-200/60 bg-blue-50/50 px-5 py-4">
                      <span className="inline-flex items-center gap-2 text-sm text-blue-800">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                        </span>
                        Stratejiniz Gemini & Claude AI modellerimizle analiz edilecektir.
                      </span>
                    </div>

                    <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        onClick={goPrev}
                        disabled={status === "loading"}
                        className="order-2 rounded-full border-2 border-[var(--border)] bg-white/80 px-8 py-4 text-lg font-semibold text-[var(--foreground)] transition hover:border-blue-300 hover:bg-blue-50/50 sm:order-1"
                      >
                        Geri
                      </button>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="btn-shimmer order-1 w-full shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.02] hover:shadow-blue-600/40 disabled:scale-100 disabled:opacity-70 sm:order-2"
                      >
                        {status === "loading" ? "Gönderiliyor…" : "Ücretsiz Analizimi Başlat"}
                      </button>
                    </div>

                    <p className="mt-6 text-sm text-[var(--muted)]">
                      Verileriniz KVKK uyumluluğuyla korunur. Spam yok, sadece strateji.
                    </p>

                    {(fieldError || status === "error") && (
                      <p className="mt-4 text-base text-red-600">
                        {fieldError || "Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin."}
                      </p>
                    )}
                  </form>
                )}
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
