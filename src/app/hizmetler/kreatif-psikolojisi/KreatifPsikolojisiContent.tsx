"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export function KreatifPsikolojisiContent() {
  return (
    <main className="bg-white">
      {/* Hero – Kreatif Psikolojisi tanımı */}
      <section className="mx-auto max-w-[900px] px-6 pt-32 pb-28 sm:pt-40 sm:pb-36">
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          Davranış Mühendisliği
        </p>
        <h1 className="mt-6 font-semibold tracking-tight text-[var(--foreground)] text-4xl leading-[1.15] sm:text-5xl md:text-6xl">
          Kreatif Psikolojisi
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          Dijital reklamcılıkta &quot;tıklama&quot; ile &quot;görmezden gelme&quot; arasındaki o milisaniyelik farkı belirleyen bilimdir. Ala Medya&apos;nın <strong className="text-[var(--foreground)]">8 yıllık</strong> sektörel birikimi ve yapay zeka analitiğiyle, bu süreci bir &quot;tahmin&quot; olmaktan çıkarıp bir <strong className="text-[var(--foreground)]">Davranış Mühendisliği</strong> haline getiriyoruz.
        </p>
        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/#iletisim"
            className="btn-shimmer relative inline-flex rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-95"
          >
            <span className="relative z-10">Kreatif Stratejinizi Konuşalım</span>
          </Link>
          <Link
            href="/hizmetler/dijital-reklam"
            className="inline-flex rounded-full border border-[var(--border)] bg-transparent px-6 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/10"
          >
            Dijital Reklam Hizmetleri
          </Link>
        </div>
      </section>

      {/* 1. Bölüm: Nöro-Pazarlama ve Görsel Hiyerarşi */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-28 sm:py-36">
          <div className="mx-auto flex w-[90%] max-w-[1100px] flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Dikkat Ekonomisinde Nöro-Stratejik Yaklaşım
              </h2>
              <p className="mt-8 leading-relaxed text-[var(--muted)] sm:text-lg">
                İnsan beyni, dijital bir akışta görseli sadece <strong className="text-[var(--foreground)]">13 milisaniyede</strong> işler. Biz, <strong className="text-[var(--foreground)]">Gemini 3.1 Pro</strong> ve <strong className="text-[var(--foreground)]">Claude 4.6 Sonnet</strong> destekli görsel analiz modelleriyle, renk paletinden tipografi ağırlığına kadar her öğeyi kullanıcının bilişsel yükünü (cognitive load) minimize edecek şekilde tasarlıyoruz. Apple tarzı &quot;Less is More&quot; felsefesini, reklamın her karesine uyguluyoruz.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-[var(--muted)]/10 lg:max-w-md">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                alt="Görsel analiz ve kreatif süreç"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 2. Bölüm: Platform Psikolojisi – İki panel */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#fafafa] py-28 sm:py-36">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Platform Psikolojisi
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
              Her platformun kullanıcı zihniyeti farklıdır; kreatif strateji de buna göre şekillenir.
            </p>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {/* Panel 1: TikTok */}
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20">
                  <Image
                    src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80"
                    alt="TikTok ve viral içerik"
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <span className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">TikTok & Dopamin Döngüsü</span>
                  <p className="mt-6 leading-relaxed text-[var(--muted)]">
                    Burada kural; &quot;Eğlendirirken Sat&quot;. İlk <strong className="text-[var(--foreground)]">3 saniyede</strong> &quot;Dopamin vuruşu&quot; yapacak kancalar (hooks) kurguluyoruz. <strong className="text-[var(--foreground)]">Claude 4.6 Sonnet</strong> ile optimize edilen senaryolarımızda, &quot;Problem-Çözüm&quot; dengesini viral trendlerin hızıyla birleştiriyoruz. Kullanıcı reklam izlediğini değil, bir topluluğun parçası olduğunu hissetmeli.
                  </p>
                </div>
              </div>
              {/* Panel 2: LinkedIn */}
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                  <Image
                    src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80"
                    alt="LinkedIn ve profesyonel ağ"
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <span className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">LinkedIn & Statü Psikolojisi</span>
                  <p className="mt-6 leading-relaxed text-[var(--muted)]">
                    Profesyonel ağlarda &quot;Rasyonel Fayda&quot; ve &quot;Otorite&quot; ön plandadır. Karar vericilerin (C-Level) zamanına saygı duyan, veri odaklı ve statü tetikleyici kreatifler geliştiriyoruz. Burada lüksün ve profesyonelliğin dili; sessiz bir güven (quiet confidence) üzerine kuruludur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 3. Bölüm: Bilişsel Önyargılar */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-28 sm:py-36">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Karar Verme Süreçlerini Optimize Etmek
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              Bilişsel önyargıların (Cognitive Biases) bilinçli kullanımı. Ala Medya stratejilerinde reklamlar sadece güzel görünmez; belirli psikolojik tetikleyicileri barındırır.
            </p>
            <ul className="mt-14 space-y-12">
              <li className="flex gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--muted)]/15 text-sm font-semibold text-[var(--foreground)]">1</span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Social Proof (Sosyal Kanıt)</h3>
                  <p className="mt-2 leading-relaxed text-[var(--muted)]">
                    Lotus Diş veya BHT Clinic gibi markalarımızda, hasta deneyimlerini Apple zarafetinde sunarak güven bariyerlerini aşıyoruz.
                  </p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--muted)]/15 text-sm font-semibold text-[var(--foreground)]">2</span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Scarcity (Kıtlık)</h3>
                  <p className="mt-2 leading-relaxed text-[var(--muted)]">
                    Tekliflerin değerini, kullanıcıda &quot;fırsat kaybı&quot; (FOMO) yaratacak zarif zamanlama stratejileriyle artırıyoruz.
                  </p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--muted)]/15 text-sm font-semibold text-[var(--foreground)]">3</span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Authority (Otorite)</h3>
                  <p className="mt-2 leading-relaxed text-[var(--muted)]">
                    <strong className="text-[var(--foreground)]">Google Premier Partner</strong> kimliğimizi, kreatiflerin her köşesinde hissedilen bir &quot;uzmanlık imzası&quot; olarak kullanıyoruz.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. Bölüm: AI Destekli Kreatif Testleri (The Lab) */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#fafafa] py-28 sm:py-36">
          <div className="mx-auto flex w-[90%] max-w-[1100px] flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-[var(--muted)]/10 lg:order-2 lg:max-w-md">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                alt="AI ve kreatif analiz"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex-1 lg:order-1">
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Yapay Zeka ile Öngörülebilir Yaratıcılık
              </h2>
              <p className="mt-8 leading-relaxed text-[var(--muted)] sm:text-lg">
                Reklam kreatiflerini yayına almadan önce AI destekli simülasyonlarla test ediyoruz. Hangi görselin hangi kitlede daha yüksek &quot;Stop-Rate&quot; (Durdurma Oranı) yakalayacağını veriyle öngörüyoruz. <strong className="text-[var(--foreground)]">GPT-5.4 Thinking</strong> ve özel algoritmalarımızla, binlerce varyasyon arasından &quot;Şampiyon Kreatif&quot;i bütçenizi harcamadan önce buluyoruz.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/hizmetler/dijital-reklam/instagram-reklamlari"
                  className="btn-shimmer relative inline-flex rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-95"
                >
                  <span className="relative z-10">Instagram Reklamları</span>
                </Link>
                <Link
                  href="/hizmetler/dijital-reklam/tiktok-reklamlari"
                  className="inline-flex rounded-full border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/10"
                >
                  TikTok Reklamları
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 5. Bölüm: Final CTA – Mükemmel Sentez */}
      <section className="border-t border-[var(--border)] bg-white py-28 sm:py-36">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <p className="text-2xl font-light leading-relaxed text-[var(--foreground)] sm:text-3xl">
            Sanatçı ruhu, mühendis zekası ve <strong className="font-semibold">8 yıllık</strong> sektörel refleks. Reklamlarınız sadece görülmesin; hissedilsin ve dönüştürsün.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/#iletisim"
              className="btn-shimmer relative inline-flex rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-medium text-white transition hover:opacity-95"
            >
              <span className="relative z-10">Kreatif Stratejinizi Başlatalım</span>
            </Link>
            <Link
              href="/referanslar"
              className="inline-flex rounded-full border border-[var(--border)] bg-transparent px-8 py-4 text-base font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/10"
            >
              Referansları İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
