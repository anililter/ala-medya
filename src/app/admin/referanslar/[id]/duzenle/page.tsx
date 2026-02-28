import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { ReferenceForm } from "@/components/ReferenceForm";

export const dynamic = "force-dynamic";

export default async function AdminReferanslarDuzenlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id } });
  if (!project) notFound();

  const initial = {
    title: project.title,
    slug: project.slug,
    clientName: project.clientName ?? "",
    category: project.category ?? "",
    projectUrl: project.projectUrl ?? "",
    description: project.description ?? "",
    imageUrl: project.imageUrl ?? "",
    published: project.published,
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Referansı düzenle
      </h1>
      <ReferenceForm initial={initial} referenceId={id} />
    </div>
  );
}
