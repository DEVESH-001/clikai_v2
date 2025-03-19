/* eslint-disable @typescript-eslint/no-explicit-any */

// import { getAllPosts } from "@/lib/api"
// import PostPreview from "@/components/PostPreview"
// import Pagination from "@/components/Pagination"
// import SEO from "@/components/SEO"

// export const dynamic = "force-dynamic"

// export default async function BlogPage({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined }
// }) {
//   const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page, 10) : 1
//   const postsPerPage = 9

//   let posts = []
//   let totalPages = 0
//   let error = null

//   try {
//     const result = await getAllPosts(page, postsPerPage)
//     posts = result.posts
//     totalPages = result.totalPages
//   } catch (e) {
//     console.error("Failed to fetch posts:", e)
//     error = "Failed to load blog posts. Please try again later."
//   }

//   return (
//     <>
//       <SEO
//         title="Blog | Clik.ai"
//         description="Read the latest insights and updates from Clik.ai on commercial real estate and AI technology."
//       />
//       <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 mt-12">
//         <h1 className="text-4xl font-bold mb-8 text-center">Clik.ai Blog</h1>
//         {error ? (
//           <p className="text-red-500 text-center">{error}</p>
//         ) : posts.length > 0 ? (
//           <>
//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {posts.map((post: any) => (
//                 <div key={post.id} className="h-full">
//                   <PostPreview post={post} />
//                 </div>
//               ))}
//             </div>
//             <Pagination currentPage={page} totalPages={totalPages} />
//           </>
//         ) : (
//           <p className="text-xl text-center">No posts found. Check back soon for updates!</p>
//         )}
//       </div>
//     </>
//   )
// }

/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllPosts } from "@/lib/api";
import PostPreview from "@/components/PostPreview";
import Pagination from "@/components/sections/Pagination_Blogs";

import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import CollectionPageSchema from "@/components/schema/CollectionPageSchema";
import SEO from "@/components/SEO";


export const dynamic = "force-dynamic";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string"
      ? Number.parseInt(searchParams.page, 10)
      : 1;
  const postsPerPage = 9;

  let posts = [];
  let totalPages = 0;
  let error = null;

  try {
    const result = await getAllPosts(page, postsPerPage);
    posts = result.posts;
    totalPages = result.totalPages;
  } catch (e) {
    console.error("Failed to fetch posts:", e);
    error = "Failed to load blog posts. Please try again later.";
  }

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: "https://clik.ai" },
    { name: "Blog", url: "https://clik.ai/blog" },
  ];

  return (
    <>
      <SEO
        title="Blog | Clik.ai"
        description="Read the latest insights and updates from Clik.ai on commercial real estate and AI technology."
      />

      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <CollectionPageSchema
        title="Clik.ai Blog"
        description="Read the latest insights and updates from Clik.ai on commercial real estate and AI technology."
        url="https://clik.ai/blog"
        itemCount={posts.length}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 mt-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Clik.ai Blog</h1>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : posts.length > 0 ? (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: any) => (
                <div key={post.id} className="h-full">
                  <PostPreview post={post} />
                </div>
              ))}
            </div>
            <Pagination currentPage={page} totalPages={totalPages} />
          </>
        ) : (
          <p className="text-xl text-center">
            No posts found. Check back soon for updates!
          </p>
        )}
      </div>
    </>
  );
}
