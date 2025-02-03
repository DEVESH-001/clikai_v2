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
  BarChart3,
  CheckCircle2,
  Clock,
  FileText,
  Zap,
  Cloud,

} from "lucide-react";

// Features data
const features = [
  {
    title: "Multi-Document Support",
    description:
      "Process various CRE documents including leases, financials, and legal papers",
    icon: FileText,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "High-Accuracy Extraction",
    description:
      "Achieve 99.9% accuracy in data extraction with advanced AI algorithms",
    icon: CheckCircle2,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Seamless Integration",
    description: "Easily integrate with existing CRE platforms via robust API",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Scalable Processing",
    description:
      "Handle high volumes of documents with cloud-based infrastructure",
    icon: Cloud,
    gradient: "from-purple-500 to-pink-500",
  },
];

// Benefits data
const benefits = [
  {
    title: "Time Saved",
    description: "Reduce document processing time by up to 95%",
    metric: "95%",
    icon: Clock,
  },
  {
    title: "Accuracy",
    description: "Achieve 99.9% accuracy in data extraction",
    metric: "99.9%",
    icon: CheckCircle2,
  },
  {
    title: "Cost Reduction",
    description: "Save over $500k annually on manual data entry",
    metric: "$500k+",
    icon: BarChart3,
  },
];

// Pricing plans
const plans = [
  {
    name: "Starter",
    description: "For small CRE firms",
    monthlyPrice: 499,
    features: [
      "Up to 1,000 pages/month",
      "Basic document types support",
      "Standard API access",
      "Email support",
      "99% accuracy guarantee",
    ],
  },
  {
    name: "Professional",
    description: "For growing CRE businesses",
    monthlyPrice: 999,
    features: [
      "Up to 5,000 pages/month",
      "Advanced document types support",
      "Priority API access",
      "Phone & email support",
      "99.5% accuracy guarantee",
      "Custom field extraction",
    ],
    ribbon: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: "Custom",
    features: [
      "Unlimited pages",
      "All document types supported",
      "Dedicated API instance",
      "24/7 premium support",
      "99.9% accuracy guarantee",
      "Custom AI model training",
      "On-premise deployment option",
    ],
  },
];

// FAQ items
const faqItems = [
  {
    question: "What types of documents can SmartExtract process?",
    answer:
      "SmartExtract can process a wide range of CRE documents, including but not limited to leases, rent rolls, operating statements, offering memorandums, appraisals, and legal contracts. Our AI is trained on diverse CRE document types and can adapt to new formats quickly.",
  },
  {
    question: "How accurate is the data extraction?",
    answer:
      "SmartExtract achieves up to 99.9% accuracy in data extraction. This high accuracy is achieved through our advanced AI algorithms, continuous learning from diverse datasets, and built-in validation checks. For enterprise clients, we offer custom AI model training to further improve accuracy for specific document types.",
  },
  {
    question: "How does the API integration work?",
    answer:
      "SmartExtract provides a RESTful API that allows seamless integration with your existing CRE platforms. You can send documents for processing and receive structured data in return. Our API documentation includes detailed guides and code samples for easy implementation. We also offer SDK support for popular programming languages.",
  },
  {
    question: "Can SmartExtract handle high volumes of documents?",
    answer:
      "Yes, SmartExtract is built on a scalable, cloud-based infrastructure that can handle high volumes of documents. Our Enterprise plan offers unlimited document processing, and we can provide dedicated resources for clients with extremely high volume needs. We also offer on-premise deployment options for enterprises with specific security requirements.",
  },
];

// Client logos
const clientLogos = [
  {
    name: "Newmark",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newmark-KnJSkOAznB2WnzRWFJGej8maFHZ8jG.svg",
  },
  {
    name: "K-Star",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kstar-ufUmUi6SLAksMMJdU48s5z6de1gHCB.webp",
  },
  {
    name: "Colliers",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colliers-EdSYubmqncaB8VzVWjg0wgC8gHKo1x.png",
  },
  {
    name: "BWE",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bwe-blue-ly0IASAOVCySLWrVlV011xg79JqgRV.svg",
  },
  {
    name: "Merchants Capital",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/merchant-capital-lwBL8IMpwKrXXmNFgjqg03tWuue61g.png",
  },
];

export default function SmartExtractPage() {
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Unlock the Power of{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Intelligent Document Processing
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-700 mb-8"
              >
                Transform your CRE document processing with SmartExtract&apos;s
                AI-powered data extraction and analysis.
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
                  Start Extracting Now
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full aspect-square max-w-2xl mx-auto mt-8 lg:mt-0"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smartextraxt-Xequ1qNYBInCLwOqPDptj2ZZDR4qDF.svg"
                alt="SmartExtract Document Processing Interface"
                width={1000}
                height={1000}
                className="object-contain mt-28"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why SmartExtract?
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features that revolutionize your document processing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${feature.gradient} w-fit mb-4`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 relative bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How SmartExtract Works
            </h2>
            <p className="text-xl text-gray-600">
              Streamlined workflow for efficient document processing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Document Upload</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/document-upload-Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5.png"
                  alt="Document Upload Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Easily upload multiple document types through our intuitive
                interface or API
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">AI Processing</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-processing-Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5.png"
                  alt="AI Processing Visualization"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Advanced AI algorithms extract and structure data with high
                accuracy
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Data Validation</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data-validation-Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5.png"
                  alt="Data Validation Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Automated checks ensure data accuracy and completeness
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Structured Output</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/structured-output-Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5.png"
                  alt="Structured Output Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Receive clean, structured data ready for analysis or integration
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Achieve More with SmartExtract
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in your document processing workflow
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {benefit.metric}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Section */}
      <section className="py-16 relative bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Join the leading CRE firms transforming their document processing
              with SmartExtract
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-40 h-20 relative"
              >
                <Image
                  src={client.src || "/placeholder.svg"}
                  alt={client.name}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
          <Card className="max-w-4xl mx-auto p-8 bg-white/90 backdrop-blur-sm">
            <blockquote className="text-xl text-gray-700 italic mb-4">
              &quot;SmartExtract has revolutionized our document processing
              workflow. We&apos;ve cut our processing time by 90% and
              significantly improved data accuracy.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-gray-600">
                  CTO, Global Real Estate Solutions
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Pricing for Every CRE Firm
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your document processing needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`p-6 h-full ${
                    index === 1
                      ? "bg-gradient-to-br from-blue-600 to-blue-600 text-white"
                      : "bg-white/90 backdrop-blur-sm"
                  } hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-4">
                      {typeof plan.price === "number" ||
                      typeof plan.monthlyPrice === "number"
                        ? `$${plan.monthlyPrice || plan.price}`
                        : plan.price}
                      {typeof plan.price === "number" && (
                        <span className="text-lg">/month</span>
                      )}
                    </div>
                    <p
                      className={`mb-6 ${
                        index === 1 ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {plan.description}
                    </p>
                    <ul className="space-y-3 mb-6 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2
                            className={`h-5 w-5 ${
                              index === 1 ? "text-blue-200" : "text-green-500"
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full rounded-[8px] ${
                        index === 1
                          ? "bg-white text-blue-600 hover:bg-blue-50"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative bg-gradient-to-b from-white/50 to-blue-50/50 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about SmartExtract
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm rounded-[8px]">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium px-6">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
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
              Ready to Revolutionize Your Document Processing?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Schedule a demo today and see SmartExtract in action.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-[8px]"
              >
                Request a Demo
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
