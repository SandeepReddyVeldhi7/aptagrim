import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function proxy
(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  // Allow auth-related paths
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  // Redirect to login if not authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/applicants/:path*",
    "/assessment-bank/:path*",
    "/resume-bank/:path*",
    "/reports/:path*",
    "/jobs/:path*",
  ],
};
