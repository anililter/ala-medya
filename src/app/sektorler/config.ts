export type SectorSlug = "saglik-turizmi" | "psikoloji" | "gayrimenkul" | "otomotiv" | "fitness";

export interface SectorStat {
  value: string;
  label: string;
}

export interface SectorConfig {
  slug: SectorSlug;
  title: string;
  navDescription: string;
  heroTitle: string;
  content: string;
  emphasis?: string;
  stats: SectorStat[];
  imagePlaceholder?: string; // Unsplash or path for "Life on Mac" style
}

export const SEKTORLER: SectorConfig[] = [
  {
    slug: "saglik-turizmi",
    title: "Sağlık Turizmi",
    navDescription: "Global Hasta Trafiği",
    heroTitle: "Sınırları Aşan Sağlık Stratejileri.",
    content:
      "8 yıllık sağlık turizmi refleksimizle, Lotus Diş Kliniği ve BHT Clinic gibi markalarımızda global hasta yolculuğunu yönetiyoruz. Gemini 3.1 Pro destekli pazar analiziyle, hedef ülkedeki en doğru hastayı, en düşük maliyetle (CPL) buluyoruz.",
    emphasis:
      "Google Premier Partner %3 ayrıcalığıyla, Healthcare politikalarına tam uyumlu, askıya alınmayan reklam hesapları.",
    stats: [
      { value: "20.000+", label: "Randevu" },
      { value: "8", label: "Yıllık Sektör Tecrübesi" },
      { value: "%3", label: "Premier Partner Ayrıcalığı" },
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
  },
  {
    slug: "psikoloji",
    title: "Psikoloji",
    navDescription: "Etik ve Güven Odaklı",
    heroTitle: "Etik ve Güven Odaklı Dijital Büyüme.",
    content:
      "Psikogenetik ve Longevity Merkezi gibi hassas alanlardaki tecrübemizle, psikologlar için danışan ve uzman arasındaki güven köprüsünü kuruyoruz. Claude 4.6 Sonnet destekli içeriklerle, 'reklam' değil 'çözüm' sunan bir duruş sergiliyoruz.",
    emphasis:
      "Danışan mahremiyeti ve veri güvenliği için Server-Side CAPI entegrasyonu.",
    stats: [
      { value: "Güven", label: "Öncelikli İçerik Stratejisi" },
      { value: "CAPI", label: "Server-Side Veri Güvenliği" },
      { value: "Etik", label: "Reklam Politikası Uyumu" },
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
  },
  {
    slug: "gayrimenkul",
    title: "Gayrimenkul",
    navDescription: "Yüksek Değer, Veri Odaklı",
    heroTitle: "Yüksek Değerli Gayrimenkulde Veri Mühendisliği.",
    content:
      "Gayrimenkulde amaç tıklama değil, randevudur. Milyonluk yatırımlar için doğru kitleyi; gelir düzeyi, yatırım alışkanlığı ve lokasyon bazlı AI modelleriyle hedefliyoruz. Satış hunisi (funnel) mimarimizle soğuk kitleyi sıcak yatırımcıya dönüştürüyoruz.",
    emphasis:
      "Yurt dışı yatırımcı trafiğinde %300 ROAS odaklı yönetim.",
    stats: [
      { value: "1.2 Milyar TL", label: "Reklam Yönetimi" },
      { value: "%300", label: "ROAS Hedefi (Yurt Dışı)" },
      { value: "Randevu", label: "Odaklı Funnel" },
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1560518883-ce09059e617c?w=1200&q=80",
  },
  {
    slug: "otomotiv",
    title: "Otomotiv",
    navDescription: "Marka Otoritesi ve Lokal Hakimiyet",
    heroTitle: "Sektörel Dominasyon ve Marka Otoritesi.",
    content:
      "Sonax Maslak gibi görsel odaklı markalarda, lokal aramada (Google Maps & Lokal Ads) mutlak hakimiyet sağlıyoruz. Marka hikayenizi video reklam stratejileriyle geniş kitlelere ulaştırıyoruz.",
    stats: [
      { value: "Lokal", label: "Arama Dominasyonu" },
      { value: "Video", label: "Marka Hikayesi Stratejisi" },
      { value: "Google Maps", label: "Görünürlük" },
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
  },
  {
    slug: "fitness",
    title: "Fitness",
    navDescription: "Topluluk ve Sadakat Yönetimi",
    heroTitle: "Topluluk İnşası ve Sadakat Yönetimi.",
    content:
      "Xoom Training Club projelerimizde, üyelik başı maliyeti minimize ederken marka sadakatini artıran içerik stratejileri uyguluyoruz. Sosyal medya etkileşimini satışa dönüştüren dinamik kampanya modelleri.",
    stats: [
      { value: "Sadakat", label: "Odaklı İçerik" },
      { value: "Üyelik", label: "Maliyet Optimizasyonu" },
      { value: "Etkileşim", label: "Satışa Dönüşüm" },
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
  },
];

export function getSectorBySlug(slug: string): SectorConfig | undefined {
  return SEKTORLER.find((s) => s.slug === slug);
}

export function getAllSectorSlugs(): SectorSlug[] {
  return SEKTORLER.map((s) => s.slug);
}
