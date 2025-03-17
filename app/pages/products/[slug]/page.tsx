import ProductSchema from "@/components/schema/ProductSchema"
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // This is a simplified example - you would fetch actual product data here
  const productData = {
    name:
      params.slug === "autouw"
        ? "AutoUW" 
        : params.slug === "InvestAssist"
          ? "InvestAssist"
          : params.slug === "SmartExtract"
            ? "SmartExtract"
            : "Clarity360",
    description: `Clik.ai's ${params.slug} provides powerful solutions for commercial real estate.`,
    image: `https://clik.ai/images/products/${params.slug}.jpg`,
  }

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: "https://clik.ai" },
    { name: "Products", url: "https://clik.ai/products" },
    { name: productData.name, url: `https://clik.ai/products/${params.slug}` },
  ]

  return (
    <>
      <ProductSchema
        name={productData.name}
        description={productData.description}
        image={productData.image}
        slug={params.slug}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Product page content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{productData.name}</h1>
        <p>{productData.description}</p>
        {/* Rest of the product page */}
      </div>
    </>
  )
}

