export default function HomePageSchema() {
    const homePageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Clik.ai Homepage",
      url: "https://clik.ai",
      description: "Home of Clik.ai offering AI solutions for real estate.",
    };
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />;
  }
  