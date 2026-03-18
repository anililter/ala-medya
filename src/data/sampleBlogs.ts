export type SampleBlog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: Date;
  contentHtml: string;
};

function u(src: string) {
  // Unsplash hotlink (allowed in next.config.ts)
  return `https://images.unsplash.com/${src}?auto=format&fit=crop&w=1600&q=80`;
}

export const SAMPLE_BLOGS: SampleBlog[] = [
  {
    id: "sb-1",
    slug: "google-ads-performans-kiralari",
    title: "Google Ads’te Performans Kırları: Hızlı Kazanç Değil, Sağlam Sistem",
    excerpt:
      "Bütçeyi yakmadan ölçeklemek için arama niyeti, açılış sayfası ve teklif stratejisi üçlüsünü nasıl kurarız?",
    imageUrl: u("photo-1551288049-bebda4e38f71"),
    publishedAt: new Date("2026-02-20T09:00:00.000Z"),
    contentHtml: `
      <h2>Özet</h2>
      <p>Google Ads’te sürdürülebilir büyüme, “daha çok harca” değil; doğru niyete, doğru sayfaya, doğru teklife dayanır.</p>
      <h2>3 Temel Kural</h2>
      <ul>
        <li><strong>Niyet eşleşmesi</strong>: Arama terimleri → reklam metni → landing bütünlüğü</li>
        <li><strong>Ölçüm</strong>: Dönüşüm tanımları ve kalite sinyalleri net olmalı</li>
        <li><strong>Iterasyon</strong>: Haftalık test/öğrenme, aylık yapı optimizasyonu</li>
      </ul>
      <p>Bu çerçeveyle bütçe artışı “risk” değil, “ölçek” olur.</p>
    `,
  },
  {
    id: "sb-2",
    slug: "instagram-reels-kreatif-formulu",
    title: "Instagram Reels’te Kreatif Formülü: İlk 1.5 Saniye",
    excerpt:
      "Reels reklamlarında hook, tempo ve mesaj sıralaması nasıl kurulmalı? Klinik/etik hassas sektörlerde güveni nasıl koruruz?",
    imageUrl: u("photo-1522202176988-66273c2fd55f"),
    publishedAt: new Date("2026-02-18T10:30:00.000Z"),
    contentHtml: `
      <h2>Hook → Kanıt → Teklif</h2>
      <p>Reels’te izleyici, kararını çok erken verir. İlk 1.5 saniyede mesajı “tane tane” değil, “tek cümle” verin.</p>
      <h2>Kontrol Listesi</h2>
      <ul>
        <li>İlk karede problem tanımı</li>
        <li>2–4. saniyede kanıt (sayı, süreç, garanti)</li>
        <li>Son 3 saniyede net CTA</li>
      </ul>
    `,
  },
  {
    id: "sb-3",
    slug: "seo-core-web-vitals-2026",
    title: "SEO’da 2026: Core Web Vitals Hâlâ Kral",
    excerpt:
      "Teknik SEO’da kazanmak için CWV + içerik semantiği + internal linking üçgenini nasıl birleştiriyoruz?",
    imageUrl: u("photo-1498050108023-c5249f4df085"),
    publishedAt: new Date("2026-02-12T12:00:00.000Z"),
    contentHtml: `
      <h2>Hız = Güven</h2>
      <p>Sayfa deneyimi, yalnızca skor değil; kullanıcı davranışı ve dönüşümle birlikte düşünülmeli.</p>
      <h2>En hızlı 3 kazanç</h2>
      <ol>
        <li>Görsel optimizasyon + doğru boyutlandırma</li>
        <li>Script yükünü azaltma</li>
        <li>Font stratejisi ve CLS kontrolü</li>
      </ol>
    `,
  },
  {
    id: "sb-4",
    slug: "linkedin-b2b-lead-oyunu",
    title: "LinkedIn B2B Lead Oyunu: Unvan Değil, Senaryo",
    excerpt:
      "B2B’de hedefleme tek başına yetmez. Teklif, içerik ve lead form akışını bir “senaryo” gibi yazmak gerekir.",
    imageUrl: u("photo-1557804506-669a67965ba0"),
    publishedAt: new Date("2026-02-05T08:00:00.000Z"),
    contentHtml: `
      <h2>Senaryo yaklaşımı</h2>
      <p>İyi kampanya, kullanıcıyı bir adım ileri taşır: “Bilgi” → “Kanıt” → “Görüşme”.</p>
      <p>Lead form soruları minimum, değer önerisi maksimum olmalı.</p>
    `,
  },
  {
    id: "sb-5",
    slug: "tiktok-testten-olcege",
    title: "TikTok’ta Testten Ölçeğe: 7 Günlük Kreatif Sprint",
    excerpt:
      "Kreatif üretimini kampanya yönetiminin içine alırsanız, CPM düşer; öğrenme hızınız artar.",
    imageUrl: u("photo-1515879218367-8466d910aaa4"),
    publishedAt: new Date("2026-01-29T11:00:00.000Z"),
    contentHtml: `
      <h2>7 Günlük Sprint</h2>
      <ul>
        <li>Gün 1–2: Hook varyasyonları</li>
        <li>Gün 3–4: Proof varyasyonları</li>
        <li>Gün 5–7: Kazananı ölçekleme</li>
      </ul>
    `,
  },
  {
    id: "sb-6",
    slug: "landing-page-cro-ilkeleri",
    title: "Landing Page CRO: Daha Çok Trafik Değil, Daha Az Sürtünme",
    excerpt:
      "Form alanları, CTA dili ve güven öğeleriyle dönüşüm oranını artırmanın pratik yolları.",
    imageUrl: u("photo-1556155092-490a1ba16284"),
    publishedAt: new Date("2026-01-20T14:00:00.000Z"),
    contentHtml: `
      <h2>Sürtünme noktaları</h2>
      <p>Her ekstra alan, her belirsiz vaat, her kararsız görsel kullanıcıyı kaybettirir.</p>
      <h2>Hızlı düzeltmeler</h2>
      <ul>
        <li>Tek ana CTA</li>
        <li>3 kanıt öğesi (yorum, sayı, süreç)</li>
        <li>Mobilde tek sütun düzen</li>
      </ul>
    `,
  },
  {
    id: "sb-7",
    slug: "raporlama-kpi-ve-aksiyon",
    title: "Raporlama: KPI Takibi Yetmez, Aksiyon Planı Şart",
    excerpt:
      "Haftalık rapor formatı nasıl olmalı? Yönetim özeti, aksiyon listesi ve deney havuzu nasıl kurgulanır?",
    imageUrl: u("photo-1556761175-b413da4baf72"),
    publishedAt: new Date("2026-01-10T09:30:00.000Z"),
    contentHtml: `
      <h2>Raporun 3 katmanı</h2>
      <ol>
        <li>Yönetim özeti (1 sayfa)</li>
        <li>Kanal kırılımı (metrik + yorum)</li>
        <li>Aksiyon planı (kim/ne zaman)</li>
      </ol>
    `,
  },
  {
    id: "sb-8",
    slug: "sosyal-medya-icerik-mimarisi",
    title: "Sosyal Medyada İçerik Mimarisi: 3 Sütun Modeli",
    excerpt:
      "Marka dili bozulmadan büyümek için içerikleri sütunlara ayırın: eğitim, kanıt, kültür.",
    imageUrl: u("photo-1521737604893-d14cc237f11d"),
    publishedAt: new Date("2025-12-28T15:00:00.000Z"),
    contentHtml: `
      <h2>3 Sütun</h2>
      <ul>
        <li>Eğitim: uzmanlık</li>
        <li>Kanıt: vaka/sonuç</li>
        <li>Kültür: ekip ve değerler</li>
      </ul>
    `,
  },
  {
    id: "sb-9",
    slug: "kreatif-psikolojisi-ikna",
    title: "Kreatif Psikolojisi: İkna, Tasarımın İçindedir",
    excerpt:
      "Renk, hiyerarşi ve mikro-kopya birleşince reklam metni tek başına yapamayacağı işi yapar.",
    imageUrl: u("photo-1526481280695-3c687fd5432c"),
    publishedAt: new Date("2025-12-12T10:00:00.000Z"),
    contentHtml: `
      <h2>Hiyerarşi</h2>
      <p>Göz nereye bakıyor? Mesaj sırası ne? İkna, tasarımın akışında saklıdır.</p>
    `,
  },
  {
    id: "sb-10",
    slug: "google-haritalar-lokal-gorunurluk",
    title: "Google Haritalar: Lokal Görünürlük İçin 5 Hızlı Adım",
    excerpt:
      "Google Business Profile, yorum yönetimi ve kategori optimizasyonu ile lokal trafiği artırın.",
    imageUrl: u("photo-1502920514313-52581002a659"),
    publishedAt: new Date("2025-11-28T08:15:00.000Z"),
    contentHtml: `
      <h2>5 adım</h2>
      <ol>
        <li>Doğru kategori</li>
        <li>Güncel fotoğraflar</li>
        <li>Yorum stratejisi</li>
        <li>Hizmet alanları</li>
        <li>UTM ile ölçüm</li>
      </ol>
    `,
  },
];

