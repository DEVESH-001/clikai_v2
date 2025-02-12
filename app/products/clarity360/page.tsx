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
  Brain,
  CheckCircle2,
  Clock,
  Search,
  BarChart3,
  Map,
  Database,
} from "lucide-react";
import { ParticleBackground } from "@/components/sections/ParticleBackground";

// Features data
const features = [
  {
    title: "Intelligent OM Analysis",
    description:
      "Extract and analyze key data points from Offering Memorandums automatically",
    icon: Brain,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Market Intelligence",
    description: "Access comprehensive market data and competitive analysis",
    icon: Search,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Location Analytics",
    description: "Advanced geospatial analysis and demographic insights",
    icon: Map,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Data Visualization",
    description: "Interactive charts and reports for better decision making",
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500",
  },
];

// Benefits data
const benefits = [
  {
    title: "Time Efficiency",
    description: "Reduce OM analysis time by up to 85%",
    metric: "85%",
    icon: Clock,
  },
  {
    title: "Data Coverage",
    description: "Extract and analyze 100+ data points per OM",
    metric: "100+",
    icon: Database,
  },
  {
    title: "Accuracy Rate",
    description: "Achieve 99.9% accuracy in data extraction",
    metric: "99.9%",
    icon: CheckCircle2,
  },
];

// Pricing plans
const plans = [
  {
    name: "Starter",
    description: "For small investment teams",
    monthlyPrice: 299,
    features: [
      "Up to 10 OMs per month",
      "Basic data extraction",
      "Standard market insights",
      "Email support",
      "Data export capabilities",
    ],
  },
  {
    name: "Professional",
    description: "For growing CRE firms",
    monthlyPrice: 799,
    features: [
      "Up to 50 OMs per month",
      "Advanced data extraction",
      "Comprehensive market analysis",
      "Priority support",
      "Custom data fields",
      "API access",
    ],
    ribbon: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For large institutions",
    price: "Custom",
    features: [
      "Unlimited OMs",
      "Full data extraction suite",
      "Custom AI model training",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
      "24/7 premium support",
    ],
  },
];

// FAQ items
const faqItems = [
  {
    question: "What types of information can Clarity360 OM extract?",
    answer:
      "Clarity360 OM can extract a wide range of data points including property details, financial information, tenant data, market statistics, and location analytics. Our AI is trained to identify and extract key metrics, charts, tables, and narrative information from offering memorandums.",
  },
  {
    question: "How accurate is the data extraction?",
    answer:
      "Our AI-powered extraction achieves 99.9% accuracy through multiple validation layers and machine learning algorithms. Each extraction undergoes automated quality checks and is verified against our comprehensive CRE database for consistency.",
  },
  {
    question: "Can I customize the data fields I want to extract?",
    answer:
      "Yes! Professional and Enterprise plans allow you to define custom data fields and extraction parameters. You can tailor the system to focus on specific metrics and information that matter most to your investment strategy.",
  },
  {
    question: "How does the market intelligence feature work?",
    answer:
      "Our market intelligence feature combines extracted OM data with our proprietary market database to provide comprehensive insights. This includes competitive property analysis, market trends, demographic data, and economic indicators specific to the property's location.",
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <ParticleBackground/>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Transform{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Offering Memorandums
                </span>{" "}
                into Actionable Insights
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-700 mb-8"
              >
                Extract, analyze, and leverage critical data from your Offering
                Memorandums with AI-powered intelligence.
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
                  Start Analyzing Now
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full aspect-[4/3] max-w-2xl mx-auto mt-32"
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
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Clarity360 OM?
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features that revolutionize OM analysis
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
              How Clarity360 OM Works
            </h2>
            <p className="text-xl text-gray-600">
              Streamlined workflow for efficient OM analysis
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Upload & Process</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/Clarity360/Upload.png"
                  width={1000}
                  height={1000}
                  alt="Upload and Process Interface"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Simply upload your OM and let our AI handle the rest
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Extract & Analyze</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/Clarity360/Extract.png"
                  width={1000}
                  height={1000}
                  alt="Data Extraction Process"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                AI-powered extraction of key metrics and insights
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Market Intelligence</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/Clarity360/Market.png"
                  width={1000}
                  height={1000}
                  alt="Market Intelligence Dashboard"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Comprehensive market analysis and comparisons
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Generate Insights</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/Clarity360/Insights.png"
                  width={1000}
                  height={1000}
                  alt="Insights Dashboard"

                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Interactive reports and actionable recommendations
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
              Achieve More with Clarity360 OM
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in your OM analysis process
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
              Join the leading investment firms transforming their OM analysis
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
                  width={1000}
                  height={1000}
                  className="object-contain transition-all duration-300 "
                />
              </motion.div>
            ))}
          </div>
          <Card className="max-w-4xl mx-auto p-8 bg-white/90 backdrop-blur-sm">
            <blockquote className="text-xl text-gray-700 italic mb-4">
              &quot;Clarity360 OM has transformed our investment analysis
              process. What used to take days now takes hours, with even better
              insights.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-semibold">David Thompson</div>
                <div className="text-sm text-gray-600">
                  Head of Acquisitions, Global Real Estate Partners
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
              Simple and Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your needs
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
      <section className="py-16 relative bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Clarity360 OM
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
              Ready to Transform Your OM Analysis?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Schedule a demo today and see Clarity360 OM in action.
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
