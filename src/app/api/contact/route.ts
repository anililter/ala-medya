import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function validateBody(body: unknown): {
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
} | null {
  if (!body || typeof body !== "object") return null;
  const o = body as Record<string, unknown>;
  if (typeof o.name !== "string" || !o.name.trim()) return null;
  if (typeof o.email !== "string" || !o.email.trim()) return null;
  if (typeof o.message !== "string" || !o.message.trim()) return null;
  return {
    name: o.name.trim(),
    email: o.email.trim(),
    message: o.message.trim(),
    phone: typeof o.phone === "string" ? o.phone.trim() || undefined : undefined,
    subject: typeof o.subject === "string" ? o.subject.trim() || undefined : undefined,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = validateBody(body);
    if (!data) {
      return NextResponse.json(
        { error: "Ad, e-posta ve mesaj zorunludur." },
        { status: 400 }
      );
    }
    const contact = await prisma.contactMessage.create({ data });
    return NextResponse.json({ id: contact.id, ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi." },
      { status: 500 }
    );
  }
}
