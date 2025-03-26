"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-purple-100/30 to-indigo-100/30 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong!</h1>
        <p className="text-gray-600 max-w-md mb-8">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={reset} className="bg-blue-600 hover:bg-blue-700">
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

