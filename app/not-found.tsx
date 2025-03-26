import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found | Clik.ai",
  description: "The page you are looking for might have been removed or is temporarily unavailable.",
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-purple-100/30 to-indigo-100/30 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}

