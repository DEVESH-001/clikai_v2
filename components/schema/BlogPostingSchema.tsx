interface BlogPostingSchemaProps {
  title: string
  description: string
  datePublished: string
  dateModified: string
  authorName: string
  featuredImage?: string
  slug: string
}

export default function BlogPostingSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName,
  featuredImage,
  slug,
}: BlogPostingSchemaProps) {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: featuredImage || "https://clik.ai/default-blog-image.jpg",
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Clik.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://clik.ai/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://clik.ai/blog/${slug}`,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
}

