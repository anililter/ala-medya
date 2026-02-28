import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
      include: { service: true },
    });
    return NextResponse.json(projects);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Projeler yüklenemedi" },
      { status: 500 }
    );
  }
}
