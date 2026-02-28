import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReferanslarClient } from "./ReferanslarClient";

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

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header active="referanslar" />

      <main className="mx-auto w-[90%] max-w-[1600px] px-4 py-16 sm:py-20 lg:px-0">
        <section className="mb-14 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Referanslar
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Başarılı projeler. Mutlu müşteriler. Sınırlı sayıda, derinlemesine çalıştığımız markalar.
          </p>
        </section>

        <ReferanslarClient
          projects={projects}
          categories={["Tümünü Gör", ...categories.sort()]}
        />
      </main>

      <Footer />
    </div>
  );
}
