"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const VERTICALS = [
  {
    title: "Sağlık Turizmi",
    desc: "Global hasta kazanımı.",
    detail: "Medicana, BHT Clinic.",
    color: "emerald",
  },
  {
    title: "Psikoloji & Ruh Sağlığı",
    desc: "Etik ve güven odaklı randevu yönetimi.",
    detail: "",
    color: "sky",
  },
  {
    title: "Gayrimenkul & Yatırım",
    desc: "Yüksek değerli satış hunileri.",
    detail: "",
    color: "amber",
  },
  {
    title: "Otomotiv & Hizmet",
    desc: "Lokal dominasyon ve marka bilinirliği.",
    detail: "Sonax.",
    color: "blue",
  },
  {
    title: "Fitness & Yaşam",
    desc: "Topluluk yönetimi ve sadakat inşası.",
    detail: "Xoom.",
    color: "orange",
  },
];

const VALUES = [
  {
    title: "Şeffaflık",
    desc: "Veriyi asla gizlemiyoruz; her adımımızı canlı dashboardlarımızdan izleyebilirsiniz.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.847 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.153 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Sürekli Optimizasyon",
    desc: "Durmak, gerilemektir. Her kampanya, her gün yeniden optimize edilir.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "amber",
  },
  {
    title: "Sonuç Odaklılık",
    desc: "Beğeni sayılarına değil, cironuza ve büyüme rakamlarınıza odaklanıyoruz.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0115.382 15.382l-4.307-4.306L21.75 21.75" />
      </svg>
    ),
    color: "emerald",
  },
];

export function HakkimizdaContent() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full px-6 lg:px-12">
      {/* 1. Vizyoner Hero – hafif gradyan ve dekoratif öğe */}
      <section className="relative overflow-hidden px-6 pt-24 pb-32 sm:px-8 sm:pt-32 sm:pb-40 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60 pointer-events-none" />
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-cyan-200/25 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-[800px] text-center">
          <motion.span
            className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            2018&apos;den bugüne
          </motion.span>
          <motion.h1
            className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="bg-gradient-to-r from-[var(--foreground)] via-blue-700 to-cyan-700 bg-clip-text text-transparent">
              Sekiz Yıllık Tecrübe.
            </span>
            <br />
            <span className="text-[var(--foreground)]">Yapay Zeka ile Geleceğe.</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            2018 yılında &quot;Freelance Reklam Hizmeti&quot; ile temelleri atılan yolculuğumuz, bugün Ala Medya çatısı altında Google Premier Partner kimliğiyle global bir boyuta ulaştı. Biz sadece reklam yönetmiyoruz; dijitalin karmaşasını veriyle berraklaştırıyoruz.
          </motion.p>
        </div>
      </section>

      {/* 2. Premier Partner Otoritesi – hafif gri kart + mavi ton */}
      <AnimatedSection delay={0.1}>
        <section className="relative border-t border-[var(--border)] overflow-hidden px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-blue-50/30 pointer-events-none" />
          <div className="relative mx-auto max-w-[1000px]">
            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-[#f5f5f7] to-blue-50/40 p-10 shadow-lg shadow-blue-900/5 sm:p-14">
              <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                    Zirvenin %3&apos;lük Dilimi.
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                    Google&apos;ın en başarılı %3&apos;lük diliminde yer alan bir Premier Partner olarak; en yeni verilere, beta özelliklere ve doğrudan Google desteğine sahibiz. Bu güç, her kuruş reklam bütçenizin global standartlarda yönetilmesini sağlar.
                  </p>
                </div>
                <div className="flex shrink-0 items-center justify-center">
                  <div className="relative">
                    <div
                      className="absolute -inset-4 rounded-[2rem] opacity-50 blur-2xl"
                      style={{ boxShadow: "0 0 60px 20px rgba(201, 168, 76, 0.25)" }}
                    />
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/90 shadow-lg backdrop-blur sm:h-40 sm:w-40">
                      <svg className="h-16 w-16 sm:h-20 sm:w-20" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 3. İnsan Zekası + AI Hızı – iki sütun Bento, renkli kartlar */}
      <AnimatedSection>
        <section className="relative border-t border-[var(--border)] overflow-hidden px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-50/20 pointer-events-none" />
          <div className="relative mx-auto max-w-[1100px]">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              İnsan Zekası + AI Hızı
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-lg text-[var(--muted)]">
              Stratejimizi veriden alıyor, hızımızı yapay zekadan kazanıyoruz.
            </p>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-50/80 to-orange-50/50 p-8 shadow-lg shadow-amber-900/5 backdrop-blur sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998-5.59 7.502 7.502 0 0114.998 5.59" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">İnsan</h3>
                <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                  8 yıllık sektörel refleks. Sağlık, gayrimenkul ve psikoloji gibi hassas alanlarda binlerce başarılı kampanya ile kazanılan paha biçilemez deneyim.
                </p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-blue-200/60 bg-gradient-to-br from-blue-50/80 to-cyan-50/50 p-8 shadow-lg shadow-blue-900/5 backdrop-blur sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">AI</h3>
                <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                  Gemini 3.1 Pro, Claude 4.6 Sonnet ve GPT-5.4 Thinking entegrasyonu. Stratejimizi veriden alıyor, hızımızı yapay zekadan kazanıyoruz. Reklam metinlerinden kitle analizine kadar her aşamada AI gücünü kullanıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. Sektörel Dikey Uzmanlık – renkli kartlar */}
      <AnimatedSection>
        <section className="relative border-t border-[var(--border)] overflow-hidden px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/50 pointer-events-none" />
          <div className="relative mx-auto max-w-[1100px]">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Sektörel Dikey Uzmanlık
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
              Ala Medya&apos;nın uzmanlaştığı ana sektörler.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {VERTICALS.map((v, i) => {
                const colorMap: Record<string, string> = {
                  emerald: "from-emerald-50 to-teal-50/80 border-emerald-200/60",
                  sky: "from-sky-50 to-blue-50/80 border-sky-200/60",
                  amber: "from-amber-50 to-yellow-50/80 border-amber-200/60",
                  blue: "from-blue-50 to-indigo-50/60 border-blue-200/60",
                  orange: "from-orange-50 to-amber-50/80 border-orange-200/60",
                };
                const iconMap: Record<string, string> = {
                  emerald: "bg-emerald-500/15 text-emerald-600",
                  sky: "bg-sky-500/15 text-sky-600",
                  amber: "bg-amber-500/15 text-amber-600",
                  blue: "bg-blue-500/15 text-blue-600",
                  orange: "bg-orange-500/15 text-orange-600",
                };
                const c = colorMap[v.color] || "from-slate-50 to-slate-100/80 border-[var(--border)]";
                const ic = iconMap[v.color] || "bg-[var(--foreground)]/5 text-[var(--foreground)]";
                return (
                  <AnimatedSection key={v.title} delay={i * 0.06}>
                    <div className={`group overflow-hidden rounded-2xl border bg-gradient-to-br ${c} p-7 shadow-sm transition hover:shadow-md`}>
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${ic}`}>
                        <span className="text-lg font-bold">{v.title.charAt(0)}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--foreground)]">{v.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">{v.desc}</p>
                      {v.detail && <p className="mt-2 text-sm font-medium text-[var(--foreground)]">{v.detail}</p>}
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 5. Temel Değerler – renkli ikon kutuları */}
      <AnimatedSection>
        <section className="relative border-t border-[var(--border)] overflow-hidden px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 to-blue-50/20 pointer-events-none" />
          <div className="relative mx-auto max-w-[900px]">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Temel Değerler
            </h2>
            <div className="mt-16 grid gap-12 sm:grid-cols-3">
              {VALUES.map((item, i) => {
                const boxMap: Record<string, string> = {
                  blue: "border-blue-200 bg-blue-50/80 text-blue-600",
                  amber: "border-amber-200 bg-amber-50/80 text-amber-600",
                  emerald: "border-emerald-200 bg-emerald-50/80 text-emerald-600",
                };
                const box = boxMap[item.color] || "border-[var(--border)] bg-white text-[var(--foreground)]";
                return (
                  <AnimatedSection key={item.title} delay={i * 0.08}>
                    <div className="flex flex-col items-center text-center">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${box}`}>
                        {item.icon}
                      </div>
                      <h3 className="mt-6 text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      </div>
    </main>
  );
}
