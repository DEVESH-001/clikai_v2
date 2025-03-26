import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { apiRateLimiter, fileUploadRateLimiter } from "./lib/rate-limit"

export async function middleware(request: NextRequest) {
  // Get the pathname and method
  const path = request.nextUrl.pathname
  const method = request.method

  // Only process GET requests for non-API routes
  if (!path.startsWith("/api/") && method !== "GET") {
    // Return 404 for POST/PUT/DELETE requests to non-API routes
    return new NextResponse(null, { status: 404 })
  }

  // Apply different rate limits based on the path
  if (path.startsWith("/api/send-email")) {
    // Apply stricter rate limiting for file uploads
    const response = await fileUploadRateLimiter.middleware(request)
    if (response.status === 429) {
      return response
    }
  } else if (path.startsWith("/api/")) {
    // Apply standard API rate limiting
    const response = await apiRateLimiter.middleware(request)
    if (response.status === 429) {
      return response
    }
  }

  // Add security headers
  const requestHeaders = new Headers(request.headers)
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Add additional security headers
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("X-Frame-Options", "SAMEORIGIN")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

export const config = {
  matcher: [
    // Apply to all API routes
    "/api/:path*",
    // Apply to all routes except static assets
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}

