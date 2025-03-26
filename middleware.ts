import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { apiRateLimiter, fileUploadRateLimiter } from "./lib/rate-limits";

export async function middleware(request: NextRequest) {
  // Get the pathname and method
  const path = request.nextUrl.pathname;
  const method = request.method;

  // Handle 405 Method Not Allowed
  if (method !== "GET" && !path.startsWith("/api/")) {
    return new NextResponse("Method Not Allowed", {
      status: 405,
      headers: {
        Allow: "GET",
        "Content-Type": "text/plain",
      },
    });
  }

  // Apply rate limiting only for API routes
  if (path.startsWith("/api/")) {
    if (path.startsWith("/api/send-email")) {
      const response = await fileUploadRateLimiter.middleware(request);
      if (response.status === 429) {
        return response;
      }
    } else {
      const response = await apiRateLimiter.middleware(request);
      if (response.status === 429) {
        return response;
      }
    }
  }

  // Add security headers
  const response = NextResponse.next();

  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  // Add CORS headers
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
