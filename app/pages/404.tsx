"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    // Log the 404 error
    console.log(`404 error: ${router.asPath}`)
  }, [router.asPath])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Return to Homepage
      </Link>
    </div>
  )
}

