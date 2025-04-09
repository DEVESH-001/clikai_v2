
import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/1_HeroSection"
import { QuizSection } from "@/components/sections/3_QuizSection"
import { ProductCards } from "@/components/sections/4_ProductCards"
import { PricingSection } from "@/components/sections/5_PricingSection"
import { ServicesSection } from "@/components/sections/6_ServiceSection"
import { TestimonialsSection } from "@/components/sections/7_Testimonials"
import { FAQSection } from "@/components/sections/8_FaqSection"
import HomePageSchema from "@/components/schema/HomePageSchema"; 

export const metadata: Metadata = {
  title: "AI-Powered Commercial Real Estate Solutions",
  description:
    "Transform your CRE operations with Clik.ai's suite of AI-powered tools for lease abstraction, underwriting, and portfolio management.",
  openGraph: {
    title: "Clik.ai - AI-Powered Commercial Real Estate Solutions",
    description: "Transform your CRE operations with Clik.ai's suite of AI-powered tools.",
    url: "https://www.clik.ai",
    siteName: "Clik.ai",
    images: [
      {
        url: "/opengraph/Clikai.png",
        width: 1200,
        height: 630,
        alt: "Clik.ai Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clik.ai - AI-Powered CRE Solutions",
    description: "Transform your CRE operations with Clik.ai's suite of AI-powered tools.",
    images: ["https://www.clik.ai/twitter-image.jpg"],
  },
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-purple-100/30 to-indigo-100/30 z-0"></div>
      <div className="relative z-10">
      <HomePageSchema />
        <HeroSection />
        <QuizSection />
        <ProductCards highlightedProduct="AutoUW" />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />

      </div>
    </div>
  )
}

