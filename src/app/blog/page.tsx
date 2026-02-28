import { prisma } from "@/lib/db";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogContent } from "@/components/BlogContent";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header active="blog" />

      <main className="mx-auto w-[90%] max-w-[1400px] px-4 pb-24 pt-16 sm:pt-24 lg:px-0">
        {/* Hero */}
        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--gold)]">
            Ala Medya Blog
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Fikirler, Veriler ve
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-[var(--gold)] bg-clip-text text-transparent">
              Yapay Zeka.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Ala Medya ekibi ve yapay zeka araçlarımızın (Gemini, Claude, GPT-4)
            senteziyle hazırlanan güncel pazarlama içgörüleri.
          </p>
        </div>

        <BlogContent posts={posts} />
      </main>

      <Footer />
    </div>
  );
}
