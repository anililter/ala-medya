import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function getConnectionString(): string {
  const raw = process.env.DATABASE_URL;
  if (!raw) throw new Error("DATABASE_URL ortam değişkeni tanımlı olmalı.");
  // Neon pooler ile "Invalid invocation" hatasını önlemek için
  if (
    (raw.includes("pooler") || raw.includes("neon.tech")) &&
    !raw.includes("pgbouncer=true")
  ) {
    return raw + (raw.includes("?") ? "&" : "?") + "pgbouncer=true";
  }
  return raw;
}

function createPrisma(): PrismaClient {
  const connectionString = getConnectionString();
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrisma();
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
