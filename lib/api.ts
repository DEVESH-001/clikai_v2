/* eslint-disable @typescript-eslint/no-explicit-any */
// NEW 

const API_URL = process.env.WORDPRESS_API_URL || "https://admin139255a85d.wpcomstaging.com/wp-json/wp/v2"

export async function getAllPosts(page = 1, perPage = 9) {
  const postsRes = await fetch(`${API_URL}/posts?_embed&page=${page}&per_page=${perPage}`, { cache: "no-store" })
  const posts = await postsRes.json()
  const totalPosts = Number.parseInt(postsRes.headers.get("X-WP-Total") || "0", 10)
  const totalPages = Number.parseInt(postsRes.headers.get("X-WP-TotalPages") || "0", 10)
  return { posts, totalPosts, totalPages }
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts(1, 100)
  const postArray = posts.posts.filter((post: any) => post.slug == slug)
  const post = postArray.length > 0 ? postArray[0] : null
  return post
}

export async function getAllPostSlugs() {
  const { posts } = await getAllPosts(1, 100)
  const slugs = posts.map((post: any) => post.slug)
  return slugs
}












// const API_URL = "https://admin139255a85d.wpcomstaging.com/wp-json/wp/v2";

// export async function getAllPosts() {
//   const res = await fetch(`${API_URL}/posts?_embed`, {
//     cache: "no-store",
//     next: { revalidate: 0 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts");
//   }

//   return res.json();
// }

// export async function getPostBySlug(slug: string) {
//   const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`, {
//     cache: "no-store",
//     next: { revalidate: 0 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch post");
//   }

//   const posts = await res.json();
//   return posts[0];
// }

// export async function getAllPostSlugs() {
//   const res = await fetch(`${API_URL}/posts?_fields=slug`, {
//     cache: "no-store",
//     next: { revalidate: 0 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch post slugs");
//   }

//   const posts = await res.json();
//   return posts.map((post: { slug: string }) => post.slug);
// }

