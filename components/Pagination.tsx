import Link from "next/link"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              href={`/blog?page=${number}`}
              className={`px-4 py-2 rounded ${
                number === currentPage ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

