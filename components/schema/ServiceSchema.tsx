interface ServiceSchemaProps {
  name: string
  description: string
  image?: string
  slug: string
  category: string
}

export default function ServiceSchema({ name, description, image, slug, category }: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    image: image || "https://clik.ai/default-service-image.jpg",
    url: `https://clik.ai/services/${category}/${slug}`,
    provider: {
      "@type": "Organization",
      name: "Clik.ai",
      logo: "https://clik.ai/logo.png",
    },
    serviceType: category,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
}

