// import { fileUploadRateLimiter, apiRateLimiter } from './lib/rate-limits';
// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"

// export async function middleware(request: NextRequest) {
//   console.log('Middleware triggered for path:', request.nextUrl.pathname);

//   try {
//     const path = request.nextUrl.pathname
    
//     if (path.startsWith("/api/send-email")) {
//       const response = await fileUploadRateLimiter.middleware(request)
//       if (response.status === 429) {
//         console.log('Rate limit exceeded for file upload');
//         return response
//       }
//     } else if (path.startsWith("/api/")) {
//       const response = await apiRateLimiter.middleware(request)
//       if (response.status === 429) {
//         console.log('Rate limit exceeded for API');
//         return response
//       }
//     }

//     const requestHeaders = new Headers(request.headers)
//     const response = NextResponse.next({
//       request: {
//         headers: requestHeaders,
//       },
//     })

//     response.headers.set("X-XSS-Protection", "1; mode=block")
//     response.headers.set("X-Frame-Options", "SAMEORIGIN")
//     response.headers.set("X-Content-Type-Options", "nosniff")
    
//     return response
//   } catch (error) {
//     console.error('Middleware error:', error);
//     return NextResponse.error();
//   }
// }

// export const config = {
//   matcher: [
//     "/api/:path*",
//     "/((?!_next/static|_next/image|favicon.ico).*)",
//   ],
// }


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (request.method === "POST" && !path.startsWith("/api/")) {
    const url = request.nextUrl.clone();
    url.searchParams.set("_method", "GET");

    // Rewrite instead of redirect to prevent the loop
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/|_vercel/|api/|favicon.ico|.*\\.).*)",
  ],
};
