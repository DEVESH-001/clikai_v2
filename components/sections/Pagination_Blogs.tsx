"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const isPrevDisabled = currentPage <= 1
  const isNextDisabled = currentPage >= totalPages

  return (
    <nav className="flex justify-center mt-8">
      <div className="flex items-center space-x-4">
        <Link
          href={isPrevDisabled ? "#" : `/blog?page=${currentPage - 1}`}
          className={`flex items-center px-4 py-2 rounded ${
            isPrevDisabled
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-disabled={isPrevDisabled}
          onClick={(e) => isPrevDisabled && e.preventDefault()}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span>Previous</span>
        </Link>

        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>

        <Link
          href={isNextDisabled ? "#" : `/blog?page=${currentPage + 1}`}
          className={`flex items-center px-4 py-2 rounded ${
            isNextDisabled
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-disabled={isNextDisabled}
          onClick={(e) => isNextDisabled && e.preventDefault()}
          aria-label="Next page"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5 ml-1" />
        </Link>
      </div>
    </nav>
  )
}

