interface CollectionPageSchemaProps {
  title: string
  description: string
  url: string
  itemCount: number
}

export default function CollectionPageSchema({ title, description, url, itemCount }: CollectionPageSchemaProps) {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    headline: title,
    description: description,
    url: url,
    numberOfItems: itemCount,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: itemCount,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      url: url,
    },
    
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
  )
}

