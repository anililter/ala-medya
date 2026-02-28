"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

/* ═══════════════════════════════════════════
   Data
   ═══════════════════════════════════════════ */

const WHY_CARDS = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
        <rect width="48" height="48" rx="12" fill="#EEF2FF" />
        <path d="M24 14l2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7.9-5.6-4-3.9 5.6-.8L24 14z" fill="#4285F4" />
      </svg>
    ),
    title: "Premier Partner Gücü",
    desc: "Google'ın en üst segment partneri olarak, yeni özelliklere erken erişim ve direkt Google desteği.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
        <rect width="48" height="48" rx="12" fill="#F0FDF4" />
        <path d="M16 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#10a37f" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="28" r="2" fill="#10a37f" />
        <path d="M20 20l-2-4M28 20l2-4M24 18v-4" stroke="#10a37f" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "AI Destekli Optimizasyon",
    desc: "Manuel yönetimin ötesine geçiyoruz; Gemini ve özel algoritmalarımızla teklif stratejilerini saniyelik optimize ediyoruz.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
        <rect width="48" height="48" rx="12" fill="#FFF7ED" />
        <rect x="14" y="16" width="20" height="16" rx="3" stroke="#F59E0B" strokeWidth="2.5" />
        <path d="M18 24h4M18 28h8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="22" r="2" fill="#F59E0B" />
      </svg>
    ),
    title: "Şeffaf Raporlama",
    desc: "Karmaşık tablolar yerine, Looker Studio ile hazırlanan, her an ulaşabileceğiniz canlı ve anlaşılır paneller.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
        <rect width="48" height="48" rx="12" fill="#EFF6FF" />
        <circle cx="24" cy="24" r="9" stroke="#3B82F6" strokeWidth="2.5" />
        <path d="M24 18v6l4 2" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 24H13M35 24h-2M24 13v2M24 33v2" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "360° Strateji",
    desc: "Sadece tıklama değil; açılış sayfası analizi ve dönüşüm optimizasyonu dahil tam hizmet.",
  },
];

const SERVICES = [
  {
    title: "Arama Ağı (Search) Reklamları",
    desc: "Potansiyel müşterileriniz sizi Google'da aradığında en üstte olun. Doğru anahtar kelime eşleşmeleri ve yüksek kalite puanı ile maliyetleri düşürüyoruz.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
        <rect width="64" height="64" rx="16" fill="#EEF2FF" />
        <circle cx="28" cy="28" r="10" stroke="#4285F4" strokeWidth="3" />
        <path d="M36 36l8 8" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Performans Max (P-Max)",
    desc: "Google'ın tüm kanallarında (YouTube, Gmail, Discovery) yapay zeka gücüyle tek bir kampanyadan maksimum dönüşüm elde edin.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
        <rect width="64" height="64" rx="16" fill="#F0FDF4" />
        <path d="M20 42V30M28 42V24M36 42V28M44 42V20" stroke="#10a37f" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Yeniden Pazarlama (Remarketing)",
    desc: "Sitenizi ziyaret edip satın alma yapmadan ayrılan kullanıcıları, internetin her köşesinde markanızla tekrar buluşturuyoruz.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
        <rect width="64" height="64" rx="16" fill="#FFF7ED" />
        <path d="M32 20c6.6 0 12 5.4 12 12s-5.4 12-12 12" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        <path d="M32 26c3.3 0 6 2.7 6 6s-2.7 6-6 6" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="32" r="2" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    title: "YouTube & Görüntülü Reklam Ağı",
    desc: "Marka bilinirliğinizi artırmak için görsel odaklı, ilgi çekici ve segmentasyonu yüksek kitlelere hitap eden kreatifler hazırlıyoruz.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
        <rect width="64" height="64" rx="16" fill="#FEF2F2" />
        <rect x="16" y="22" width="32" height="20" rx="4" stroke="#EF4444" strokeWidth="3" />
        <path d="M28 28l10 4-10 4V28z" fill="#EF4444" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Analiz & Audit", desc: "Mevcut hesabınızın 50+ kriterde incelenmesi." },
  { num: "02", title: "Strateji Kurgusu", desc: "Hedef kitle, rakip analizi ve bütçe planlama." },
  { num: "03", title: "Kurulum & Entegrasyon", desc: "GA4, Google Tag Manager ve dönüşüm takibi kurulumları." },
  { num: "04", title: "AI Entegrasyonu", desc: "Kampanyaların yapay zeka araçlarıyla beslenmesi." },
  { num: "05", title: "Test & Optimizasyon", desc: "A/B testleri ile sürekli iyileştirme." },
  { num: "06", title: "Büyüme (Scaling)", desc: "Başarılı modellerin ölçeklendirilerek cironun artırılması." },
];

const FAQ_DATA = [
  {
    q: "Google Premier Partner ne anlama gelir?",
    a: "Google tarafından belirlenen harcama, büyüme ve sertifika kriterlerini karşılayan en iyi %3'lük ajans dilimini ifade eder. Bu statü, yeni beta özelliklere erken erişim ve doğrudan Google hesap desteği anlamına gelir.",
  },
  {
    q: "Bütçem nasıl yönetilir?",
    a: "Her kuruşun dönüşüm odaklı harcandığından emin olmak için günlük takip ve anlık müdahale yapılır. Bütçe dağılımı, kampanya performansına göre sürekli optimize edilir.",
  },
  {
    q: "Raporları ne sıklıkla alırım?",
    a: "İstediğiniz an görebileceğiniz canlı Looker Studio panelinin yanı sıra haftalık performans özetleri ve aylık detaylı stratejik analizler sunuyoruz.",
  },
  {
    q: "Minimum reklam bütçesi ne kadar olmalı?",
    a: "Sektöre ve hedeflere göre değişmekle birlikte, anlamlı veri toplayıp optimize edebilmek için aylık minimum bütçe önerilerimizi ücretsiz ön görüşmede paylaşıyoruz.",
  },
  {
    q: "Sonuçları ne zaman görmeye başlarım?",
    a: "İlk veriler birkaç gün içinde akmaya başlar. Anlamlı optimizasyon sonuçları genellikle 2-4 hafta içinde görülür; tam performansa ulaşma süreci sektöre göre 1-3 ay arasında değişir.",
  },
];

/* ═══════════════════════════════════════════
   Component
   ═══════════════════════════════════════════ */

export function GoogleAdsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8faff] via-white to-[#eef4ff] py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-[320px] w-[320px] rounded-full bg-cyan-100/30 blur-3xl" />

        <div className="relative mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Left text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" fill="#FBBC05" />
              </svg>
              Google Premier Partner
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Veriyle Yönetilen,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                AI ile Güçlendirilen
              </span>{" "}
              Google Ads Stratejileri.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:mx-0 sm:text-lg">
              Google&apos;ın en başarılı %3&apos;lük diliminde yer alan bir Premier Partner ile çalışmanın farkını yaşayın.
              8 yıllık sektörel tecrübemizi, en yeni yapay zeka araçlarıyla birleştirerek ROI odaklı kampanyalar kurguluyoruz.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="#iletisim"
                className="inline-flex items-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition hover:scale-[1.02] hover:bg-blue-700"
              >
                Ücretsiz Hesap Denetimi Al
              </Link>
              <Link
                href="/referanslar"
                className="inline-flex items-center rounded-full border-2 border-blue-200 bg-white px-7 py-3.5 text-sm font-medium text-blue-600 transition hover:border-blue-300 hover:bg-blue-50"
              >
                Başarı Hikayelerini İncele
              </Link>
            </div>
          </div>

          {/* Right: Google logo + AI logos */}
          <div className="relative flex shrink-0 items-center justify-center">
            <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border border-white/60 bg-white/50 shadow-2xl backdrop-blur-xl sm:h-60 sm:w-60">
              <svg className="h-24 w-24 sm:h-28 sm:w-28" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            {/* AI badges */}
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
              {/* Gemini */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-white shadow-md">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C12 2 14.5 7.5 17.5 10.5C20.5 13.5 22 12 22 12C22 12 20.5 14.5 17.5 17.5C14.5 20.5 12 22 12 22C12 22 9.5 20.5 6.5 17.5C3.5 14.5 2 12 2 12C2 12 3.5 9.5 6.5 6.5C9.5 3.5 12 2 12 2Z" fill="url(#gm-ga)" />
                  <defs><linearGradient id="gm-ga" x1="2" y1="2" x2="22" y2="22"><stop stopColor="#4285F4" /><stop offset=".5" stopColor="#9B72CB" /><stop offset="1" stopColor="#D96570" /></linearGradient></defs>
                </svg>
              </div>
              {/* ChatGPT */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-white shadow-md">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#10a37f">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z" />
                </svg>
              </div>
              {/* Claude */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-white shadow-md">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#cc785c">
                  <path d="M4.709 15.955l4.397-10.478c.2-.469.35-.591.746-.591h.872c.395 0 .546.122.746.591l4.396 10.478c.123.296.048.518-.271.518h-.797c-.395 0-.57-.098-.72-.469l-1.12-2.737H6.617l-1.12 2.737c-.148.37-.324.469-.72.469h-.797c-.32 0-.395-.222-.271-.518zm7.974-3.872L10.516 6.77l-2.167 5.313h4.334z" />
                  <path d="M15.227 15.955l3.63-10.478c.174-.469.324-.591.72-.591h.797c.32 0 .395.222.272.518l-3.63 10.551c-.149.37-.325.469-.72.469h-.797c-.32 0-.42-.222-.272-.469z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Neden Ala Medya ───── */}
      <AnimatedSection>
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Neden Ala Medya?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--muted)]">
                Google Premier Partner ayrıcalığı ile fark yaratan hizmet anlayışımız
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:shadow-[var(--shadow-md)]"
                >
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-base font-bold tracking-tight">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ───── Hizmet Kapsamı ───── */}
      <AnimatedSection>
        <section className="bg-[#f9f9f9] py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hizmet Kapsamımız</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--muted)]">
                Google Ads ekosisteminin tüm kanallarında uzman yönetim
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {SERVICES.map((svc, i) => (
                <div
                  key={i}
                  className="flex gap-5 rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:shadow-[var(--shadow-md)]"
                >
                  <div className="shrink-0">{svc.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{svc.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ───── Çalışma Sürecimiz ───── */}
      <AnimatedSection>
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[1100px]">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Çalışma Sürecimiz</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--muted)]">
                Kanıtlanmış 6 adımlı metodolojimiz ile hesabınızı büyütüyoruz
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="relative flex flex-col border-l-2 border-blue-100 py-6 pl-8 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-8 sm:pr-6">
                  <span className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white sm:-top-3 sm:left-0">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ───── Teknik Güç & AI Araçları ───── */}
      <AnimatedSection>
        <section className="bg-[#f9f9f9] py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[1100px] text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Teknik Güç & AI Araçları</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--muted)]">
              Reklamlarınızı sadece yönetmiyoruz, en gelişmiş teknoloji yığınıyla donatıyoruz.
            </p>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-10 sm:gap-14">
              {/* Gemini */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C12 2 14.5 7.5 17.5 10.5C20.5 13.5 22 12 22 12C22 12 20.5 14.5 17.5 17.5C14.5 20.5 12 22 12 22C12 22 9.5 20.5 6.5 17.5C3.5 14.5 2 12 2 12C2 12 3.5 9.5 6.5 6.5C9.5 3.5 12 2 12 2Z" fill="url(#gm-t)" />
                    <defs><linearGradient id="gm-t" x1="2" y1="2" x2="22" y2="22"><stop stopColor="#4285F4" /><stop offset=".5" stopColor="#9B72CB" /><stop offset="1" stopColor="#D96570" /></linearGradient></defs>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-[var(--muted)]">Gemini</span>
              </div>
              {/* ChatGPT */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="#10a37f">
                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-[var(--muted)]">ChatGPT</span>
              </div>
              {/* Claude */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="#cc785c">
                    <path d="M4.709 15.955l4.397-10.478c.2-.469.35-.591.746-.591h.872c.395 0 .546.122.746.591l4.396 10.478c.123.296.048.518-.271.518h-.797c-.395 0-.57-.098-.72-.469l-1.12-2.737H6.617l-1.12 2.737c-.148.37-.324.469-.72.469h-.797c-.32 0-.395-.222-.271-.518zm7.974-3.872L10.516 6.77l-2.167 5.313h4.334z" />
                    <path d="M15.227 15.955l3.63-10.478c.174-.469.324-.591.72-.591h.797c.32 0 .395.222.272.518l-3.63 10.551c-.149.37-.325.469-.72.469h-.797c-.32 0-.42-.222-.272-.469z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-[var(--muted)]">Claude</span>
              </div>
              {/* Google Cloud */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <svg className="h-8 w-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-[var(--muted)]">Google Cloud</span>
              </div>
              {/* Looker Studio */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="4" stroke="#4285F4" strokeWidth="2" />
                    <path d="M7 17V13M12 17V9M17 17V7" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-[var(--muted)]">Looker Studio</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ───── SSS ───── */}
      <AnimatedSection>
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto w-[90%] max-w-[720px]">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sıkça Sorulan Sorular</h2>
            </div>
            <div className="mt-12 divide-y divide-[var(--border)]">
              {FAQ_DATA.map((item, i) => (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="pr-4 text-base font-semibold">{item.q}</span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-[var(--muted)] transition-transform ${openFaq === i ? "rotate-45" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <p className="pb-5 text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ───── Kapanış CTA ───── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-24 sm:py-32">
        <div className="mx-auto w-[90%] max-w-[800px] text-center">
          <h2 className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
            Markanızı zirveye taşımaya hazırız.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-white/80 sm:text-lg">
            8 yıllık tecrübe ve Premier Partner gücüyle tanışın.
          </p>
          <div className="mt-10">
            <Link
              href="#iletisim"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
            >
              Hemen Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
