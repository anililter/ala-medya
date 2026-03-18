import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { SAMPLE_BLOGS } from "@/data/sampleBlogs";

export const dynamic = "force-dynamic";

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: Awaited<ReturnType<typeof prisma.post.findUnique>> | null = null;
  try {
    post = await prisma.post.findUnique({
      where: { slug, published: true },
    });
  } catch (e) {
    console.error("BlogSlugPage data fetch error:", e);
  }

  const sample = SAMPLE_BLOGS.find((p) => p.slug === slug);
  if (!post && !sample) notFound();

  const title = post?.title ?? sample!.title;
  const imageUrl = post?.imageUrl ?? sample!.imageUrl;
  const publishedAt = post?.publishedAt ?? sample!.publishedAt;
  const contentHtml = post?.content ?? sample!.contentHtml;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <article className="mx-auto w-[90%] max-w-[860px] px-4 pb-24 pt-12 sm:pt-16 lg:px-0">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
        >
          <span aria-hidden>←</span>
          Blog
        </Link>

        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--gold)]">
            AI Optimized
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {formattedDate && (
            <p className="mt-4 text-sm text-[var(--muted)]">{formattedDate}</p>
          )}
        </div>

        {imageUrl && (
          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="prose mt-12 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-[var(--muted-foreground)] prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="mt-16 border-t border-[var(--border)] pt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-8 py-3.5 text-sm font-medium transition hover:border-[var(--gold)]/40 hover:bg-[var(--background)]"
          >
            <span aria-hidden>←</span>
            Tüm Yazılar
          </Link>
        </div>
      </article>
    </div>
  );
}
