import { cookies } from "next/headers";
import { prisma } from "./db";
import { randomBytes } from "node:crypto";

const SESSION_COOKIE = "ala_session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 gün

export async function createSession(userId: string) {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_MAX_AGE);

  await prisma.session.create({
    data: { userId, token, expiresAt },
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE / 1000,
  });

  return token;
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session || session.expiresAt < new Date() || !session.user.active) {
    if (session) await prisma.session.delete({ where: { id: session.id } }).catch(() => {});
    return null;
  }

  return session;
}

export async function destroySession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) {
    await prisma.session.deleteMany({ where: { token } });
    cookieStore.delete(SESSION_COOKIE);
  }
}

type Role = "admin" | "editor" | "viewer";

const PERMISSIONS: Record<Role, string[]> = {
  admin: ["blog", "referanslar", "partnerler", "mesajlar", "kullanicilar"],
  editor: ["blog", "referanslar", "partnerler", "mesajlar"],
  viewer: ["mesajlar"],
};

export function hasPermission(role: string, resource: string): boolean {
  const perms = PERMISSIONS[role as Role];
  return perms ? perms.includes(resource) : false;
}
