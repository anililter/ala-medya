"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const STRATEGY_POINTS = [
  {
    title: "Akademik Denetimli Reklam Yönetimi",
    content:
      "Reklam stratejilerimiz sadece algoritmalarla değil, alanında uzman Prof. Dr. akademik danışmanlığında şekillenir. Etik sınırlar içinde, danışan psikolojisine en uygun dili kurguluyoruz.",
    icon: "academic",
  },
  {
    title: "Klinik Otorite İnşası",
    content:
      "Sıradan bir 'uzman' değil, alanında referans gösterilen bir 'otorite' olmanız için SEO ve içerik stratejinizi akademik derinlikle harmanlıyoruz. Claude 4.6 Sonnet ile rafine içerikler üretiyoruz.",
    icon: "authority",
  },
  {
    title: "Nitelikli Danışan Filtrasyonu",
    content:
      "Amacımız sadece 'tıklama' değil, doğru uzman arayışındaki 'nitelikli danışan'dır. Funnel sistemimizle, kliniğinize en uygun danışan profilini filtreleyerek ulaştırıyoruz.",
    icon: "filter",
  },
];

const METHODOLOGY = [
  { 
    step: "01", 
    title: "Akademik Analiz", 
    desc: "Uzmanlık alanınızın akademik derinliği ve hedef kitlenizin psikolojik ihtiyaç haritası çıkarılır.",
    detail: "Prof. Dr. eşliğinde içerik ve reklam dili analizi."
  },
  { 
    step: "02", 
    title: "Dijital Mimari", 
    desc: "Etik kurallara tam uyumlu, profesyonelliğinizi yansıtan yüksek performanslı dijital altyapı kurulumu.",
    detail: "Apple standartlarında UI/UX ve CAPI entegrasyonu."
  },
  { 
    step: "03", 
    title: "Stratejik Yayılım", 
    desc: "Google Ads ve Sosyal Medya kanallarında, 'satış' değil 'çözüm' odaklı otorite kampanyalarının başlatılması.",
    detail: "Maliyet başı randevu optimizasyonu (CPL)."
  },
  { 
    step: "04", 
    title: "Veri Odaklı Ölçekleme", 
    desc: "Gelen danışan verilerinin analiziyle, randevu takviminizi optimize eden sürekli iyileştirme döngüsü.",
    detail: "Haftalık şeffaf raporlama ve akademik revizyonlar."
  },
];

const GROWTH_DATA = [
  { ay: "Başlangıç", randevu: 12, verimlilik: 30 },
  { ay: "2. Ay", randevu: 28, verimlilik: 45 },
  { ay: "4. Ay", randevu: 54, verimlilik: 72 },
  { ay: "6. Ay", randevu: 89, verimlilik: 95 },
];

const SERVICES_BENTO = [
  { 
    title: "Prof. Dr. Onaylı Reklam Yönetimi", 
    desc: "Tıbbi Deontoloji ve Etik kurallara %100 uyumlu, Google Premier Partner ayrıcalığıyla yönetilen hassas kampanyalar.",
    icon: "shield"
  },
  { 
    title: "Semantik Otorite SEO", 
    desc: "Danışanların arama niyetini (Search Intent) hedefleyen, güven sarsmayan, bilgi odaklı üst sıra stratejileri.",
    icon: "search"
  },
  { 
    title: "Klinik Web Deneyimi", 
    desc: "Karmaşadan uzak, minimal ve güven veren 'Life on Mac' estetiğinde, randevu odaklı dönüşüm mimarisi.",
    icon: "monitor"
  },
  { 
    title: "İleri Düzey Analitik", 
    desc: "KVKK ve GDPR uyumlu, Server-Side CAPI altyapısıyla danışan gizliliğini koruyan kesin veri takibi.",
    icon: "chart"
  },
];

function KitIcon({ type }: { type: string }) {
  const size = "h-8 w-8";
  if (type === "academic") return (
    <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
  if (type === "authority") return (
    <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
  if (type === "filter") return (
    <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  );
  return null;
}

export function PsikolojiContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="relative bg-white">
      {/* 1. Hero: Pazarlama Kiti Girişi */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Psikologlar İçin Profesyonel Büyüme Kiti
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-[#1d1d1f] sm:text-7xl">
            Akademik Otorite ile <br />
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Etik Büyüme Stratejileri.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[#424245]">
            Sıradan reklam ajanslarının &quot;gel-gel&quot; mantığını bir kenara bırakın. 
            <strong> Prof. Dr. akademik danışmanlığında</strong> yürütülen reklam yönetimimizle, 
            kliniğinizin saygınlığını koruyarak takviminizi nitelikli danışanlarla dolduruyoruz.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link href="#iletisim" className="rounded-full bg-[#1d1d1f] px-8 py-4 text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-xl">
              Strateji Görüşmesi Planla
            </Link>
            <div className="flex items-center gap-4 text-sm text-[#86868b]">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold">
                    DR
                  </div>
                ))}
              </div>
              <span>50+ Uzman Psikolog Tercihi</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Karşılaştırma Tablosu - Otorite Farkı */}
      <AnimatedSection>
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">Neden Sadece Bir Ajans Değiliz?</h2>
              <p className="mt-4 text-xl text-[#86868b]">Sıradan bir reklam yönetimi ile akademik pazarlama kiti arasındaki farklar.</p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#f5f5f7] bg-white shadow-xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#f5f5f7]">
                    <th className="px-6 py-4 text-sm font-bold text-[#1d1d1f]">Özellik / Yaklaşım</th>
                    <th className="px-6 py-4 text-sm font-bold text-red-600">Sıradan Reklam Ajansı</th>
                    <th className="px-6 py-4 text-sm font-bold text-blue-600">Ferah Medya Pazarlama Kiti</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f5f5f7]">
                  <tr>
                    <td className="px-6 py-6 font-semibold text-[#1d1d1f]">Reklam Dili</td>
                    <td className="px-6 py-6 text-[#86868b]">Tıklama odaklı, agresif, &quot;gel gel&quot; tarzı metinler.</td>
                    <td className="px-6 py-6 text-[#1d1d1f] font-medium bg-blue-50/30 italic">Prof. Dr. denetimli, etik, empatik ve otorite inşa eden dil.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-6 font-semibold text-[#1d1d1f]">Hedefleme Stratejisi</td>
                    <td className="px-6 py-6 text-[#86868b]">Genel demografik veriler, düşük kaliteli trafik.</td>
                    <td className="px-6 py-6 text-[#1d1d1f] font-medium bg-blue-50/30">Semantik arama niyetine göre &quot;nitelikli danışan&quot; hedefleme.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-6 font-semibold text-[#1d1d1f]">Teknik Altyapı</td>
                    <td className="px-6 py-6 text-[#86868b]">Basit piksel kurulumu, veri kaybı riski.</td>
                    <td className="px-6 py-6 text-[#1d1d1f] font-medium bg-blue-50/30">Server-Side CAPI, %100 KVKK uyumu ve kesin veri takibi.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-6 font-semibold text-[#1d1d1f]">İçerik Kalitesi</td>
                    <td className="px-6 py-6 text-[#86868b]">Stock fotoğraflar ve kopyala-yapıştır içerikler.</td>
                    <td className="px-6 py-6 text-[#1d1d1f] font-medium bg-blue-50/30">Claude 4.6 Sonnet ile rafine edilmiş akademik derinlikli içerikler.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 2.5 Animasyonlu İnfografik - Danışan Yolculuğu */}
      <AnimatedSection>
        <section className="bg-[#f5f5f7] py-24 sm:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl mb-20">
              Dijital Danışan Yolculuğu (Infographic)
            </h2>
            <div className="relative flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-0">
              {/* Yol Hattı (Desktop) */}
              <div className="absolute top-1/2 left-0 hidden h-1 w-full -translate-y-1/2 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-600 lg:block" />
              
              {[
                { label: "Arama & Kriz Anı", icon: "🔍", desc: "Danışan semptom veya çözüm arar." },
                { label: "Otorite Karşılaşması", icon: "✨", desc: "Sizin profesyonel içeriğinizle tanışır." },
                { label: "Güven İnşası", icon: "🤝", desc: "Akademik derinliği ve referansları görür." },
                { label: "Randevu & Dönüşüm", icon: "📅", desc: "Kesin bir niyetle seansa başlar." }
              ].map((item, idx) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative z-10 flex flex-col items-center text-center max-w-[200px]"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl shadow-xl border-4 border-blue-50 transition-transform hover:scale-110">
                    {item.icon}
                  </div>
                  <h4 className="mt-6 font-bold text-[#1d1d1f]">{item.label}</h4>
                  <p className="mt-2 text-sm text-[#86868b]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 2.7 Teknik Detay Tablosu (Pazarlama Kiti İçeriği) */}
      <AnimatedSection>
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl mb-8">Pazarlama Kitinin Teknik Anatomisi</h2>
                <p className="text-xl text-[#86868b] mb-10">Kullandığımız her modül, kliniğinizin dijital kalesini inşa etmek için tasarlanmıştır.</p>
                <div className="space-y-4">
                  {[
                    { key: "AI Engine", val: "Claude 4.6 Sonnet & Gemini 3.1 Pro" },
                    { key: "Ad Supervision", val: "Prof. Dr. Akademik Denetim" },
                    { key: "Data Safety", val: "Server-Side Tracking (GTM/CAPI)" },
                    { key: "UI Framework", val: "Apple Human Interface Standards" },
                    { key: "Legal Compliance", val: "KVKK & GDPR Full Package" }
                  ].map((spec) => (
                    <div key={spec.key} className="flex items-center justify-between border-b border-[#f5f5f7] py-3">
                      <span className="font-semibold text-[#1d1d1f]">{spec.key}</span>
                      <span className="text-blue-600 font-medium">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-blue-600 p-8 text-white flex flex-col justify-end min-h-[240px]">
                  <div className="text-4xl font-bold mb-2">95/100</div>
                  <div className="text-sm opacity-80 uppercase tracking-widest font-semibold">SEO Skoru</div>
                </div>
                <div className="rounded-3xl bg-emerald-500 p-8 text-white flex flex-col justify-end">
                  <div className="text-4xl font-bold mb-2">-%40</div>
                  <div className="text-sm opacity-80 uppercase tracking-widest font-semibold">CPL (Randevu Başı Maliyet)</div>
                </div>
                <div className="col-span-2 rounded-3xl bg-[#1d1d1f] p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">🔒</div>
                    <div>
                      <div className="font-bold">E2E Şifreleme</div>
                      <div className="text-sm opacity-60 italic">Danışan verileri için uçtan uca koruma.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 3. Prof Dr. Vurgusu & Detaylı Otorite Analizi */}
      <AnimatedSection>
        <section className="bg-white py-24 sm:py-32 border-t border-[#f5f5f7]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-50 to-emerald-50 p-8">
                  <div className="h-full w-full rounded-2xl bg-white p-6 shadow-2xl border border-blue-100/50">
                    <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#86868b]">Performans Projeksiyonu</h4>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={GROWTH_DATA}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="ay" axisLine={false} tickLine={false} tick={{fill: '#86868b', fontSize: 12}} />
                          <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                          <Line type="monotone" dataKey="randevu" stroke="#2563eb" strokeWidth={3} dot={{r: 6, fill: '#2563eb'}} />
                          <Line type="monotone" dataKey="verimlilik" stroke="#10b981" strokeWidth={3} dot={{r: 6, fill: '#10b981'}} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-6 flex justify-between text-xs font-semibold text-[#86868b]">
                      <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-600" /> Randevu Sayısı</div>
                      <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Nitelikli Dönüşüm %</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                  Akademik Denetimin Gücü
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-[#424245]">
                  Psikoloji, hata kabul etmeyen hassas bir dengedir. Ferah Medya olarak, tüm dijital varlığınızı <strong>Prof. Dr. akademik danışmanlığında</strong> inşa ediyoruz. Bu denetim, reklam metinlerinizin sadece tıklama almasını değil, aynı zamanda etik ve bilimsel olarak kusursuz olmasını sağlar.
                </p>
                <div className="mt-10 space-y-8">
                  {STRATEGY_POINTS.map((point) => (
                    <div key={point.title} className="flex gap-6 group">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5f5f7] text-blue-600 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <KitIcon type={point.icon} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1d1d1f]">{point.title}</h3>
                        <p className="mt-2 text-[#86868b] leading-relaxed">{point.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. Hizmet Detayları - Bento Grid */}
      <AnimatedSection>
        <section className="py-24 sm:py-32 bg-[#f5f5f7]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">Klinik Uzmanlık Matrisi</h2>
              <p className="mt-4 text-xl text-[#86868b]">Sektörel derinlik ve dijital mühendisliğin kesişimi.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES_BENTO.map((service, i) => (
                <div key={service.title} className="group relative overflow-hidden rounded-3xl border border-white bg-white/70 p-8 transition-all hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f5f7] text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {service.icon === "shield" && <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                    {service.icon === "search" && <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                    {service.icon === "monitor" && <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    {service.icon === "chart" && <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">{service.title}</h3>
                  <p className="mt-4 text-[#86868b] leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 5. Clinical FAQ - Sıkça Sorulan Sorular */}
      <AnimatedSection>
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl mb-16">
              Klinik Pazarlama Hakkında Sıkça Sorulanlar
            </h2>
            <div className="space-y-6">
              {[
                { q: "Reklamlar etik kurallara ve deontologye uygun mu?", a: "Evet. Tüm reklam kurgularımız Prof. Dr. akademik danışmanlığımızda, danışanları yanıltmayacak ve uzmanlık itibarınızı koruyacak şekilde hazırlanır." },
                { q: "Danışan verileri KVKK kapsamında nasıl korunuyor?", a: "Server-Side CAPI altyapımız sayesinde veriler kişisel bilgilerden arındırılmış (hashed) şekilde işlenir. Sunucularımızda hiçbir hassas danışan verisi depolanmaz." },
                { q: "Neden genel bir ajansla değil, sizinle çalışmalıyım?", a: "Çünkü biz sadece 'reklam' yapmıyoruz. Psikoloji sektörünün terminolojisini, danışan psikolojisini ve akademik etik değerleri biliyoruz. Gemini ve Claude AI modellerimizi bu sektörel verilerle eğittik." },
                { q: "Sonuçları ne kadar sürede görmeye başlarım?", a: "Sistem kurulumundan sonra ilk 15 gün algoritma öğrenme sürecidir. Genellikle 1. ayın sonunda randevu akışında %30 ve üzeri bir artış gözlemlenmektedir." }
              ].map((faq, i) => (
                <div key={i} className="rounded-2xl border border-[#f5f5f7] p-6 transition-colors hover:bg-[#f5f5f7]/50">
                  <h4 className="text-lg font-bold text-[#1d1d1f] mb-3">{faq.q}</h4>
                  <p className="text-[#86868b] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. Metodoloji - Süreç */}
      <AnimatedSection>
        <section className="bg-[#1d1d1f] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-20 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Uygulama Metodolojisi</h2>
              <p className="mt-6 text-xl text-gray-400">Teoriden pratiğe, 4 adımda klinik büyümesi.</p>
            </div>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {METHODOLOGY.map((step) => (
                <div key={step.step} className="relative">
                  <div className="mb-6 text-6xl font-bold text-white/5">{step.step}</div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="mt-4 text-gray-400">{step.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-xs font-semibold text-blue-400">
                    <span className="h-1 w-1 rounded-full bg-blue-400" />
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 5. KVKK & Etik Vurgusu */}
      <AnimatedSection>
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-8">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">Sıfır Tolerans: Etik ve KVKK</h2>
            <p className="mt-6 text-xl leading-relaxed text-[#424245]">
              Danışan verilerinizin gizliliği bizim için en öncelikli konudur. Sunucu tarafında çalışan (Server-Side) izleme sistemlerimizle, verileri kişiselleştirilmeden anonim olarak işliyor, 
              hem Google politikalarına hem de KVKK standartlarına %100 uyumlu kalıyoruz.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="rounded-2xl bg-[#f5f5f7] px-6 py-4 font-bold text-[#1d1d1f]">Server-Side CAPI</div>
              <div className="rounded-2xl bg-[#f5f5f7] px-6 py-4 font-bold text-[#1d1d1f]">Anonim Veri İşleme</div>
              <div className="rounded-2xl bg-[#f5f5f7] px-6 py-4 font-bold text-[#1d1d1f]">Etik Reklam Metinleri</div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 6. Final CTA */}
      <section id="iletisim" className="relative overflow-hidden bg-blue-600 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Kliniğinizi Bir Sonraki <br />Seviyeye Taşıyın.
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Size özel hazırlanacak ücretsiz pazarlama analizi ve akademik denetimli reklam projeksiyonu için hemen iletişime geçin.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="rounded-full bg-white px-10 py-5 text-xl font-bold text-blue-600 transition-all hover:scale-105 hover:bg-gray-50">
              Ücretsiz Analiz İsteyin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
