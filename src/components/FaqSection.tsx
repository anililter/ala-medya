"use client";

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const FAQS = [
  {
    q: "Dijital pazarlama hizmetlerinizden sonuç almak ne kadar sürer?",
    a: "Kampanya türüne göre değişmekle birlikte, Google Ads ve Meta reklamlarında ilk hafta içinde trafik artışı gözlemlenir. SEO çalışmalarında ise organik sonuçlar genellikle 3-6 ay içerisinde belirginleşir. Tüm süreçlerde haftalık raporlama ile ilerlemeyi şeffaf şekilde paylaşırız.",
  },
  {
    q: "Hangi sektörlere hizmet veriyorsunuz?",
    a: "Sağlık turizmi, otomotiv, fitness, e-ticaret, eğitim ve kurumsal hizmetler başta olmak üzere birçok sektörde deneyime sahibiz. Her sektöre özel, veriye dayalı stratejiler geliştirerek ölçülebilir sonuçlar elde ediyoruz.",
  },
  {
    q: "Yapay zeka araçlarını süreçlerinizde nasıl kullanıyorsunuz?",
    a: "Gemini, ChatGPT ve Claude gibi yapay zeka araçlarını reklam optimizasyonu, içerik üretimi, trend analizi ve kullanıcı deneyimi iyileştirme süreçlerinde aktif olarak kullanıyoruz. Bu sayede daha hızlı, veri odaklı ve etkili sonuçlar üretiyoruz.",
  },
  {
    q: "Minimum bütçe veya sözleşme süresi var mı?",
    a: "Esnek çalışma modelleri sunuyoruz. Minimum bütçe, kampanya türüne ve hedeflerinize göre belirlenir. Sözleşme süreleri konusunda şeffaf yaklaşıyor, uzun vadeli zorunlu taahhütler yerine performansa dayalı iş birliği öneriyoruz.",
  },
  {
    q: "Raporlama ve iletişim süreciniz nasıl işliyor?",
    a: "Her müşterimize özel bir proje yöneticisi atanır. Haftalık performans raporları, aylık strateji toplantıları ve anlık iletişim kanalları ile sürecin her aşamasında bilgilendirilirsiniz. Tüm veriler şeffaf ve anlaşılır şekilde sunulur.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AnimatedSection>
      <section className="bg-[#f9f9f9] py-20 sm:py-28">
        <div className="mx-auto w-[90%] max-w-[800px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-[2.75rem]">
              Merak Edilenler
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-[var(--muted)]">
              Sıkça sorulan sorular ve cevapları
            </p>
          </div>

          <div className="mt-14 flex flex-col divide-y divide-[var(--border)]">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition"
                  >
                    <span className="text-base font-semibold text-[var(--foreground)] sm:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 text-xl text-[var(--muted)] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 pb-5" : "max-h-0"}`}
                  >
                    <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
