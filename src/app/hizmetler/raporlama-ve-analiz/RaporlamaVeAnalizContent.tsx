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

// --- Helper Components ---

const NeonText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`relative ${className}`}>
    <span className="absolute inset-0 blur-sm text-inherit opacity-50">{children}</span>
    <span className="relative z-10">{children}</span>
  </span>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
    >
      <NeonText>{title}</NeonText>
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 max-w-2xl text-lg text-slate-400"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export function RaporlamaVeAnalizContent() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-300 antialiased selection:bg-blue-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-purple-600/15 blur-[150px] rounded-full"
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-emerald-600/10 blur-[100px] rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium tracking-wide text-blue-400">
            RAPORLAMA VE ANALİZ 4.0
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tighter text-white sm:text-7xl lg:text-8xl">
            <span className="block italic opacity-50">ALA MEDYA:</span>
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              VERİYLE GÜÇLENEN GELECEK
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400 sm:text-2xl">
            Raporlama ve Analiz Hizmetleri ile İşinizi Veriye Dayalı Yönetin.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 max-w-xl mx-auto rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl"
          >
            <p className="text-sm italic text-slate-400">
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
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Aşağı Kaydır</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-blue-500 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 1: DATA SOURCING --- */}
      <section className="relative z-10 px-6 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle
            title="Bölüm 1: Veri Toplama ve Entegrasyon"
            subtitle="Çok farklı kaynaklardan gelen karmaşık verileri tek bir merkezde topluyor, temizliyor ve anlamlandırıyoruz."
          />
          
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square max-w-md mx-auto w-full group">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-20 flex h-24 w-24 items-center justify-center rounded-3xl border-2 border-white/20 bg-black shadow-[0_0_50px_rgba(59,130,246,0.5)]"
                >
                  <div className="text-xs font-bold text-white text-center">ALA<br/>DATA HUB</div>
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
                        className="absolute z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900 shadow-lg backdrop-blur-md transition-transform hover:scale-110"
                      >
                         <div className="text-[10px] font-medium text-white text-center px-1">{node.label}</div>
                      </motion.div>
                      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <motion.line
                          x1="50%"
                          y1="50%"
                          x2={`calc(50% + ${x}px)`}
                          y2={`calc(50% + ${y}px)`}
                          stroke={node.color}
                          strokeWidth="1"
                          strokeOpacity="0.3"
                          strokeDasharray="4 4"
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

            <div className="space-y-8">
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
                  transition={{ delay: id * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="text-4xl font-bold">0{id + 1}</div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h4>
                  <p className="mt-2 text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: DEEP ANALYSIS --- */}
      <section className="relative z-10 px-6 py-24 sm:py-32 bg-white/5 backdrop-blur-sm">
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
                  transition={{ delay: id * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 border-t border-white/10 group-hover:scale-110 transition-transform`}>
                    <div className={`h-2 w-2 rounded-full ${item.color === 'blue' ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : item.color === 'purple' ? 'bg-purple-500 shadow-[0_0_10px_#8b5cf6]' : 'bg-emerald-500 shadow-[0_0_10px_#10b981]'}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white transition-colors">{item.title}</h4>
                    <p className="mt-2 text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
              <div className="relative z-10 h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={DASHBOARD_DATA}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }}
                      itemStyle={{ color: '#3B82F6' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Dönüşüm Oranı</div>
                  <div className="text-2xl font-bold text-white">+24.8%</div>
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
      <section className="relative z-10 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle
            title="Bölüm 3: Görsel Raporlama ve Dashboardlar"
            subtitle="Karmaşık verileri, herkesin anlayabileceği hikayelere dönüştürüyoruz. Anlık, etkileşimli ve özelleştirilebilir."
          />

          <div className="grid gap-12 lg:grid-cols-3">
            <motion.div
              whileHover={{ y: -5 }}
              className="col-span-1 rounded-3xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-sm"
            >
              <h4 className="font-bold text-white mb-6">Huniler & Dönüşüm</h4>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={CONVERSION_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {CONVERSION_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2 text-xs">
                {CONVERSION_DATA.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span className="text-slate-500">{item.name}</span>
                    <span className="text-white font-mono">{item.value}+</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-2 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Canlı İzleme</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Stratejik Dashboard</h4>
              <p className="text-slate-400 text-sm mb-8">Tüm reklam kanallarınızın performansını tek bir ekrandan yönetin.</p>
              
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={DASHBOARD_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis hide />
                    <Tooltip cursor={{ stroke: '#3b82f6', strokeWidth: 2 }} contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={4} dot={{ fill: '#3b82f6', r: 4 }} activeDot={{ r: 8, fill: '#60a5fa' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Harcanan", val: "₺45.2K", change: "+12%" },
                  { label: "ROAS", val: "4.8x", change: "+5%" },
                  { label: "CPA", val: "₺12.4", change: "-8%" },
                  { label: "ROI", val: "320%", change: "+15%" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-xl bg-white/5 border border-white/5 p-3">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">{stat.label}</div>
                    <div className="text-lg font-bold text-white mt-1">{stat.val}</div>
                    <div className={`text-[10px] ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{stat.change}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Özelleştirilebilir Tasarım", desc: "Markanıza ve hedeflerinize özel dashboard yapıları." },
              { title: "Anlık Veri İzleme", desc: "Veri gecikmesi olmadan gerçek zamanlı performans takibi." },
              { title: "Görsel Hikaye Anlatımı", desc: "Karmaşık tablolar yerine kararlarınızı destekleyen net görseller." },
            ].map((item, i) => (
              <div key={i} className="p-4 border-l-2 border-slate-800 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-white uppercase tracking-tighter">{item.title}</h5>
                <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: STRATEGIC GROWTH --- */}
      <section className="relative z-10 px-6 py-24 sm:py-32 bg-white/5 overflow-hidden">
         <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 1000 1000">
            <motion.path
              d="M100,900 C150,800 200,850 300,700 C400,550 500,600 650,400 C800,200 850,250 900,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
         </svg>

        <div className="mx-auto max-w-[1200px] relative z-10">
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
                   transition={{ delay: i * 0.2 }}
                   className="relative pl-8 border-l border-white/10 group"
                >
                  <div className="absolute left-[-1px] top-0 h-4 w-[2px] bg-emerald-400 group-hover:h-full transition-all duration-300" />
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-3xl opacity-20" />
              <div className="relative rounded-3xl border border-white/10 bg-black p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                   <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                     <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                     </svg>
                   </div>
                   <div>
                     <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Hedef</div>
                     <div className="text-xl font-bold text-white">PAZAR HAKİMİYETİ</div>
                   </div>
                </div>
                
                <div className="space-y-6">
                   <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1, delay: 0.5 }} className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-blue-500" />
                   </div>
                   <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Kâr Artışı</span>
                      <span className="text-emerald-400">+85%</span>
                   </div>

                   <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} transition={{ duration: 1, delay: 0.7 }} className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-blue-500" />
                   </div>
                   <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Yatırım Getirisi (ROI)</span>
                      <span className="text-emerald-400">+92%</span>
                   </div>
                </div>

                <div className="mt-10 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                   <p className="text-sm text-white font-bold uppercase tracking-widest">Sürdürülebilir Büyüme Aktif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER & CTA --- */}
      <section className="relative z-10 px-6 py-32 sm:py-48 text-center bg-black">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl">
              VERİYİ GÜCE DÖNÜŞTÜRMEYE <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">HAZIR MISINIZ?</span>
            </h2>
            <p className="mt-8 text-xl text-slate-400">
              İşinizi büyütmek ve pazarın lideri olmak için veriye dayalı stratejilerimizi keşfedin.
            </p>
            
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/#iletisim"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-600 px-10 py-4 font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
              >
                <span className="relative z-10 uppercase">HEMEN BAŞLAYIN</span>
                <motion.div
                  className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </Link>
            </div>

            <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10">
               <div className="flex flex-col items-center">
                  <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2">TELEFON</div>
                  <div className="text-white font-medium">+90 (212) ... .. ..</div>
               </div>
               <div className="flex flex-col items-center">
                  <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2">E-POSTA</div>
                  <div className="text-white font-medium">hello@alamedya.com</div>
               </div>
               <div className="flex flex-col items-center">
                  <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2">WEB SİTESİ</div>
                  <div className="text-white font-medium">www.alamedya.com</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600" />
    </main>
  );
}
