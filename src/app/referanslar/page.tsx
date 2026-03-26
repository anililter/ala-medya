import { prisma } from "@/lib/db";
import { ReferanslarClient, type ReferenceProject } from "./ReferanslarClient";
import { FOLDER_REFERENCES } from "@/data/folderReferences";

export const dynamic = "force-dynamic";

export default async function ReferanslarPage() {
  let projects: Awaited<ReturnType<typeof prisma.project.findMany>> = [];
  try {
    projects = await prisma.project.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
  } catch (e) {
    console.error("ReferanslarPage data fetch error:", e);
  }
  const categories = Array.from(
    new Set(projects.map((p) => p.category).filter(Boolean))
  ) as string[];

  const folderProjects: ReferenceProject[] = FOLDER_REFERENCES.map((r, idx) => ({
    id: `folder-${r.id}-${idx}`,
    title: r.title,
    slug: r.id,
    description: null,
    imageUrl: r.src,
    clientName: null,
    projectUrl: null,
    category: r.category,
  }));

  // Veritabanı projelerini de dahil et (varsa)
  const dbProjects = (projects as unknown as ReferenceProject[]) || [];
  
  const items: ReferenceProject[] = [...folderProjects, ...dbProjects];
  
  const allCategories = Array.from(
    new Set(items.map((p) => p.category).filter(Boolean))
  ) as string[];

  const cats = ["Tümünü Gör", ...allCategories.sort()];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="w-full px-6 py-16 sm:py-20 lg:px-12">
        <section className="mb-14 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Referanslar
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Başarılı projeler. Mutlu müşteriler. Sınırlı sayıda, derinlemesine çalıştığımız markalar.
          </p>
        </section>

        <ReferanslarClient
          projects={items}
          categories={cats}
        />
      </main>
    </div>
  );
}
