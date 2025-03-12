"use client"

import { useState, useEffect } from "react"
import { GeistSans } from "geist/font/sans"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import {
  Maximize2,
  Minimize2,
  Workflow,
  FileSearch,
  Code,
  CheckCircle,
  PenTool,
  Headphones,
  ChevronRight,
} from "lucide-react"

import { motion } from "framer-motion"

import { BookDemoIframeModal } from "@/components/BookDemoIframe"
import MeetingsModal from "@/components/MeetingModal"

ChartJS.register(ArcElement, Tooltip, Legend)

const financialModels = [
  {
    title: "Acquisition & Underwriting Models",
    for: "Brokers, Syndicators, Investors, Lenders",
    features: [
      "Pro Forma Rent Roll & Expense Analysis",
      "Debt & Equity Structure Optimization",
      "Loan Sizing & DSCR Calculations",
      "Exit Cap Rate & Sale Price Forecasting",
      "AI-Powered Stress Testing",
    ],
  },
  {
    title: "Syndication Waterfall & Investor Returns Model",
    for: "Syndicators, LPs, GPs, Real Estate Funds",
    features: [
      "Preferred Equity vs. Common Equity Structures",
      "GP/LP Distribution Waterfall",
      "IRR & Cash-on-Cash Analysis",
      "Hurdle Rate Sensitivity Analysis",
      "Real-Time Capital Calls & Equity Contributions",
    ],
  },
  {
    title: "Value-Add & Renovation Feasibility Model",
    for: "Investors, Asset Managers, Developers",
    features: [
      "Pre vs. Post Renovation Cash Flow Projections",
      "Lease-Up & Occupancy Ramp-Up Assumptions",
      "Financing Options for Value-Add Deals",
      "AI-Based Optimization: Best Timeline for Value Creation",
    ],
  },
  {
    title: "Portfolio Analysis & Hold vs. Sell Models",
    for: "Family Offices, Private Equity, Institutional Investors",
    features: [
      "Portfolio-Wide IRR & Cash Flow Trends",
      "Refinancing vs. Selling Decision Matrix",
      "Debt Paydown & LTV Impact Analysis",
      "AI-Powered Portfolio Optimization",
    ],
  },
  {
    title: "Ground-Up Development & Construction Feasibility Model",
    for: "Developers, Construction Lenders, REITs",
    features: [
      "Construction Loan Draw Schedule & Interest Carry",
      "Stabilized NOI & Exit Valuation",
      "Hard Costs, Soft Costs & Developer Fee Breakdown",
      "Lease-Up & Absorption Rate Modeling",
    ],
  },
  {
    title: "Debt & Financing Models (Bridge Loans, Mezzanine, CMBS, HUD)",
    for: "Lenders, Loan Servicers, Debt Funds",
    features: [
      "Loan Amortization Schedules",
      "Fixed vs. Floating-Rate Analysis",
      "DSCR & LTV Stress Testing",
      "CMBS & HUD Loan Performance Metrics",
    ],
  },
  {
    title: "1031 Exchange & Tax Deferral Models",
    for: "Real Estate Investors, Tax Consultants",
    features: [
      "Deferred Capital Gains Tax Calculation",
      "ROI & Cash Flow Before vs. After 1031 Exchange",
      "Portfolio Diversification & Reinvestment Scenarios",
    ],
  },
  {
    title: "Lease & Tenant Performance Model",
    for: "Asset Managers, Property Owners",
    features: [
      "Tenant Creditworthiness Score & Default Risk Analysis",
      "Rent Growth & Lease Expiry Forecasting",
      "AI-Driven Market Rent Adjustments",
    ],
  },
]

export default function CustomFinancialModelDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false)
  const openBookDemo = () => setIsBookDemoOpen(true)
  const closeBookDemo = () => setIsBookDemoOpen(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleFullscreen = () => {
    const iframe = document.querySelector("iframe")
    if (iframe) {
      if (!isFullscreen) {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  return (
    <div
      className={`min-h-screen ${GeistSans.className} relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 text-gray-800`}
    >
      <div className="relative z-10">
        {/* Curvy background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
              fill="url(#grad1)"
              animate={{
                d: ["M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z", "M0,50 Q25,70 50,50 T100,50 L100,100 L0,100 Z"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 20,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M0,60 Q35,90 70,60 T100,60 L100,100 L0,100 Z"
              fill="url(#grad2)"
              animate={{
                d: ["M0,60 Q35,90 70,60 T100,60 L100,100 L0,100 Z", "M0,60 Q35,30 70,60 T100,60 L100,100 L0,100 Z"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 15,
                ease: "easeInOut",
              }}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(14, 165, 233, 0.1)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* <DynamicBackground /> */}
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">
                <span className="text-gray-900">Custom</span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
                  Financial Model
                </span>{" "}
                <span className="text-gray-900">Development</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Revolutionize your CRE decision-making with our cutting-edge AI models
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full md:w-[90%] mx-auto mb-8 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white py-3 px-4 text-lg font-semibold rounded-t-lg flex justify-between items-center">
                <span>Financial Model</span>
                <Button
                  onClick={toggleFullscreen}
                  className="bg-white text-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
                  size="sm"
                >
                  {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                  <span className="ml-2">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                </Button>
              </div>
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRieWw6tgKAhCsOxqpVNheE_NWYx39_jivyoRgkIhgJgK63CBpLoabNwAL0VKmcog/pubhtml?widget=true&headers=false&chrome=false"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6"
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-[8px] transition-colors duration-300 text-lg font-semibold"
              >
                Schedule a Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                onClick={openBookDemo}
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-indigo-50 transition-colors duration-300"
              >
                Book Demo
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Financial Models Section */}
        <section className="pt-8 pb-16 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600"
            >
              Financial Model Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 text-center mb-12"
            >
              Comprehensive solutions tailored to your specific CRE needs
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4">
                      <CardTitle className="text-lg font-medium text-indigo-800">{model.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-blue-600 mb-3">{model.for}</p>
                      <ul className="space-y-2 text-sm">
                        {model.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg
                              className="w-4 h-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* how it works */}
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            How it Works
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 text-center mb-12">
              Our streamlined process for developing your custom financial model
            </p>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />
              {[
                {
                  title: "Initial Consultation",
                  description: "We discuss your specific needs and objectives to tailor our approach.",
                  align: "left",
                  icon: <Workflow className="w-8 h-8 text-white" />,
                },
                {
                  title: "Model Design",
                  description: "Our experts create a tailored blueprint based on your requirements.",
                  align: "right",
                  icon: <FileSearch className="w-8 h-8 text-white" />,
                },
                {
                  title: "Development",
                  description: "We build the model using our library of tested, reusable components.",
                  align: "left",
                  icon: <Code className="w-8 h-8 text-white" />,
                },
                {
                  title: "Rigorous Testing",
                  description: "Comprehensive testing to ensure accuracy and reliability of all calculations.",
                  align: "right",
                  icon: <CheckCircle className="w-8 h-8 text-white" />,
                },
                {
                  title: "Review & Refinement",
                  description: "We present the model and make adjustments based on your feedback.",
                  align: "left",
                  icon: <PenTool className="w-8 h-8 text-white" />,
                },
                {
                  title: "Delivery & Ongoing Support",
                  description: "We provide the final model with documentation and continuous support.",
                  align: "right",
                  icon: <Headphones className="w-8 h-8 text-white" />,
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    x: step.align === "left" ? -50 : 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex items-center mb-12 last:mb-0 ${step.align === "right" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-1/2 ${
                      step.align === "right" ? "pl-6" : "pr-6"
                    } ${step.align === "right" ? "text-left" : "text-right"}`}
                  >
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-base text-gray-600">{step.description}</p>
                  </div>
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      {step.icon}
                    </div>
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                      style={{
                        left: step.align === "left" ? "unset" : "100%",
                        right: step.align === "left" ? "100%" : "unset",
                      }}
                    />
                  </div>
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Clik.ai Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600"
            >
              Why Choose Clik.ai?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Unparalleled Expertise",
                  description:
                    "With 400+ models integrated into our AutoUnderwriting platform, we bring vast experience to every project.",
                  icon: "🏆",
                },
                {
                  title: "Rapid Development",
                  description:
                    "Our library of reusable components allows us to build and iterate quickly, saving you time and resources.",
                  icon: "⚡",
                },
                {
                  title: "Collaborative Approach",
                  description:
                    "We dedicate an account manager who would be your direct contact during and after the Model development to guarantee satisfaction.",
                  icon: "🤝",
                },
                {
                  title: "Rigorous Validation",
                  description:
                    "Our expert team conducts thorough testing and validation, ensuring accuracy and reliability of all calculations.",
                  icon: "✅",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="h-full bg-gradient-to-br from-white to-sky-50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <span className="text-4xl">{item.icon}</span>
                        <CardTitle className="text-2xl text-indigo-800">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-To-Action Section */}

        <section className="py-16 relative overflow-hidden bg-gradient-to-br from-[#001F3F] via-blue-900 to-blue-800">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z" fill="rgba(255, 255, 255, 0.05)" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Elevate Your Financial Modeling with AI?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
                Let&apos;s create a custom AI-powered solution tailored to your unique CRE needs.
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
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <BookDemoIframeModal isOpen={isBookDemoOpen} onClose={closeBookDemo} />
        <MeetingsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          meetingUrl="https://meetings.hubspot.com/prerit/demo-meeting"
        />
      </div>
    </div>
  )
}

