import Link from "next/link"
import type { Metadata } from "next"
import { Navbar } from "@/components/sections/10_Navbar"
import { Footer } from "@/components/sections/9_Footer"


export const metadata: Metadata = {
  title: "Page Not Found | Clik.ai",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you are looking for doesn&apos;t exist or has been moved.</p>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Return Home
            </Link>
            <div className="pt-2">
              <Link href="/contact-us" className="text-blue-600 hover:text-blue-800 underline">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

