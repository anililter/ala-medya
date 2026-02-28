import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { getSession, hasPermission } from "@/lib/auth";

export async function GET() {
  const session = await getSession();
  if (!session || !hasPermission(session.user.role, "kullanicilar")) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 403 });
  }

  const users = await prisma.user.findMany({
    select: { id: true, username: true, name: true, role: true, active: true, createdAt: true },
    orderBy: { createdAt: "asc" },
  });

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session || !hasPermission(session.user.role, "kullanicilar")) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { username, password, name, role } = body;

    if (!username?.trim() || !password || !name?.trim()) {
      return NextResponse.json({ error: "Tüm alanlar gerekli" }, { status: 400 });
    }

    const validRoles = ["admin", "editor", "viewer"];
    if (!validRoles.includes(role)) {
      return NextResponse.json({ error: "Geçersiz rol" }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { username: username.trim() } });
    if (existing) {
      return NextResponse.json({ error: "Bu kullanıcı adı zaten kullanılıyor" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        username: username.trim(),
        password: hashed,
        name: name.trim(),
        role,
      },
      select: { id: true, username: true, name: true, role: true, active: true },
    });

    return NextResponse.json(user);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Kullanıcı eklenemedi" }, { status: 500 });
  }
}
