"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { FaqCategoryIconWithId } from "./icons/LineIcons";

type FaqCategory = "time" | "sectors" | "tools" | "budget" | "reports";

const FAQS: Array<{ q: string; a: string; category: FaqCategory }> = [
  {
    q: "Dijital pazarlama hizmetlerinizden sonuç almak ne kadar sürer?",
    a: "Kampanya türüne göre değişmekle birlikte, Google Ads ve Meta reklamlarında ilk hafta içinde trafik artışı gözlemlenir. SEO çalışmalarında ise organik sonuçlar genellikle 3-6 ay içerisinde belirginleşir. Tüm süreçlerde haftalık raporlama ile ilerlemeyi şeffaf şekilde paylaşırız.",
    category: "time",
  },
  {
    q: "Hangi sektörlere hizmet veriyorsunuz?",
    a: "Sağlık turizmi, otomotiv, fitness, e-ticaret, eğitim ve kurumsal hizmetler başta olmak üzere birçok sektörde deneyime sahibiz. Her sektöre özel, veriye dayalı stratejiler geliştirerek ölçülebilir sonuçlar elde ediyoruz.",
    category: "sectors",
  },
  {
    q: "Yapay zeka araçlarını süreçlerinizde nasıl kullanıyorsunuz?",
    a: "Gemini, ChatGPT ve Claude gibi yapay zeka araçlarını reklam optimizasyonu, içerik üretimi, trend analizi ve kullanıcı deneyimi iyileştirme süreçlerinde aktif olarak kullanıyoruz. Bu sayede daha hızlı, veri odaklı ve etkili sonuçlar üretiyoruz.",
    category: "tools",
  },
  {
    q: "Minimum bütçe veya sözleşme süresi var mı?",
    a: "Esnek çalışma modelleri sunuyoruz. Minimum bütçe, kampanya türüne ve hedeflerinize göre belirlenir. Sözleşme süreleri konusunda şeffaf yaklaşıyor, uzun vadeli zorunlu taahhütler yerine performansa dayalı iş birliği öneriyoruz.",
    category: "budget",
  },
  {
    q: "Raporlama ve iletişim süreciniz nasıl işliyor?",
    a: "Her müşterimize özel bir proje yöneticisi atanır. Haftalık performans raporları, aylık strateji toplantıları ve anlık iletişim kanalları ile sürecin her aşamasında bilgilendirilirsiniz. Tüm veriler şeffaf ve anlaşılır şekilde sunulur.",
    category: "reports",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AnimatedSection>
      <section className="w-full bg-[#f9f9f9] py-20 sm:py-28">
        <div className="w-full px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Merak Edilenler
            </h2>
            <p className="mt-4 w-full text-xl leading-relaxed text-slate-400 dark:text-slate-500">
              Sıkça sorulan sorular ve cevapları
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-2">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--border)] bg-white/60 backdrop-blur-sm transition-colors hover:border-blue-200/60"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left transition sm:px-8"
                  >
                    <span className="flex shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white/80 p-2">
                      <FaqCategoryIconWithId category={faq.category} className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <span className="text-lg font-semibold tracking-tight text-[var(--foreground)] sm:text-xl">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="ml-auto shrink-0 text-2xl font-light text-blue-600"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25, delay: 0.05 }}
                          className="border-t border-[var(--border)] px-6 pb-5 pt-2 text-xl leading-relaxed text-[var(--muted)] sm:px-8"
                        >
                          {faq.a}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
