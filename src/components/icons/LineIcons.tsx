"use client";

import { useId } from "react";

const gradientDef = (id: string) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#2563eb" />
      <stop offset="100%" stopColor="#22d3ee" />
    </linearGradient>
  </defs>
);

const strokeProps = { strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

export function ServiceLineIcon({
  type,
  className = "h-14 w-14",
  gradientId,
}: {
  type: "ads" | "seo" | "social" | "content" | "web" | "conversion";
  className?: string;
  gradientId: string;
}) {
  const stroke = `url(#${gradientId})`;
  const vb = "0 0 64 64";

  const icons: Record<typeof type, JSX.Element> = {
    ads: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <rect x="6" y="14" width="52" height="28" rx="2" />
          <circle cx="32" cy="28" r="8" />
          <circle cx="32" cy="28" r="4" />
          <circle cx="32" cy="28" r="1.5" />
          <path d="M50 10l-4 6 2 2 4-6-2-2z" strokeWidth="1" />
          <path d="M14 10h6l2 4-2 4h-6l-2-4 2-4z" strokeWidth="1" />
          <path d="M18 8l2 2-1 4" strokeWidth="0.8" />
          <path d="M46 8l-1 4 2 2" strokeWidth="0.8" />
          <path d="M24 42l2-6 2 4 2-6" strokeWidth="1" />
        </g>
      </svg>
    ),
    seo: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <circle cx="26" cy="26" r="12" />
          <path d="M36 36l10 10" strokeWidth="1.5" />
          <path d="M38 22l6-6 6 6-6 6-6-6z" />
          <path d="M44 10l2 2-2 2-2-2 2-2z" strokeWidth="1" />
          <path d="M16 48v-6h4v6M22 42v6M28 44v4M34 40v8" strokeWidth="1" />
          <path d="M14 38l4-8 4 4 4-6" strokeWidth="1" />
        </g>
      </svg>
    ),
    social: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <path d="M18 20c0-6 4-10 10-10s10 4 10 10c0 6-4 10-10 10" />
          <path d="M28 20c0-4 2-6 6-6s6 2 6 6c0 4-2 6-6 6" />
          <rect x="36" y="16" width="10" height="8" rx="2" strokeWidth="1" />
          <circle cx="41" cy="20" r="2" strokeWidth="0.8" />
          <path d="M20 32c2 2 6 4 12 4s10-2 12-4" strokeWidth="1" />
          <path d="M16 44c0-4 4-8 12-8" strokeWidth="1" />
          <path d="M28 44c0-4 4-8 12-8" strokeWidth="1" />
          <path d="M10 28q4-2 8-2" strokeWidth="0.8" />
          <path d="M54 28q-4-2-8-2" strokeWidth="0.8" />
        </g>
      </svg>
    ),
    content: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <path d="M12 14h22l10 10v24H12V14z" />
          <path d="M34 14v10h10" />
          <path d="M18 30h20" strokeWidth="1.2" />
          <path d="M18 36h16" strokeWidth="1.2" />
          <path d="M48 26l6 4v8l-6 4-6-4v-8l6-4z" strokeWidth="1" />
          <path d="M51 30l-3 2v4l3 2 3-2v-4l-3-2z" strokeWidth="0.8" />
          <path d="M20 8l4 6-2 2-4-6 2-2z" strokeWidth="1" />
        </g>
      </svg>
    ),
    web: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <rect x="4" y="8" width="56" height="40" rx="3" />
          <path d="M4 20h56" />
          <circle cx="12" cy="14" r="1.5" />
          <circle cx="18" cy="14" r="1.5" />
          <circle cx="24" cy="14" r="1.5" />
          <path d="M38 12l2-2 2 2-2 2-2-2z" strokeWidth="1" />
          <path d="M44 10l2 2-2 2" strokeWidth="1" />
          <rect x="8" y="24" width="20" height="14" rx="1" strokeWidth="1" />
          <rect x="32" y="24" width="20" height="14" rx="1" strokeWidth="1" />
          <circle cx="34" cy="12" r="3" strokeWidth="1" />
          <path d="M32 38v6M24 44h32" />
        </g>
      </svg>
    ),
    conversion: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <path d="M12 12h40l-6 14h-8l-6 14H12l6-14h8l6-14z" />
          <path d="M28 26l4 4-4 4" strokeWidth="1" />
          <path d="M20 48l2-4 4 2-2 4-4-2z" strokeWidth="1" />
          <path d="M38 48l-2-4 2-2 2 4-2 2z" strokeWidth="1" />
          <path d="M8 36h8v-4" strokeWidth="1" />
          <path d="M48 36h-8v-4" strokeWidth="1" />
          <path d="M18 22l4-6 4 4 4-6" strokeWidth="1" />
          <path d="M32 44h4v4h-4z" strokeWidth="1" />
        </g>
      </svg>
    ),
  };

  return icons[type];
}

export function MethodologyStepIcon({
  stepIndex,
  className = "h-16 w-16",
  gradientId,
}: {
  stepIndex: 0 | 1 | 2 | 3;
  className?: string;
  gradientId: string;
}) {
  const stroke = `url(#${gradientId})`;
  const vb = "0 0 64 64";

  const icons: [JSX.Element, JSX.Element, JSX.Element, JSX.Element] = [
    (
      <svg key="0" viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <circle cx="32" cy="32" r="14" strokeWidth="1.2" />
          <circle cx="32" cy="28" r="4" />
          <circle cx="28" cy="34" r="3" />
          <circle cx="36" cy="34" r="3" />
          <circle cx="32" cy="38" r="3" />
          <path d="M28 28l-2 2 2 2 2-2-2-2z" strokeWidth="1" />
          <path d="M46 46l8 8" strokeWidth="1.5" />
          <path d="M50 42l4-4 4 4-4 4-4-4z" strokeWidth="1" />
        </g>
      </svg>
    ),
    (
      <svg key="1" viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <circle cx="32" cy="18" r="12" />
          <path d="M32 30v20M32 30l-10 10M32 30l10 10" strokeWidth="1.2" />
          <path d="M8 32h8l6-6 6 6 6-6 6 6h8" strokeWidth="1" />
          <path d="M14 44l6-6 6 6 6-6" strokeWidth="1" />
          <path d="M48 24l2 2-2 2-2-2 2-2z" strokeWidth="1" />
        </g>
      </svg>
    ),
    (
      <svg key="2" viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <circle cx="24" cy="28" r="10" />
          <circle cx="40" cy="28" r="10" />
          <path d="M30 28h8" strokeWidth="1.2" />
          <path d="M16 46l8-12 6 8 8-14 6 10" strokeWidth="1" />
          <path d="M12 22l6 6-6 6" strokeWidth="1" />
          <path d="M52 22l-6 6 6 6" strokeWidth="1" />
        </g>
      </svg>
    ),
    (
      <svg key="3" viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <path d="M10 12h28l8 8v30H10V12z" />
          <path d="M38 12v8h8" />
          <path d="M16 26h12v12H16z" />
          <path d="M32 26h8v6H32z" />
          <path d="M32 36h8v6H32z" />
          <path d="M18 32h8" strokeWidth="0.8" />
          <path d="M34 30h4" strokeWidth="0.8" />
          <path d="M34 40h4" strokeWidth="0.8" />
          <path d="M44 26v20" strokeWidth="1" />
          <path d="M40 30h8v4h-8z" strokeWidth="0.8" />
        </g>
      </svg>
    ),
  ];

  return icons[stepIndex];
}

export function FaqCategoryIcon({
  category,
  className = "h-6 w-6",
  gradientId,
}: {
  category: "time" | "sectors" | "tools" | "budget" | "reports";
  className?: string;
  gradientId: string;
}) {
  const stroke = `url(#${gradientId})`;
  const vb = "0 0 32 32";

  const icons: Record<typeof category, JSX.Element> = {
    time: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <circle cx="16" cy="16" r="12" strokeWidth="1.2" />
          <path d="M16 10v6l4 4" strokeWidth="1.2" />
        </g>
      </svg>
    ),
    sectors: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <path d="M16 6v6h-6v4h6v6h4v-6h6v-4h-6V6h-4z" strokeWidth="1.2" />
          <path d="M10 24l2 4 2-2 2 4" strokeWidth="1" />
          <path d="M8 28h2v2H8z" strokeWidth="1" />
          <circle cx="22" cy="28" r="3" strokeWidth="1" />
          <path d="M26 26l4-2v2l-4 2" strokeWidth="1" />
        </g>
      </svg>
    ),
    tools: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <path d="M8 14l6-6 4 4 6-6" strokeWidth="1.2" />
          <path d="M12 18l-4 4 4 4 4-4" strokeWidth="1" />
          <rect x="18" y="18" width="6" height="6" rx="1" strokeWidth="1" />
          <path d="M4 24h4" strokeWidth="1" />
        </g>
      </svg>
    ),
    budget: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <circle cx="16" cy="20" r="6" strokeWidth="1.2" />
          <path d="M16 14v2" strokeWidth="1" />
          <path d="M12 18h8" strokeWidth="1" />
          <path d="M10 10l2 2-2 2" strokeWidth="1" />
          <path d="M22 10l-2 2 2 2" strokeWidth="1" />
        </g>
      </svg>
    ),
    reports: (
      <svg viewBox={vb} className={className} aria-hidden>
        {gradientDef(gradientId)}
        <g stroke={stroke} {...strokeProps}>
          <path d="M6 8h14l6 6v14H6V8z" />
          <path d="M20 8v6h6" />
          <path d="M10 18h10" strokeWidth="1" />
          <path d="M10 22h8" strokeWidth="1" />
          <path d="M10 26h6" strokeWidth="1" />
        </g>
      </svg>
    ),
  };

  return icons[category];
}

export function ServiceLineIconWithId({ type, className }: { type: "ads" | "seo" | "social" | "content" | "web" | "conversion"; className?: string }) {
  const id = useId().replace(/:/g, "");
  return <ServiceLineIcon type={type} className={className} gradientId={`svc-${id}`} />;
}

export function MethodologyStepIconWithId({
  stepIndex,
  className,
}: {
  stepIndex: 0 | 1 | 2 | 3;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  return <MethodologyStepIcon stepIndex={stepIndex} className={className} gradientId={`step-${id}`} />;
}

export function FaqCategoryIconWithId({
  category,
  className,
}: {
  category: "time" | "sectors" | "tools" | "budget" | "reports";
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  return <FaqCategoryIcon category={category} className={className} gradientId={`faq-${id}`} />;
}
