import Link from "next/link";
import Image from "next/image";
import { StatsSection } from "@/components/StatsSection";
import { BentoGrid } from "@/components/BentoGrid";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TrustMarquee } from "@/components/TrustMarquee";
import { ProcessFlow } from "@/components/ProcessFlow";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { StrategyForm } from "@/components/StrategyForm";
import type { Post, Partner, Project } from "@prisma/client";
import { SAMPLE_BLOGS } from "@/data/sampleBlogs";

export const dynamic = "force-dynamic";

export default async function Home() {
  let recentPosts: Post[] = [];
  let partners: Partner[] = [];
  let allProjects: Project[] = [];

  try {
    const { prisma } = await import("@/lib/db");
    const [posts, partnersData, projects] = await Promise.all([
      prisma.post.findMany({
        where: { published: true, publishedAt: { not: null } },
        orderBy: { publishedAt: "desc" },
        take: 3,
      }),
      prisma.partner.findMany({
        where: { published: true },
        orderBy: { order: "asc" },
      }),
      prisma.project.findMany({
        where: { published: true },
        orderBy: { order: "asc" },
      }),
    ]);
    recentPosts = posts;
    partners = partnersData;
    allProjects = projects;
  } catch (e) {
    console.error("Home data fetch error:", e);
  }

  return (
    <div className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)]">
      <main className="flex w-full flex-col">
        {/* ─── Hero ─── */}
        <section className="hero-bg relative flex min-h-[82vh] w-full flex-col overflow-x-hidden overflow-y-visible px-0 pt-10 pb-24 sm:min-h-[85vh] sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-40">
          <div className="relative z-10 flex flex-1 w-full flex-col items-center justify-center min-h-0">
            <div className="flex w-full flex-col items-center justify-center text-center overflow-visible">
              <p className="hero-anim-1 w-full text-xl font-medium tracking-wide text-slate-400 sm:mb-6 sm:text-xl md:text-2xl dark:text-slate-500">
                Yapay Zeka Destekli
              </p>
              <div className="hero-anim-2 w-full min-w-0 overflow-visible" style={{ paddingBottom: "0.35em" }}>
                <h1
                  className="hero-title block w-full min-w-0 font-bold leading-[0.9] tracking-[-0.04em] text-center break-keep"
                  style={{
                    fontSize: "clamp(3.5rem, 14vw, 11rem)",
                    textAlign: "center",
                    wordBreak: "keep-all",
                  }}
                >
                  <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent dark:from-blue-500 dark:via-blue-400 dark:to-cyan-300">
                    <span className="block">360°</span>
                    <span className="block">Reklam Ajansı</span>
                  </span>
                </h1>
              </div>
              <div className="hero-anim-3 mt-6 flex w-full flex-wrap items-center justify-center gap-x-2.5 gap-y-2 sm:mt-10 sm:gap-x-4 md:mt-12 md:gap-x-5 md:text-xl">
                <span className="text-[15px] font-semibold uppercase tracking-wide text-[var(--foreground)] sm:text-lg md:text-xl">Dijital Reklam</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                <span className="text-[15px] font-semibold uppercase tracking-wide text-[var(--foreground)] sm:text-lg md:text-xl">SEO</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                <span className="text-[15px] font-semibold uppercase tracking-wide text-[var(--foreground)] sm:text-lg md:text-xl">Sosyal Medya</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                <span className="text-[15px] font-semibold uppercase tracking-wide text-[var(--foreground)] sm:text-lg md:text-xl">Tasarım</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                <span className="text-[15px] font-semibold uppercase tracking-wide text-[var(--foreground)] sm:text-lg md:text-xl">Yazılım</span>
              </div>
              <div className="hero-anim-4 mt-12 flex w-full flex-col gap-3 sm:mt-16 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 md:mt-20 md:gap-6">
                <Link
                  href="/referanslar"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-blue-400 bg-white px-8 py-4 text-base font-medium text-blue-600 transition hover:scale-[1.02] hover:bg-blue-50 dark:border-blue-400/80 dark:bg-[var(--card)] dark:text-blue-400 dark:hover:bg-blue-500/10 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
                >
                  Referanslar
                </Link>
                <Link
                  href="#iletisim"
                  className="btn-shimmer inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.03] hover:bg-blue-700 hover:shadow-blue-600/40 dark:bg-blue-500 dark:shadow-blue-500/25 dark:hover:bg-blue-600 dark:hover:shadow-blue-500/35 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
                >
                  Sizi Arayalım
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hero dışındaki tüm içerik – tam genişlik, sıfır kenar boşluğu */}
        <div className="w-full overflow-x-hidden px-0">
        {/* ─── Resmi Partnerlikler ─── */}
        {partners.length > 0 && (
        <AnimatedSection>
          <section className="w-full bg-white py-16 sm:py-20">
            <div className="flex w-full flex-col items-center gap-10 px-4 sm:flex-row sm:items-center sm:gap-12">
              {/* Sol: Yazılar */}
              <div className="shrink-0 text-center sm:w-[260px] sm:text-left">
                <h2 className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl">
                  Resmi Partnerliklerimiz
                </h2>
                <p className="mt-3 text-base text-slate-400 dark:text-slate-500">
                  Yapay Zeka Gücüyle, Sektörün En İyileriyle
                </p>
              </div>

              {/* Sağ: Sonsuz kayan logolar */}
              <div className="relative min-w-0 flex-1 overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

                <div className="marquee-track">
                  {[0, 1].map((copy) => (
                    <div key={copy} className="flex shrink-0 items-center gap-12 px-6 sm:gap-14 sm:px-7">
                      {partners.map((p) => (
                        <div key={`${p.id}-${copy}`} className="relative h-10 w-24 shrink-0">
                          <Image
                            src={p.imageUrl}
                            alt={p.name}
                            fill
                            className="object-contain"
                            sizes="96px"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        )}

        {/* ─── Veri ve AI Başarı İstatistikleri ─── */}
        <StatsSection />

        {/* ─── 360° AI Uzmanlık (Bento Grid) ─── */}
        <BentoGrid />

        {/* ─── Markalar (Infinite Trust) ─── */}
        <TrustMarquee projects={allProjects} />

        {/* ─── Metodoloji (Animated Process Flow) ─── */}
        <ProcessFlow />

        {/* ─── Blog (Magazine) ─── */}
        <AnimatedSection>
          <section className="w-full bg-[#f9f9f9] py-16 sm:py-20">
            <div className="w-full px-4">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  Blog
                </h2>
                <p className="mt-4 w-full text-xl leading-relaxed text-[var(--muted)]">
                  Güncel içerikler ve sektör analizleri
                </p>
              </div>

              {recentPosts.length > 0 ? (
                <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {recentPosts.map((post, i) => (
                    <AnimatedSection key={post.id} delay={i * 0.08}>
                      <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-shadow duration-300 hover:shadow-lg">
                          {post.imageUrl && (
                            <div className="relative aspect-video overflow-hidden">
                              <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width:768px) 100vw, 33vw"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <div className="flex items-center gap-3 text-sm font-medium text-blue-600">
                              {post.publishedAt && (
                                <time dateTime={post.publishedAt.toISOString()}>
                                  {new Date(post.publishedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "numeric" })}
                                </time>
                              )}
                              <span className="text-blue-600">Blog</span>
                            </div>
                            <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-[var(--foreground)] sm:text-2xl">
                              {post.title}
                            </h3>
                            {post.excerpt && (
                              <p className="mt-2 line-clamp-2 text-xl leading-relaxed text-[var(--muted)]">{post.excerpt}</p>
                            )}
                          </div>
                        </div>
                      </Link>
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
                  {SAMPLE_BLOGS.slice(0, 4).map((p) => (
                    <Link key={p.id} href={`/blog/${p.slug}`} className="group block">
                      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-shadow duration-300 hover:shadow-lg">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={p.imageUrl}
                            alt={p.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--gold)]">
                            Örnek Blog
                          </p>
                          <h3 className="mt-2 line-clamp-2 text-base font-semibold leading-snug tracking-tight text-[var(--foreground)]">
                            {p.title}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
                            {p.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              <div className="mt-12 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-8 py-4 text-lg font-medium text-[var(--muted)] transition hover:border-blue-500 hover:text-blue-600"
                >
                  Tüm Yazıları Gör <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ─── SSS ─── */}
        <FaqSection />

        </div>

        {/* ─── Final CTA (The Grand Finale) ─── */}
        <FinalCta />

        <StrategyForm />
      </main>
    </div>
  );
}
