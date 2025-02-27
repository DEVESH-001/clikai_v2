/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllPosts } from "@/lib/api";
import PostPreview from "@/components/PostPreview";
import SEO from "@/components/SEO";

export const revalidate = 60; // revalidate every 60 seconds

export default async function BlogPage() {
  let posts = [];
  let error = null;

  try {
    posts = await getAllPosts();
  } catch (e) {
    console.error("Failed to fetch posts:", e);
    error = "Failed to load blog posts. Please try again later.";
  }

  return (
    <>
      <SEO
        title="Blog | Clik.ai"
        description="Read the latest insights and updates from Clik.ai on commercial real estate and AI technology."
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Clik.ai Blog</h1>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : posts.length > 0 ? (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {posts.map((post: any) => (
              <PostPreview key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-center">
            No posts found. Check back soon for updates!
          </p>
        )}
      </div>
    </>
  );
}
