import { NextRequest, NextResponse } from "next/server";
import { apiRateLimiter, fileUploadRateLimiter } from "./lib/rate-limits";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // If it's a non-existent page, let Next.js handle the 404 normally
  if (!path.startsWith("/api") && !path.startsWith("/dashboard")) {
    return NextResponse.next(); // Do nothing, let Next.js handle it
  }

  // Apply rate limits only to API routes
  if (path.startsWith("/api/send-email")) {
    const response = await fileUploadRateLimiter.middleware(request);
    if (response.status === 429) return response;
  } else if (path.startsWith("/api/")) {
    const response = await apiRateLimiter.middleware(request);
    if (response.status === 429) return response;
  }

  // Add security headers
  const response = NextResponse.next();
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");

  return response;
}

export const config = {
  matcher: ["/api/:path*"], // Apply only to API routes, not all pages
};
