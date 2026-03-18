import path from "node:path";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

/**
 * Veritabanı kapalı: arayüz-only mod.
 * - ALA_DB_DISABLED=1 ise her durumda DB kapalı
 * - DATABASE_URL yok veya "none" / "disabled" ise DB kapalı
 */
function isDbDisabled(): boolean {
  // Bracket notation: bazı bundler'ların build-time env inline etmesini engeller
  const flag = process.env["ALA_DB_DISABLED"];
  const url = process.env["DATABASE_URL"];
  if (flag === "1") return true;
  if (!url) return true;
  if (url === "none") return true;
  if (url.toLowerCase() === "disabled") return true;
  return false;
}

function createMockPrisma(): PrismaClient {
  const empty = () => Promise.resolve([]);
  const nul = () => Promise.resolve(null);
  const zero = () => Promise.resolve(0);
  const noop = () => Promise.resolve(undefined);
  const mock = (data?: unknown) => Promise.resolve(data ?? {});

  return {
    post: {
      findMany: empty,
      findUnique: nul,
      findFirst: nul,
      create: mock,
      update: mock,
      delete: noop,
      count: zero,
    },
    partner: {
      findMany: empty,
      findUnique: nul,
      findFirst: nul,
      create: mock,
      update: mock,
      delete: noop,
      count: zero,
    },
    project: {
      findMany: empty,
      findUnique: nul,
      findFirst: nul,
      create: mock,
      update: mock,
      delete: noop,
      count: zero,
    },
    user: {
      findMany: empty,
      findUnique: nul,
      findFirst: nul,
      create: mock,
      update: mock,
      delete: noop,
      count: zero,
    },
    service: {
      findMany: empty,
      findUnique: nul,
      findFirst: nul,
      create: mock,
      update: mock,
      delete: noop,
      count: zero,
    },
    contactMessage: {
      findMany: empty,
      findUnique: nul,
      findFirst: nul,
      create: mock,
      update: mock,
      delete: noop,
      count: zero,
    },
    session: {
      findMany: empty,
      findUnique: nul,
      findFirst: nul,
      create: noop,
      update: mock,
      delete: noop,
      deleteMany: noop,
      count: zero,
    },
    $connect: () => Promise.resolve(),
    $disconnect: () => Promise.resolve(),
    $transaction: (fn: (tx: PrismaClient) => Promise<unknown>) => fn({} as PrismaClient),
  } as unknown as PrismaClient;
}

function getConnectionString(): string {
  const raw = process.env.DATABASE_URL;
  if (!raw) throw new Error("DATABASE_URL ortam değişkeni tanımlı olmalı.");
  if (
    (raw.includes("pooler") || raw.includes("neon.tech")) &&
    !raw.includes("pgbouncer=true")
  ) {
    return raw + (raw.includes("?") ? "&" : "?") + "pgbouncer=true";
  }
  return raw;
}

function createPrisma(): PrismaClient {
  if (isDbDisabled()) return createMockPrisma();

  const url = process.env["DATABASE_URL"] ?? "file:./dev.db";
  const log: ("error" | "warn")[] =
    process.env["NODE_ENV"] === "development" ? ["error", "warn"] : ["error"];

  if (url.startsWith("file:")) {
    const filePath = url.slice(5);
    const absolutePath = path.isAbsolute(filePath)
      ? filePath
      : path.join(process.cwd(), filePath);
    const sqliteUrl = "file:" + absolutePath;
    const adapter = new PrismaBetterSqlite3({ url: sqliteUrl });
    return new PrismaClient({ adapter, log });
  }

  const connectionString = getConnectionString();
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter, log });
}

export const prisma = globalForPrisma.prisma ?? createPrisma();
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export const isDatabaseDisabled = isDbDisabled();
