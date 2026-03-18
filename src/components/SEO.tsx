/**
 * JSON-LD Structured Data (Schema.org) for Rich Snippets / SEO.
 * Renders script(s) in application/ld+json format.
 * Use in layout for Organization; in pages for Service and/or Review.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://alamedya.com";

export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  telephone?: string;
  email?: string;
  description?: string;
  sameAs?: string[];
}

export interface ServiceSchema {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  /** Örn: "Google Premier Partner", "Sertifikalı Uzmanlık" */
  expertiseLevel?: string;
}

export interface ReviewSchema {
  author: string;
  reviewBody: string;
  reviewRating: number; // 1-5
  datePublished?: string; // ISO 8601
}

const DEFAULT_ORGANIZATION: OrganizationSchema = {
  name: "Ala Medya",
  url: SITE_URL,
  logo: `${SITE_URL}/ala-medya-logo.png`,
  telephone: "+90 531 944 38 85",
  email: "info@alamedya.com",
  description:
    "Yapay zeka destekli 360° dijital pazarlama ajansı. Google Premier Partner vizyonu, 8 yıllık sektörel tecrübe. Dijital reklam, SEO, sosyal medya, web tasarım ve dönüşüm optimizasyonu (CRO) alanlarında veri odaklı strateji ve uygulama.",
  sameAs: [
    "https://www.instagram.com/alamedya/",
    "https://wa.me/905319443885",
  ],
};

function buildOrganizationSchema(org: OrganizationSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    url: org.url,
    logo: org.logo,
    description: org.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: org.telephone,
      email: org.email,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: "Turkish",
    },
    ...(org.sameAs && org.sameAs.length > 0 ? { sameAs: org.sameAs } : {}),
  };
}

function buildServiceSchema(service: ServiceSchema, orgName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: orgName,
    },
    ...(service.areaServed ? { areaServed: service.areaServed } : {}),
    ...(service.expertiseLevel
      ? { comment: service.expertiseLevel }
      : {}),
  };
}

function buildReviewSchema(reviews: ReviewSchema[], itemName: string) {
  if (!reviews.length) return null;
  const reviewList = reviews.map((r) => ({
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: r.author },
    reviewBody: r.reviewBody,
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: r.reviewRating,
      bestRating: 5,
      worstRating: 1,
    },
    ...(r.datePublished ? { datePublished: r.datePublished } : {}),
  }));
  const avg =
    reviews.reduce((s, r) => s + r.reviewRating, 0) / reviews.length;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: itemName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avg.toFixed(1),
      bestRating: 5,
      worstRating: 1,
      ratingCount: reviews.length,
      reviewCount: reviews.length,
    },
    review: reviewList,
  };
}

interface SEOProps {
  /** Kurumsal kimlik; verilmezse varsayılan Ala Medya şeması kullanılır. Sayfa layout'tan Organization alıyorsa skipOrganization kullanın. */
  organization?: OrganizationSchema | null;
  /** true ise Organization şeması eklenmez (layout'ta zaten varsa kullanın) */
  skipOrganization?: boolean;
  /** Hizmet sayfaları için (Google Ads, SEO, Web Tasarım vb.) */
  service?: ServiceSchema | null;
  /** Müşteri yorumları / referanslar için (Rich Snippets yıldız) */
  reviews?: ReviewSchema[] | null;
  /** Review şemasında kullanılacak isim (örn. "Ala Medya" veya marka adı) */
  reviewItemName?: string;
}

export function SEO({
  organization = DEFAULT_ORGANIZATION,
  skipOrganization = false,
  service = null,
  reviews = null,
  reviewItemName = "Ala Medya",
}: SEOProps) {
  const scripts: object[] = [];

  if (!skipOrganization && organization) {
    scripts.push(buildOrganizationSchema(organization));
  }
  if (service) {
    scripts.push(
      buildServiceSchema(service, organization?.name ?? "Ala Medya")
    );
  }
  if (reviews && reviews.length > 0) {
    const reviewSchema = buildReviewSchema(reviews, reviewItemName);
    if (reviewSchema) scripts.push(reviewSchema);
  }

  if (scripts.length === 0) return null;

  return (
    <>
      {scripts.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
