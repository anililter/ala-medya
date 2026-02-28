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

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      return NextResponse.json({ error: "Yazı bulunamadı" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Yazı yüklenemedi" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
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
    const existing = await prisma.post.findFirst({
      where: { slug, NOT: { id } },
    });
    if (existing) {
      return NextResponse.json(
        { error: "Bu slug zaten kullanılıyor" },
        { status: 400 }
      );
    }
    const wasPublished = (await prisma.post.findUnique({ where: { id } }))
      ?.published;
    const published = body.published === true;
    const data = {
      title,
      slug,
      excerpt: body.excerpt?.trim() || null,
      content: body.content?.trim() ?? "",
      imageUrl: body.imageUrl?.trim() || null,
      published,
      ...(published && !wasPublished && { publishedAt: new Date() }),
    };
    const post = await prisma.post.update({
      where: { id },
      data,
    });
    return NextResponse.json(post);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Yazı güncellenemedi" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.post.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Yazı silinemedi" },
      { status: 500 }
    );
  }
}
