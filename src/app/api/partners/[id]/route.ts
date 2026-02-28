import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    const name = body.name?.trim();
    if (!name) {
      return NextResponse.json({ error: "İsim gerekli" }, { status: 400 });
    }
    const partner = await prisma.partner.update({
      where: { id },
      data: {
        name,
        imageUrl: body.imageUrl?.trim(),
        order: body.order,
        published: body.published !== false,
      },
    });
    return NextResponse.json(partner);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Partner güncellenemedi" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.partner.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Partner silinemedi" }, { status: 500 });
  }
}
