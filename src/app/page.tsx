import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { StatsSection } from "@/components/StatsSection";
import { BentoGrid } from "@/components/BentoGrid";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FaqSection } from "@/components/FaqSection";
import { MegaMenu } from "@/components/MegaMenu";

export const dynamic = "force-dynamic";

export default async function Home() {
  let recentPosts: Awaited<ReturnType<typeof prisma.post.findMany>> = [];
  let partners: Awaited<ReturnType<typeof prisma.partner.findMany>> = [];
  let allProjects: Awaited<ReturnType<typeof prisma.project.findMany>> = [];

  try {
    [recentPosts, partners, allProjects] = await Promise.all([
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
  } catch (e) {
    console.error("Home data fetch error:", e);
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[var(--background)]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-[90%] max-w-[1600px] items-center justify-between py-4">
          <Link href="/">
            <Image src="/ala-medya-logo.png" alt="Ala Medya" width={180} height={48} className="h-10 w-auto sm:h-12" priority />
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-4 text-sm sm:gap-6">
            <Link href="/" className="text-[var(--muted)] transition hover:text-[var(--foreground)]">
              Anasayfa
            </Link>
            <MegaMenu />
            <Link href="/referanslar" className="text-[var(--muted)] transition hover:text-[var(--foreground)]">
              Referanslar
            </Link>
            <Link href="/blog" className="text-[var(--muted)] transition hover:text-[var(--foreground)]">
              Blog
            </Link>
            <Link
              href="#iletisim"
              className="btn-shimmer rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Sizi Arayalım
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex flex-col">
        {/* ─── Hero ─── */}
        <section className="hero-bg relative flex h-[calc(100dvh-4.5rem)] w-full flex-col overflow-hidden px-4 sm:h-[calc(100dvh-5rem)] sm:px-6 lg:px-8">
          <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center text-center">
            <div className="mx-auto w-[90%] max-w-[1600px]">
              <p className="hero-anim-1 mb-5 text-base font-medium tracking-wide text-[var(--muted)] sm:mb-6 sm:text-lg">
                Yapay Zeka Destekli
              </p>
              <h1 className="hero-anim-2 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] lg:leading-[1.1]">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent dark:from-blue-500 dark:via-blue-400 dark:to-cyan-300">
                  360° Reklam Ajansı
                </span>
              </h1>
              <div className="hero-anim-3 mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:mt-8 sm:gap-x-4">
                <span className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground)] sm:text-base md:text-lg">Dijital Reklam</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground)] sm:text-base md:text-lg">SEO</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground)] sm:text-base md:text-lg">Sosyal Medya</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground)] sm:text-base md:text-lg">Tasarım</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground)] sm:text-base md:text-lg">Yazılım</span>
              </div>
              <div className="hero-anim-4 mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-5">
                <Link
                  href="/referanslar"
                  className="inline-flex items-center rounded-full border-2 border-blue-400 bg-white px-8 py-4 text-base font-medium text-blue-600 transition hover:scale-[1.02] hover:bg-blue-50 dark:border-blue-400/80 dark:bg-[var(--card)] dark:text-blue-400 dark:hover:bg-blue-500/10"
                >
                  Referanslar
                </Link>
                <Link
                  href="#iletisim"
                  className="btn-shimmer inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.03] hover:bg-blue-700 hover:shadow-blue-600/40 dark:bg-blue-500 dark:shadow-blue-500/25 dark:hover:bg-blue-600 dark:hover:shadow-blue-500/35"
                >
                  Sizi Arayalım
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Resmi Partnerlikler ─── */}
        {partners.length > 0 && (
        <AnimatedSection>
          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-12">
              {/* Sol: Yazılar */}
              <div className="shrink-0 text-center sm:w-[260px] sm:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Resmi Partnerliklerimiz
                </h2>
                <p className="mt-3 text-base text-[var(--muted)]">
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

        {/* ─── Markalarımız ─── */}
        <AnimatedSection>
          <section className="bg-[#f9f9f9] py-20 sm:py-28">
            <div className="mx-auto w-[90%] max-w-[1100px]">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-[2.75rem]">
                  Gururlandıran markalarımız
                </h2>
              </div>

              <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {allProjects.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition hover:shadow-[var(--shadow)]"
                  >
                    {p.imageUrl ? (
                      <div className="relative h-16 w-full">
                        <Image
                          src={p.imageUrl}
                          alt={p.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    ) : (
                      <span className="text-xl font-bold text-[var(--muted)]">
                        {p.title.slice(0, 2)}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-14 text-center">
                <Link
                  href="/referanslar"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0EA5E9] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#0284C7]"
                >
                  Başarı Hikayelerimiz <span aria-hidden>›</span>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ─── Metodoloji ─── */}
        <AnimatedSection>
          <section className="bg-white py-20 sm:py-28">
            <div className="mx-auto w-[90%] max-w-[1100px]">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-[2.75rem]">
                  Profesyonel Çalışma Metodolojimiz
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base text-[var(--muted)]">
                  Kanıtlanmış süreçlerle ölçülebilir sonuçlar
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <AnimatedSection delay={0}>
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-blue-500">01</span>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-[var(--foreground)]">Kapsamlı Analiz</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      Dijital varlıklarınız, rekabet analizi ve pazar araştırması ile mevcut durumunuz derinlemesine değerlendirilir.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.08}>
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-blue-500">02</span>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-[var(--foreground)]">Stratejik Planlama</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      Hedeflerinize özel, veri destekli dijital pazarlama stratejisi ve ölçülebilir KPI&apos;lar geliştirilir.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.16}>
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-blue-500">03</span>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-[var(--foreground)]">Uzman Uygulama</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      Sertifikalı uzmanlarımız tarafından kampanyalar yayına alınır ve yapay zeka destekli sürekli optimizasyon sağlanır.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.24}>
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-blue-500">04</span>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-[var(--foreground)]">Detaylı Raporlama</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      Performans metrikleri, stratejik öneriler ve aksiyon planları ile şeffaf ve veri odaklı iletişim kurulur.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ─── Blog ─── */}
        <AnimatedSection>
          <section className="bg-[#f9f9f9] py-16 sm:py-20">
            <div className="mx-auto w-[90%] max-w-[1100px]">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-[2.75rem]">
                  Blog
                </h2>
              </div>

              {recentPosts.length > 0 ? (
                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {recentPosts.map((post, i) => (
                    <AnimatedSection key={post.id} delay={i * 0.08}>
                      <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                          {post.imageUrl && (
                            <div className="relative aspect-video overflow-hidden">
                              <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width:768px) 100vw, 33vw"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <h3 className="text-lg font-semibold leading-snug tracking-tight text-[var(--foreground)]">
                              {post.title}
                            </h3>
                            {post.excerpt && (
                              <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">{post.excerpt}</p>
                            )}
                            {post.publishedAt && (
                              <p className="mt-3 text-xs text-[var(--muted)]">
                                {new Date(post.publishedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "numeric" })}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <p className="mt-14 text-center text-[var(--muted)]">Henüz içerik yayınlanmadı.</p>
              )}

              <div className="mt-12 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                >
                  Tüm Yazıları Gör <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ─── SSS ─── */}
        <FaqSection />

        {/* ─── Final CTA ─── */}
        <AnimatedSection>
          <section id="iletisim" className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 py-24 sm:py-32">
            <div className="mx-auto w-[90%] max-w-[800px] text-center">
              <h2 className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
                Markanızı Bir Sonraki Seviyeye Taşımaya Hazır mısınız?
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base text-white/80 sm:text-lg">
                Yapay zeka destekli 360° dijital pazarlama çözümleriyle markanızı büyütün
              </p>
              <div className="mt-10">
                <Link
                  href="#iletisim-form"
                  className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
                >
                  Hemen İletişime Geç
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ─── Footer ─── */}
        <footer className="bg-[#0f0f0f]">
          <div className="mx-auto w-[90%] max-w-[1200px] py-16 sm:py-20">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-8">
              {/* Brand */}
              <div className="col-span-2 sm:col-span-1">
                <Link href="/">
                  <Image src="/ala-medya-logo.png" alt="Ala Medya" width={180} height={48} className="h-10 w-auto sm:h-12 brightness-0 invert" />
                </Link>
                <p className="mt-4 max-w-[200px] text-sm leading-relaxed text-white/30">
                  Yapay zeka destekli 360° dijital pazarlama ajansı.
                </p>
              </div>

              {/* Hizmetler */}
              <div>
                <h4 className="text-sm font-medium text-white/60">Hizmetler</h4>
                <ul className="mt-5 flex flex-col gap-3">
                  <li><Link href="#hizmetler" className="text-sm text-white/40 transition hover:text-white">Dijital Reklam</Link></li>
                  <li><Link href="#hizmetler" className="text-sm text-white/40 transition hover:text-white">SEO</Link></li>
                  <li><Link href="#hizmetler" className="text-sm text-white/40 transition hover:text-white">Sosyal Medya</Link></li>
                  <li><Link href="#hizmetler" className="text-sm text-white/40 transition hover:text-white">Web Tasarım</Link></li>
                  <li><Link href="#hizmetler" className="text-sm text-white/40 transition hover:text-white">İçerik Pazarlama</Link></li>
                </ul>
              </div>

              {/* Keşfet */}
              <div>
                <h4 className="text-sm font-medium text-white/60">Keşfet</h4>
                <ul className="mt-5 flex flex-col gap-3">
                  <li><Link href="/referanslar" className="text-sm text-white/40 transition hover:text-white">Referanslar</Link></li>
                  <li><Link href="/blog" className="text-sm text-white/40 transition hover:text-white">Blog</Link></li>
                  <li><Link href="#iletisim" className="text-sm text-white/40 transition hover:text-white">İletişim</Link></li>
                  <li><Link href="/referanslar" className="text-sm text-white/40 transition hover:text-white">Başarı Hikayeleri</Link></li>
                  <li><Link href="#" className="text-sm text-white/40 transition hover:text-white">Hakkımızda</Link></li>
                </ul>
              </div>

              {/* Sosyal Medya */}
              <div>
                <h4 className="text-sm font-medium text-white/60">Sosyal Medya</h4>
                <div className="mt-5 flex flex-wrap gap-3">
                  {/* Facebook */}
                  <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:text-white">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:text-white">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:text-white">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                  {/* YouTube */}
                  <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:text-white">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </a>
                  {/* WhatsApp */}
                  <a href="#" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:text-white">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.06]">
            <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col items-center justify-between gap-3 py-5 sm:flex-row">
              <p className="text-xs text-white/25">
                Ala Medya Türkiye © {new Date().getFullYear()}
              </p>
              <div className="flex gap-4 text-xs text-white/25">
                <Link href="#" className="transition hover:text-white/50">Kullanım Şartları ve Gizlilik Politikası</Link>
                <span className="text-white/10">·</span>
                <Link href="#" className="transition hover:text-white/50">Çerez Politikası</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* ─── Sub-Footer ─── */}
        <div className="bg-[#0a0a0a] py-6">
          <div className="mx-auto w-[90%] max-w-[1200px]">
            <p className="text-center text-xs leading-relaxed text-white/20">
              Telif Hakkı © {new Date().getFullYear()} Ala Medya Reklam Ajansı ve Danışmanlığı. Tüm hakları saklıdır.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              <Link href="#" className="text-[11px] text-white/20 transition hover:text-white/40">Gizlilik Politikası</Link>
              <Link href="#" className="text-[11px] text-white/20 transition hover:text-white/40">Çerezlerin Kullanımı</Link>
              <Link href="#" className="text-[11px] text-white/20 transition hover:text-white/40">Kullanım Şartları</Link>
              <Link href="#" className="text-[11px] text-white/20 transition hover:text-white/40">Satış ve Para İadesi</Link>
              <Link href="#" className="text-[11px] text-white/20 transition hover:text-white/40">Yasal Bilgiler</Link>
              <Link href="#" className="text-[11px] text-white/20 transition hover:text-white/40">Site Haritası</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
