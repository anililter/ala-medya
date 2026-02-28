import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL gerekli.");
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.contactMessage.deleteMany();
  await prisma.project.deleteMany();
  await prisma.service.deleteMany();

  const web = await prisma.service.create({
    data: {
      title: "Web Tasarım & Geliştirme",
      slug: "web-tasarim",
      description: "Kurumsal ve özel web siteleri, modern arayüzler.",
      icon: "🌐",
      order: 0,
    },
  });

  await prisma.service.create({
    data: {
      title: "Dijital Pazarlama",
      slug: "dijital-pazarlama",
      description: "SEO, sosyal medya ve reklam kampanyaları.",
      icon: "📈",
      order: 1,
    },
  });

  await prisma.service.create({
    data: {
      title: "Marka & Kimlik",
      slug: "marka-kimlik",
      description: "Logo, kurumsal kimlik ve görsel iletişim.",
      icon: "✨",
      order: 2,
    },
  });

  await prisma.project.create({
    data: {
      title: "Örnek Kurumsal Site",
      slug: "ornek-kurumsal-site",
      description: "Modern kurumsal web sitesi projesi.",
      clientName: "ABC Şirketi",
      serviceId: web.id,
      order: 0,
      published: true,
    },
  });

  await prisma.project.create({
    data: {
      title: "E-Ticaret Projesi",
      slug: "e-ticaret-projesi",
      description: "Ölçeklenebilir e-ticaret altyapısı.",
      clientName: "XYZ Mağaza",
      serviceId: web.id,
      order: 1,
      published: true,
    },
  });

  console.log("✅ Seed tamamlandı: Hizmetler, projeler eklendi.");

  // ─── Blog Posts ───
  await prisma.post.deleteMany();

  const blogPosts = [
    {
      title: "Google Ads'te AI Destekli Teklif Stratejileri ile ROAS Nasıl %340 Arttırılır?",
      slug: "google-ads-ai-teklif-stratejileri-roas",
      excerpt: "Gemini ve Performance Max kampanyalarının akıllı teklif optimizasyonuyla reklam harcama getirisini nasıl katlayabileceğinizi veri odaklı anlatıyoruz.",
      content: "<p>Dijital reklamcılıkta yapay zeka destekli teklif stratejileri, manuel optimizasyonun çok ötesine geçti. Bu yazıda Google Ads'in AI modellerini nasıl kullanabileceğinizi detaylı olarak inceliyoruz.</p><h2>Performance Max Kampanyaları</h2><p>Performance Max, Google'ın tüm envanterini tek bir kampanyada birleştiren AI destekli kampanya türüdür. Doğru sinyal stratejileriyle ROAS'ınızı ciddi oranda artırabilirsiniz.</p>",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      published: true,
      publishedAt: new Date("2026-02-25"),
    },
    {
      title: "ChatGPT-4 ile SEO İçerik Üretimi: Semantik Arama Çağında Kaliteli İçerik",
      slug: "chatgpt-seo-icerik-uretimi-semantik-arama",
      excerpt: "Yapay zeka ile üretilen içeriklerin Google'da nasıl üst sıralara çıkabileceğini, E-E-A-T kriterlerini ve semantik SEO stratejilerini inceliyoruz.",
      content: "<p>Google'ın Helpful Content güncellemesiyle birlikte, AI destekli içerik üretimi yeni bir boyut kazandı. ChatGPT-4'ün güçlü dil modeli ile kaliteli, özgün ve SEO dostu içerikler oluşturmak artık mümkün.</p><h2>E-E-A-T ve AI İçerik</h2><p>Deneyim, Uzmanlık, Otorite ve Güvenilirlik — bu dört kriter, AI ile üretilen içeriklerin başarısını belirleyen temel faktörler.</p>",
      imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200",
      published: true,
      publishedAt: new Date("2026-02-20"),
    },
    {
      title: "Sosyal Medyada Gemini ile Trend Analizi: Viral İçerik Stratejileri",
      slug: "sosyal-medya-gemini-trend-analizi-viral",
      excerpt: "Google Gemini'nin çoklu modal analiz yeteneklerini kullanarak sosyal medya trendlerini önceden tespit etmenin ve viral içerik üretmenin yolları.",
      content: "<p>Sosyal medya pazarlamasında zamanlamak her şeydir. Gemini'nin gelişmiş analiz yetenekleri sayesinde trendleri rakiplerden önce yakalayabilir ve marka bilinirliğinizi katlayabilirsiniz.</p>",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200",
      published: true,
      publishedAt: new Date("2026-02-15"),
    },
    {
      title: "Claude ile UX Analizi: Dönüşüm Oranlarını %85 Artıran Tasarım Kararları",
      slug: "claude-ux-analizi-donusum-oranlari",
      excerpt: "Claude'un analitik yeteneklerini kullanarak kullanıcı deneyimini nasıl iyileştirebileceğinizi, A/B test sonuçlarımızı ve pratik önerilerimizi paylaşıyoruz.",
      content: "<p>Kullanıcı deneyimi tasarımında veri odaklı kararlar almak kritik önem taşır. Claude'un gelişmiş analiz ve muhakeme yetenekleri, UX araştırma süreçlerinizi hızlandırır ve doğru tasarım kararları almanızı sağlar.</p>",
      imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200",
      published: true,
      publishedAt: new Date("2026-02-10"),
    },
    {
      title: "2026'da Meta Ads: AI Advantage+ Kampanyaları ile E-Ticaret Büyümesi",
      slug: "meta-ads-ai-advantage-plus-eticaret",
      excerpt: "Meta'nın Advantage+ yapay zeka kampanya araçlarıyla e-ticaret satışlarını nasıl ölçeklendirebileceğinizi gerçek vaka analizleriyle anlatıyoruz.",
      content: "<p>Meta Ads platformu, Advantage+ suite ile reklam optimizasyonunu tamamen AI'a devretmenize olanak tanıyor. Doğru kurulum ve sinyal stratejileriyle e-ticaret performansınızı dramatik şekilde artırabilirsiniz.</p>",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200",
      published: true,
      publishedAt: new Date("2026-02-05"),
    },
    {
      title: "Yapay Zeka Destekli Marka Kimliği Tasarımı: Otomasyondan Kreativiteye",
      slug: "yapay-zeka-marka-kimligi-tasarimi",
      excerpt: "AI araçlarının marka kimliği süreçlerini nasıl dönüştürdüğünü, renk psikolojisinden tipografi seçimine kadar veri destekli tasarım yaklaşımımızı paylaşıyoruz.",
      content: "<p>Marka kimliği tasarımı, artık sadece estetik tercihlerden ibaret değil. Yapay zeka araçları ile hedef kitle analizi, renk psikolojisi ve tipografi seçimi veri destekli hale geldi.</p>",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d31d5b35?w=1200",
      published: true,
      publishedAt: new Date("2026-01-28"),
    },
    {
      title: "LinkedIn Ads B2B Stratejisi: AI ile Doğru Karar Vericilere Ulaşmak",
      slug: "linkedin-ads-b2b-ai-strateji",
      excerpt: "B2B pazarlamada LinkedIn Ads'in AI hedefleme özelliklerini kullanarak doğru karar vericilere ulaşmanın ve lead kalitesini artırmanın yolları.",
      content: "<p>B2B pazarlamada doğru kişiye ulaşmak her şeydir. LinkedIn Ads'in yapay zeka destekli hedefleme özellikleri, şirket büyüklüğünden pozisyona kadar hassas filtreleme imkanı sunar.</p>",
      imageUrl: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200",
      published: true,
      publishedAt: new Date("2026-01-20"),
    },
    {
      title: "Core Web Vitals 2026: Site Hızı, SEO Sıralaması ve AI Optimizasyonu",
      slug: "core-web-vitals-2026-site-hizi-seo",
      excerpt: "Google'ın güncellenmiş Core Web Vitals metriklerini, INP skorunuzu iyileştirmeyi ve AI ile otomatik performans optimizasyonunu derinlemesine inceliyoruz.",
      content: "<p>2026'da Core Web Vitals metrikleri SEO sıralamalarında daha da belirleyici hale geldi. Interaction to Next Paint (INP) metriği artık FID'in yerini aldı ve kullanıcı etkileşim performansını ölçüyor.</p>",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      published: true,
      publishedAt: new Date("2026-01-15"),
    },
    {
      title: "Video İçerik Pazarlaması: AI ile Kısa Video Üretimi ve Dağıtım Stratejileri",
      slug: "video-icerik-pazarlamasi-ai-kisa-video",
      excerpt: "TikTok, Reels ve Shorts için AI destekli video içerik üretim süreçlerimizi, otomasyon araçlarımızı ve başarılı dağıtım stratejilerimizi paylaşıyoruz.",
      content: "<p>Kısa video formatı, dijital pazarlamanın en güçlü silahı haline geldi. AI araçları ile senaryo oluşturmadan montaja kadar tüm video üretim sürecinizi hızlandırabilirsiniz.</p>",
      imageUrl: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200",
      published: true,
      publishedAt: new Date("2026-01-08"),
    },
    {
      title: "Dijital Pazarlamada Veri Gizliliği ve AI: Cookie-less Dünyaya Hazırlık",
      slug: "dijital-pazarlama-veri-gizliligi-ai-cookieless",
      excerpt: "Üçüncü taraf cookie'lerin sonu yaklaşırken, AI destekli birinci taraf veri stratejileri ve gizlilik odaklı pazarlama yaklaşımımızı anlatıyoruz.",
      content: "<p>Üçüncü taraf cookie'lerin kaldırılması, dijital pazarlama ekosistemini temelden değiştiriyor. Birinci taraf veri stratejileri ve AI destekli modelleme ile bu geçişe hazırlanmanız kritik önem taşıyor.</p>",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200",
      published: true,
      publishedAt: new Date("2026-01-02"),
    },
  ];

  for (const post of blogPosts) {
    await prisma.post.create({ data: post });
  }

  console.log("✅ Blog: 10 yazı eklendi.");

  // ─── Admin Kullanıcı ───
  const existingAdmin = await prisma.user.findUnique({ where: { username: "admin" } });
  if (!existingAdmin) {
    const hashedPw = await bcrypt.hash("admin123", 12);
    await prisma.user.create({
      data: {
        username: "admin",
        password: hashedPw,
        name: "Yönetici",
        role: "admin",
      },
    });
    console.log("✅ Admin kullanıcı oluşturuldu: admin / admin123");
  } else {
    console.log("ℹ️  Admin kullanıcı zaten mevcut.");
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
