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
  FileText,
  PieChart,
  TrendingUp,
  Users,
} from "lucide-react";

// Features data
const features = [
  {
    title: "Advanced Deal Modeling",
    description:
      "Create sophisticated financial models with machine learning insights",
    icon: TrendingUp,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Portfolio Management",
    description:
      "Track and analyze your entire investment portfolio in real-time",
    icon: PieChart,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Investor Reporting",
    description:
      "Generate professional reports and presentations automatically",
    icon: FileText,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage advanced algorithms for data-driven decision making",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },
];

// Benefits data
const benefits = [
  {
    title: "Boost IRR",
    description: "Improve Internal Rate of Return by up to 20%",
    metric: "20%",
    icon: TrendingUp,
  },
  {
    title: "Faster Analysis",
    description: "Reduce analysis time by 10x compared to manual methods",
    metric: "10x",
    icon: Clock,
  },
  {
    title: "Investor Satisfaction",
    description: "Achieve 100% on-time, accurate investor reporting",
    metric: "100%",
    icon: Users,
  },
];

// Pricing plans
const plans = [
  {
    name: "Starter",
    description: "For small investment firms",
    monthlyPrice: 199,
    features: [
      "Up to 10 deals/month",
      "Basic financial modeling",
      "Portfolio tracking",
      "Standard investor reports",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "For growing investment teams",
    monthlyPrice: 499,
    features: [
      "Up to 50 deals/month",
      "Advanced financial modeling",
      "Real-time portfolio analytics",
      "Custom investor reports",
      "Priority support",
      "API access",
    ],
    ribbon: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For large investment firms",
    price: "Custom",
    features: [
      "Unlimited deals",
      "Custom model development",
      "Advanced portfolio optimization",
      "White-labeled investor portal",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
];

// FAQ items
const faqItems = [
  {
    question: "How does InvestAssist improve deal analysis?",
    answer:
      "InvestAssist uses advanced AI algorithms to analyze deals more comprehensively than traditional methods. It considers multiple factors simultaneously, identifies patterns, and provides insights that might be missed in manual analysis, leading to more informed investment decisions.",
  },
  {
    question: "Can I customize the financial models?",
    answer:
      "Yes, InvestAssist offers full customization of financial models. You can adjust assumptions, add custom metrics, and tailor the models to your specific investment strategy. The Professional and Enterprise plans also offer the ability to create entirely custom models.",
  },
  {
    question: "How does the portfolio management feature work?",
    answer:
      "The portfolio management feature provides a real-time overview of all your investments. It tracks performance, calculates key metrics, and allows you to run scenario analyses across your entire portfolio. You can drill down into individual assets or view aggregated data for comprehensive insights.",
  },
  {
    question: "What types of investor reports can I generate?",
    answer:
      "InvestAssist can generate a wide range of investor reports, including quarterly performance reports, distribution notices, capital account statements, and custom reports tailored to your investors' needs. These reports can be automated and scheduled for regular delivery.",
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

export default function InvestAssistPage() {
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
                Elevate Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Investment Strategy
                </span>{" "}
                with AI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-700 mb-8"
              >
                Transform your investment analysis, portfolio management, and
                investor reporting with InvestAssist&apos;s cutting-edge AI
                technology.
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
                  Start Investing Smarter
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full aspect-square max-w-2xl mx-auto"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IA%20FINAL-4BlQQoZCQXV7VNJQudkGc17y7O9YaL.svg"
                alt="InvestAssist Dashboard Interface"
                width={1000}
                height={1000}
                className="object-contain mt-24"
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
              Why InvestAssist?
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features that revolutionize your investment process
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
              How InvestAssist Works
            </h2>
            <p className="text-xl text-gray-600">
              Streamlined workflow for optimal investment management
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Deal Analysis</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  alt="Deal Analysis Interface"
                  src="/images/investAssist/DealAnalysis.png"
                  className="object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <p className="mt-4 text-gray-600">
                Comprehensive deal modeling and risk assessment
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Portfolio Tracking</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  alt="Portfolio Tracking Dashboard"
                  src="/images/investAssist/PortfolioTracking.png"
                  className="object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <p className="mt-4 text-gray-600">
                Real-time monitoring and performance analytics
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Investor Reporting</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/investAssist/Resport.png"
                  className="object-cover"
                  width={1000}
                  height={1000}
                  alt="Investor Reporting Interface"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Automated, customizable reports for stakeholders
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">AI-Powered Insights</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  alt="AI-Powered Insights Dashboard"
                  src="/images/investAssist/AiPowered.png"
                  className="object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <p className="mt-4 text-gray-600">
                Machine learning-driven recommendations and market analysis
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
              Achieve More with InvestAssist
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in your investment process
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
              Join the leading investment firms transforming their operations
              with InvestAssist
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
              &quot;InvestAssist has revolutionized our investment process.
              We&apos;ve seen a 25% increase in our portfolio performance and
              cut our analysis time in half.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-gray-600">
                  Chief Investment Officer, Global Investments Inc.
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
              Flexible Pricing for Every Investment Firm
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your investment needs
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
              Find answers to common questions about InvestAssist
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
              Ready to Elevate Your Investment Strategy?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Schedule a demo today and see InvestAssist in action.
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
