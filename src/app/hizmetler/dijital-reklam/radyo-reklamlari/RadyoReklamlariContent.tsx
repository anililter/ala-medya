"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_ITEMS = [
  {
    title: "Hedef Kitle ve Bölge Bazlı Mecra Seçimi",
    desc: "Hedef kitle ve bölgeye göre radyo istasyonu seçimi; dinleyici profili ve coverage analizi ile doğru frekanslara yatırım.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#FEF3C7" />
        <circle cx="24" cy="24" r="10" stroke="#D97706" strokeWidth="2" />
        <path d="M24 14v10l6 6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Yayın Planı: Frekans, Gün ve Saat",
    desc: "Frekans (kaç kez duyulacak) ve gün/saat dilimi kurgusu; marka bilinirliği ve lokal talep hedeflerine göre plan.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#E0E7FF" />
        <rect x="12" y="14" width="24" height="20" rx="2" stroke="#4F46E5" strokeWidth="2" />
        <path d="M12 20h24M12 26h16" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Mesaj ve Spot Metni Brief'i",
    desc: "Reklam mesajı ve spot metni brief'i; isteğe bağlı prodüksiyon yönlendirmesi. Kampanya raporu ve sonraki dönem önerileri.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect width="48" height="48" rx="12" fill="#D1FAE5" />
        <path d="M16 22h16M16 28h12M16 34h8" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="16" r="3" stroke="#059669" strokeWidth="2" />
      </svg>
    ),
  },
];

const DATA_METRICS = [
  { metric: "Yayın sayısı ve GRP", how: "Toplam yayın sayısı, dinleyici kapsamı (reach) ve GRP; istasyon ve zaman dilimi bazında rapor." },
  { metric: "Maliyet ve frekans", how: "Spot maliyeti, CPM (bin dinleyici maliyeti) ve ortalama frekans; bütçe verimliliği takibi." },
  { metric: "Sonraki dönem önerisi", how: "Kampanya sonrası rapor ve bir sonraki dönem için mecra / saat önerileri." },
];

const FAQ_DATA = [
  { q: "Radyo reklamı prodüksiyonu yapıyor musunuz?", a: "Spot metni ve mesaj brief'i tarafımızdan; ses prodüksiyonu ihtiyacında deneyimli stüdyolara yönlendirme yapıyoruz." },
  { q: "Hangi bölgelerde çalışıyorsunuz?", a: "Türkiye genelinde radyo istasyonlarıyla çalışıyoruz. Hedef bölgeye göre mecra seçimi ve yayın planı kurguluyoruz." },
  { q: "Raporlama nasıl sunuluyor?", a: "Kampanya süresince yayın özeti; kampanya sonunda rapor ve sonraki dönem için öneriler." },
];

function PerformanceChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="border-t border-[var(--border)] bg-[#292524] py-24 sm:py-32" ref={ref}>
      <div className="mx-auto w-[90%] max-w-[900px]">
        <motion.h2
          className="text-3xl font-light tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Yayın ve Kapsamda Şeffaflık
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base font-light text-amber-100/80"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Yayın planı, GRP ve maliyet: geleneksel mecrada net raporlama.
        </motion.p>
        <motion.div
          className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-8 py-10 backdrop-blur-xl sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-amber-400">Yayın dağılımı</span>
            <div className="flex h-32 items-end justify-center gap-3">
              {[70, 50, 85, 60, 90].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-10 rounded-t bg-amber-500/90"
                  initial={{ height: "0px" }}
                  animate={inView ? { height: `${h}px` } : { height: "0px" }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                />
              ))}
            </div>
            <p className="mt-4 text-center text-sm font-light text-amber-100/80">Günlük spot dağılımı (örnek)</p>
          </div>
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-8 py-10 backdrop-blur-xl sm:px-12 sm:py-12">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-amber-400">Süreç</span>
            <div className="flex flex-col gap-3 text-sm text-amber-100/90">
              <p>Brief → Mecra seçimi → Yayın planı → Rapor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function RadyoReklamlariContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7] py-28 sm:py-36 dark:from-[#292524] dark:via-[var(--background)] dark:to-[#1c1917]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-amber-500/15 blur-3xl" />
        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Radyo Reklamları
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Marka Bilinirliği ve Lokal Talep İçin{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                Doğru Mecra, Doğru Plan
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              Hedef kitle ve bölge bazlı mecra seçimi; yayın planı (frekans, gün, saat); mesaj ve spot metni brief'i. Net brieften yayına uçtan uca süreç; kampanya raporu ve sonraki dönem önerileri.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/#iletisim-form" className="inline-flex items-center rounded-full bg-amber-600 px-7 py-3.5 text-sm font-medium text-white shadow-lg transition hover:bg-amber-700">
                Teklif Al
              </Link>
            </div>
          </div>
          <div className="relative flex shrink-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-amber-500/20 blur-xl" />
            <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-amber-200 bg-white shadow-xl dark:border-amber-500/20 dark:bg-[var(--card)] sm:h-60 sm:w-60">
              <svg className="h-28 w-28 sm:h-32 sm:w-32 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <PerformanceChartSection />

      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Neleri Yönetiyoruz?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Hedef kitle ve bölge bazlı mecra seçimi; yayın planı (frekans, gün, saat) kurgusu; mesaj ve spot metni brief'i; kampanya raporu ve sonraki dönem önerileri.
            </p>
            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {FEATURE_ITEMS.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-[var(--muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#f9fafb] py-24 sm:py-32 dark:bg-[var(--background)]">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Veri Şeffaflığı
            </h2>
            <p className="mt-3 max-w-xl text-base font-light text-[var(--muted)]">
              Radyo kampanya metriklerini nasıl takip ettiğimizi net biçimde sunuyoruz.
            </p>
            <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-white dark:bg-[var(--card)]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--muted)]/5">
                    <th className="px-6 py-4 text-sm font-semibold text-[var(--foreground)]">Metrik</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[var(--foreground)]">Nasıl sunuyoruz?</th>
                  </tr>
                </thead>
                <tbody>
                  {DATA_METRICS.map((row, i) => (
                    <tr key={i} className="border-b border-[var(--border)] last:border-b-0">
                      <td className="px-6 py-4 font-medium text-[var(--foreground)]">{row.metric}</td>
                      <td className="px-6 py-4 font-light text-[var(--muted)]">{row.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
          <div className="mx-auto w-[90%] max-w-[720px]">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Sıkça Sorulan Sorular
            </h2>
            <div className="mt-12 divide-y divide-[var(--border)]">
              {FAQ_DATA.map((item, i) => (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="pr-4 text-base font-semibold">{item.q}</span>
                    <svg className={`h-5 w-5 shrink-0 text-[var(--muted)] transition-transform ${openFaq === i ? "rotate-45" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                    </svg>
                  </button>
                  {openFaq === i && <p className="pb-5 text-sm font-light leading-relaxed text-[var(--muted)]">{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32 dark:bg-[var(--card)]">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-3xl">
            Radyoda markanızı duyurmaya hazır mısınız?
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            Doğru mecra ve <strong className="text-[var(--foreground)]">yayın planı</strong> ile lokal talep yaratma.
          </p>
          <Link href="/#iletisim-form" className="mt-8 inline-flex rounded-full bg-amber-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-amber-700">
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
