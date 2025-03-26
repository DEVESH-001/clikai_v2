import { NextResponse } from "next/server"
//import type { NextRequest } from "next/server"

export function middleware() {
  // You can add custom logic here to determine if a page exists
  // For now, we'll let Next.js handle the not-found page naturally
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}

