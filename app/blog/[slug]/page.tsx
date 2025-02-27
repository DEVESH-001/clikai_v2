import { getPostBySlug, getAllPostSlugs } from "@/lib/api";
import SEO from "@/components/SEO";
import Image from "next/image";
import { format } from "date-fns";

export const revalidate = 60; // revalidate every 60 seconds

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const author = post._embedded?.["author"]?.[0]?.name || "Unknown Author";
  const date = post.date
    ? format(new Date(post.date), "MMMM dd, yyyy")
    : "Unknown Date";

  return (
    <>
      <SEO
        title={post.title.rendered}
        description={post.excerpt.rendered
          .replace(/<[^>]+>/g, "")
          .slice(0, 160)}
        ogImage={featuredImage}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>
          <div className="text-gray-600 mb-4">
            By {author} | {date}
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
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </>
  );
}
