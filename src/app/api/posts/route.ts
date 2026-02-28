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

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(posts);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Yazılar yüklenemedi" },
      { status: 500 }
    );
  }
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
    const existing = await prisma.post.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json(
        { error: "Bu slug zaten kullanılıyor" },
        { status: 400 }
      );
    }
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt: body.excerpt?.trim() || null,
        content: body.content?.trim() ?? "",
        imageUrl: body.imageUrl?.trim() || null,
        published: body.published === true,
        publishedAt: body.published === true ? new Date() : null,
      },
    });
    return NextResponse.json(post);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Yazı eklenemedi" },
      { status: 500 }
    );
  }
}
