import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(services);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Hizmetler yüklenemedi" },
      { status: 500 }
    );
  }
}
