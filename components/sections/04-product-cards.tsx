"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimation,
} from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  BarChart2,
  Zap,
  Users,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import { imageUrls } from "@/utils/imageUrls";

interface ProductCardsProps {
  highlightedProduct?: string;
}

const products = [
  {
    title: "AutoUW",
    badge: "Most Popular",
    description:
      "AI-powered underwriting automation for commercial real estate loans.",
    features: [
      "Automated financial spreading and rent roll analysis",
      "Real-time risk assessment and credit scoring",
      "Customizable underwriting criteria and workflows",
    ],
    stats: [
      { label: "Underwriting Speed", value: "90%", icon: Clock },
      { label: "Loan Volume Increase", value: "3x", icon: BarChart2 },
      { label: "Decision Accuracy", value: "99%", icon: CheckCircle2 },
    ],
    useCases: [
      "Commercial banks streamlining loan processes",
      "CMBS lenders improving deal flow efficiency",
      "Agency lenders automating compliance checks",
    ],
    image: imageUrls.products.autoUW,
    link: "/autouw",
    theme: "blue",
  },
  {
    title: "InvestAssist",
    badge: "New",
    description:
      "Comprehensive investment analysis and portfolio management platform.",
    features: [
      "Advanced deal modeling with machine learning insights",
      "Automated investment memos and presentations",
      "Real-time portfolio performance tracking",
    ],
    stats: [
      { label: "IRR Improvement", value: "20%", icon: BarChart2 },
      { label: "Analysis Speed", value: "10x", icon: Zap },
      { label: "Investor Reporting", value: "100%", icon: Users },
    ],
    useCases: [
      "Private equity firms optimizing deal analysis",
      "REITs enhancing portfolio management",
      "Family offices streamlining investment decisions",
    ],
    image: imageUrls.products.investAssist,
    link: "/investassist",
    theme: "emerald",
  },
  {
    title: "SmartExtract",
    badge: "Enterprise Ready",
    description:
      "Intelligent document processing and data extraction API for CRE.",
    features: [
      "Multi-document type support (leases, financials, legal)",
      "Contextual data extraction with 99.9% accuracy",
      "Seamless integration with existing CRE platforms",
    ],
    stats: [
      { label: "Processing Time Cut", value: "95%", icon: Clock },
      { label: "Data Accuracy", value: "99.9%", icon: CheckCircle2 },
      { label: "Annual Cost Savings", value: "$500k+", icon: BarChart2 },
    ],
    useCases: [
      "CRE tech companies enhancing their platforms",
      "Property management firms automating lease abstraction",
      "Appraisal firms accelerating report generation",
    ],
    image: imageUrls.products.smartExtract,
    link: "/smartextract",
    theme: "violet",
  },
  {
    title: "Clarity360",
    badge: "GenAI Powered",
    description:
      "Comprehensive CRE document analysis and market intelligence platform.",
    features: [
      "AI-driven market comps and trend analysis",
      "Automated property valuation and risk assessment",
      "Customizable dashboards and reporting",
    ],
    stats: [
      { label: "Market Data Points", value: "10x", icon: BarChart2 },
      { label: "Valuation Accuracy", value: "+15%", icon: CheckCircle2 },
      { label: "Decision Time Cut", value: "75%", icon: Clock },
    ],
    useCases: [
      "Investment firms conducting market research",
      "Brokers generating comprehensive property reports",
      "Lenders assessing market risks and opportunities",
    ],
    image: imageUrls.products.clarity360,
    link: "/clarity360",
    theme: "indigo",
  },
];

interface Product {
  title: string;
  badge: string;
  description: string;
  features: string[];
  stats: { label: string; value: string; icon: React.ComponentType }[];
  useCases: string[];
  image: string;
  link: string;
  theme: string;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  const springConfig = { stiffness: 100, damping: 30 };
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);

  return (
    <motion.div
      ref={cardRef}
      style={{
        y: springY,
        scale: springScale,
      }}
      className={`relative w-full ${
        index % 2 === 0 ? "lg:translate-y-32" : ""
      }`}
    >
      <Card
        className={`group relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white to-blue-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-500`}
      >
        <div className="relative p-4 md:p-6">
          <Badge
            className={`absolute top-4 right-4 bg-blue-200 text-blue-800 border-blue-300 text-sm font-semibold px-3 py-1.5 rounded-full shadow-md`}
          >
            {product.badge}
          </Badge>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                {product.title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4">
                {product.description}
              </p>

              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                {product.stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="text-center p-2 bg-white/60 rounded-lg backdrop-blur-sm"
                    >
                      <Icon />
                      <div className="text-lg md:text-2xl font-bold text-blue-600">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-2 mb-4">
                {product.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mb-2">Use Cases:</h4>
              <ul className="space-y-2 mb-6">
                {product.useCases.map((useCase, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.2 + 0.6 }}
                    className="flex items-start gap-2"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{useCase}</span>
                  </motion.li>
                ))}
              </ul>

              <Button className="rounded-[8px] w-full group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base">
                Explore {product.title}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>
            </div>

            <div className="relative aspect-square hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function ProductCards({}: ProductCardsProps) {
  return (
    <section
      className={`relative py-12 md:py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-50 ${GeistSans.className}`}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
          >
            AI-Powered CRE Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-700  mx-auto"
          >
            Revolutionize your commercial real estate operations with our suite
            of cutting-edge AI technologies
          </motion.p>
        </div>

        <div className="space-y-4 md:space-y-8 lg:space-y-12">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
