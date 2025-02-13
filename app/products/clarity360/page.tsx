"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  BarChart3,
  FileText,
  Shield,
  Building,
  Brain,
  Layers,
  Settings,
  TrendingUp,
  Zap,
  PieChartIcon as ChartPie,
  FileSearch,
  Maximize,
} from "lucide-react"


// Features data
const features = [
  {
    title: "AI-Powered Extraction",
    description: "Extract 100+ data points with 99.9% accuracy",
    icon: Brain,
    gradient: "from-blue-500 to-purple-500",
    stats: "99.9% accuracy",
  },
  {
    title: "Comprehensive Coverage",
    description: "Process OMs, ACORD forms, and Appraisals",
    icon: Layers,
    gradient: "from-green-500 to-teal-500",
    stats: "3 document types",
  },
  {
    title: "Rapid Processing",
    description: "Analyze documents in minutes, not hours",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
    stats: "85% time saved",
  },
  {
    title: "Market Intelligence",
    description: "Access property-specific market insights",
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500",
    stats: "Real-time data",
  },
]

// Product data
const products = [
  {
    title: "OM Parser",
    icon: FileText,
    features: [
      "Extract 100+ data points",
      "Analyze financial metrics",
      "Capture property details",
      "Process 50-page OM in 2-3 minutes",
    ],
    stats: {
      accuracy: "99.9%",
      dataPoints: "100+",
      processingTime: "2-3 min",
    },
  },
  {
    title: "ACORD Parser",
    icon: Shield,
    features: [
      "Extract policy information",
      "Identify coverage limits",
      "Process ACORD 25 & 28 forms",
      "Streamline insurance workflows",
    ],
    stats: {
      accuracy: "99.5%",
      formTypes: "2",
      processingTime: "< 1 min",
    },
  },
  {
    title: "Appraisal Parser",
    icon: Building,
    features: [
      "Extract valuation metrics",
      "Analyze comparables",
      "Capture detailed property info",
      "Process 100+ page appraisals",
    ],
    stats: {
      accuracy: "99.7%",
      dataPoints: "150+",
      processingTime: "3-5 min",
    },
  },
]

// Workflow steps
const workflowSteps = [
  {
    title: "Upload & Detect",
    description: "AI auto-detects document type",
    icon: FileSearch,
    stat: "100% auto-detection",
  },
  {
    title: "Extract & Analyze",
    description: "AI extracts key data points",
    icon: Brain,
    stat: "100+ data points",
  },
  {
    title: "Review & Validate",
    description: "Side-by-side comparison",
    icon: CheckCircle2,
    stat: "99.9% accuracy",
  },
  {
    title: "Generate Insights",
    description: "Comprehensive reports & analysis",
    icon: ChartPie,
    stat: "10+ report types",
  },
]

// Key benefits
const keyBenefits = [
  {
    title: "Time Efficiency",
    description: "Reduce processing time by up to 85%",
    icon: Clock,
    stat: "85% time saved",
  },
  {
    title: "Improved Accuracy",
    description: "Minimize errors with AI-powered extraction",
    icon: CheckCircle2,
    stat: "99.9% accuracy",
  },
  {
    title: "Comprehensive Analysis",
    description: "Extract 100+ data points per document",
    icon: Maximize,
    stat: "100+ data points",
  },
  {
    title: "Scalability",
    description: "Process high volumes without slowdowns",
    icon: Layers,
    stat: "Unlimited docs/mo",
  },
  {
    title: "Customization",
    description: "Tailor extraction to your needs",
    icon: Settings,
    stat: "100% customizable",
  },
  {
    title: "Competitive Edge",
    description: "Make faster, data-driven decisions",
    icon: TrendingUp,
    stat: "2x faster decisions",
  },
]

// Pricing plans
const plans = [
  {
    name: "Starter",
    description: "For small investment teams",
    monthlyPrice: 299,
    features: [
      "Up to 10 documents per month",
      "Basic data extraction",
      "Standard market insights",
      "Email support",
      "Data export capabilities",
    ],
    stats: {
      documents: "10/mo",
      dataPoints: "50+",
      accuracy: "99.5%",
    },
  },
  {
    name: "Professional",
    description: "For growing CRE firms",
    monthlyPrice: 799,
    features: [
      "Up to 50 documents per month",
      "Advanced data extraction",
      "Comprehensive market analysis",
      "Priority support",
      "Custom data fields",
      "API access",
    ],
    stats: {
      documents: "50/mo",
      dataPoints: "100+",
      accuracy: "99.7%",
    },
    ribbon: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For large institutions",
    price: "Custom",
    features: [
      "Unlimited documents",
      "Full extraction suite",
      "Custom AI model training",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
      "24/7 premium support",
    ],
    stats: {
      documents: "Unlimited",
      dataPoints: "150+",
      accuracy: "99.9%",
    },
  },
]

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
]

export default function Clarity360OMPage() {
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

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
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
                className="text-lg text-gray-700 mb-6"
              >
                Extract, analyze, and leverage critical data from Offering Memorandums, Insurance ACORD forms, and
                Appraisals with AI-powered intelligence. Process documents 85% faster with 99.9% accuracy.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 rounded-[8px]"
                >
                  Start Free Trial
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full aspect-[4/3] max-w-xl mx-auto"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/om-jDnb2bEQitbGHHXu0iZPkyF9YQbvDA.png"
                alt="Clarity360 OM Interface"
                width={1000}
                height={1000}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Clarity360?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 h-full bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.gradient} w-fit mb-3`}>
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                  <div className="text-sm font-semibold text-blue-600">{feature.stats}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 relative bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Clarity360 Suite</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="p-4 bg-white/90 backdrop-blur-sm">
                <product.icon className="h-10 w-10 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-3">
                  <h4 className="font-semibold mb-2">Key Stats:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(product.stats).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-medium">{key}: </span>
                        <span className="text-blue-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How Clarity360 Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="p-4 bg-white/90 backdrop-blur-sm">
                <step.icon className="h-10 w-10 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                <div className="text-sm font-semibold text-blue-600">{step.stat}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 relative bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Benefits of Clarity360</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="p-4 bg-white/90 backdrop-blur-sm">
                <benefit.icon className="h-10 w-10 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{benefit.description}</p>
                <div className="text-sm font-semibold text-blue-600">{benefit.stat}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Simple and Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-4 ${
                  index === 1
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
                    : "bg-white/90 backdrop-blur-sm"
                } hover:shadow-lg transition-all duration-300`}
              >
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">
                  {typeof plan.price === "number" || typeof plan.monthlyPrice === "number"
                    ? `$${plan.monthlyPrice || plan.price}`
                    : plan.price}
                  {typeof plan.price === "number" && <span className="text-lg">/month</span>}
                </div>
                <p className={`mb-4 text-sm ${index === 1 ? "text-blue-100" : "text-gray-600"}`}>{plan.description}</p>
                <ul className="space-y-2 mb-4 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className={`h-4 w-4 ${index === 1 ? "text-blue-200" : "text-green-500"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-3 mb-4">
                  <h4 className="font-semibold mb-2">Key Stats:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(plan.stats).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-medium">{key}: </span>
                        <span className={index === 1 ? "text-blue-200" : "text-blue-600"}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  className={`w-full rounded-[8px] ${
                    index === 1 ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 relative bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm rounded-[8px]">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base font-medium px-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 text-sm text-gray-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-12 bg-gradient-to-br from-[#001F3F] via-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Revolutionize Your Document Analysis?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
              Join leading firms using Clarity360 to process documents 85% faster, extract 100+ data points per
              document, and make better investment decisions.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg font-semibold rounded-[8px]"
            >
              Start Your Free Trial
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

