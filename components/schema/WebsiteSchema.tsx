export default function WebsiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Clik.ai",
    url: "https://clik.ai",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://clik.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
}

