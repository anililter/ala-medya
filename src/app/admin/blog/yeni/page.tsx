import { BlogPostForm } from "@/components/BlogPostForm";

export default function AdminBlogYeniPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Yeni blog yazısı
      </h1>
      <BlogPostForm />
    </div>
  );
}
