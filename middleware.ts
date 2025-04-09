import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { apiRateLimiter, fileUploadRateLimiter } from "./lib/rate-limits";

export async function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname;

  // Apply different rate limits based on the path
  if (path.startsWith("/api/send-email")) {
    // Apply stricter rate limiting for file uploads
    const response = await fileUploadRateLimiter.middleware(request);
    if (response.status === 429) {
      return response;
    }
  } else if (path.startsWith("/api/")) {
    // Apply standard API rate limiting
    const response = await apiRateLimiter.middleware(request);
    if (response.status === 429) {
      return response;
    }
  }

  // Add security headers
  const requestHeaders = new Headers(request.headers);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Add Content Security Policy header with expanded domains for HubSpot, YouTube, and Google
  // response.headers.set(
  //   "Content-Security-Policy",
  //   "default-src 'self'; " +
  //     "script-src 'self' 'unsafe-inline' https://static.hsappstatic.net https://js.hsforms.net https://js.hs-scripts.com https://js.hs-analytics.net https://js.usemessages.com https://www.youtube.com https://s.ytimg.com https://apis.google.com https://*.googleusercontent.com; " +
  //     "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
  //     "img-src 'self' data: https: https://i.ytimg.com https://*.googleusercontent.com; " +
  //     "font-src 'self' data: https://fonts.gstatic.com; " +
  //     "frame-src 'self' https://share.hsforms.com https://meetings.hubspot.com https://js.hsforms.net https://forms.hsforms.com https://*.hubspot.com https://www.youtube.com https://youtube.com https://youtu.be https://*.youtube-nocookie.com https://docs.google.com https://drive.google.com https://*.google.com; " +
  //     "connect-src 'self' https://*.hubspot.com https://*.hubapi.com https://www.youtube.com https://*.google.com;",
  // )

  // Remove X-Frame-Options header to allow embedding of content from other domains
  // This is necessary for embedding Google Docs, YouTube, etc.
  // Note: The CSP frame-src directive above provides more granular control over which domains can be embedded
  // response.headers.delete("X-Frame-Options");

  // Add additional security headers
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");

  return response;
}

// Update the matcher configuration to exclude handling 404 routes
export const config = {
  matcher: [
    // Apply to all API routes
    "/api/:path*",
    // Apply to all routes except static assets/
    "/((?!_next/static|_next/image|favicon.ico|not-found).*)",
  ],
};
