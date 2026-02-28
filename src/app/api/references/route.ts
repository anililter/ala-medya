import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const title = body.title?.trim();
    if (!title) {
      return NextResponse.json(
        { error: "Başlık gerekli" },
        { status: 400 }
      );
    }
    const slug = body.slug?.trim() || slugify(title);
    const existing = await prisma.project.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json(
        { error: "Bu slug zaten kullanılıyor" },
        { status: 400 }
      );
    }
    const project = await prisma.project.create({
      data: {
        title,
        slug,
        clientName: body.clientName?.trim() || null,
        category: body.category?.trim() || null,
        projectUrl: body.projectUrl?.trim() || null,
        description: body.description?.trim() || null,
        imageUrl: body.imageUrl?.trim() || null,
        published: body.published !== false,
      },
    });
    return NextResponse.json(project);
  } catch (e) {
    console.error("Referans ekleme hatası:", e);
    const message =
      e instanceof Error ? e.message : "Referans eklenemedi";
    return NextResponse.json(
      { error: "Referans eklenemedi", detail: message },
      { status: 500 }
    );
  }
}
