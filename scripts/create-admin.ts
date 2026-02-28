import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL gerekli.");
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const existing = await prisma.user.findUnique({ where: { username: "admin" } });
  if (existing) {
    console.log("ℹ️  Admin kullanıcı zaten mevcut.");
    return;
  }
  const hash = await bcrypt.hash("admin123", 12);
  await prisma.user.create({
    data: { username: "admin", password: hash, name: "Yönetici", role: "admin" },
  });
  console.log("✅ Admin oluşturuldu: admin / admin123");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
