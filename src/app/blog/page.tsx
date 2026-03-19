import { prisma } from "@/lib/db";
import { BlogContent, type BlogPostPreview } from "@/components/BlogContent";
import { SAMPLE_BLOGS } from "@/data/sampleBlogs";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof prisma.post.findMany>> = [];
  try {
    posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
    });
  } catch (e) {
    console.error("BlogPage data fetch error:", e);
  }

  const items: BlogPostPreview[] =
    posts.length > 0
      ? (posts as unknown as BlogPostPreview[])
      : SAMPLE_BLOGS.map((p) => ({
          id: p.id,
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
          imageUrl: p.imageUrl,
          publishedAt: p.publishedAt,
        }));

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="w-full px-6 pb-24 pt-16 sm:pt-24 lg:px-12">
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
            Ala Medya ekibi ve yapay zeka araçlarımızın (Gemini 3.1 Pro, Claude 4.6 Sonnet, GPT-5.4 Thinking)
            senteziyle hazırlanan güncel pazarlama içgörüleri.
          </p>
        </div>

        <BlogContent posts={items} />
      </main>
    </div>
  );
}
