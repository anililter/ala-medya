import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { BlogPostForm } from "@/components/BlogPostForm";

export const dynamic = "force-dynamic";

export default async function AdminBlogDuzenlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) notFound();

  const initial = {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt ?? "",
    content: post.content,
    imageUrl: post.imageUrl ?? "",
    published: post.published,
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Yazıyı düzenle
      </h1>
      <BlogPostForm initial={initial} postId={id} />
    </div>
  );
}
