import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname
  const method = request.method


  if (!path.startsWith("/api/")) {

    if (method !== "GET" && method !== "HEAD") {
      // Create a new URL for the not-found page
      const notFoundUrl = new URL("/404", request.url)
      return NextResponse.redirect(notFoundUrl)
    }
  }

  // For all other requests, security headers
  const response = NextResponse.next()
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("X-Frame-Options", "SAMEORIGIN")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

export const config = {
  matcher: [

    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
}

