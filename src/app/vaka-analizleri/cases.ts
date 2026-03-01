export type CaseSlug = "lotus-dis" | "xoom" | "sonax" | "psikogenetik";

export interface CaseMetrics {
  roas: string;
  cpl: string;
  toplamDonusum: string;
}

export interface CaseDetail {
  slug: CaseSlug;
  title: string;
  subtitle: string;
  category: "saglik" | "fitness" | "otomotiv" | "psikoloji";
  image: string;
  metric: string;
  description: string;
  heroTitle: string;
  metrics: CaseMetrics;
  challenge: { title: string; content: string };
  solution: {
    fullFunnel: string;
    aiFirst: string;
    capi: string;
  };
  sectorEmphasis: string;
  sectorMessage: string;
  quote: { text: string; author: string; role: string };
  chartLabel: string;
}

export const CASES_DETAIL: CaseDetail[] = [
  {
    slug: "lotus-dis",
    title: "Lotus Diş Kliniği",
    subtitle: "Global Sağlık Turizmi",
    category: "saglik",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
    metric: "%300 Hasta Dönüşüm Artışı | Global CPL Optimizasyonu",
    description:
      "Uluslararası pazarda marka otoritesi inşası ve AI destekli lead (talep) yönetimi.",
    heroTitle: "Lotus Diş Kliniği: Global Pazarda Algoritmik Hakimiyet.",
    metrics: {
      roas: "%320",
      cpl: "-%45",
      toplamDonusum: "12.000+",
    },
    challenge: {
      title: "Meydan Okuma",
      content:
        "Sektördeki yüksek rekabet ve artan maliyetler karşısında markanın karşılaştığı engeller. Reklam bütçesinin verimsiz kullanımı ve düşük kaliteli lead (talep) sorunu. Uluslararası hasta adaylarına ulaşmak için doğru kanal ve mesaj stratejisi gerekiyordu.",
    },
    solution: {
      fullFunnel:
        "Farkındalıktan randevuya kadar her adımın yeniden kurgulanması. Hedef ülkelere özel landing sayfaları ve Gemini destekli pazar analizi ile doğru hasta profilinin tespiti.",
      aiFirst:
        "Gemini ve Claude modellerimizle, binlerce reklam varyasyonunun gerçek zamanlı analizi ve en karlı kitlenin tespiti. A/B testleri ile en yüksek dönüşüm veren kreatiflerin ölçeklendirilmesi.",
      capi:
        "iOS 14+ sonrası veri kaybını engelleyen Sunucu Taraflı İzleme (Server-Side) entegrasyonu. Form ve randevu aksiyonları CAPI ile doğrudan ölçümleniyor.",
    },
    sectorEmphasis: "Sağlık Turizmi Dinamikleri",
    sectorMessage:
      "Bu başarı bir tesadüf değil; Google'ın en başarılı %3'lük diliminde olmanın getirdiği bir standarttır.",
    quote: {
      text: "Ala Medya ile çalışmaya başladığımızda sadece reklam yönetimi beklemiyorduk; stratejik bir ortak bulduk. Veri şeffaflığı ve sonuç odaklılıkları, uluslararası hasta trafiğimizi dönüştürdü.",
      author: "Lotus Diş Kliniği",
      role: "Pazarlama Direktörü",
    },
    chartLabel: "Dönüşüm oranlarındaki %40'lık artışın matematiksel ispatı.",
  },
  {
    slug: "xoom",
    title: "Xoom Training Club",
    subtitle: "Fitness & Topluluk",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    metric: "Günlük 4.000 TL Bütçe ile Maksimum Üyelik Verimliliği",
    description:
      "Sosyal medya etkileşimini, Ramazan ve 14 Şubat gibi özel kampanya dönemlerinde üyelik satışına dönüştüren stratejik huni yönetimi.",
    heroTitle: "Xoom Training Club: Global Pazarda Algoritmik Hakimiyet.",
    metrics: {
      roas: "%280",
      cpl: "-%35",
      toplamDonusum: "8.500+",
    },
    challenge: {
      title: "Meydan Okuma",
      content:
        "Sektördeki yüksek rekabet ve artan maliyetler karşısında markanın karşılaştığı engeller. Reklam bütçesinin verimsiz kullanımı ve düşük kaliteli lead (talep) sorunu. Üyelik başı maliyetin düşürülmesi ve özel dönemlerde (Ramazan, 14 Şubat) kampanya verimliliğinin artırılması hedeflendi.",
    },
    solution: {
      fullFunnel:
        "Farkındalıktan randevuya kadar her adımın yeniden kurgulanması. Sosyal kanallardan web sitesine, oradan üyelik formuna kadar tüm huni optimize edildi.",
      aiFirst:
        "Gemini ve Claude modellerimizle, binlerce reklam varyasyonunun gerçek zamanlı analizi ve en karlı kitlenin tespiti. Özel günlere özel mesaj ve görsel setleri ile dönüşüm artırıldı.",
      capi:
        "iOS 14+ sonrası veri kaybını engelleyen Sunucu Taraflı İzleme (Server-Side) entegrasyonu. Üyelik ve form dönüşümleri CAPI ile tam görünürlük sağlanarak yönetildi.",
    },
    sectorEmphasis: "Topluluk ve Sadakat",
    sectorMessage:
      "Bu başarı bir tesadüf değil; Google'ın en başarılı %3'lük diliminde olmanın getirdiği bir standarttır.",
    quote: {
      text: "Ala Medya'nın veriye dayalı yaklaşımı ve kampanya yönetimindeki şeffaflığı, bütçemizi en verimli şekilde kullanmamızı sağladı. Ramazan ve 14 Şubat dönemlerinde gördüğümüz sonuçlar, gerçek bir strateji ortağının farkını gösterdi.",
      author: "Xoom Training Club",
      role: "Dijital Pazarlama Yöneticisi",
    },
    chartLabel: "Dönüşüm oranlarındaki %40'lık artışın matematiksel ispatı.",
  },
  {
    slug: "sonax",
    title: "Sonax Maslak",
    subtitle: "Otomotiv & Lokal SEO",
    category: "otomotiv",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
    metric: "Lokal Aramada %100 Görünürlük | Marka Otoritesi",
    description:
      "Video reklam stratejileri ve Google Haritalar optimizasyonu ile İstanbul'un en yoğun bölgesinde pazar liderliği.",
    heroTitle: "Sonax Maslak: Global Pazarda Algoritmik Hakimiyet.",
    metrics: {
      roas: "%250",
      cpl: "-%30",
      toplamDonusum: "5.200+",
    },
    challenge: {
      title: "Meydan Okuma",
      content:
        "Sektördeki yüksek rekabet ve artan maliyetler karşısında markanın karşılaştığı engeller. Reklam bütçesinin verimsiz kullanımı ve düşük kaliteli lead (talep) sorunu. İstanbul Maslak bölgesinde lokal aramada görünürlük ve marka otoritesinin güçlendirilmesi gerekiyordu.",
    },
    solution: {
      fullFunnel:
        "Farkındalıktan randevuya kadar her adımın yeniden kurgulanması. Video reklamlarla üst funnel, Google Haritalar ve Lokal Ads ile randevu odaklı alt funnel.",
      aiFirst:
        "Gemini ve Claude modellerimizle, binlerce reklam varyasyonunun gerçek zamanlı analizi ve en karlı kitlenin tespiti. Lokal niyet analizi ile doğru anahtar kelime ve konum hedeflemesi.",
      capi:
        "iOS 14+ sonrası veri kaybını engelleyen Sunucu Taraflı İzleme (Server-Side) entegrasyonu. Arama ve harita tıklamalarından randevuya kadar tüm yolculuk ölçümleniyor.",
    },
    sectorEmphasis: "Otomotiv & Lokal SEO",
    sectorMessage:
      "Bu başarı bir tesadüf değil; Google'ın en başarılı %3'lük diliminde olmanın getirdiği bir standarttır.",
    quote: {
      text: "Ala Medya ile lokal aramada %100 görünürlüğe ulaştık. Veri raporları ve strateji sunumlarındaki netlik, bizi sadece bir ajans değil, gerçek bir büyüme ortağı olarak görmemizi sağladı.",
      author: "Sonax Maslak",
      role: "Marka Müdürü",
    },
    chartLabel: "Dönüşüm oranlarındaki %40'lık artışın matematiksel ispatı.",
  },
  {
    slug: "psikogenetik",
    title: "Psikogenetik Merkezi",
    subtitle: "Psikoloji & Etik",
    category: "psikoloji",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    metric: "Güven Odaklı Randevu Artışı | Etik Dijital Varlık",
    description:
      "Hassas hedefleme ve Claude-3.5 destekli içerik pazarlamasıyla danışan güvenini kazanan dijital huni.",
    heroTitle: "Psikogenetik Merkezi: Global Pazarda Algoritmik Hakimiyet.",
    metrics: {
      roas: "%190",
      cpl: "-%50",
      toplamDonusum: "3.800+",
    },
    challenge: {
      title: "Meydan Okuma",
      content:
        "Sektördeki yüksek rekabet ve artan maliyetler karşısında markanın karşılaştığı engeller. Reklam bütçesinin verimsiz kullanımı ve düşük kaliteli lead (talep) sorunu. Psikoloji alanında etik sınırlar içinde, danışan güvenini koruyan bir dijital varlık inşa etmek gerekiyordu.",
    },
    solution: {
      fullFunnel:
        "Farkındalıktan randevuya kadar her adımın yeniden kurgulanması. Etik ve huzur veren mesajlarla üst funnel, güven odaklı form ve içerikle dönüşüm.",
      aiFirst:
        "Gemini ve Claude modellerimizle, binlerce reklam varyasyonunun gerçek zamanlı analizi ve en karlı kitlenin tespiti. Claude-3.5 destekli içeriklerle 'reklam' değil 'çözüm' sunan bir duruş.",
      capi:
        "iOS 14+ sonrası veri kaybını engelleyen Sunucu Taraflı İzleme (Server-Side) entegrasyonu. Danışan mahremiyeti korunarak randevu ve form dönüşümleri ölçümleniyor.",
    },
    sectorEmphasis: "Psikoloji & Etik Dijital Varlık",
    sectorMessage:
      "Bu başarı bir tesadüf değil; Google'ın en başarılı %3'lük diliminde olmanın getirdiği bir standarttır.",
    quote: {
      text: "Ala Medya, hassas bir alanda çalışırken bile veri şeffaflığını ve etik sınırları koruyor. Danışan odaklı stratejileri ve CAPI entegrasyonu ile güvenle büyüyoruz.",
      author: "Psikogenetik Merkezi",
      role: "Kurucu",
    },
    chartLabel: "Dönüşüm oranlarındaki %40'lık artışın matematiksel ispatı.",
  },
];

export function getCaseBySlug(slug: string): CaseDetail | undefined {
  return CASES_DETAIL.find((c) => c.slug === slug);
}

export function getAllCaseSlugs(): CaseSlug[] {
  return CASES_DETAIL.map((c) => c.slug);
}
