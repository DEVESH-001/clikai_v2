import ServiceSchema from "@/components/schema/ServiceSchema"
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema"

export default function ServicePage({ params }: { params: { category: string; slug: string } }) {
  // This is a simplified example - you would fetch actual service data here
  const serviceData = {
    name: `${params.slug
      .replace(/([A-Z])/g, " $1")
      .replace(/-/g, " ")
      .trim()}`,
    description: `Clik.ai's ${params.slug} service provides powerful solutions for commercial real estate.`,
    image: `https://clik.ai/images/services/${params.category}/${params.slug}.jpg`,
  }

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: "https://clik.ai" },
    { name: "Services", url: "https://clik.ai/services" },
    {
      name: params.category
        .replace(/([A-Z])/g, " $1")
        .replace(/-/g, " ")
        .trim(),
      url: `https://clik.ai/services/${params.category}`,
    },
    { name: serviceData.name, url: `https://clik.ai/services/${params.category}/${params.slug}` },
  ]

  return (
    <>
      <ServiceSchema
        name={serviceData.name}
        description={serviceData.description}
        image={serviceData.image}
        slug={params.slug}
        category={params.category}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Your service page content here */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{serviceData.name}</h1>
        <p>{serviceData.description}</p>
        {/* Rest of your service page */}
      </div>
    </>
  )
}

