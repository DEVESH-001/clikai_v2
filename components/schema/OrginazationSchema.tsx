export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clik.ai",
    url: "https://clik.ai",
    logo: "https://clik.ai/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/cliktechnologies/",
      "https://www.facebook.com/Cliktechnologies",
      "https://x.com/clik_ai",
      "https://vimeo.com/user145765890",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-123-456-7890",
      contactType: "customer service",
      email: "info@clik.ai",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "325 Front St W. Suite 400",
      addressLocality: "Toronto",
      addressRegion: "Ontario",
      postalCode: "M5V 2Y1",
      addressCountry: "CA",
    },
    description:
      "Clik.ai provides AI-powered solutions for commercial real estate, including lease abstraction, underwriting, and portfolio management.",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
}

