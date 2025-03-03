const API_URL = "https://admin139255a85d.wpcomstaging.com/wp-json/wp/v2";

export async function getAllPosts() {
  const res = await fetch(`${API_URL}/posts?_embed`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const posts = await res.json();
  return posts[0];
}

export async function getAllPostSlugs() {
  const res = await fetch(`${API_URL}/posts?_fields=slug`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post slugs");
  }

  const posts = await res.json();
  return posts.map((post: { slug: string }) => post.slug);
}

// const API_URL = "https://admin139255a85d.wpcomstaging.com/wp-json/wp/v2";

// async function fetchAPI(endpoint: string) {
//   const res = await fetch(`${API_URL}${endpoint}`);
//   const json = await res.json();
//   if (json.errors) {
//     console.error(json.errors);
//     throw new Error("Failed to fetch API");
//   }
//   return json;
// }

// export async function getAllPosts() {
//   const posts = await fetchAPI("/posts?_embed&per_page=100");
//   return posts;
// }

// export async function getPostBySlug(slug: string) {
//   const posts = await fetchAPI(`/posts?slug=${slug}&_embed`);
//   return posts[0];
// }

// export async function getAllPostSlugs() {
//   const posts = await fetchAPI("/posts?_fields=slug");
//   return posts.map((post: { slug: string }) => post.slug);
// }
