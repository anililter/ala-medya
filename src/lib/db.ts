import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

let connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL ortam değişkeni tanımlı olmalı.");
}
if (
  (connectionString.includes("pooler") || connectionString.includes("neon.tech")) &&
  !connectionString.includes("pgbouncer=true")
) {
  connectionString += connectionString.includes("?") ? "&pgbouncer=true" : "?pgbouncer=true";
}
const adapter = new PrismaPg({ connectionString });
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
