import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const partners = await prisma.partner.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    return NextResponse.json(partners);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Partnerler yüklenemedi" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = body.name?.trim();
    if (!name) {
      return NextResponse.json({ error: "İsim gerekli" }, { status: 400 });
    }
    if (!body.imageUrl?.trim()) {
      return NextResponse.json({ error: "Logo gerekli" }, { status: 400 });
    }
    const count = await prisma.partner.count();
    const partner = await prisma.partner.create({
      data: {
        name,
        imageUrl: body.imageUrl.trim(),
        order: body.order ?? count,
        published: body.published !== false,
      },
    });
    return NextResponse.json(partner);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Partner eklenemedi" }, { status: 500 });
  }
}
