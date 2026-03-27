"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

// --- Mock Data ---
const DATA_FLOW_NODES = [
  { id: "google", label: "Google Ads", color: "#4285F4" },
  { id: "meta", label: "Meta", color: "#1877F2" },
  { id: "tiktok", label: "TikTok", color: "#FE2C55" },
  { id: "web", label: "Web Sitesi", color: "#10B981" },
  { id: "crm", label: "CRM", color: "#F59E0B" },
];

const DASHBOARD_DATA = [
  { name: "Pzt", value: 400 },
  { name: "Sal", value: 300 },
  { name: "Çar", value: 600 },
  { name: "Per", value: 800 },
  { name: "Cum", value: 500 },
  { name: "Cmt", value: 900 },
  { name: "Paz", value: 700 },
];

const CONVERSION_DATA = [
  { name: "Farkındalık", value: 1000, fill: "#3B82F6" },
  { name: "İlgi", value: 600, fill: "#6366F1" },
  { name: "Karar", value: 300, fill: "#8B5CF6" },
  { name: "Eylem", value: 100, fill: "#EC4899" },
];

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 max-w-2xl text-lg text-[var(--muted)]"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export function RaporlamaVeAnalizContent() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <main className="relative overflow-hidden bg-white text-[#1d1d1f] antialiased">

      {/* Subtle background blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/60 blur-[120px] rounded-full"
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-purple-100/50 blur-[150px] rounded-full"
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-emerald-100/40 blur-[100px] rounded-full"
        />
      </div>

      {/* --- HERO --- */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="mb-6 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium tracking-wide text-blue-600">
            RAPORLAMA VE ANALİZ 4.0
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tighter text-[#1d1d1f] sm:text-7xl lg:text-8xl">
            <span className="block italic text-[var(--muted)]">ALA MEDYA:</span>
            <span className="mt-2 block bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              VERİYLE GÜÇLENEN GELECEK
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">
            Raporlama ve Analiz Hizmetleri ile İşinizi Veriye Dayalı Yönetin.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 max-w-xl mx-auto rounded-2xl border border-[var(--border)] bg-[#fafafa] p-6"
          >
            <p className="text-sm italic text-[var(--muted)]">
              Veri, modern iş dünyasının yakıtıdır. Ala Medya, bu yakıtı işlemek ve işinizi zirveye taşımak için analiz eder.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Aşağı Kaydır</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-blue-400 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 1: DATA SOURCING --- */}
      <section className="relative z-10 border-t border-[var(--border)] bg-[#fafafa] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle
            title="Bölüm 1: Veri Toplama ve Entegrasyon"
            subtitle="Çok farklı kaynaklardan gelen karmaşık verileri tek bir merkezde topluyor, temizliyor ve anlamlandırıyoruz."
          />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Node Flow */}
            <div className="relative aspect-square max-w-md mx-auto w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-20 flex h-24 w-24 items-center justify-center rounded-3xl border-2 border-[var(--border)] bg-white shadow-lg"
                >
                  <div className="text-xs font-bold text-[#1d1d1f] text-center">ALA<br />DATA HUB</div>
                </motion.div>

                {DATA_FLOW_NODES.map((node, index) => {
                  const angle = (index / DATA_FLOW_NODES.length) * Math.PI * 2;
                  const radius = 160;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <React.Fragment key={node.id}>
                      <motion.div
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        whileInView={{ opacity: 1, x, y }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className="absolute z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-white shadow-md transition-transform hover:scale-110"
                      >
                        <div className="text-[10px] font-semibold text-[#1d1d1f] text-center px-1">{node.label}</div>
                      </motion.div>
                      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <motion.line
                          x1="50%" y1="50%"
                          x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`}
                          stroke={node.color} strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </svg>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              {[
                { title: "Çok Kanallı Veri Toplama", desc: "Google, Meta, TikTok ve CRM sistemlerinizden %100 uyumlu veri çekimi." },
                { title: "Veri Entegrasyonu & Temizleme", desc: "Karmaşık verileri standardize eder, hataları ayıklar ve güvenilir kılarız." },
                { title: "Gerçek Zamanlı Veri Akışı", desc: "Anlık karar verebilmeniz için veriyi saniyeler içinde işleriz." },
              ].map((item, id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: id * 0.15 }}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="absolute top-0 right-0 p-4 text-4xl font-bold text-[var(--border)] opacity-60 group-hover:opacity-100 transition-opacity">
                    0{id + 1}
                  </div>
                  <h4 className="text-lg font-bold text-[#1d1d1f] group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="mt-2 text-[var(--muted)] leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: DEEP ANALYSIS --- */}
      <section className="relative z-10 border-t border-[var(--border)] bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle
            title="Bölüm 2: Derin Analiz ve Keşif"
            subtitle="Mikroskobik detaylardan makro stratejilere. Sadece 'ne olduğunu' değil, 'neden olduğunu' keşfediyoruz."
          />

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 space-y-8">
              {[
                { title: "KPI ve Metrik Analizi", desc: "ROI, CPA, CTR ve sektörünüze özel kritik başarı göstergelerini takip ederiz.", color: "blue" },
                { title: "Kitle Davranış Analizi", desc: "Müşterilerinizin dijital ayak izlerini takip ederek en iyi segmentasyonu oluştururuz.", color: "purple" },
                { title: "Huni Dönüşüm Analizi", desc: "Satın alma hunisindeki sızıntıları tespit eder, dönüşüm oranlarını maksimize ederiz.", color: "emerald" },
              ].map((item, id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: id * 0.15 }}
                  className="flex gap-5 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fafafa] border border-[var(--border)] group-hover:scale-110 transition-transform">
                    <div className={`h-2 w-2 rounded-full ${item.color === 'blue' ? 'bg-blue-500' : item.color === 'purple' ? 'bg-purple-500' : 'bg-emerald-500'}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1d1d1f]">{item.title}</h4>
                    <p className="mt-1.5 text-[var(--muted)] leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chart Card */}
            <div className="order-1 lg:order-2 rounded-3xl border border-[var(--border)] bg-[#fafafa] p-6 shadow-sm">
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={DASHBOARD_DATA}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#e5e7eb', color: '#1d1d1f', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} />
                    <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2.5} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-between items-end border-t border-[var(--border)] pt-4">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-bold mb-1">Dönüşüm Oranı</div>
                  <div className="text-2xl font-bold text-[#1d1d1f]">+24.8%</div>
                </div>
                <div className="h-12 w-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={DASHBOARD_DATA.slice(-4)}>
                      <Bar dataKey="value" fill="#6366f1" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: VISUALIZATION --- */}
      <section className="relative z-10 border-t border-[var(--border)] bg-[#fafafa] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle
            title="Bölüm 3: Görsel Raporlama ve Dashboardlar"
            subtitle="Karmaşık verileri, herkesin anlayabileceği hikayelere dönüştürüyoruz. Anlık, etkileşimli ve özelleştirilebilir."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Pie chart card */}
            <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
              <h4 className="font-bold text-[#1d1d1f] mb-4">Huniler & Dönüşüm</h4>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={CONVERSION_DATA} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={4} dataKey="value">
                      {CONVERSION_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#e5e7eb', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 space-y-1.5 text-xs">
                {CONVERSION_DATA.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span className="text-[var(--muted)]">{item.name}</span>
                    <span className="text-[#1d1d1f] font-mono font-medium">{item.value}+</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Main dashboard card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-2 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-5">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Canlı İzleme</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-[#1d1d1f] mb-1">Stratejik Dashboard</h4>
              <p className="text-[var(--muted)] text-sm mb-6">Tüm reklam kanallarınızın performansını tek bir ekrandan yönetin.</p>

              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={DASHBOARD_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 3 }} activeDot={{ r: 6, fill: '#60a5fa' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Harcanan", val: "₺45.2K", change: "+12%" },
                  { label: "ROAS", val: "4.8x", change: "+5%" },
                  { label: "CPA", val: "₺12.4", change: "-8%" },
                  { label: "ROI", val: "320%", change: "+15%" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-xl bg-[#fafafa] border border-[var(--border)] p-3">
                    <div className="text-[10px] text-[var(--muted)] uppercase font-bold">{stat.label}</div>
                    <div className="text-lg font-bold text-[#1d1d1f] mt-1">{stat.val}</div>
                    <div className={`text-[10px] font-medium ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-500'}`}>{stat.change}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Özelleştirilebilir Tasarım", desc: "Markanıza ve hedeflerinize özel dashboard yapıları." },
              { title: "Anlık Veri İzleme", desc: "Veri gecikmesi olmadan gerçek zamanlı performans takibi." },
              { title: "Görsel Hikaye Anlatımı", desc: "Karmaşık tablolar yerine kararlarınızı destekleyen net görseller." },
            ].map((item, i) => (
              <div key={i} className="p-4 border-l-2 border-[var(--border)] hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-[#1d1d1f] tracking-tight">{item.title}</h5>
                <p className="text-[var(--muted)] text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: STRATEGIC GROWTH --- */}
      <section className="relative z-10 border-t border-[var(--border)] bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle
            title="Bölüm 4: Stratejik Kararlar ve Büyüme"
            subtitle="Veri sadece bir sayı değildir; o bir büyüme pusulasıdır. Kararlarınızı şansa değil, kanıta dayandırın."
          />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              {[
                { title: "Veriye Dayalı Karar Alma", desc: "Sezgilerin ötesine geçin. Verilerin sunduğu somut kanıtlarla stratejinizi belirleyin." },
                { title: "ROI Optimizasyonu", desc: "Hangi kanalın kâr getirdiğini görün, bütçenizi en verimli noktaya kanalize edin." },
                { title: "Sürdürülebilir İş Büyümesi", desc: "Ölçülebilir büyüme ile belirsizlikleri ortadan kaldırın ve pazar hakimiyetinizi artırın." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-8 border-l border-[var(--border)] group"
                >
                  <div className="absolute left-[-1px] top-0 h-4 w-[2px] bg-emerald-500 group-hover:h-full transition-all duration-300" />
                  <h4 className="text-lg font-bold text-[#1d1d1f] mb-1.5">{item.title}</h4>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[#fafafa] p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--muted)] font-bold">Hedef</div>
                  <div className="text-xl font-bold text-[#1d1d1f]">PAZAR HAKİMİYETİ</div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-[var(--muted)]">Kâr Artışı</span>
                    <span className="text-emerald-600 font-bold">+85%</span>
                  </div>
                  <div className="relative h-2 w-full bg-[var(--border)] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1, delay: 0.4 }} className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-[var(--muted)]">Yatırım Getirisi (ROI)</span>
                    <span className="text-emerald-600 font-bold">+92%</span>
                  </div>
                  <div className="relative h-2 w-full bg-[var(--border)] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} transition={{ duration: 1, delay: 0.6 }} className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-white border border-[var(--border)] text-center">
                <p className="text-sm text-[#1d1d1f] font-bold uppercase tracking-widest">Sürdürülebilir Büyüme Aktif</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="relative z-10 border-t border-[var(--border)] bg-[#fafafa] px-6 py-32 sm:py-44 text-center">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-extrabold tracking-tighter text-[#1d1d1f] sm:text-6xl">
              VERİYİ GÜCE DÖNÜŞTÜRMEYE <br />
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">HAZIR MISINIZ?</span>
            </h2>
            <p className="mt-8 text-xl text-[var(--muted)]">
              İşinizi büyütmek ve pazarın lideri olmak için veriye dayalı stratejilerimizi keşfedin.
            </p>

            <div className="mt-12">
              <Link
                href="/#iletisim"
                className="btn-shimmer inline-flex rounded-full bg-blue-600 px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:scale-[1.02] hover:bg-blue-700"
              >
                Hemen Başlayın
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[var(--border)] pt-10">
              <div className="flex flex-col items-center">
                <div className="text-[var(--muted)] text-[10px] uppercase tracking-widest font-bold mb-2">TELEFON</div>
                <div className="text-[#1d1d1f] font-medium">+90 (212) ... .. ..</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[var(--muted)] text-[10px] uppercase tracking-widest font-bold mb-2">E-POSTA</div>
                <div className="text-[#1d1d1f] font-medium">hello@alamedya.com</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[var(--muted)] text-[10px] uppercase tracking-widest font-bold mb-2">WEB SİTESİ</div>
                <div className="text-[#1d1d1f] font-medium">www.alamedya.com</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500" />
    </main>
  );
}
