"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const LLM_MODELS = [
  { name: "ChatGPT (GPT-5.4 Thinking)", desc: "Metin yazarlığından detaylı kampanya analizine kadar operasyonlarımızın çok yönlü beyin takımı.", prompt: "Müşterimizin son 1 yıllık reklam verisini incele ve ROI artırıcı 5 yeni kampanya kurgusu sun." },
  { name: "Claude 4.6 Sonnet", desc: "Markalarımızın blog ve PR içeriklerinde doğal, empatik ve insan odaklı bir dil oluşturmak için kullanıyoruz.", prompt: "Markamızın hedef kitlesini düşünerek, onlara güven veren markalaşmış bir lansman metni başlat." },
  { name: "Gemini 3.1 Pro", desc: "Devasa bağlam penceresiyle markanızın bulunduğu sektördeki rakiplerin tonlarca verisini analiz ediyoruz.", prompt: "Rakiplerin 50 sayfalık faaliyet raporlarını tara ve pazarımızdaki yeni fırsat boşluklarını bul." },
  { name: "Llama 4 Maverick", desc: "Gizlilik gerektiren kurumsal müşteri kampanya verilerini işlerken, kendi kapalı devre altyapımızda güvenle kullandığımız model.", prompt: "Anonimleştirilmiş ziyaretçi yorumlarını analiz et ve markaya duygu durum haritasını çıkar." },
  { name: "Falcon 2", desc: "Ölçeklenebilir yapay zeka operasyonlarında ve teknik e-ticaret sitelerinde performans artışı sağladığımız araç.", prompt: "E-ticaret sitemizdeki tüm teknik ürün açıklamalarını SEO performansını artıracak şekilde kurgula." },
];

const VIDEO_MODELS = [
  { name: "Sora 2 1.1", desc: "Sıfır mekan, dev prodüksiyon hissi: Metinden 1 dakikalık fotogerçekçi, sinematik reklam ve stüdyo filmleri yaratıyoruz.", icon: "film" },
  { name: "Runway Gen-4 Turbo Alpha", desc: "Markaların sosyal medya reels ve tiktok viral süreçleri için inanılmaz hızla kreatif kurgular üretiyoruz.", icon: "video" },
  { name: "Pika Labs", desc: "Animasyon, 3D ve anime tarzı kreatif video projeleri isteyen müşterilerimiz için 1 numaramız.", icon: "star" },
  { name: "HeyGen v3", desc: "Sizi stüdyoya sokmadan dijital ikizinizi çıkarıyor, eğitim ve satış videolarını profesyonelce otomatize ediyoruz.", icon: "user" },
  { name: "Synthesia 2.0", desc: "Uluslararası müşterisi olan markalarımız için, tek dilde çekilip onlarca dilde dudak senkronuyla sunum hazırladığımız sistem.", icon: "globe" },
];

const IMAGE_MODELS = [
  { name: "Midjourney v8 Alpha", desc: "Klasik grafik süreçlerini atlıyor; markanızın reklam afişleri için hiper-gerçekçi, eşsiz ve kusursuz görselleri dakikalar içinde üretiyoruz." },
  { name: "DALL-E 3 (Plus)", desc: "Kreatif ekiplerimiz için ürün yerleştirmeyi metinlerle kusursuz anlayan, tipografi destekli özel kampanya tasarımları kurgulayan modelimiz." },
  { name: "Stable Diffusion XL 1.0", desc: "Müşterimizin ürün fotoğraflarını direkt yapay zekaya öğretip, her yeni kampanyada o ürünü limitsiz görsel varyasyonuyla sunabiliyoruz." },
  { name: "Adobe Firefly v3", desc: "Kurumsal firmalarımız için telif hakkı sorunu ve hukuki engel taşımayan, ticari lisansa %100 uyumlu görselleri güvenle yaratıyoruz." },
];

export function YapayZekaContent() {
  const [selectedGoal, setSelectedGoal] = useState<string>("İçerik Pazarlaması");
  const [emailValue, setEmailValue] = useState("");

  const suggestedTool = 
    selectedGoal === "İçerik Pazarlaması" ? "Claude 4.6 Sonnet ile Doğal Ton & GPT-5.4 Thinking ile Analitik Altyapı" :
    selectedGoal === "Video Reklam" ? "Runway Gen-4 Turbo ile Hızlı Kurgular & HeyGen v3 ile Marka Yüzü Avatarı" :
    selectedGoal === "Kampanya Tasarımı" ? "Midjourney v8 Alpha ile Özgün Sanat & Adobe Firefly v3 ile Güvenli Kullanım" :
    selectedGoal === "Veri ve Rakip Analizi" ? "Gemini 3.1 Pro ile Sektör Taraması ve Büyüme Raporları" : "GPT-5.4 Thinking Stratejik Operasyon";

  return (
    <main className="bg-[#f8fafc] overflow-hidden selection:bg-blue-200">
      <div className="w-full px-6 lg:px-12">
        {/* 1. Hero Seçimi */}
        <section className="relative px-4 pt-32 pb-24 sm:px-6 sm:pt-40 sm:pb-32 lg:px-8 overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788415-62341e028737?w=1600&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute -right-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[100px]" />
          
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1.5 text-sm font-semibold tracking-wider text-blue-200 backdrop-blur-md mb-6">
                YAPAY ZEKA DESTEKLİ AJANS MODELİ
              </span>
              <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
                Dijital Pazarlamada:<br/>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Yapay Zeka Devrimi
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-blue-100/80">
                Ala Medya olarak kreatif süreçlerimizin merkezine yapay zekayı yerleştiriyoruz. Biz sadece araçları listelemiyor; GPT-5.4 Thinking, Midjourney ve Sora 2 gibi dev modelleri marka stratejilerinizde harmanlıyor ve dijital büyümenizi katlıyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. LLM Modelleri */}
        <AnimatedSection>
          <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-[1200px]">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">Strateji & Analiz: LLM Gücümüz</h2>
                <p className="mt-4 text-xl text-[var(--muted)] max-w-2xl mx-auto">
                  Ala Medya veri ve kopyalama ekibi olarak, markanızın sesini kusursuzlaştırmak ve reklam analizlerimizi derinleştirmek için sektördeki en güçlü yapay zeka modelleriyle omuz omuza çalışıyoruz.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {LLM_MODELS.map((model, idx) => (
                  <div key={model.name} className="flex flex-col rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
                    <div className="mb-4 text-2xl font-bold text-[#1d1d1f]">{model.name}</div>
                    <p className="text-[var(--muted)] flex-grow">{model.desc}</p>
                    <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-2 block">Ekibimizin Kullandığı Örnek Bir Prompt</span>
                      <p className="text-sm font-mono text-slate-700 italic">"{model.prompt}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 3. AI Video Üretimi */}
        <AnimatedSection>
          <section className="py-24 sm:py-32 bg-slate-900 rounded-[3rem] text-white px-4">
            <div className="mx-auto max-w-[1100px]">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">Sıfır Set Prodüksiyonu, Sınırsız Kreatif</h2>
                <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
                  Tüm ekipmanları, stüdyo maliyetlerini ve haftalarca süren çekimleri çöpe atın. Markanız için hayal ettiğiniz reklam filmi yapay zeka ile saatler içerisinde yaratıyoruz.
                </p>
              </div>
              <div className="flex flex-wrap items-stretch justify-center gap-6">
                {VIDEO_MODELS.map((v) => (
                  <div key={v.name} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33%-16px)] rounded-3xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition hover:border-blue-500/50 hover:bg-slate-800">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                      <span className="text-2xl font-bold">{v.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{v.name}</h3>
                    <p className="text-slate-400 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 4. AI Görsel Oluşturucular */}
        <AnimatedSection>
          <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-[1100px] flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl mb-6">Tasarım Ofisimizin Yapay Zeka Stüdyosu</h2>
                <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
                  Stok fotoğraf kullanma devrini tamamen kapattık. Markanıza özel, hiper-kurgusal ve rekabet edilemez görselleri saniyeler içinde üretiyor, marka kampanyalarınızın CTR oranlarını zirveye taşıyoruz.
                </p>
                <div className="space-y-6">
                  {IMAGE_MODELS.map((img) => (
                    <div key={img.name} className="flex gap-4 items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600 shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1d1d1f]">{img.name}</h4>
                        <p className="text-[var(--muted)] mt-1">{img.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1681412580718-f222718712ba?w=500&q=80" alt="AI Generated 1" className="rounded-2xl shadow-md w-full h-48 object-cover" />
                <img src="https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?w=500&q=80" alt="AI Generated 2" className="rounded-2xl shadow-md w-full h-48 object-cover mt-8" />
                <img src="https://images.unsplash.com/photo-1698606471801-ac8ee46eac04?w=500&q=80" alt="AI Generated 3" className="rounded-2xl shadow-md w-full h-48 object-cover" />
                <img src="https://images.unsplash.com/photo-1684369528751-2292ec3a4ca1?w=500&q=80" alt="AI Generated 4" className="rounded-2xl shadow-md w-full h-48 object-cover mt-8" />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 5. FAQ Section */}
        <AnimatedSection>
          <section className="py-24 sm:py-32 bg-[#f1f5f9] rounded-[3rem] px-4 mb-24 overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-[1000px]">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mb-4">Sıkça Sorulan Sorular</h2>
                <p className="text-xl text-[var(--muted)]">Yapay zeka ve ajans işbirliği hakkında merak edilenler.</p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    q: "Ben de panelden reklam açabiliyorum, Ala Medya'ya neden ihtiyacım var?",
                    a: "Reklam açmak sadece bir başlangıçtır. Ala Medya'da biz veriyi ham haliyle bırakmıyoruz; Gemini 3.1 Pro ve GPT-5.4 Thinking ile 8 yıllık sektörel refleksimizi birleştiriyoruz. Sizin yapacağınız 1 reklam denemesine karşılık, biz yapay zeka ile binlerce varyasyonu milisaniyeler içinde simüle edip bütçenizi en karlı kanala yönlendiriyoruz. Bizimle çalışmak, bütçenizi 'deneme'ye değil, 'kanıtlanmış veri'ye yatırmaktır."
                  },
                  {
                    q: "Bu araçları ben de kullanabilirim, neden size hizmet bedeli ödemeliyim?",
                    a: "Enstrümana sahip olmak, virtüöz olmayı gerektirmez. Ala Medya'ya ödediğiniz bedel; doğru prompt mimarisi, araçlar arasındaki karmaşık entegrasyonlar ve markanıza özel kurguladığımız AI iş akışları içindir. Ayrıca, kullandığımız kurumsal seviye lisanslar (Enterprise AI) verilerinizin güvenliğini garanti ederken, sizin bireysel öğrenme sürecinde harcayacağınız zaman ve 'hatalı bütçe kullanımı' maliyetini ortadan kaldırır."
                  },
                  {
                    q: "Yapay zeka reklamlarımın doğallığını ve marka kimliğimi bozar mı?",
                    a: "Tam aksine! Claude 4.6 Sonnet modellerimizle markanızın ses tonunu hiç olmadığı kadar derin analiz ediyoruz. Hedef kitlenizin korkularını, arzularını ve dilini veriyle bildiğimiz için, 'reklam' kokmayan, tamamen çözüm odaklı ve samimi içerikler üretiyoruz. AI burada yaratıcılığı öldürmez; yaratıcılığın sınırlarını markanızın lehine genişletir."
                  },
                  {
                    q: "Neden başkasıyla değil de sizin AI odaklı modelinizle çalışmalıyım?",
                    a: "Çünkü biz yapay zekayı bir 'seçenek' değil, bir 'standart' haline getirdik. Diğer ajanslar hala manuel raporlama ve sınırlı kreatif denemeyle uğraşırken, biz Sora 2 ve Midjourney v8 Alpha ile rakipsiz bir üretim hızına ve Gemini 3.1 Pro ile insan gözünün göremeyeceği bir analiz derinliğine sahibiz. Ala Medya ile çalışmak, rakipleriniz henüz araçları keşfederken sizin sonucu almanız demektir."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group rounded-3xl border border-white bg-white/60 p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
                    <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">?</span>
                      {item.q}
                    </h3>
                    <p className="text-lg text-[var(--muted)] leading-relaxed pl-12 border-l-2 border-blue-50 ml-4 group-hover:border-blue-400 transition-colors">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 5. İnteraktif Bölüm / Newsletter */}
        <AnimatedSection>
          <section className="py-24 sm:py-32 bg-white rounded-[3rem] shadow-xl border border-[var(--border)] px-4 mb-24">
            <div className="mx-auto max-w-[900px]">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mb-4">Markanız İçin En Uygun AI Stratejisini Bulalım</h2>
                <p className="text-xl text-[var(--muted)]">Şu anki ana pazarlama hedefiniz nedir? Bize söyleyin, operasyonlarınıza entegre edeceğimiz yapay zeka iş akışını gösterelim.</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {["İçerik Pazarlaması", "Video Reklam", "Kampanya Tasarımı", "Veri ve Rakip Analizi"].map(goal => (
                  <button
                    key={goal}
                    onClick={() => setSelectedGoal(goal)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedGoal === goal ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                  >
                    {goal}
                  </button>
                ))}
              </div>

              <div className="text-center p-8 bg-indigo-50 border border-indigo-100 rounded-3xl mb-16">
                <p className="text-sm font-bold text-indigo-500 uppercase tracking-wide mb-2">ALA MEDYA'NIN SİZE SUNDUĞU ÇÖZÜM UZAYI</p>
                <div className="text-2xl font-extrabold text-indigo-900">{suggestedTool}</div>
              </div>

              <div className="border-t border-slate-200 pt-16">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4">Dijital Dönüşümü Ala Medya İle Yakalayın</h3>
                  <p className="text-[var(--muted)] mb-8">Markanız için geliştirdiğimiz AI destekli yeni stratejilerden ve sektördeki dijital devrimden haberdar olmak için bültenimize katılın.</p>
                  <form className="max-w-md mx-auto flex gap-4" onSubmit={(e) => { e.preventDefault(); alert("Abonelik başarılı!"); }}>
                    <input 
                      type="email" 
                      required
                      placeholder="E-posta adresiniz..." 
                      className="flex-grow rounded-xl border border-slate-300 px-6 py-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <button type="submit" className="rounded-xl bg-[#1d1d1f] px-8 py-4 font-bold text-white transition hover:bg-black hover:scale-105 shadow-md">
                      Abone Ol
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
