interface ProductSchemaProps {
  name: string
  description: string
  image: string
  slug: string
}

export default function ProductSchema({ name, description, image, slug }: ProductSchemaProps) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: image || "https://clik.ai/default-product-image.jpg",
    url: `https://clik.ai/products/${slug}`,
    brand: {
      "@type": "Brand",
      name: "Clik.ai",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "0",
      availability: "https://schema.org/InStock",
      url: `https://clik.ai/products/${slug}`,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
}

