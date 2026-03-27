"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

// Methodology steps
const METHODOLOGY = [
  {
    step: "01",
    title: "Analiz",
    desc: "Mevcut kreatif performansı, hedef kitle davranışı ve rekabetçi görsel ekosistem haritalanır.",
  },
  {
    step: "02",
    title: "Psikolojik Tetikleyici Ataması",
    desc: "Sosyal kanıt, kıtlık, otorite ve aidiyet gibi bilişsel önyargılar stratejik olarak her kreatife entegre edilir.",
  },
  {
    step: "03",
    title: "AI Destekli Varyasyon",
    desc: "Yapay zeka, milyonlarca veri noktasını tarayarak en yüksek durdurma oranına (stop-rate) sahip varyasyonları belirler.",
  },
  {
    step: "04",
    title: "Canlı Test",
    desc: "Varyasyonlar kontrollü bütçeyle A/B testine sokulur; kazanan kreatif istatistiksel güvenilirliğe ulaşana dek test ortamında kalır.",
  },
  {
    step: "05",
    title: "Ölçekleme",
    desc: "Kanıtlanmış şampiyon kreatif tüm kanallara yayılır; süreç her döngüde veriye beslenerek ilerler.",
  },
];

// Cognitive biases
const BIASES = [
  {
    id: "01",
    title: "Social Proof",
    label: "Sosyal Kanıt",
    desc: "Referans markalarımızın gerçek dönüşüm verilerini, Apple zarafetinde minimal bir dille öne çıkararak güven bariyerleri sistematik olarak aşılır.",
  },
  {
    id: "02",
    title: "Scarcity",
    label: "Kıtlık Etkisi",
    desc: "Tekliflerin algılanan değeri, kullanıcıda kayıp aversiyonu (loss aversion) yaratacak biçimde kademelendirilmiş zamanlama stratejileriyle artırılır.",
  },
  {
    id: "03",
    title: "Authority",
    label: "Otorite Çerçevesi",
    desc: "Yıllar içinde inşa edilen sektörel güvenilirlik her kreatif öğeye sessiz bir uzmanlık imzası olarak işlenir; söylenmeden hissettirilen bir kalite standardı oluşturulur.",
  },
  {
    id: "04",
    title: "Cognitive Load",
    label: "Bilişsel Yük Yönetimi",
    desc: "Her görsel öğe, kullanıcının işlem yükünü minimize edecek şekilde hiyerarşik olarak yapılandırılır. Karmaşıklık gizlenir, netlik ön plana çıkar.",
  },
];

// Channel integration items
const CHANNELS = [
  { label: "Google Ads", desc: "Arama niyetiyle eşleşen görsel dili, dönüşüm odaklı kreatif stratejisiyle desteklenir." },
  { label: "Meta & Instagram", desc: "Kaydırma davranışını durduracak görsel kancalar ve hikaye akışı kurgusal zemine oturur." },
  { label: "TikTok", desc: "İlk 3 saniyede dopamin vuruşu yaratan kanca mimarisi; eğlendirirken dönüştüren içerik." },
  { label: "SEO & İçerik", desc: "Görsel psikoloji ile dil kullanımı, arama motorlarında da otorite algısı inşa eder." },
];

export function KreatifPsikolojisiContent() {
  return (
    <main className="bg-white text-[var(--foreground)]">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[960px] px-6 pt-36 pb-32 sm:pt-44 sm:pb-40">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          Davranış Mühendisliği · Karar Bilimi · Görsel Nöroloji
        </p>
        <h1 className="mt-7 text-5xl font-semibold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
          Dönüşümün<br />
          <span className="text-[var(--muted)]">Nöro-Mimarisi</span>
        </h1>
        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-[var(--muted)]">
          Rastgele tasarımların dönemi kapandı. Sistematik olarak doğrulanmış görsel stratejiler; her pikseli bir karar tetikleyicisine, her kareyi ölçülebilir bir dönüşüme dönüştürür.
        </p>
        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/#iletisim"
            className="btn-shimmer relative inline-flex rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            <span className="relative z-10">Kreatif Stratejinizi Konuşalım</span>
          </Link>
          <Link
            href="/referanslar"
            className="inline-flex rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/8"
          >
            Referansları İnceleyin
          </Link>
        </div>
      </section>

      {/* ─── BENTO: TEMEL KAVRAMLAR ───────────────────────────── */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#fafafa] py-28 sm:py-36">
          <div className="mx-auto w-[90%] max-w-[1140px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Neden Farklı?</p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Tasarım güzel olmalı. Ama önce doğru olmalı.
            </h2>

            {/* Bento Grid */}
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {/* Kart 1 – Hero Kart (geniş) */}
              <div className="lg:col-span-2 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
                <span className="inline-block rounded-full bg-[var(--muted)]/10 px-3 py-1 text-xs font-medium text-[var(--foreground)]">Decision Science</span>
                <h3 className="mt-6 text-2xl font-semibold leading-snug tracking-tight">
                  Karar Anı Analitiği
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">
                  İnsan beyni dijital bir akışta görseli <strong className="text-[var(--foreground)]">13 milisaniyede</strong> işler. Göz izleme (eye-tracking) analitiği ve bilişsel yük (cognitive load) yönetimi; kreatiflerin her öğesini bu pencereye göre optimize eder. Güzellik bir sonuçtur, birincil hedef değil.
                </p>
                {/* Görsel yönlendirme */}
                <div className="mt-8 flex h-36 items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[#f5f5f7] text-xs text-[var(--muted)]">
                  [Buraya minimalist bir göz izleme ısı haritası infografiği gelecek]
                </div>
              </div>

              {/* Kart 2 – Dar Kart */}
              <div className="rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
                <span className="inline-block rounded-full bg-[var(--muted)]/10 px-3 py-1 text-xs font-medium text-[var(--foreground)]">Stop-Rate</span>
                <h3 className="mt-6 text-2xl font-semibold leading-snug tracking-tight">
                  Durdurma Oranı Optimizasyonu
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">
                  Kaydırma içgüdüsünü kıracak görsel kanca, yalnızca veriyle belirlenir. Sezgi değil; istatistiksel güven aralığı.
                </p>
              </div>

              {/* Kart 3 – Dar */}
              <div className="rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
                <span className="inline-block rounded-full bg-[var(--muted)]/10 px-3 py-1 text-xs font-medium text-[var(--foreground)]">Negatif Alan</span>
                <h3 className="mt-6 text-2xl font-semibold leading-snug tracking-tight">
                  Sadelik Bir Stratejidir
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">
                  Fazla öğe, dikkat dağıtır. White space bir boşluk değil; güven ve prestij sinyalidir.
                </p>
              </div>

              {/* Kart 4 – Geniş (AI İkonu) */}
              <div className="lg:col-span-2 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
                <span className="inline-block rounded-full bg-[var(--muted)]/10 px-3 py-1 text-xs font-medium text-[var(--foreground)]">İnsan & AI Senfonisi</span>
                <h3 className="mt-6 text-2xl font-semibold leading-snug tracking-tight">
                  Analiz makineye; son dokunuş insana aittir.
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">
                  Yapay zeka, insan zihninin eşzamanlı işleyemeyeceği ölçekte veriyi tarar ve en güçlü sinyal kombinasyonlarını belirler. Stratejistler ise bu bulguları duygusal rezonansa dönüştürür: algoritmalar optimize eder, insanlar bağ kurar.
                </p>
                {/* Görsel yönlendirme */}
                <div className="mt-8 flex h-36 items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[#f5f5f7] text-xs text-[var(--muted)]">
                  [Buraya beyaz zemin üzerinde 3D cam efektli bir yapay zeka akış ikonu eklenecek]
                </div>
              </div>

            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── BİLİŞSEL ÖNYARGILAR ──────────────────────────────── */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-28 sm:py-36">
          <div className="mx-auto w-[90%] max-w-[1140px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Psikolojik Altyapı</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Reklamlar güzel görünmez. Belirli tetikleyiciler taşır.
            </h2>
            <p className="mt-5 max-w-2xl text-[var(--muted)] leading-relaxed">
              Bilişsel önyargıların (Cognitive Biases) bilinçli ve ölçülebilir kullanımı, kreatif stratejinin temel mühendislik katmanıdır.
            </p>

            <div className="mt-16 grid gap-px border border-[var(--border)] rounded-3xl overflow-hidden bg-[var(--border)] sm:grid-cols-2">
              {BIASES.map((b) => (
                <div key={b.id} className="bg-white p-10 transition hover:bg-[#fafafa]">
                  <div className="flex items-start gap-5">
                    <span className="text-xs font-semibold tabular-nums text-[var(--muted)] pt-0.5">{b.id}</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">{b.title}</p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight">{b.label}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── METODOLOJİ ───────────────────────────────────────── */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#fafafa] py-28 sm:py-36">
          <div className="mx-auto w-[90%] max-w-[960px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Metodoloji</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Beş adımda sistematik mükemmellik.
            </h2>
            <p className="mt-5 max-w-xl text-[var(--muted)] leading-relaxed">
              Sezgiden bağımsız, veriyle yeniden üretilebilir. Her proje aynı titizlikle başlar ve aynı disiplinle ölçeklenir.
            </p>

            {/* Görsel yönlendirme */}
            <div className="mt-10 flex h-28 items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-white text-xs text-[var(--muted)]">
              [Buraya ince çizgili, minimalist bir akış şeması infografiği gelecek: Analiz → Tetikleyici → AI → Test → Ölçekleme]
            </div>

            <ol className="mt-14 space-y-0 border-l border-[var(--border)]">
              {METHODOLOGY.map((m, i) => (
                <li key={m.step} className={`relative pl-10 ${i < METHODOLOGY.length - 1 ? "pb-12" : ""}`}>
                  <span className="absolute left-[-1px] top-0 h-full w-px bg-[var(--border)]" aria-hidden />
                  <span className="absolute left-[-10px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[10px] font-bold text-[var(--muted)]">{i + 1}</span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Adım {m.step}</p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight">{m.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">{m.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── 360° ENTEGRASYON ─────────────────────────────────── */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-white py-28 sm:py-36">
          <div className="mx-auto w-[90%] max-w-[1140px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">360° Entegrasyon</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Bir kanalın başarısı, diğerinin kreatif zekasına bağlıdır.
            </h2>
            <p className="mt-5 max-w-2xl text-[var(--muted)] leading-relaxed">
              Kreatif psikoloji izole bir disiplin değildir. Google Ads bütçesinin verimliliğinden SEO otoritesine; her kanalın performans tavanı, görsel ve dilsel strateji tarafından belirlenir.
            </p>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CHANNELS.map((ch) => (
                <div key={ch.label} className="group rounded-3xl border border-[var(--border)] bg-[#fafafa] p-8 transition hover:bg-white hover:shadow-sm">
                  <h3 className="text-base font-semibold tracking-tight">{ch.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── PLATFORM PSİKOLOJİSİ ─────────────────────────────── */}
      <AnimatedSection>
        <section className="border-t border-[var(--border)] bg-[#fafafa] py-28 sm:py-36">
          <div className="mx-auto w-[90%] max-w-[1140px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Platform Psikolojisi</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Her platform ayrı bir zihin haritasıdır.
            </h2>
            <div className="mt-16 grid gap-6 lg:grid-cols-2">

              {/* TikTok */}
              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm">
                <div className="flex h-52 items-center justify-center border-b border-[var(--border)] bg-gradient-to-br from-rose-50 to-pink-50/60 text-xs text-[var(--muted)]">
                  [Buraya TikTok konseptini yansıtan minimalist bir hareket infografiği gelecek]
                </div>
                <div className="p-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">TikTok · Dopamin Döngüsü</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">Eğlendirirken Dönüştür</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    İlk üç saniyede kancayı kur, kalan yedi saniyede değeri teslim et. Problem-Çözüm dengesi viral trendlerin hızıyla buluşturulur; kullanıcı reklam izlediğini değil, bir topluluğa ait olduğunu hisseder.
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm">
                <div className="flex h-52 items-center justify-center border-b border-[var(--border)] bg-gradient-to-br from-blue-50 to-indigo-50/60 text-xs text-[var(--muted)]">
                  [Buraya LinkedIn ve otorite kavramını yansıtan ince çizgili bir grafik gelecek]
                </div>
                <div className="p-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">LinkedIn · Statü Psikolojisi</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">Sessiz Bir Güven Dili</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    Karar vericilerin zamanına saygı duyan, rasyonel fayda ve statü tetikleyicileriyle kurulan kreatifler geliştirilir. Lüksün ve profesyonelliğin dili burada süse değil; netliğe yaslanır.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)] bg-white py-32 sm:py-44">
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Başlangıç Noktası</p>
          <p className="mt-8 text-3xl font-light leading-snug text-[var(--foreground)] sm:text-4xl">
            Sanatçı ruhu, mühendis zekası.<br />
            <strong className="font-semibold">Reklamlarınız görülsün değil; hissedilsin.</strong>
          </p>
          <p className="mx-auto mt-6 max-w-md text-[var(--muted)] leading-relaxed">
            Sezgilere değil, sistematik olarak doğrulanmış görsel stratejisine dayanan bir kreatif süreci oluşturmaya hazır mısınız?
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              href="/#iletisim"
              className="btn-shimmer relative inline-flex rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-white transition hover:opacity-90"
            >
              <span className="relative z-10">Kreatif Stratejinizi Başlatalım</span>
            </Link>
            <Link
              href="/hizmetler/dijital-reklam"
              className="inline-flex rounded-full border border-[var(--border)] px-8 py-4 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/8"
            >
              Dijital Reklam Hizmetleri
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
