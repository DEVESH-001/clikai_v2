/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

interface PostPreviewProps {
  post: any; // You might want to create a proper type for this
}

export default function PostPreview({ post }: PostPreviewProps) {
  const date = new Date(post.date);
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
        <div className="relative h-48 w-full">
          <Image
            src={
              post._embedded["wp:featuredmedia"][0].source_url ||
              "/placeholder.svg"
            }
            alt={post.title.rendered}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </h2>
        <div className="text-gray-600 mb-4 flex-grow">
          <div
            className="line-clamp-3"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{post._embedded?.author?.[0]?.name || "Unknown Author"}</span>
          <span>{timeAgo}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 text-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

