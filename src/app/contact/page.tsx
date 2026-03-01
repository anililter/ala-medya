import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";
import { SEO } from "@/components/SEO";

export const metadata: Metadata = {
  title: "İletişim | Ala Medya — Birlikte Büyüyoruz",
  description:
    "Dijital yolculuğunuzun başlangıç noktası. Ücretsiz strateji analizi için iletişime geçin.",
};

const REVIEWS_FOR_SCHEMA = [
  {
    author: "Lotus Health",
    reviewBody:
      "Dijital reklam yatırımlarımızı Ala Medya ile yönettik. ROI'de belirgin artış gördük.",
    reviewRating: 5,
    datePublished: "2024-06-01",
  },
  {
    author: "Sonax Maslak",
    reviewBody:
      "Marka bilinirliği ve satış hedeflerimize ulaşmamızda kritik bir ortak oldular.",
    reviewRating: 5,
    datePublished: "2024-05-15",
  },
  {
    author: "Xoom Training Club",
    reviewBody:
      "Sosyal medya ve performans kampanyaları ile büyümemize katkı sağladılar.",
    reviewRating: 5,
    datePublished: "2024-07-01",
  },
];

export default function ContactPage() {
  return (
    <>
      <SEO skipOrganization reviews={REVIEWS_FOR_SCHEMA} />
      <ContactPageContent />
    </>
  );
}
