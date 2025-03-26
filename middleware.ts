import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname and method
  const path = request.nextUrl.pathname
  const method = request.method

  // Only handle non-API routes
  if (!path.startsWith("/api/")) {
    // For POST/PUT/DELETE requests to non-API routes, redirect to 404
    if (method !== "GET" && method !== "HEAD") {
      // Create a new URL for the not-found page
      const notFoundUrl = new URL("/404", request.url)
      return NextResponse.redirect(notFoundUrl)
    }
  }

  // For all other requests, add security headers
  const response = NextResponse.next()
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("X-Frame-Options", "SAMEORIGIN")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

export const config = {
  matcher: [
    // Apply to all routes except static assets and API routes
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
}

