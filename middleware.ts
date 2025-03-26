import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Check if the request method is POST for a non-API route
  if (request.method === "POST" && !path.startsWith("/api/")) {
    // Clone the URL
    const url = request.nextUrl.clone()
    // Change it to the same path but with GET method
    url.searchParams.set("_method", "GET")

    // Redirect to the same URL but force a GET request
    return NextResponse.redirect(url)
  }

  // Continue with the request normally
  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!_next/|_vercel/|api/|favicon.ico|.*\\.).*)",
  ],
}

