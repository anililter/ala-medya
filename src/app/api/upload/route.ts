import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_DIRS = ["references", "blog", "partners"] as const;
const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const folder = (formData.get("folder") as string)?.trim() || "references";
    const UPLOAD_DIR = ALLOWED_DIRS.includes(folder as (typeof ALLOWED_DIRS)[number])
      ? folder
      : "references";

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "Dosya gerekli" }, { status: 400 });
    }
    if (!ALLOWED.includes(file.type)) {
      return NextResponse.json(
        { error: "Sadece resim dosyaları (JPEG, PNG, WebP, SVG) kabul edilir." },
        { status: 400 }
      );
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "Dosya 2MB'dan küçük olmalı." }, { status: 400 });
    }
    const ext = path.extname(file.name) || ".png";
    const base = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const filename = `${base}${ext}`;
    const dir = path.join(process.cwd(), "public", UPLOAD_DIR);
    await mkdir(dir, { recursive: true });
    const bytes = await file.arrayBuffer();
    await writeFile(path.join(dir, filename), Buffer.from(bytes));
    const url = `/${UPLOAD_DIR}/${filename}`;
    return NextResponse.json({ url });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Yükleme başarısız" }, { status: 500 });
  }
}
