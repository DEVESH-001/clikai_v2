/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface PostPreviewProps {
  post: any;
  className?: string;
}

export default function PostPreview({ post, className }: PostPreviewProps) {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg";
  const title = post.title?.rendered || "Untitled";
  const excerpt = post.excerpt?.rendered || "";
  const slug = post.slug || "";
  const author = post._embedded?.["author"]?.[0]?.name || "Unknown Author";
  const date = post.date
    ? format(new Date(post.date), "MMMM dd, yyyy")
    : "Unknown Date";

  return (
    <div
      className={`mb-8 bg-white shadow-md rounded-lg overflow-hidden ${className}`}
    >
      <Image
        src={featuredImage || "/placeholder.svg"}
        alt={title}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {title}
          </Link>
        </h2>
        <div className="text-sm text-gray-600 mb-4">
          By {author} | {date}
        </div>
        <div
          className="text-gray-600 mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <Link
          href={`/blog/${slug}`}
          className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
