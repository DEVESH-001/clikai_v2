import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// List of valid routes in your application
const validRoutes = [
  "/",
  "/about-us",
  "/blog",
  "/contact-us",
  "/disclaimer",
  "/privacy-policy",
  "/products",
  "/security",
  "/services",
  "/terms-and-conditions",
  "/why-clik-ai",
]

// List of valid dynamic route patterns
const validDynamicRoutePatterns = [
  /^\/blog\/[^/]+$/,
  /^\/products\/[^/]+$/,
  /^\/products\/(autouw|clarity360|InvestAssist|SmartExtract)$/,
  /^\/services\/[^/]+\/[^/]+$/,
  /^\/services\/(ConsultingTech|Lease&DataAdministration|LoanOrigination)\/[^/]+$/,
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip for API routes, static files, and favicon
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next()
  }

  // Check if the route is valid
  const isValidRoute = validRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))

  // Check if the route matches any valid dynamic route pattern
  const isValidDynamicRoute = validDynamicRoutePatterns.some((pattern) => pattern.test(pathname))

  // If it's not a valid route or dynamic route, redirect to 404
  if (!isValidRoute && !isValidDynamicRoute) {
    // Create a URL for the 404 page
    const notFoundUrl = new URL("/not-found", request.url)

    // Return a NextResponse with the 404 status
    return NextResponse.rewrite(notFoundUrl)
  }

  return NextResponse.next()
}

