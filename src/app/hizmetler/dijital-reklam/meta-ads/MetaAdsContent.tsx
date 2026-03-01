"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

const FUNNEL_COLUMNS = [
  {
    title: "Awareness",
    subtitle: "Farkındalık",
    content:
      "Kullanıcının kaydırma hareketini durduran (scroll-stopping) kreatiflerle markanızı zihinlere kazıyoruz. Claude-3.5 Sonnet kullanarak hazırladığımız 'kanca' (hook) metinleri, ilk 3 saniyede etkileşim oranlarını %40 artırır.",
  },
  {
    title: "Consideration",
    subtitle: "Değerlendirme",
    content:
      "Potansiyel müşterinizi rakibinizle kıyaslarken sizin yanınızda tutuyoruz. Dinamik ürün reklamları (DPA) ve katalog optimizasyonuyla, kullanıcının ilgi duyduğu ürünü ona en doğru açıyla tekrar gösteriyoruz.",
  },
  {
    title: "Conversion",
    subtitle: "Dönüşüm",
    content:
      "Satışın gerçekleştiği an. Lotus Diş veya BHT Clinic gibi sağlık turizmi projelerimizde, hastanın randevu alana kadarki tüm 'sürtünme noktalarını' AI destekli huni analiziyle minimize ediyoruz.",
  },
];

const CREATIVE_POINTS = [
  {
    title: "A/B Test Kültürü",
    body: "Binlerce farklı başlık ve görsel kombinasyonunu ChatGPT-4 analiziyle yarıştırıyoruz.",
  },
  {
    title: "Psikolojik Tetikleyiciler",
    body: "Sosyal kanıt (social proof), kıtlık ilkesi ve otorite figürlerini tasarımlarımıza Apple sadeliğinde yediriyoruz.",
  },
];

const SECTOR_PROOFS = [
  {
    sector: "Sağlık Turizmi",
    clients: "Lotus Dental, BHT Clinic",
    result: "Hasta başına maliyeti %30 düşürdük.",
  },
  {
    sector: "Fitness & Otomotiv",
    clients: "Xoom, Sonax",
    result: "Marka etkileşimini AI destekli içeriklerle 3 katına çıkardık.",
  },
];

export function MetaAdsContent() {
  return (
    <main className="bg-white">
      {/* Hero – Görsel Gücü Veriyle Birleştirin (mevcut başlık korunuyor, vizyon metni ekleniyor) */}
      <section className="mx-auto max-w-[900px] px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <h1 className="font-light tracking-tight text-[var(--foreground)] text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
          Görsel Gücü Veriyle Birleştirin.
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-[var(--muted)]">
          Meta Ads yönetiminde yapay zeka destekli kreatif optimizasyon ile reklamlarınızı sadece görünür değil, dönüşüm odaklı hale getiriyoruz. ROAS odaklı reklam yönetimi ve yapay zeka ile hedef kitle segmentasyonu ile doğru kişiye, doğru mesajı ulaştırıyoruz.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/#iletisim"
            className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Meta Kampanyanızı Konuşalım
          </Link>
          <Link
            href="/referanslar"
            className="inline-flex items-center rounded-full border border-[var(--border)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/10"
          >
            Referanslar
          </Link>
        </div>
      </section>

      {/* 1. Bölüm: Stratejik Vizyon (The AI-First Approach) */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Algoritmik Zeka ve Yaratıcı Stratejinin Sentezi
            </h2>
            <p className="mt-8 text-base font-light leading-relaxed text-[var(--muted)] sm:text-lg">
              Meta&apos;nın milyarlarca veri noktasını işleyen algoritmalarını, sadece teknik ayarlarla değil; <span className="font-semibold text-[var(--foreground)]">Gemini ve Claude destekli pazar analiziyle</span> yönetiyoruz. Ala Medya olarak, reklam bütçenizi Meta&apos;nın makine öğrenimi modellerine (Advantage+) en doğru veriyi besleyecek şekilde optimize ediyoruz. Bu, sadece bir reklam değil; markanızın dijital dünyadaki akıllı büyüme motorudur.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* 2. Bölüm: Full-Funnel (Satış Hunisi) – 3 sütun, Apple teknik özellik tarzı */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#fafafa] py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Full-Funnel Mimarisi
            </h2>
            <p className="mt-3 max-w-xl font-light text-[var(--muted)]">
              Satış hunisinin her aşamasında veri ve kreatif strateji birlikte çalışır.
            </p>
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {FUNNEL_COLUMNS.map((col, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
                    {col.title}
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-[var(--foreground)]">
                    {col.subtitle}
                  </span>
                  <p className="mt-4 flex-1 font-light leading-relaxed text-[var(--muted)]">
                    {col.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 3. Bölüm: Kreatif İstihbarat – büyük görsel + yanında teknik detaylar (Camera Pro tarzı) */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Kreatif, Yeni Hedeflemedir.
            </h2>
            <p className="mt-6 max-w-2xl font-light leading-relaxed text-[var(--muted)]">
              Meta artık hedeflemeyi görselin içeriğine göre yapıyor. Biz de bu yüzden görsellerimizi sadece tasarlamıyoruz; onları &quot;okunabilir&quot; kılıyoruz.
            </p>
            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--muted)]/15">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                  alt="Meta reklam kreatifleri ve veri ekranı"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-8">
                {CREATIVE_POINTS.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-light leading-relaxed text-[var(--muted)]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. Bölüm: Teknik Hassasiyet – CAPI & Tracking */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#fafafa] py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[900px]">
            <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl">
              Veri Kaybına Yer Yok: Meta Conversions API (CAPI)
            </h2>
            <p className="mt-8 font-light leading-relaxed text-[var(--muted)] sm:text-lg">
              iOS 14+ sonrası yaşanan veri kayıplarını, <span className="font-semibold text-[var(--foreground)]">sunucu taraflı izleme (Server-Side Tracking)</span> ve CAPI entegrasyonu ile aşıyoruz. Ala Medya&apos;nın teknik ekibi, tarayıcı kısıtlamalarına takılmadan reklam performansınızı %100 doğrulukla ölçümler. Bu, daha düşük dönüşüm başı maliyet (CPA) ve daha yüksek ROAS demektir.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="rounded-xl border border-[var(--border)] bg-white px-6 py-4">
                <span className="text-2xl font-bold text-[var(--foreground)]">%100</span>
                <p className="mt-1 text-sm font-light text-[var(--muted)]">Ölçüm doğruluğu</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-white px-6 py-4">
                <span className="text-2xl font-bold text-[var(--foreground)]">CAPI</span>
                <p className="mt-1 text-sm font-light text-[var(--muted)]">Sunucu taraflı izleme</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 5. Bölüm: Sektörel Uzmanlık Kanıtı (Social Proof) */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Sektörel Uzmanlık Kanıtı
            </h2>
            <p className="mt-3 max-w-xl font-light text-[var(--muted)]">
              Farklı sektörlerde performans odaklı Meta kampanyalarıyla ölçülebilir sonuçlar.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {SECTOR_PROOFS.map((proof, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--border)] bg-[#fafafa] p-8"
                >
                  <span className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
                    {proof.sector}
                  </span>
                  <p className="mt-2 font-semibold text-[var(--foreground)]">
                    {proof.clients}
                  </p>
                  <p className="mt-3 font-light text-[var(--muted)]">
                    {proof.result}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/referanslar"
                className="text-sm font-medium text-[var(--foreground)] underline underline-offset-4 hover:no-underline"
              >
                Tüm referansları inceleyin →
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-3xl">
            Facebook ve Instagram reklamlarınızı veriyle büyütün.
          </h2>
          <p className="mt-4 font-light text-[var(--muted)]">
            ROAS odaklı yönetim, CAPI entegrasyonu ve AI destekli kreatif stratejisi için hemen iletişime geçin.
          </p>
          <Link
            href="/#iletisim"
            className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Teklif Alın
          </Link>
        </div>
      </section>
    </main>
  );
}
