// import { getPostBySlug, getAllPostSlugs } from "@/lib/api";
// import SEO from "@/components/SEO";
// import Image from "next/image";
// import { format } from "date-fns";
// import Link from "next/link";

// export const dynamic = "force-dynamic";

// export async function generateStaticParams() {
//   const slugs = await getAllPostSlugs();
//   return slugs.map((slug: string) => ({ slug }));
// }

// export default async function BlogPost({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const post = await getPostBySlug(params.slug);

//   if (!post) {
//     return <div className="text-center py-20">Post not found</div>;
//   }

//   const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
//   const author = post._embedded?.["author"]?.[0]?.name || "Unknown Author";
//   const date = post.date
//     ? format(new Date(post.date), "MMMM dd, yyyy")
//     : "Unknown Date";

//   return (
//     <>
//       <SEO
//         title={post.title.rendered}
//         description={post.excerpt.rendered
//           .replace(/<[^>]+>/g, "")
//           .slice(0, 160)}
//         ogImage={featuredImage}
//       />
//       <div className="bg-white min-h-screen">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32">
//           <Link
//             href="/blog"
//             className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
//           >
//             ← Back to Blog
//           </Link>
//           <article className="max-w-3xl mx-auto">
//             <header className="mb-8">
//               <h1
//                 className="text-3xl sm:text-4xl font-bold mb-4"
//                 dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//               />
//               <div className="text-gray-600 mb-4">
//                 By {author} | {date}
//               </div>
//             </header>
//             {featuredImage && (
//               <Image
//                 src={featuredImage || "/placeholder.svg"}
//                 alt={post.title.rendered}
//                 width={1200}
//                 height={600}
//                 className="rounded-lg mb-8 w-full h-auto"
//               />
//             )}
//             <div
//               className="prose prose-lg max-w-none"
//               dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//             />
//           </article>
//         </div>
//       </div>
//     </>
//   );
// }




import { getPostBySlug, getAllPostSlugs } from "@/lib/api"
import SEO from "@/components/SEO"
import Image from "next/image"
import { format } from "date-fns"
import Link from "next/link"
import BlogPostingSchema from "@/components/schema/BlogPostingSchema"
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema"

export const dynamic = "force-dynamic"

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug: string) => ({ slug }))
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return <div className="text-center py-20">Post not found</div>
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
  const author = post._embedded?.["author"]?.[0]?.name || "Unknown Author"
  const datePublished = post.date || new Date().toISOString()
  const dateModified = post.modified || datePublished
  const formattedDate = post.date ? format(new Date(post.date), "MMMM dd, yyyy") : "Unknown Date"

  // Clean description for schema (remove HTML tags)
  const cleanDescription = post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160)

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: "https://clik.ai" },
    { name: "Blog", url: "https://clik.ai/blog" },
    { name: post.title.rendered, url: `https://clik.ai/blog/${params.slug}` },
  ]

  return (
    <>
      <SEO title={post.title.rendered} description={cleanDescription} ogImage={featuredImage} />

      {/* Schema Markup */}
      <BlogPostingSchema
        title={post.title.rendered}
        description={cleanDescription}
        datePublished={datePublished}
        dateModified={dateModified}
        authorName={author}
        featuredImage={featuredImage}
        slug={params.slug}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            ← Back to Blog
          </Link>
          <article className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1
                className="text-3xl sm:text-4xl font-bold mb-4"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div className="text-gray-600 mb-4">
                By {author} | {formattedDate}
              </div>
            </header>
            {featuredImage && (
              <Image
                src={featuredImage || "/placeholder.svg"}
                alt={post.title.rendered}
                width={1200}
                height={600}
                className="rounded-lg mb-8 w-full h-auto"
              />
            )}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </article>
        </div>
      </div>
    </>
  )
}

