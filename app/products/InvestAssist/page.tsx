"use client";

import { motion } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart2,
  FileText,
  PieChart,
  Table,
  Clock,
  CheckCircle2,
  X,
  Check,
} from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function InvestAssistPage() {
  const [isYearly, setIsYearly] = useState(false);

  const calculateSavings = (monthlyPrice: number) => {
    return (
      ((monthlyPrice * 12 - monthlyPrice * 10) / (monthlyPrice * 12)) *
      100
    ).toFixed(0);
  };
  return (
    <div
      className={`min-h-screen ${GeistSans.className} bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>

      {/* Hero Section */} 

      <div className="relative">
        <section className="relative z-10 pt-16 pb-16 overflow-hidden mt-14 lg:mt-24">
          <div className="mx-auto px-8 lg:space-y-6 relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 w-full"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                  <span className="text-gray-900">
                    Analyze Cashflows and IRRs in
                  </span>{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Just Minutes
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Stop wasting hours building cashflow models manually. Use our
                  sophisticated investor return models or plug AI directly into
                  your financial models to run cashflow and investor return
                  analysis at scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Talk to Us
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 w-full"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/investAssist-combined-125jokgtmO7dgKE9jwB2QPPjWS8G6j.png"
                  alt="InvestAssist Platform Interface"
                  width={2000}
                  height={1600}
                  className="w-[800px] h-[500px]"
                  priority
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/10"></div>
        </section>
      </div>

      {/* Comparison Section (Moved before Features Section) */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Spreadsheets Are Outdated. Here&apos;s Why.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how InvestAssist transforms your workflow and saves countless
              hours
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden min-w-[600px]"
            >
              <table className="w-full">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Old-School Spreadsheets
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      🚀 InvestAssist
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      feature: "Data Extraction",
                      old: {
                        text: "Manual entry, slow & error-prone",
                        icon: <X className="h-4 w-4 text-red-500 mr-2" />,
                      },
                      new: {
                        text: "AI-powered, instant data parsing",
                        icon: (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        ),
                      },
                    },
                    {
                      feature: "Rent Roll Analysis",
                      old: {
                        text: "Takes hours or days to process",
                        icon: <X className="h-4 w-4 text-red-500 mr-2" />,
                      },
                      new: {
                        text: "Instant insights, no manual input",
                        icon: (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        ),
                      },
                    },
                    {
                      feature: "Financial Data Categorization",
                      old: {
                        text: "Manual categorization, time-consuming",
                        icon: <X className="h-4 w-4 text-red-500 mr-2" />,
                      },
                      new: {
                        text: "Auto-categorization of financials into charge codes",
                        icon: (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        ),
                      },
                    },
                    {
                      feature: "Build Comparables",
                      old: {
                        text: "Manual Eye-ball between multiple excels",
                        icon: <X className="h-4 w-4 text-red-500 mr-2" />,
                      },
                      new: {
                        text: "One-Click Property and Rent Comparable Summary",
                        icon: (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        ),
                      },
                    },
                    {
                      feature: "Financial Models",
                      old: {
                        text: "Built from scratch, needs expert",
                        icon: <X className="h-4 w-4 text-red-500 mr-2" />,
                      },
                      new: {
                        text: "One-click pro-grade model",
                        icon: (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        ),
                      },
                    },
                    {
                      feature: "Investor Reports",
                      old: {
                        text: "Manual PDF creation & formatting",
                        icon: <X className="h-4 w-4 text-red-500 mr-2" />,
                      },
                      new: {
                        text: "Auto-generated branded reports",
                        icon: (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        ),
                      },
                    },
                    {
                      feature: "Data Validation",
                      old: {
                        text: "Manual cross-checking required",
                        icon: <X className="h-4 w-4 text-red-500 mr-2" />,
                      },
                      new: {
                        text: "Automated validation & error detection",
                        icon: (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        ),
                      },
                    },
                    {
                      feature: "Collaboration",
                      old: {
                        text: "Email attachments & version control issues",
                        icon: <X className="h-4 w-4 text-red-500 mr-2" />,
                      },
                      new: {
                        text: "Real-time collaboration & sharing",
                        icon: (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        ),
                      },
                    },
                    {
                      feature: "Historical Data",
                      old: {
                        text: "Scattered across multiple files",
                        icon: <X className="h-4 w-4 text-red-500 mr-2" />,
                      },
                      new: {
                        text: "Centralized database with instant access",
                        icon: (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        ),
                      },
                    },
                    {
                      feature: "Processing Time",
                      old: {
                        text: "Hours per document",
                        icon: <X className="h-4 w-4 text-red-500 mr-2" />,
                      },
                      new: {
                        text: "Minutes for entire portfolios",
                        icon: (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        ),
                      },
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          {row.old.icon}
                          {row.old.text}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          {row.new.icon}
                          {row.new.text}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Upgrade Your Workflow
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/10"></div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Investment Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted companion for simplifying real estate investments,
              designed for investors and syndicators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: BarChart2,
                title: "Sophisticated Financial Modeling",
                description:
                  "Model all scenarios including Cash-on-Cash return, LTV, Waterfall structures, and LP/GP split with precision.",
              },
              {
                icon: FileText,
                title: "Automated Document Processing",
                description:
                  "Parse, clean, and analyze any rent roll PDF to generate analytics instantaneously.",
              },
              {
                icon: PieChart,
                title: "Advanced Analytics Dashboard",
                description:
                  "View and manage all your deals at a glance with our intuitive dashboard interface.",
              },
              {
                icon: Table,
                title: "Comprehensive Deal Comparison",
                description:
                  "Compare deals side-by-side with our Comps Tool, analyzing data across multiple properties.",
              },
              {
                icon: Clock,
                title: "Time-Saving Automation",
                description:
                  "Reduce hours of manual work to minutes with our pre-trained underwriting AI for all CRE asset classes.",
              },
              {
                icon: CheckCircle2,
                title: "Data Validation & Review",
                description:
                  "Configure charge codes, occupancy, and floor plans with built-in validation tools.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <feature.icon className="w-6 h-6 text-blue-600 mb-2" />
                    <h3 className="text-base font-semibold mb-1 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/10"></div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-2">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your investment analysis workflow with InvestAssist
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    InvestAssist Plan
                  </h3>
                  <p className="text-sm text-green-600 font-semibold">
                    *Special beta pricing
                  </p>
                </div>
                {/* right side */}
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-gray-900">
                    {isYearly ? (
                      <>
                        $1990
                        <span className="text-xl text-gray-600">/year</span>
                      </>
                    ) : (
                      <>
                        $199
                        <span className="text-xl text-gray-600">/month</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center justify-center gap-3 mb-8">
                    {/* <span
                    className={`text-lg ${
                    !isYearly ? "text-gray-900 font-bold" : "text-gray-600"
                    }`}
                  >
                    Monthly
                  </span> */}
                    <Switch
                      checked={isYearly}
                      onCheckedChange={setIsYearly}
                      className="relative w-10 h-5 bg-blue-500 rounded-full transition-all 
                data-[state=checked]:bg-blue-600 focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <span
                        className={`absolute w-4 h-4 bg-white rounded-full shadow-md 
                  transition-transform transform ${
                    isYearly ? "translate-x-5" : "translate-x-1"
                  }`}
                      />
                    </Switch>
                    <span
                      className={`text-lg ${
                        isYearly ? "text-gray-900 font-bold" : "text-gray-600"
                      }`}
                    >
                      {/* Yearly{" "} */}
                      <span className="text-green-600 text-base font-bold">
                        (Save {calculateSavings(49)}%)
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {[
                  "Self-Managed - DIY",
                  "Online Video Tutorials",
                  "Multifamily Asset Focus",
                  "AI-powered Data Extraction",
                  "Sophisticated Financial Modeling",
                  "Automated Document Processing",
                  "Advanced Analytics Dashboard",
                  "Comprehensive Deal Comparison",
                  "Time-Saving Automation",
                  "Data Validation & Review",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <h3 className="text-xl font-bold mb-4">Ideal for:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "Syndicators & GPs",
                  description: "Manage deals, optimize investor returns",
                },
                {
                  title: "Private Equity & RE Funds",
                  description: "Fast-track investment due diligence",
                },
                {
                  title: "Lenders & Underwriters",
                  description: "Extract and analyze rent rolls instantly",
                },
                {
                  title: "CRE Brokers & Advisors",
                  description: "Benchmark deals & generate comps",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {[
                {
                  question:
                    "What types of properties does InvestAssist support?",
                  answer:
                    "InvestAssist specializes in multifamily properties. For other asset classes, try our versatile AutoUW product, which allows custom model integration.",
                },
                {
                  question: "How accurate is the AI-powered data extraction?",
                  answer:
                    "Our AI-powered data extraction boasts an accuracy rate of over 99%, with built-in validation tools for added precision.",
                },
                {
                  question:
                    "How does InvestAssist handle complex multifamily deal structures?",
                  answer:
                    "InvestAssist handles a wide range of multifamily deal structures, including waterfall distributions, preferred returns, and various LP/GP splits, providing accurate projections and analysis.",
                },
                {
                  question: "Is my data secure with InvestAssist?",
                  answer:
                    "Yes, we are SOC2 certified and use bank-level encryption to protect your data both in transit and at rest.",
                },
                {
                  question:
                    "How long does it take to get started with InvestAssist?",
                  answer:
                    "You can start immediately. Most users complete the onboarding process, including setup and familiarization, in less than a day.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium text-gray-900 py-3">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 pb-3">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Ready to Revolutionize Your CRE Analysis?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Start saving time and making smarter investment decisions with
              InvestAssist&apos;s powerful AI-driven analysis.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                Talk to Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
