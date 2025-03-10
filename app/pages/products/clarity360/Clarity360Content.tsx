"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  BarChart3,
  FileText,
  Shield,
  Building,
  TrendingUp,
  Rocket,
  Upload,
  Database,
  DollarSign,
} from "lucide-react";
import { BookDemoModal } from "@/components/BookDemo";
import { useState } from "react";

// Product data
const products = [
  {
    title: "Clarity360 OM",
    icon: FileText,
    features: [
      "Extract key data points",
      "Analyze financial metrics",
      "Capture property details",
      "Process multi-page offering memorandums",
    ],
    stats: {
      dataPoints: "Property & Financial Metrics",
      processingTime: "2-3 minutes",
    },
  },
  {
    title: "Clarity360 Insurance",
    icon: Shield,
    features: [
      "Extract policy information",
      "Identify coverage limits",
      "Process ACORD 25 & 28 forms",
      "Streamline insurance workflows",
    ],
    stats: {
      formTypes: "ACORD 25 & 28",
      processingTime: "Under 1 minute",
    },
  },
  {
    title: "Clarity360 Appraisals",
    icon: Building,
    features: [
      "Extract valuation metrics",
      "Analyze comparables",
      "Capture property info",
      "Process detailed appraisals",
    ],
    stats: {
      dataPoints: "Property & Market Analysis",
      processingTime: "3-5 minutes",
    },
  },
];

// FAQ items
const faqItems = [
  {
    question: "What types of documents can Clarity360 process?",
    answer:
      "Clarity360 specializes in processing Offering Memorandums (OMs), ACORD 25 & 28 insurance forms, and commercial real estate appraisals. Our AI is trained to identify and extract key metrics, charts, tables, and narrative information from these complex documents with high accuracy.",
  },
  {
    question: "How accurate is the data extraction?",
    answer:
      "Our AI-powered extraction achieves up to 99.9% accuracy through multiple validation layers and machine learning algorithms. Each extraction undergoes automated quality checks and is verified against our comprehensive CRE database for consistency. For OMs, we typically achieve 99.9% accuracy, ACORD forms 99.5%, and appraisals 99.7%.",
  },
  {
    question: "Can I customize the data fields I want to extract?",
    answer:
      "Our Professional and Enterprise plans allow you to define custom data fields and extraction parameters across all document types. You can tailor the system to focus on specific metrics and information that matter most to your investment strategy. We offer up to 50 custom fields for Professional plans and unlimited custom fields for Enterprise users.",
  },
  {
    question: "How does Clarity360 handle sensitive information?",
    answer:
      "We take data security seriously. All documents are processed in a secure, encrypted environment using AES-256 encryption. We comply with SOC 2 Type II and ISO 27001 security standards. We do not store your documents after processing unless explicitly requested, and all data is automatically purged after 30 days by default.",
  },
  {
    question: "Can Clarity360 integrate with my existing systems?",
    answer:
      "Yes, Clarity360 is designed for seamless integration. We offer RESTful APIs and webhooks for real-time data transfer. We support direct integrations with popular CRE platforms like Yardi, MRI, and CoStar. Our Enterprise plan includes custom integrations tailored to your specific tech stack.",
  },
  {
    question: "How long does it take to process a document?",
    answer:
      "Processing time varies by document type and complexity. On average: Offering Memorandums (50 pages) take 2-3 minutes, ACORD forms about 30 seconds, and appraisals (100+ pages) 3-5 minutes. Our system can handle batch processing, allowing for hundreds of documents to be processed simultaneously.",
  },
  {
    question: "Is there a limit to the number of documents I can process?",
    answer:
      "Document limits depend on your subscription plan. Starter allows up to 10 documents per month, Professional up to 50, and Enterprise offers unlimited processing. We also offer flexible overage options for occasional high-volume needs.",
  },
];

export default function Clarity360OMPage() {
    const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

    const openBookDemo = () => setIsBookDemoOpen(true);
    const closeBookDemo = () => setIsBookDemoOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl mt-16 md:mt-32">
          <div className="grid lg:grid-cols-[1fr,1.3fr] gap-12 items-center">
            <div className="max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              >
                Transform{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  CRE Documents
                </span>{" "}
                into Actionable Insights
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base md:text-lg text-gray-700 mb-6"
              >
                Extract, analyze, and leverage critical data from Offering
                Memorandums, Insurance ACORD forms, and Appraisals with
                AI-powered intelligence. Process documents 85% faster with 99.9%
                accuracy.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 rounded-[8px]"
                  onClick={openBookDemo}
                >
                  Book Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full aspect-[16/9] max-w-[130%] mx-auto overflow-hidden mt-8 lg:mt-0"
            >
              <Image
                src="/images/Products_Section_Images/Clarity360/Hero_Image.png"
                alt="Clarity360 OM Interface"
                width={800}
                height={600}
                objectFit="cover"
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 relative bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Clarity360 Suite
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group p-4 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={
                          index === 0
                            ? "/images/Products_Section_Images/Clarity360/Clarity360OM.jpeg"
                            : index === 1
                            ? "/images/Products_Section_Images/Clarity360/Clarity360_Insurance.jpeg"
                            : "/images/Products_Section_Images/Clarity360/Clarity360Appraisals.jpeg"
                        }
                        alt={`${product.title} Interface`}
                        width={600}
                        height={400}
                        className="object-cover rounded-lg shadow-lg transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-medium">
                          Click to view details
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <product.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">
                      {product.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="border-t pt-3 mt-auto">
                    <h4 className="font-semibold mb-2">Processing Details:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      {Object.entries(product.stats).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium">{key}: </span>
                          <span className="text-blue-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                      onClick={openBookDemo}
                    >
                      Book Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Clarity360 OM Works Section */}
      <section className="py-12 relative bg-gradient-to-br from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            How Clarity360 OM Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "One-Click Data Extraction",
                description:
                  "Automatically pull out property details, financials, unit mix, rent roll data, comps, and market insights.",
                icon: Upload,
              },
              {
                title: "Tag, Map, and Aggregate Insights",
                description:
                  "Map each OM to specific properties, track data points over time, and create a searchable database.",
                icon: Database,
              },
              {
                title: "Generate Actionable Analytics",
                description:
                  "Transform raw data into valuable insights, enabling data-driven decision-making and strategic assessments.",
                icon: BarChart3,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-4 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-blue-400"
              >
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-lg bg-blue-100 mr-3">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Case Studies: Real-World Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Mid-Sized Investment Firm Saves $50,000 in Data Costs",
                challenge:
                  "Reliance on expensive third-party market data providers with inconsistent accuracy.",
                solution:
                  "Built structured database of own comps and financials using Clarity360 OM.",
                results: [
                  "$50,000+ annual savings",
                  "More accurate and relevant comps",
                  "Faster deal screening and underwriting",
                ],
                icon: DollarSign,
              },
              {
                title:
                  "Brokerage Firm Converts 20% More Deals with Faster Insights",
                challenge:
                  "Slow deal turnaround times due to manual data extraction.",
                solution:
                  "Instant property data, financials, and sales comps extraction with Clarity360 OM.",
                results: [
                  "20% increase in deal conversion rates",
                  "2+ hours saved per deal",
                  "Better client satisfaction",
                ],
                icon: TrendingUp,
              },
              {
                title: "Syndicator Identifies a $10M Off-Market Opportunity",
                challenge:
                  "Difficulty tracking property sales and market movements for off-market opportunities.",
                solution:
                  "Aggregated comps from previous deals using Clarity360 OM.",
                results: [
                  "Acquired $10M property ahead of competitors",
                  "Created internal comps database",
                  "Increased investor confidence",
                ],
                icon: Rocket,
              },
            ].map((caseStudy, index) => (
              <Card
                key={index}
                className="p-4 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-blue-100 mr-3">
                    <caseStudy.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-base lg:text-lg font-semibold">
                    {caseStudy.title}
                  </h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Challenge:</span>{" "}
                    {caseStudy.challenge}
                  </p>
                  <p>
                    <span className="font-medium">Solution:</span>{" "}
                    {caseStudy.solution}
                  </p>
                  <div>
                    <span className="font-medium">Results:</span>
                    <ul className="list-disc list-inside pl-2">
                      {caseStudy.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Parser Section */}
      <section className="py-12 relative bg-gradient-to-br from-purple-50/50 to-pink-50/50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            <div className="grid lg:grid-cols-[1fr,1fr] gap-8 items-start">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold max-w-[80%] mx-auto text-center mb-8">
                  Unlock Efficiency with Insurance ACORD Extraction
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  In today&apos;s fast-paced real estate industry, manual data
                  entry and parsing insurance forms like ACORD 25 and ACORD 28
                  can be slow, inefficient, and error-prone. Transform your
                  workflow with Clarity360&apos;s automated Insurance ACORD
                  Extraction platform.
                </p>
                <div className="grid gap-4">
                  <Card className="p-4 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-purple-400">
                    <h3 className="text-lg md:text-xl font-semibold mb-4">
                      How It Works: Simple Two-Step Process
                    </h3>
                    <div className="grid gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Upload className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-base">
                            1. Effortless Document Upload
                          </h4>
                          <p className="text-sm text-gray-600">
                            Simply drag and drop your ACORD 25 or ACORD 28
                            forms. Our system automatically detects and
                            categorizes document types, eliminating manual
                            sorting.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-green-100">
                          <FileText className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-base">
                            2. Real-Time Data Extraction
                          </h4>
                          <p className="text-sm text-gray-600">
                            Watch as our AI instantly extracts key information
                            including producer details, policy information,
                            coverage limits, and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-purple-400">
                    <h4 className="font-semibold text-base mb-3">
                      Key Data Points Extracted
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Producer Information",
                        "Insured Details",
                        "Policy Numbers",
                        "Coverage Limits",
                        "Effective Dates",
                        "Hidden Notes & Details",
                        "Additional Insureds",
                        "Policy Exclusions",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden shadow-xl"
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clarity360%20Insurance%20Image.jpg-6ZZ1ZUnLroGo1FPUj4pEXkDheozUyn.jpeg"
                      alt="Clarity360 Insurance ACORD Extraction Interface"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </motion.div>
                  <div className="absolute -z-10 inset-0 blur-3xl bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 opacity-50"></div>
                </div>

                <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-purple-400">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Automated form type detection",
                      "High-accuracy data extraction",
                      "Real-time processing",
                      "Customizable data fields",
                      "Integration with existing systems",
                      "Secure document handling",
                    ].map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-purple-400">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Don&apos;t Get Left Behind
                  </h3>
                  <p className="text-sm text-gray-700">
                    In an industry where every second counts, manual document
                    processing is no longer viable. Join leading firms using
                    Clarity360&apos;s Insurance ACORD Extraction to process
                    documents faster, minimize risks, and close deals quicker.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 rounded-[8px] whitespace-nowrap"
                  onClick={openBookDemo}
                >
                  Book Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Appraisal Parser Section */}
      <section className="py-12 relative bg-gradient-to-br from-emerald-50/50 to-teal-50/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr,1fr] gap-8 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold max-w-[80%] mx-auto text-center mb-8">
                Appraisal Parser: Eliminate Manual Data Extraction and Close
                Deals Faster
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Appraisals are critical to any commercial real estate
                transaction, but extracting data from these lengthy, detailed
                documents can take hours. That&apos;s where Clarity360&apos;s
                Appraisal Parser steps in.
              </p>
              <h3 className="text-xl font-semibold">
                Why the Appraisal Parser is a Must-Have for CRE Professionals
              </h3>
              <div className="grid gap-4">
                {[
                  {
                    title: "Turn Appraisals into Actionable Data in Seconds",
                    description:
                      "Automatically extract key data points in minutes. From property values to rental income, you'll have all the information you need—right when you need it.",
                    icon: Clock,
                    color: "green",
                  },
                  {
                    title: "Speed Up Your Deal Cycle",
                    description:
                      "Reduce turnaround time and stay ahead of the competition. Don't let manual processes hold you back.",
                    icon: Rocket,
                    color: "blue",
                  },
                  {
                    title: "Reduce Errors, Increase Confidence",
                    description:
                      "Trust the data you're working with, making your decisions faster and with more confidence.",
                    icon: CheckCircle2,
                    color: "purple",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-emerald-400"
                  >
                    <div className="flex gap-3">
                      <div className={`p-2 rounded-lg bg-${item.color}-100`}>
                        <item.icon
                          className={`h-5 w-5 text-${item.color}-600`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clarity360%20Appraisals.jpg-aipgDcapz6TpU286rSQZPPENMQGViL.jpeg"
                    alt="Clarity360 Appraisal Parser Interface"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </motion.div>
                <div className="absolute -z-10 inset-0 blur-3xl bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 opacity-50"></div>
              </div>

              <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-emerald-400">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Don&apos;t Fall Behind the Competition
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  In CRE, speed an d accuracy are everything. If you&apos;re
                  still extracting data manually, your competition is already
                  one step ahead. Join the Clarity360 community and get free
                  access to the Appraisal Parser to start working smarter, not
                  harder.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 rounded-[8px]"
                  onClick={openBookDemo}
                >
                  Book Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 relative bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm rounded-[8px]">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base font-medium px-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 text-sm text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </section>
      {/* new cta */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-[#001F3F] via-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z"
              fill="rgba(255, 255, 255, 0.05)"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Documents into Valuable Data?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Unlock hidden value in your documents. Transform raw data into
              actionable insights for smarter, faster investment decisions.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-[8px]"
                onClick={openBookDemo}
              >
                Book Demo
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          <BookDemoModal isOpen={isBookDemoOpen} onClose={closeBookDemo} />
        </div>
      </section>
    </div>
  );
}
