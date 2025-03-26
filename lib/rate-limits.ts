// import { type NextRequest, NextResponse } from "next/server";

// export interface RateLimitConfig {
//   limit: number;
//   windowMs: number;
//   keyGenerator?: (req: NextRequest) => string;
// }

// // In-memory store for rate limiting
// // In production, consider using Redis or another distributed store
// const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// export class RateLimiter {
//   private config: RateLimitConfig;

//   constructor(config: RateLimitConfig) {
//     this.config = {
//       // Default key generator uses IP address
//       keyGenerator: (req) =>
//         req.ip || req.headers.get("x-forwarded-for") || "unknown",
//       ...config,
//     };
//   }

//   async check(req: NextRequest): Promise<{
//     success: boolean;
//     limit: number;
//     remaining: number;
//     resetTime: number;
//   }> {
//     const key = this.config.keyGenerator!(req);
//     const now = Date.now();

//     // Get or create rate limit record
//     const record = rateLimitStore.get(key) || {
//       count: 0,
//       resetTime: now + this.config.windowMs,
//     };

//     // Reset if the window has passed
//     if (now > record.resetTime) {
//       record.count = 0;
//       record.resetTime = now + this.config.windowMs;
//     }

//     // Increment count
//     record.count += 1;
//     rateLimitStore.set(key, record);

//     const remaining = Math.max(0, this.config.limit - record.count);
//     const success = record.count <= this.config.limit;

//     return {
//       success,
//       limit: this.config.limit,
//       remaining,
//       resetTime: record.resetTime,
//     };
//   }

//   // Middleware function to apply rate limiting
//   middleware = async (req: NextRequest) => {
//     const result = await this.check(req);

//     // If rate limit exceeded, return 429 response
//     if (!result.success) {
//       return new NextResponse(
//         JSON.stringify({
//           success: false,
//           error: "Rate limit exceeded. Please try again later.",
//         }),
//         {
//           status: 429,
//           headers: {
//             "Content-Type": "application/json",
//             "X-RateLimit-Limit": result.limit.toString(),
//             "X-RateLimit-Remaining": result.remaining.toString(),
//             "X-RateLimit-Reset": result.resetTime.toString(),
//             "Retry-After": Math.ceil(
//               (result.resetTime - Date.now()) / 1000
//             ).toString(),
//           },
//         }
//       );
//     }

//     // Continue with the request but add rate limit headers
//     const response = NextResponse.next();
//     response.headers.set("X-RateLimit-Limit", result.limit.toString());
//     response.headers.set("X-RateLimit-Remaining", result.remaining.toString());
//     response.headers.set("X-RateLimit-Reset", result.resetTime.toString());

//     return response;
//   };
// }

// // Create common rate limiters for different use cases
// export const apiRateLimiter = new RateLimiter({
//   limit: 60, // 60 requests
//   windowMs: 60000, // per minute
// });

// export const authRateLimiter = new RateLimiter({
//   limit: 5, // 5 requests
//   windowMs: 60000, // per minute
// });

// export const fileUploadRateLimiter = new RateLimiter({
//   limit: 10, // 10 requests
//   windowMs: 3600000, // per hour
// });

// // Helper function to apply rate limiting to API routes
// export async function applyRateLimit(
//   req: NextRequest,
//   rateLimiter: RateLimiter = apiRateLimiter
// ) {
//   return rateLimiter.middleware(req);
// }
