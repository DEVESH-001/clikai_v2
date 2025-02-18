// //NEW

// "use client";

// import { useState, useEffect } from "react";
// import Head from "next/head";
// import Script from "next/script";

// import Link from "next/link";

// import { HeroSection } from "@/components/sections/01-hero-section";
// import { QuizSection } from "@/components/sections/03-quiz-section";
// import { ProductCards } from "@/components/sections/04-product-cards";
// import { PricingSection } from "@/components/sections/05-pricing-section";
// import { ServicesSection } from "@/components/sections/06-services-section";
// import { TestimonialsSection } from "@/components/sections/07-testimonials";
// import { FAQSection } from "@/components/sections/08-faq-section";

// export default function Home() {
//   const [highlightedProduct, setHighlightedProduct] = useState("AutoUW");

//   useEffect(() => {
//     if (window.location.hash === "#pricing") {
//       setTimeout(() => {
//         const pricingSection = document.getElementById("pricing");
//         if (pricingSection) {
//           pricingSection.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100);
//     }
//   }, []);

//   return (
//     <>
//       {/* SEO Metadata */}
//       <Head>
//         <title>Your CRE Platform | Smart CRE Solutions</title>
//         <meta
//           name="description"
//           content="The All-in-One Platform for Commercial Real Estate. Delivering smarter tools and expert support to transform the way CRE works."
//         />
//         <meta name="keywords" content="CRE, Commercial Real Estate, Real Estate Platform, AutoUW" />
//         <meta name="author" content="Your Company" />

//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://yoursite.com" />
//         <meta property="og:title" content="Your Platform | Smart CRE Solutions" />
//         <meta property="og:description" content="The All-in-One Platform for Commercial Real Estate." />
//         <meta property="og:image" content="https://yoursite.com/og-image.jpg" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Your Platform | Smart CRE Solutions" />
//         <meta name="twitter:description" content="The All-in-One Platform for Commercial Real Estate." />
//         <meta name="twitter:image" content="https://yoursite.com/og-image.jpg" />
//       </Head>

//       {/* 🔹 Structured Data for SEO */}
//       <Script
//         id="structured-data"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "Your Platform",
//             description: "An all-in-one platform for commercial real estate.",
//             url: "https://yoursite.com",
//             image: "https://yoursite.com/og-image.jpg",
//             publisher: {
//               "@type": "Organization",
//               name: "Your Company",
//               logo: {
//                 "@type": "ImageObject",
//                 url: "https://yoursite.com/logo.png",
//               },
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Background & Sections */}
//       <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
//         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light z-0"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-purple-100/30 to-indigo-100/30 z-0"></div>
//         <div className="relative z-10">
          
//           {/* 🔹 Semantic H1 Heading for SEO */}


//           <HeroSection />
//           <QuizSection onProductRecommended={setHighlightedProduct} />
//           <ProductCards highlightedProduct={highlightedProduct} />
//           <PricingSection />
//           <ServicesSection />
//           <TestimonialsSection />
//           <FAQSection />

//           {/* 🔹 Internal Navigation for Better SEO */}
//           <nav className="text-center py-5">
//             <Link href="/pricing" className="text-blue-600 hover:underline mx-2">
//               View Pricing
//             </Link>
//             <Link href="/services" className="text-blue-600 hover:underline mx-2">
//               Our Services
//             </Link>
//             <Link href="/contact" className="text-blue-600 hover:underline mx-2">
//               Contact Us
//             </Link>
//           </nav>

//           {/* 🔹 Footer with Social Links */}
//           <footer className="text-center py-5 text-gray-600">
//             <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
//             <div className="mt-2">
//               <Link href="https://x.com/clik_ai" className="mx-2 hover:underline">
//                 Twitter
//               </Link>
//               <Link href="https://www.linkedin.com/company/cliktechnologies/" className="mx-2 hover:underline">
//                 LinkedIn
//               </Link>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// }







//old

"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/sections/01-hero-section";
import { QuizSection } from "@/components/sections/03-quiz-section";
import { ProductCards } from "@/components/sections/04-product-cards";
import { PricingSection } from "@/components/sections/05-pricing-section";
import { ServicesSection } from "@/components/sections/06-services-section";
import { TestimonialsSection } from "@/components/sections/07-testimonials";
import { FAQSection } from "@/components/sections/08-faq-section";

export default function Home() {
  const [highlightedProduct, setHighlightedProduct] = useState("AutoUW");

  useEffect(() => {
    if (window.location.hash === "#pricing") {
      setTimeout(() => {
        const pricingSection = document.getElementById("pricing");
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-purple-100/30 to-indigo-100/30 z-0"></div>
      <div className="relative z-10">
        <HeroSection />

        <QuizSection onProductRecommended={setHighlightedProduct} />
        <ProductCards highlightedProduct={highlightedProduct} />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
      </div>
    </div>
  );
 }

// "use client";
// import { Metadata } from "next";
// import { HeroSection } from "@/components/sections/01-hero-section";
// import { QuizSection } from "@/components/sections/03-quiz-section";
// import { ProductCards } from "@/components/sections/04-product-cards";
// import { PricingSection } from "@/components/sections/05-pricing-section";
// import { ServicesSection } from "@/components/sections/06-services-section";
// import { TestimonialsSection } from "@/components/sections/07-testimonials";
// import { FAQSection } from "@/components/sections/08-faq-section";
// import { useState, useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Home | The All-in-One Platform for CRE",
//   description:
//     "Discover our comprehensive CRE platform offering smarter tools and expert support to revolutionize commercial real estate operations.",
//   openGraph: {
//     title: "Home | The All-in-One Platform for CRE",
//     description:
//       "Discover our comprehensive CRE platform offering smarter tools and expert support to revolutionize commercial real estate operations.",
//   },
// };

// export default function Home() {
//   const [highlightedProduct, setHighlightedProduct] = useState("AutoUW");

//   useEffect(() => {
//     if (window.location.hash === "#pricing") {
//       setTimeout(() => {
//         const pricingSection = document.getElementById("pricing");
//         if (pricingSection) {
//           pricingSection.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100);
//     }
//   }, []);
//   return (
//     <main className="relative min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
//       <div
//         className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light z-0"
//         aria-hidden="true"
//       ></div>
//       <div
//         className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-purple-100/30 to-indigo-100/30 z-0"
//         aria-hidden="true"
//       ></div>
//       <article className="relative z-10">
//         <HeroSection />
//         <section id="main-content">
//           <QuizSection onProductRecommended={setHighlightedProduct} />
//           <ProductCards highlightedProduct={highlightedProduct} />
//           <PricingSection />
//           <ServicesSection />
//           <TestimonialsSection />
//           <FAQSection />
//         </section>
//       </article>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebSite",
//             name: "Your Site Title",
//             url: "https://yoursite.com",
//             potentialAction: {
//               "@type": "SearchAction",
//               target: "https://yoursite.com/search?q={search_term_string}",
//               "query-input": "required name=search_term_string",
//             },
//           }),
//         }}
//       />
//     </main>
//   );
// }
