import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function proxy(req: NextRequest) {

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })

  const { pathname } = req.nextUrl


  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next()
  }

  if (!token) {
  return NextResponse.redirect(new URL("/login", req.url))
}

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/dashboard/" , "/applicants/", "/assessment-bank/", "/resume-bank/", "/reports/","/jobs"]
}