"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  imageUrl: string | null;
  publishedAt: Date | null;
};

const CATEGORIES = [
  "Tümü",
  "Strateji",
  "Yapay Zeka",
  "SEO",
  "Kreatif",
  "Vaka Analizleri",
] as const;

function readingTime(excerpt: string | null): string {
  if (!excerpt) return "3 dk";
  const words = excerpt.split(/\s+/).length;
  return `${Math.max(2, Math.ceil(words / 40))} dk okuma`;
}

function formatDate(date: Date | null): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const AI_BADGES = ["AI Optimized", "Gemini Analysis", "Claude Insight", "GPT-4 Review"];

function aiBadge(index: number) {
  return AI_BADGES[index % AI_BADGES.length];
}

function BlogCard({ post, index, featured = false }: { post: Post; index: number; featured?: boolean }) {
  const hasImage = !!post.imageUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`group relative block overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] ${
          featured ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/3]"
        }`}
      >
        {hasImage ? (
          <Image
            src={post.imageUrl!}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "100vw" : "(max-width:768px) 100vw, 50vw"}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--night)] via-[var(--night-light)] to-[var(--night)]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[10px] font-medium tracking-wide text-white/70 backdrop-blur-md">
          {aiBadge(index)}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <div className="rounded-xl bg-white/[0.06] p-4 backdrop-blur-md sm:p-5">
            <h3
              className={`font-semibold leading-snug tracking-tight text-white ${
                featured ? "text-xl sm:text-2xl lg:text-3xl" : "text-base sm:text-lg"
              }`}
            >
              {post.title}
            </h3>
            {post.excerpt && (
              <p className={`mt-2 text-white/50 ${featured ? "text-sm sm:text-base" : "line-clamp-2 text-sm"}`}>
                {post.excerpt}
              </p>
            )}
            <div className="mt-3 flex items-center gap-3 text-[11px] font-medium text-white/40">
              <span>{readingTime(post.excerpt)}</span>
              <span className="h-0.5 w-0.5 rounded-full bg-white/30" aria-hidden />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function BlogContent({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<string>("Tümü");

  const filtered = active === "Tümü" ? posts : posts;

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Pill filter */}
      <div className="mt-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              active === cat
                ? "bg-[var(--night)] text-white shadow-sm"
                : "bg-[var(--border)]/40 text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-[var(--muted)]">
          Henüz yayınlanmış yazı yok.
        </p>
      ) : (
        <div className="mt-14 space-y-6">
          {featured && <BlogCard post={featured} index={0} featured />}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {rest.map((p, i) => (
                <BlogCard key={p.id} post={p} index={i + 1} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Floating contact button */}
      <Link
        href="/#iletisim"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[var(--night)]/80 text-white shadow-xl backdrop-blur-xl transition-transform duration-200 hover:scale-110 sm:bottom-8 sm:right-8"
        aria-label="Hızlı iletişim"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      </Link>
    </>
  );
}
