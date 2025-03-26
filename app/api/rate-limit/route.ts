// import { apiRateLimiter, fileUploadRateLimiter } from "@/lib/rate-limits"
// import { type NextRequest, NextResponse } from "next/server"


// export async function GET(request: NextRequest) {
//   const response = await apiRateLimiter.middleware(request)
//   if (response.status === 429) {
//     return response
//   }
//   return NextResponse.json({ success: true })
// }

// export async function POST(request: NextRequest) {
//   const response = await fileUploadRateLimiter.middleware(request)
//   if (response.status === 429) {
//     return response
//   }
//   return NextResponse.json({ success: true })
// }

