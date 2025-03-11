/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { GeistSans } from "geist/font/sans"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Clock, Zap, Building2, DollarSign, ArrowRight, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Bar, Line, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
import DealFeasibilityChecker from "../../components/DealFeasibilityChecker"
import { BookDemoIframeModal } from "@/components/BookDemoIframe"



ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement)

const MotionCard = motion(Card)

interface FileUploadResponse {
  success: boolean
  message: string
}

export default function UnderwritingDueDiligenceSupport() {
  const [userEmail] = useState("");
  const [, setIsUploading] = useState(false);
  const { toast } = useToast();
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const openBookDemo = () => setIsBookDemoOpen(true);
  const closeBookDemo = () => setIsBookDemoOpen(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, documentType: string) => {
    if (!e.target.files || !e.target.files[0]) return;
    
    if (!userEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address before uploading documents.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: userEmail, 
          documentType,
          fileName: e.target.files[0].name 
        }),
      });

      const data: FileUploadResponse = await response.json();
      
      if (data.success) {
        toast({
          title: "Document Received",
          description: `We've received your ${documentType} and sent a confirmation email.`,
        });
      } else {
        throw new Error(data.message || 'Failed to process document');
      }
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: error instanceof Error ? error.message : "Failed to upload document. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const dealUnderwritingFeatures = [
    "Loan Sizing & DSCR Modeling – Determine maximum loan eligibility",
    "Cash Flow & NOI Analysis – Validate revenue, expenses, and net operating income",
    "Sensitivity Analysis – Evaluate impact of rent growth, interest rates, and market shifts",
    "Lender-Specific Models – Custom templates for Fannie, Freddie, HUD, CMBS lenders",
    "Scenario Analysis – Create multiple financing scenarios for deal comparison",
  ];

  const autoUWFeatures = [
    "Operating Statement (OS) & Rent Roll Data Extraction – AI-powered document parsing",
    "Revenue Forecasting – Normalize income sources for accurate cash flow models",
    "Lease Abstracting – Validate lease terms, rent escalations, and occupancy data",
    "Charge Code Mapping – Standardized revenue categorization across properties",
    "Vacancy & Concessions Analysis – Identify risks and market trends",
  ];

  const financialModelFeatures = [
    "Custom Financial Models – Property-specific underwriting models",
    "Debt & Equity Structuring – Loan-to-value (LTV), IRR, and yield analysis",
    "CREFC-Formatted Reports – Standardized underwriting outputs for lenders",
    "Cash Flow Projections – Long-term NOI and NCF analysis",
    "Capital Expenditure Planning – Predict renovation impact on financials",
  ];

  const dueDiligenceFeatures = [
    "Loan & Lease Abstracting – Comprehensive property-level documentation review",
    "Appraisal Review & Validation – Cross-check property valuation reports",
    "Market Comps & Risk Analysis – Assess regional property trends",
    "Insurance & Environmental Risk Assessment – Identify potential liabilities",
    "Regulatory Compliance – Ensure alignment with CREFC, CMBS, and lender guidelines",
  ];

  const assetSummaryFeatures = [
    "Asset Summary Reports – Property-level underwriting with borrower background",
    "Portfolio Risk Analysis – Hold vs. Sell modeling for investment firms",
    "Cap Rate Analysis – Determine market-based valuation trends",
    "Pro Forma Modeling – Projected cash flow vs. actual market conditions",
    "Investor Waterfall Structuring – GP/LP return modeling & promote calculations",
  ];

  const cmbsFeatures = [
    "CMBS Loan Underwriting – Loan analysis and structuring for commercial mortgage-backed securities",
    "B-Piece Re-Underwriting – Secondary market loan evaluation and underwriting",
    "Loan Risk Assessment – Detailed stress testing for credit & prepayment risks",
    "Structured Finance Advisory – Custom financial structuring and securitization support",
    "Debt Market Trends & Benchmarking – Comparative analysis of lending terms across institutions",
  ];

  return (
    <div
      className={`min-h-screen ${GeistSans.className} relative overflow-hidden`}
    >
      {/* AI-themed background elements */}
      <div className="absolute  w-full h-full overflow-hidden z-0">
        {/* // eslint-disable-next-line react/no-children-prop */}
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="mx-auto px-8 lg:space-y-6 relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 text-center lg:text-left"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-gray-900">Unlock</span>{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Expert Underwriting
                  </span>
                  <br className="hidden md:block" />
                  <span className="text-gray-900">at Unbeatable Value</span>
                </h1>
                <h4 className="text-lg sm:text-xl text-gray-700 mb-8 text-center lg:text-left">
                  Our seasoned analysts deliver precise, AI-assisted
                  underwriting support. Accelerate deals with faster turnaround
                  times while maintaining top-tier accuracy.
                </h4>
                <Button
                  size="lg"
                  onClick={openBookDemo}
                  className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3"
                >
                  Book Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              >
                <DealFeasibilityChecker />
              </motion.div>
              <BookDemoIframeModal isOpen={isBookDemoOpen} onClose={closeBookDemo} />
            </div>
          </div>
        </section>

        {/* Why Choose Clik.ai Section with AI-themed background */}
        <section className="py-16 relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          {/* latest added */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Curved lines */}
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,50 C30,20 70,80 100,50"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.path
                d="M0,30 C30,60 70,40 100,70"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </svg>

            {/* Floating circles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full bg-blue-200/10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Same-Day CRE Underwriting – Powered by Experts, Accelerated by
                Technology
              </h2>
              <h4 className="text-xl text-gray-600 max-w-4xl mx-auto">
                Clik.ai&apos;s experienced underwriting professionals deliver{" "}
                <span className="font-semibold">
                  lender-ready underwriting reports on the same day
                </span>
                . Our proprietary tools like AutoUnderwriting extract and
                normalize financial data to streamline the process—without
                compromising accuracy or quality.
              </h4>
            </motion.div>

            {/* Key Differentiators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: Clock,
                  title: "Same-Day Underwriting Completion",
                  description:
                    "Receive lender-ready underwriting reports within the same day for faster deal execution.",
                },
                {
                  icon: Zap,
                  title: "Tech-Enabled Financial Processing",
                  description:
                    "AutoUnderwriting extracts & normalizes data from OS/RR, reducing manual data entry and improving accuracy.",
                },
                {
                  icon: Building2,
                  title: "Expert-Led Due Diligence",
                  description:
                    "Trusted by lenders, investors, and servicers. Our reports meet CREFC, Fannie, Freddie, and HUD standards.",
                },
                {
                  icon: DollarSign,
                  title: "Cost-Effective Support",
                  description:
                    "Outsource CRE underwriting at a fraction of in-house costs without compromising quality or efficiency.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <MotionCard className="h-full transform transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border border-blue-100/20">
                    <CardContent className="p-6">
                      <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </MotionCard>
                </motion.div>
              ))}
            </div>

            {/* Process Comparison with Gradient Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Traditional Underwriting vs. Clik.ai&apos;s Same-Day Process
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <MotionCard className="bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-sm border border-gray-200/50">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4">
                      Traditional In-House Underwriting Process
                    </h4>
                    <div className="space-y-4">
                      {[
                        "Gathering & verifying property financials",
                        "Data entry & financial model setup",
                        "Lease abstracting & borrower review",
                        "Scenario analysis & lender reporting",
                        "Slower approvals & higher costs",
                      ].map((step, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-500"
                        >
                          <span className="text-red-500 mr-2">❌</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </MotionCard>

                <MotionCard className="bg-gradient-to-br from-blue-50 to-indigo-100 backdrop-blur-sm border border-blue-200/50">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4">
                      Clik.ai&apos;s Same-Day Underwriting Process
                    </h4>
                    <div className="space-y-4">
                      {[
                        "AutoExtract Financials from OS/RR",
                        "Underwriters validate & process financials",
                        "Custom underwriting model development",
                        "Deal scenario analysis & lender-ready reporting",
                        "Faster deal execution & cost-effective underwriting",
                      ].map((step, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-900"
                        >
                          <span className="text-green-500 mr-2">✅</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </MotionCard>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Underwriting & Due Diligence Services Section */}
        <section className="py-16 relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100/80">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Comprehensive CRE Underwriting & Due Diligence Support
              </h2>
              <h4 className="text-xl text-gray-600 max-w-4xl mx-auto">
                Clik.ai&apos;s underwriting experts provide lender-ready models,
                cash flow analysis, financial validation, and due diligence
                support—ensuring faster, compliant, and data-driven deal
                decisions.
              </h4>
            </motion.div>
            <Tabs defaultValue="deal-underwriting" className="w-full">
              <div className="overflow-x-auto no-scrollbar">
                <TabsList className="inline-flex h-auto p-1 mb-4 sm:mb-8 bg-muted/20 backdrop-blur-sm rounded-lg whitespace-nowrap">
                  {[
                    {
                      value: "deal-underwriting",
                      label: "CRE Deal Underwriting",
                    },
                    { value: "autouw", label: "AutoUW - OS & Rent Roll" },
                    {
                      value: "financial-model",
                      label: "Financial Model Creation",
                    },
                    {
                      value: "due-diligence",
                      label: "Due Diligence & Compliance",
                    },
                    {
                      value: "asset-summary",
                      label: "Asset Summary & Analysis",
                    },
                    { value: "cmbs", label: "CMBS & Structured Finance" },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="px-4 py-2 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Column - Features */}
                <div className="space-y-6">
                  <TabsContent value="deal-underwriting" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          CRE Deal Underwriting
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive deal analysis and loan structuring
                        </p>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <ul className="space-y-2">
                          {dealUnderwritingFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                  <TabsContent value="autouw" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          AutoUW - OS & Rent Roll Analysis
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          AI-powered data extraction and normalization
                        </p>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <ul className="space-y-2">
                          {autoUWFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                  <TabsContent value="financial-model" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          Financial Model Creation & Spreading
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Customizable models for various scenarios
                        </p>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <ul className="space-y-2">
                          {financialModelFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                  <TabsContent value="due-diligence" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          Due Diligence & Compliance Review
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Thorough review to mitigate risks
                        </p>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <ul className="space-y-2">
                          {dueDiligenceFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                  <TabsContent value="asset-summary" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          Asset Summary & Investment Analysis
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Data-driven insights for investment decisions
                        </p>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <ul className="space-y-2">
                          {assetSummaryFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                  <TabsContent value="cmbs" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          CMBS & Structured Finance Underwriting
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Specialized expertise for complex transactions
                        </p>
                      </CardHeader>
                      <CardContent className="pt-2 px-4">
                        <ul className="space-y-2">
                          {cmbsFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                </div>

                {/* Middle Column - Charts & Metrics */}
                <div className="space-y-6">
                  <TabsContent value="deal-underwriting" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          Key Metrics & Performance
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="h-[120px] mb-2">
                          <Bar
                            data={{
                              labels: ["2020", "2021", "2022", "2023", "2024"],
                              datasets: [
                                {
                                  label: "Annual Deal Volume ($B)",
                                  data: [0.8, 1.5, 2.7, 4.2, 6.1],
                                  backgroundColor: "rgba(59, 130, 246, 0.5)",
                                },
                                {
                                  label: "Deals Processed",
                                  data: [420, 680, 1150, 1780, 2600],
                                  backgroundColor: "rgba(99, 102, 241, 0.5)",
                                },
                              ],
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: {
                                  position: "top" as const,
                                  labels: {
                                    boxWidth: 6,
                                    padding: 2,
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                              },
                              scales: {
                                x: {
                                  grid: {
                                    display: false,
                                  },
                                  ticks: {
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                                y: {
                                  grid: {
                                    color: "rgba(0, 0, 0, 0.05)",

                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    drawBorder: false,
                                  },
                                  ticks: {
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                              },
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-blue-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-blue-900">
                              Total Deal Volume
                            </h4>
                            <p className="text-lg font-bold text-blue-600">
                              $15.3B+
                            </p>
                            <p className="text-[10px] text-blue-700">
                              Across all asset types
                            </p>
                          </div>
                          <div className="bg-indigo-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-indigo-900">
                              Success Rate
                            </h4>
                            <p className="text-lg font-bold text-indigo-600">
                              97.8%
                            </p>
                            <p className="text-[10px] text-indigo-700">
                              Approval rate
                            </p>
                          </div>
                          <div className="bg-purple-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-purple-900">
                              Avg. Processing Time
                            </h4>
                            <p className="text-lg font-bold text-purple-600">
                              8hrs
                            </p>
                            <p className="text-[10px] text-purple-700">
                              Same-day delivery
                            </p>
                          </div>
                          <div className="bg-green-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-green-900">
                              Efficiency Gain
                            </h4>
                            <p className="text-lg font-bold text-green-600">
                              65%
                            </p>
                            <p className="text-[10px] text-green-700">
                              Time saved vs. traditional methods
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                  <TabsContent value="autouw" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          Key Metrics & Performance
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-purple-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-purple-900">
                              Documents Processed
                            </h4>
                            <p className="text-lg font-bold text-purple-600">
                              95k+
                            </p>
                            <p className="text-[10px] text-purple-700">
                              OS & RR documents
                            </p>
                          </div>
                          <div className="bg-blue-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-blue-900">
                              Processing Time
                            </h4>
                            <p className="text-lg font-bold text-blue-600">
                              25min
                            </p>
                            <p className="text-[10px] text-blue-700">
                              Average per document
                            </p>
                          </div>
                          <div className="bg-green-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-green-900">
                              Accuracy Rate
                            </h4>
                            <p className="text-lg font-bold text-green-600">
                              99.2%
                            </p>
                            <p className="text-[10px] text-green-700">
                              AI-powered extraction
                            </p>
                          </div>
                          <div className="bg-indigo-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-indigo-900">
                              Efficiency Gain
                            </h4>
                            <p className="text-lg font-bold text-indigo-600">
                              65%
                            </p>
                            <p className="text-[10px] text-indigo-700">
                              Time saved vs. traditional methods
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                  <TabsContent value="financial-model" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          Key Metrics & Performance
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="h-[120px] mb-2">
                          <Bar
                            data={{
                              labels: [
                                "Agency",
                                "CMBS",
                                "Bridge",
                                "Construction",
                                "Other",
                              ],
                              datasets: [
                                {
                                  label: "Models Created",
                                  data: [980, 720, 560, 420, 320],
                                  backgroundColor: "rgba(59, 130, 246, 0.5)",
                                },
                                {
                                  label: "Average Deal Size ($M)",
                                  data: [25, 45, 18, 55, 15],
                                  backgroundColor: "rgba(99, 102, 241, 0.5)",
                                },
                              ],
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: {
                                  position: "top" as const,
                                  labels: {
                                    boxWidth: 6,
                                    padding: 2,
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                              },
                              scales: {
                                x: {
                                  grid: {
                                    display: false,
                                  },
                                  ticks: {
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                                y: {
                                  grid: {
                                    color: "rgba(0, 0, 0, 0.05)",
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    drawBorder: false,
                                  },
                                  ticks: {
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                              },
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-blue-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-blue-900">
                              Models Created
                            </h4>
                            <p className="text-lg font-bold text-blue-600">
                              3,000+
                            </p>
                            <p className="text-[10px] text-blue-700">
                              Custom financial models
                            </p>
                          </div>
                          <div className="bg-indigo-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-indigo-900">
                              Time Saved
                            </h4>
                            <p className="text-lg font-bold text-indigo-600">
                              65%
                            </p>
                            <p className="text-[10px] text-indigo-700">
                              vs. traditional methods
                            </p>
                          </div>
                          <div className="bg-purple-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-purple-900">
                              Model Types
                            </h4>
                            <p className="text-lg font-bold text-purple-600">
                              15+
                            </p>
                            <p className="text-[10px] text-purple-700">
                              Specialized templates
                            </p>
                          </div>
                          <div className="bg-green-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-green-900">
                              Efficiency Gain
                            </h4>
                            <p className="text-lg font-bold text-green-600">
                              65%
                            </p>
                            <p className="text-[10px] text-green-700">
                              Time saved vs. traditional methods
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                  <TabsContent value="due-diligence" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          Key Metrics & Performance
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="h-[120px] mb-2">
                          <Line
                            data={{
                              labels: ["2020", "2021", "2022", "2023", "2024"],
                              datasets: [
                                {
                                  label: "Properties Reviewed",
                                  data: [320, 520, 840, 1350, 2180],
                                  borderColor: "rgb(99, 102, 241)",
                                  tension: 0.1,
                                },
                                {
                                  label: "Review Time (Hours)",
                                  data: [72, 64, 56, 48, 40],
                                  borderColor: "rgb(59, 130, 246)",
                                  tension: 0.1,
                                },
                              ],
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: {
                                  position: "top" as const,
                                  labels: {
                                    boxWidth: 6,
                                    padding: 2,
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                              },
                              scales: {
                                x: {
                                  grid: {
                                    display: false,
                                  },
                                  ticks: {
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                                y: {
                                  grid: {
                                    color: "rgba(0, 0, 0, 0.05)",
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    drawBorder: false,
                                  },
                                  ticks: {
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                              },
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-blue-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-blue-900">
                              Properties Reviewed
                            </h4>
                            <p className="text-lg font-bold text-blue-600">
                              5,210+
                            </p>
                            <p className="text-[10px] text-blue-700">
                              Comprehensive analysis
                            </p>
                          </div>
                          <div className="bg-green-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-green-900">
                              Risk Identified
                            </h4>
                            <p className="text-lg font-bold text-green-600">
                              96.8%
                            </p>
                            <p className="text-[10px] text-green-700">
                              Detection rate
                            </p>
                          </div>
                          <div className="bg-purple-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-purple-900">
                              Time to Complete
                            </h4>
                            <p className="text-lg font-bold text-purple-600">
                              40hrs
                            </p>
                            <p className="text-[10px] text-purple-700">
                              Average turnaround
                            </p>
                          </div>
                          <div className="bg-indigo-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-indigo-900">
                              Efficiency Gain
                            </h4>
                            <p className="text-lg font-bold text-indigo-600">
                              65%
                            </p>
                            <p className="text-[10px] text-indigo-700">
                              Time saved vs. traditional methods
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                  <TabsContent value="asset-summary" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          Key Metrics & Performance
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="h-[120px] mb-2">
                          <Doughnut
                            data={{
                              labels: [
                                "Multifamily",
                                "Office",
                                "Retail",
                                "Industrial",
                                "Mixed-Use",
                                "Other",
                              ],
                              datasets: [
                                {
                                  data: [35, 22, 18, 12, 8, 5],
                                  backgroundColor: [
                                    "rgba(59, 130, 246, 0.5)",
                                    "rgba(99, 102, 241, 0.5)",
                                    "rgba(139, 92, 246, 0.5)",
                                    "rgba(16, 185, 129, 0.5)",
                                    "rgba(245, 158, 11, 0.5)",
                                    "rgba(107, 114, 128, 0.5)",
                                  ],
                                },
                              ],
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: {
                                  position: "right" as const,
                                  labels: {
                                    boxWidth: 6,
                                    padding: 2,
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                              },
                              scales: {
                                x: {
                                  grid: {
                                    display: false,
                                  },
                                  ticks: {
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                                y: {
                                  grid: {
                                    color: "rgba(0, 0, 0, 0.05)",
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    drawBorder: false,
                                  },
                                  ticks: {
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                              },
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-blue-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-blue-900">
                              Portfolio Value
                            </h4>
                            <p className="text-lg font-bold text-blue-600">
                              $28B+
                            </p>
                            <p className="text-[10px] text-blue-700">
                              Assets analyzed
                            </p>
                          </div>
                          <div className="bg-indigo-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-indigo-900">
                              Properties
                            </h4>
                            <p className="text-lg font-bold text-indigo-600">
                              4,800+
                            </p>
                            <p className="text-[10px] text-indigo-700">
                              Detailed analysis
                            </p>
                          </div>
                          <div className="bg-purple-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-purple-900">
                              Markets
                            </h4>
                            <p className="text-lg font-bold text-purple-600">
                              120+
                            </p>
                            <p className="text-[10px] text-purple-700">
                              Coverage
                            </p>
                          </div>
                          <div className="bg-green-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-green-900">
                              Efficiency Gain
                            </h4>
                            <p className="text-lg font-bold text-green-600">
                              65%
                            </p>
                            <p className="text-[10px] text-green-700">
                              Time saved vs. traditional methods
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                  <TabsContent value="cmbs" className="mt-0">
                    <MotionCard
                      className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl mb-1">
                          Key Metrics & Performance
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="h-[120px] mb-2">
                          <Bar
                            data={{
                              labels: ["2020", "2021", "2022", "2023", "2024"],
                              datasets: [
                                {
                                  label: "CMBS Volume ($B)",
                                  data: [2.8, 4.5, 7.2, 11.5, 18.2],
                                  backgroundColor: "rgba(59, 130, 246, 0.5)",
                                },
                                {
                                  label: "Loans Analyzed",
                                  data: [180, 290, 460, 740, 1160],
                                  backgroundColor: "rgba(99, 102, 241, 0.5)",
                                },
                              ],
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: {
                                  position: "top" as const,
                                  labels: {
                                    boxWidth: 6,
                                    padding: 2,
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                              },
                              scales: {
                                x: {
                                  grid: {
                                    display: false,
                                  },
                                  ticks: {
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                                y: {
                                  grid: {
                                    color: "rgba(0, 0, 0, 0.05)",
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    drawBorder: false,
                                  },
                                  ticks: {
                                    font: {
                                      size: 6,
                                    },
                                  },
                                },
                              },
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-blue-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-blue-900">
                              Total Volume
                            </h4>
                            <p className="text-lg font-bold text-blue-600">
                              $44.2B+
                            </p>
                            <p className="text-[10px] text-blue-700">
                              CMBS deals analyzed
                            </p>
                          </div>
                          <div className="bg-indigo-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-indigo-900">
                              Loans Reviewed
                            </h4>
                            <p className="text-lg font-bold text-indigo-600">
                              2,830+
                            </p>
                            <p className="text-[10px] text-indigo-700">
                              Detailed analysis
                            </p>
                          </div>
                          <div className="bg-purple-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-purple-900">
                              Success Rate
                            </h4>
                            <p className="text-lg font-bold text-purple-600">
                              99.5%
                            </p>
                            <p className="text-[10px] text-purple-700">
                              Accuracy rate
                            </p>
                          </div>
                          <div className="bg-green-50 p-2 rounded-lg">
                            <h4 className="text-xs font-semibold text-green-900">
                              Efficiency Gain
                            </h4>
                            <p className="text-lg font-bold text-green-600">
                              65%
                            </p>
                            <p className="text-[10px] text-green-700">
                              Time saved vs. traditional methods
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </section>
        {/* File Upload Section */}
        {/* <section className="py-16 relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100/80">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Upload Your Documents for Analysis
              </h2>
              <h4 className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our team will review your documents and provide expert analysis.
              </h4>
            </motion.div>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Label
                    htmlFor="user-email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </Label>
                  <Input
                    id="user-email"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="text-sm text-gray-700"
                    placeholder="Enter your email"
                    disabled={isUploading}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="operating-statement"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Operating Statement
                    </Label>
                    <Input
                      id="operating-statement"
                      type="file"
                      onChange={(e) =>
                        handleFileUpload(e, "Operating Statement")
                      }
                      className="text-sm text-gray-700"
                      accept=".pdf,.xlsx,.xls"
                      disabled={isUploading}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="rent-roll"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Rent Roll
                    </Label>
                    <Input
                      id="rent-roll"
                      type="file"
                      onChange={(e) => handleFileUpload(e, "Rent Roll")}
                      className="text-sm text-gray-700"
                      accept=".pdf,.xlsx,.xls"
                      disabled={isUploading}
                    />
                  </div>
                </div>
                {isUploading && (
                  <div className="mt-4 text-center text-sm text-gray-600">
                    Processing your document...
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="relative py-16 bg-gradient-to-br from-[#001F3F] via-blue-900 to-blue-800">
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
                Need Lender-Ready Underwriting & Due Diligence Support?
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
                Ready to explore how our CRE technology solutions can transform
                your business?
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  onClick={openBookDemo}
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-[8px]"
                >
                  Book Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
             <BookDemoIframeModal
                        isOpen={isBookDemoOpen}
                        onClose={closeBookDemo}
                      />
          </div>
        </section>
      </main>
    </div>
  );
}









/* eslint-disable react/no-children-prop */
// "use client";

// import { motion } from "framer-motion";
// import { GeistSans } from "geist/font/sans";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Clock,
//   Zap,
//   Building2,
//   DollarSign,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";

// import { Bar, Line, Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";
// import DealFeasibilityChecker from "../../components/DealFeasibilityChecker";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const MotionCard = motion(Card);

// export default function UnderwritingDueDiligenceSupport() {
//   const dealUnderwritingFeatures = [
//     "Loan Sizing & DSCR Modeling – Determine maximum loan eligibility",
//     "Cash Flow & NOI Analysis – Validate revenue, expenses, and net operating income",
//     "Sensitivity Analysis – Evaluate impact of rent growth, interest rates, and market shifts",
//     "Lender-Specific Models – Custom templates for Fannie, Freddie, HUD, CMBS lenders",
//     "Scenario Analysis – Create multiple financing scenarios for deal comparison",
//   ];

//   const autoUWFeatures = [
//     "Operating Statement (OS) & Rent Roll Data Extraction – AI-powered document parsing",
//     "Revenue Forecasting – Normalize income sources for accurate cash flow models",
//     "Lease Abstracting – Validate lease terms, rent escalations, and occupancy data",
//     "Charge Code Mapping – Standardized revenue categorization across properties",
//     "Vacancy & Concessions Analysis – Identify risks and market trends",
//   ];

//   const financialModelFeatures = [
//     "Custom Financial Models – Property-specific underwriting models",
//     "Debt & Equity Structuring – Loan-to-value (LTV), IRR, and yield analysis",
//     "CREFC-Formatted Reports – Standardized underwriting outputs for lenders",
//     "Cash Flow Projections – Long-term NOI and NCF analysis",
//     "Capital Expenditure Planning – Predict renovation impact on financials",
//   ];

//   const dueDiligenceFeatures = [
//     "Loan & Lease Abstracting – Comprehensive property-level documentation review",
//     "Appraisal Review & Validation – Cross-check property valuation reports",
//     "Market Comps & Risk Analysis – Assess regional property trends",
//     "Insurance & Environmental Risk Assessment – Identify potential liabilities",
//     "Regulatory Compliance – Ensure alignment with CREFC, CMBS, and lender guidelines",
//   ];

//   const assetSummaryFeatures = [
//     "Asset Summary Reports – Property-level underwriting with borrower background",
//     "Portfolio Risk Analysis – Hold vs. Sell modeling for investment firms",
//     "Cap Rate Analysis – Determine market-based valuation trends",
//     "Pro Forma Modeling – Projected cash flow vs. actual market conditions",
//     "Investor Waterfall Structuring – GP/LP return modeling & promote calculations",
//   ];

//   const cmbsFeatures = [
//     "CMBS Loan Underwriting – Loan analysis and structuring for commercial mortgage-backed securities",
//     "B-Piece Re-Underwriting – Secondary market loan evaluation and underwriting",
//     "Loan Risk Assessment – Detailed stress testing for credit & prepayment risks",
//     "Structured Finance Advisory – Custom financial structuring and securitization support",
//     "Debt Market Trends & Benchmarking – Comparative analysis of lending terms across institutions",
//   ];

//   return (
//     <div
//       className={`min-h-screen ${GeistSans.className} relative overflow-hidden`}
//     >
//       {/* AI-themed background elements */}
//       <div className="absolute  w-full h-full overflow-hidden z-0">
//         {/* // eslint-disable-next-line react/no-children-prop */}
//       </div>

//       <main className="relative z-10">
//         {/* Hero Section */}
//         <section className="relative pt-24 pb-16 overflow-hidden">
//           <div className="mx-auto px-8 lg:space-y-6 relative">
//             <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="w-full lg:w-1/2 text-center lg:text-left"
//               >
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                   <span className="text-gray-900">Unlock</span>{" "}
//                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//                     Expert Underwriting
//                   </span>
//                   <br className="hidden md:block" />
//                   <span className="text-gray-900">at Unbeatable Value</span>
//                 </h1>
//                 <h4 className="text-lg sm:text-xl text-gray-700 mb-8 text-center lg:text-left">
//                   Our seasoned analysts deliver precise, AI-assisted
//                   underwriting support. Accelerate deals with faster turnaround
//                   times while maintaining top-tier accuracy.
//                 </h4>
//                 <Button
//                   size="lg"
//                   className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3"
//                 >
//                   Book Demo
//                 </Button>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="w-full lg:w-1/2 flex justify-center lg:justify-end"
//               >
//                 <DealFeasibilityChecker />
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Clik.ai Section with AI-themed background */}
//         <section className="py-16 relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//           {/* latest added */}
//           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
//           <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>
//           {/* Decorative background elements */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {/* Curved lines */}
//             <svg
//               className="absolute w-full h-full"
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//             >
//               <motion.path
//                 d="M0,50 C30,20 70,80 100,50"
//                 stroke="rgba(59, 130, 246, 0.2)"
//                 strokeWidth="0.5"
//                 fill="none"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Number.POSITIVE_INFINITY,
//                   repeatType: "reverse",
//                 }}
//               />
//               <motion.path
//                 d="M0,30 C30,60 70,40 100,70"
//                 stroke="rgba(59, 130, 246, 0.2)"
//                 strokeWidth="0.5"
//                 fill="none"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{
//                   duration: 2.5,
//                   repeat: Number.POSITIVE_INFINITY,
//                   repeatType: "reverse",
//                 }}
//               />
//             </svg>

//             {/* Floating circles */}
//             {[...Array(5)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-32 h-32 rounded-full bg-blue-200/10"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                 }}
//                 animate={{
//                   y: [0, -20, 0],
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 3 + i,
//                   repeat: Number.POSITIVE_INFINITY,
//                   repeatType: "reverse",
//                 }}
//               />
//             ))}
//           </div>
//           <div className="container mx-auto px-4 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//                 Same-Day CRE Underwriting – Powered by Experts, Accelerated by
//                 Technology
//               </h2>
//               <h4 className="text-xl text-gray-600 max-w-4xl mx-auto">
//                 Clik.ai&apos;s experienced underwriting professionals deliver{" "}
//                 <span className="font-semibold">
//                   lender-ready underwriting reports on the same day
//                 </span>
//                 . Our proprietary tools like AutoUnderwriting extract and
//                 normalize financial data to streamline the process—without
//                 compromising accuracy or quality.
//               </h4>
//             </motion.div>

//             {/* Key Differentiators Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//               {[
//                 {
//                   icon: Clock,
//                   title: "Same-Day Underwriting Completion",
//                   description:
//                     "Receive lender-ready underwriting reports within the same day for faster deal execution.",
//                 },
//                 {
//                   icon: Zap,
//                   title: "Tech-Enabled Financial Processing",
//                   description:
//                     "AutoUnderwriting extracts & normalizes data from OS/RR, reducing manual data entry and improving accuracy.",
//                 },
//                 {
//                   icon: Building2,
//                   title: "Expert-Led Due Diligence",
//                   description:
//                     "Trusted by lenders, investors, and servicers. Our reports meet CREFC, Fannie, Freddie, and HUD standards.",
//                 },
//                 {
//                   icon: DollarSign,
//                   title: "Cost-Effective Support",
//                   description:
//                     "Outsource CRE underwriting at a fraction of in-house costs without compromising quality or efficiency.",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <MotionCard className="h-full transform transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border border-blue-100/20">
//                     <CardContent className="p-6">
//                       <item.icon className="w-12 h-12 text-blue-600 mb-4" />
//                       <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                       <p className="text-sm text-gray-600">
//                         {item.description}
//                       </p>
//                     </CardContent>
//                   </MotionCard>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Process Comparison with Gradient Cards */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="mb-16"
//             >
//               <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//                 Traditional Underwriting vs. Clik.ai&apos;s Same-Day Process
//               </h3>
//               <div className="grid md:grid-cols-2 gap-8">
//                 <MotionCard className="bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-sm border border-gray-200/50">
//                   <CardContent className="p-6">
//                     <h4 className="text-xl font-bold mb-4">
//                       Traditional In-House Underwriting Process
//                     </h4>
//                     <div className="space-y-4">
//                       {[
//                         "Gathering & verifying property financials",
//                         "Data entry & financial model setup",
//                         "Lease abstracting & borrower review",
//                         "Scenario analysis & lender reporting",
//                         "Slower approvals & higher costs",
//                       ].map((step, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center text-gray-500"
//                         >
//                           <span className="text-red-500 mr-2">❌</span>
//                           <span>{step}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </MotionCard>

//                 <MotionCard className="bg-gradient-to-br from-blue-50 to-indigo-100 backdrop-blur-sm border border-blue-200/50">
//                   <CardContent className="p-6">
//                     <h4 className="text-xl font-bold mb-4">
//                       Clik.ai&apos;s Same-Day Underwriting Process
//                     </h4>
//                     <div className="space-y-4">
//                       {[
//                         "AutoExtract Financials from OS/RR",
//                         "Underwriters validate & process financials",
//                         "Custom underwriting model development",
//                         "Deal scenario analysis & lender-ready reporting",
//                         "Faster deal execution & cost-effective underwriting",
//                       ].map((step, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center text-gray-900"
//                         >
//                           <span className="text-green-500 mr-2">✅</span>
//                           <span>{step}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </MotionCard>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Underwriting & Due Diligence Services Section */}
//         <section className="py-16 relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100/80">
//           <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
//           <div className="container mx-auto px-4 relative z-10 max-w-full">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//                 Comprehensive CRE Underwriting & Due Diligence Support
//               </h2>
//               <h4 className="text-xl text-gray-600 max-w-4xl mx-auto">
//                 Clik.ai&apos;s underwriting experts provide lender-ready models,
//                 cash flow analysis, financial validation, and due diligence
//                 support—ensuring faster, compliant, and data-driven deal
//                 decisions.
//               </h4>
//             </motion.div>
//             <Tabs defaultValue="deal-underwriting" className="w-full">
//               <div className="overflow-x-auto no-scrollbar">
//                 <TabsList className="inline-flex h-auto p-1 mb-4 sm:mb-8 bg-muted/20 backdrop-blur-sm rounded-lg whitespace-nowrap">
//                   {[
//                     {
//                       value: "deal-underwriting",
//                       label: "CRE Deal Underwriting",
//                     },
//                     { value: "autouw", label: "AutoUW - OS & Rent Roll" },
//                     {
//                       value: "financial-model",
//                       label: "Financial Model Creation",
//                     },
//                     {
//                       value: "due-diligence",
//                       label: "Due Diligence & Compliance",
//                     },
//                     {
//                       value: "asset-summary",
//                       label: "Asset Summary & Analysis",
//                     },
//                     { value: "cmbs", label: "CMBS & Structured Finance" },
//                   ].map((tab) => (
//                     <TabsTrigger
//                       key={tab.value}
//                       value={tab.value}
//                       className="px-4 py-2 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
//                     >
//                       {tab.label}
//                     </TabsTrigger>
//                   ))}
//                 </TabsList>
//               </div>
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//                 {/* Left Column - Features */}
//                 <div className="space-y-6">
//                   <TabsContent value="deal-underwriting" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           CRE Deal Underwriting
//                         </CardTitle>
//                         <p className="text-sm text-muted-foreground">
//                           Comprehensive deal analysis and loan structuring
//                         </p>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <ul className="space-y-2">
//                           {dealUnderwritingFeatures.map((feature, index) => (
//                             <li key={index} className="flex items-start">
//                               <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
//                               <span className="text-sm">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                   <TabsContent value="autouw" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           AutoUW - OS & Rent Roll Analysis
//                         </CardTitle>
//                         <p className="text-sm text-muted-foreground">
//                           AI-powered data extraction and normalization
//                         </p>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <ul className="space-y-2">
//                           {autoUWFeatures.map((feature, index) => (
//                             <li key={index} className="flex items-start">
//                               <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
//                               <span className="text-sm">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                   <TabsContent value="financial-model" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           Financial Model Creation & Spreading
//                         </CardTitle>
//                         <p className="text-sm text-muted-foreground">
//                           Customizable models for various scenarios
//                         </p>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <ul className="space-y-2">
//                           {financialModelFeatures.map((feature, index) => (
//                             <li key={index} className="flex items-start">
//                               <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
//                               <span className="text-sm">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                   <TabsContent value="due-diligence" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           Due Diligence & Compliance Review
//                         </CardTitle>
//                         <p className="text-sm text-muted-foreground">
//                           Thorough review to mitigate risks
//                         </p>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <ul className="space-y-2">
//                           {dueDiligenceFeatures.map((feature, index) => (
//                             <li key={index} className="flex items-start">
//                               <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
//                               <span className="text-sm">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                   <TabsContent value="asset-summary" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           Asset Summary & Investment Analysis
//                         </CardTitle>
//                         <p className="text-sm text-muted-foreground">
//                           Data-driven insights for investment decisions
//                         </p>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <ul className="space-y-2">
//                           {assetSummaryFeatures.map((feature, index) => (
//                             <li key={index} className="flex items-start">
//                               <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
//                               <span className="text-sm">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                   <TabsContent value="cmbs" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           CMBS & Structured Finance Underwriting
//                         </CardTitle>
//                         <p className="text-sm text-muted-foreground">
//                           Specialized expertise for complex transactions
//                         </p>
//                       </CardHeader>
//                       <CardContent className="pt-2 px-4">
//                         <ul className="space-y-2">
//                           {cmbsFeatures.map((feature, index) => (
//                             <li key={index} className="flex items-start">
//                               <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
//                               <span className="text-sm">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                 </div>

//                 {/* Middle Column - Charts & Metrics */}
//                 <div className="space-y-6">
//                   <TabsContent value="deal-underwriting" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           Key Metrics & Performance
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <div className="h-[120px] mb-2">
//                           <Bar
//                             data={{
//                               labels: ["2020", "2021", "2022", "2023", "2024"],
//                               datasets: [
//                                 {
//                                   label: "Annual Deal Volume ($B)",
//                                   data: [0.8, 1.5, 2.7, 4.2, 6.1],
//                                   backgroundColor: "rgba(59, 130, 246, 0.5)",
//                                 },
//                                 {
//                                   label: "Deals Processed",
//                                   data: [420, 680, 1150, 1780, 2600],
//                                   backgroundColor: "rgba(99, 102, 241, 0.5)",
//                                 },
//                               ],
//                             }}
//                             options={{
//                               responsive: true,
//                               maintainAspectRatio: false,
//                               plugins: {
//                                 legend: {
//                                   position: "top" as const,
//                                   labels: {
//                                     boxWidth: 6,
//                                     padding: 2,
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                               scales: {
//                                 x: {
//                                   grid: {
//                                     display: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                                 y: {
//                                   grid: {
//                                     color: "rgba(0, 0, 0, 0.05)",

//                                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//                                     // @ts-expect-error
//                                     drawBorder: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                             }}
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-2">
//                           <div className="bg-blue-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-blue-900">
//                               Total Deal Volume
//                             </h4>
//                             <p className="text-lg font-bold text-blue-600">
//                               $15.3B+
//                             </p>
//                             <p className="text-[10px] text-blue-700">
//                               Across all asset types
//                             </p>
//                           </div>
//                           <div className="bg-indigo-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-indigo-900">
//                               Success Rate
//                             </h4>
//                             <p className="text-lg font-bold text-indigo-600">
//                               97.8%
//                             </p>
//                             <p className="text-[10px] text-indigo-700">
//                               Approval rate
//                             </p>
//                           </div>
//                           <div className="bg-purple-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-purple-900">
//                               Avg. Processing Time
//                             </h4>
//                             <p className="text-lg font-bold text-purple-600">
//                               8hrs
//                             </p>
//                             <p className="text-[10px] text-purple-700">
//                               Same-day delivery
//                             </p>
//                           </div>
//                           <div className="bg-green-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-green-900">
//                               Efficiency Gain
//                             </h4>
//                             <p className="text-lg font-bold text-green-600">
//                               65%
//                             </p>
//                             <p className="text-[10px] text-green-700">
//                               Time saved vs. traditional methods
//                             </p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                   <TabsContent value="autouw" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           Key Metrics & Performance
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <div className="h-[120px] mb-2">
//                           <Line
//                             data={{
//                               labels: ["2020", "2021", "2022", "2023", "2024"],
//                               datasets: [
//                                 {
//                                   label: "Documents Processed (Thousands)",
//                                   data: [12, 22, 38, 62, 95],
//                                   borderColor: "rgb(99, 102, 241)",
//                                   tension: 0.1,
//                                 },
//                                 {
//                                   label: "Processing Time (Minutes)",
//                                   data: [45, 38, 32, 28, 25],
//                                   borderColor: "rgb(59, 130, 246)",
//                                   tension: 0.1,
//                                 },
//                               ],
//                             }}
//                             options={{
//                               responsive: true,
//                               maintainAspectRatio: false,
//                               plugins: {
//                                 legend: {
//                                   position: "top" as const,
//                                   labels: {
//                                     boxWidth: 6,
//                                     padding: 2,
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                               scales: {
//                                 x: {
//                                   grid: {
//                                     display: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                                 y: {
//                                   grid: {
//                                     color: "rgba(0, 0, 0, 0.05)",
//                                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//                                     // @ts-expect-error
//                                     drawBorder: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                             }}
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-2">
//                           <div className="bg-purple-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-purple-900">
//                               Documents Processed
//                             </h4>
//                             <p className="text-lg font-bold text-purple-600">
//                               95k+
//                             </p>
//                             <p className="text-[10px] text-purple-700">
//                               OS & RR documents
//                             </p>
//                           </div>
//                           <div className="bg-blue-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-blue-900">
//                               Processing Time
//                             </h4>
//                             <p className="text-lg font-bold text-blue-600">
//                               25min
//                             </p>
//                             <p className="text-[10px] text-blue-700">
//                               Average per document
//                             </p>
//                           </div>
//                           <div className="bg-green-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-green-900">
//                               Accuracy Rate
//                             </h4>
//                             <p className="text-lg font-bold text-green-600">
//                               99.2%
//                             </p>
//                             <p className="text-[10px] text-green-700">
//                               AI-powered extraction
//                             </p>
//                           </div>
//                           <div className="bg-indigo-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-indigo-900">
//                               Efficiency Gain
//                             </h4>
//                             <p className="text-lg font-bold text-indigo-600">
//                               65%
//                             </p>
//                             <p className="text-[10px] text-indigo-700">
//                               Time saved vs. traditional methods
//                             </p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                   <TabsContent value="financial-model" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           Key Metrics & Performance
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <div className="h-[120px] mb-2">
//                           <Bar
//                             data={{
//                               labels: [
//                                 "Agency",
//                                 "CMBS",
//                                 "Bridge",
//                                 "Construction",
//                                 "Other",
//                               ],
//                               datasets: [
//                                 {
//                                   label: "Models Created",
//                                   data: [980, 720, 560, 420, 320],
//                                   backgroundColor: "rgba(59, 130, 246, 0.5)",
//                                 },
//                                 {
//                                   label: "Average Deal Size ($M)",
//                                   data: [25, 45, 18, 55, 15],
//                                   backgroundColor: "rgba(99, 102, 241, 0.5)",
//                                 },
//                               ],
//                             }}
//                             options={{
//                               responsive: true,
//                               maintainAspectRatio: false,
//                               plugins: {
//                                 legend: {
//                                   position: "top" as const,
//                                   labels: {
//                                     boxWidth: 6,
//                                     padding: 2,
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                               scales: {
//                                 x: {
//                                   grid: {
//                                     display: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                                 y: {
//                                   grid: {
//                                     color: "rgba(0, 0, 0, 0.05)",
//                                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//                                     // @ts-expect-error
//                                     drawBorder: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                             }}
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-2">
//                           <div className="bg-blue-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-blue-900">
//                               Models Created
//                             </h4>
//                             <p className="text-lg font-bold text-blue-600">
//                               3,000+
//                             </p>
//                             <p className="text-[10px] text-blue-700">
//                               Custom financial models
//                             </p>
//                           </div>
//                           <div className="bg-indigo-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-indigo-900">
//                               Time Saved
//                             </h4>
//                             <p className="text-lg font-bold text-indigo-600">
//                               65%
//                             </p>
//                             <p className="text-[10px] text-indigo-700">
//                               vs. traditional methods
//                             </p>
//                           </div>
//                           <div className="bg-purple-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-purple-900">
//                               Model Types
//                             </h4>
//                             <p className="text-lg font-bold text-purple-600">
//                               15+
//                             </p>
//                             <p className="text-[10px] text-purple-700">
//                               Specialized templates
//                             </p>
//                           </div>
//                           <div className="bg-green-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-green-900">
//                               Efficiency Gain
//                             </h4>
//                             <p className="text-lg font-bold text-green-600">
//                               65%
//                             </p>
//                             <p className="text-[10px] text-green-700">
//                               Time saved vs. traditional methods
//                             </p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                   <TabsContent value="due-diligence" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           Key Metrics & Performance
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <div className="h-[120px] mb-2">
//                           <Line
//                             data={{
//                               labels: ["2020", "2021", "2022", "2023", "2024"],
//                               datasets: [
//                                 {
//                                   label: "Properties Reviewed",
//                                   data: [320, 520, 840, 1350, 2180],
//                                   borderColor: "rgb(99, 102, 241)",
//                                   tension: 0.1,
//                                 },
//                                 {
//                                   label: "Review Time (Hours)",
//                                   data: [72, 64, 56, 48, 40],
//                                   borderColor: "rgb(59, 130, 246)",
//                                   tension: 0.1,
//                                 },
//                               ],
//                             }}
//                             options={{
//                               responsive: true,
//                               maintainAspectRatio: false,
//                               plugins: {
//                                 legend: {
//                                   position: "top" as const,
//                                   labels: {
//                                     boxWidth: 6,
//                                     padding: 2,
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                               scales: {
//                                 x: {
//                                   grid: {
//                                     display: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                                 y: {
//                                   grid: {
//                                     color: "rgba(0, 0, 0, 0.05)",
//                                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//                                     // @ts-expect-error
//                                     drawBorder: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                             }}
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-2">
//                           <div className="bg-blue-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-blue-900">
//                               Properties Reviewed
//                             </h4>
//                             <p className="text-lg font-bold text-blue-600">
//                               5,210+
//                             </p>
//                             <p className="text-[10px] text-blue-700">
//                               Comprehensive analysis
//                             </p>
//                           </div>
//                           <div className="bg-green-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-green-900">
//                               Risk Identified
//                             </h4>
//                             <p className="text-lg font-bold text-green-600">
//                               96.8%
//                             </p>
//                             <p className="text-[10px] text-green-700">
//                               Detection rate
//                             </p>
//                           </div>
//                           <div className="bg-purple-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-purple-900">
//                               Time to Complete
//                             </h4>
//                             <p className="text-lg font-bold text-purple-600">
//                               40hrs
//                             </p>
//                             <p className="text-[10px] text-purple-700">
//                               Average turnaround
//                             </p>
//                           </div>
//                           <div className="bg-indigo-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-indigo-900">
//                               Efficiency Gain
//                             </h4>
//                             <p className="text-lg font-bold text-indigo-600">
//                               65%
//                             </p>
//                             <p className="text-[10px] text-indigo-700">
//                               Time saved vs. traditional methods
//                             </p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                   <TabsContent value="asset-summary" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           Key Metrics & Performance
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <div className="h-[120px] mb-2">
//                           <Doughnut
//                             data={{
//                               labels: [
//                                 "Multifamily",
//                                 "Office",
//                                 "Retail",
//                                 "Industrial",
//                                 "Mixed-Use",
//                                 "Other",
//                               ],
//                               datasets: [
//                                 {
//                                   data: [35, 22, 18, 12, 8, 5],
//                                   backgroundColor: [
//                                     "rgba(59, 130, 246, 0.5)",
//                                     "rgba(99, 102, 241, 0.5)",
//                                     "rgba(139, 92, 246, 0.5)",
//                                     "rgba(16, 185, 129, 0.5)",
//                                     "rgba(245, 158, 11, 0.5)",
//                                     "rgba(107, 114, 128, 0.5)",
//                                   ],
//                                 },
//                               ],
//                             }}
//                             options={{
//                               responsive: true,
//                               maintainAspectRatio: false,
//                               plugins: {
//                                 legend: {
//                                   position: "right" as const,
//                                   labels: {
//                                     boxWidth: 6,
//                                     padding: 2,
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                               scales: {
//                                 x: {
//                                   grid: {
//                                     display: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                                 y: {
//                                   grid: {
//                                     color: "rgba(0, 0, 0, 0.05)",
//                                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//                                     // @ts-expect-error
//                                     drawBorder: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                             }}
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-2">
//                           <div className="bg-blue-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-blue-900">
//                               Portfolio Value
//                             </h4>
//                             <p className="text-lg font-bold text-blue-600">
//                               $28B+
//                             </p>
//                             <p className="text-[10px] text-blue-700">
//                               Assets analyzed
//                             </p>
//                           </div>
//                           <div className="bg-indigo-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-indigo-900">
//                               Properties
//                             </h4>
//                             <p className="text-lg font-bold text-indigo-600">
//                               4,800+
//                             </p>
//                             <p className="text-[10px] text-indigo-700">
//                               Detailed analysis
//                             </p>
//                           </div>
//                           <div className="bg-purple-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-purple-900">
//                               Markets
//                             </h4>
//                             <p className="text-lg font-bold text-purple-600">
//                               120+
//                             </p>
//                             <p className="text-[10px] text-purple-700">
//                               Coverage
//                             </p>
//                           </div>
//                           <div className="bg-green-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-green-900">
//                               Efficiency Gain
//                             </h4>
//                             <p className="text-lg font-bold text-green-600">
//                               65%
//                             </p>
//                             <p className="text-[10px] text-green-700">
//                               Time saved vs. traditional methods
//                             </p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                   <TabsContent value="cmbs" className="mt-0">
//                     <MotionCard
//                       className="h-[400px] bg-white/80 backdrop-blur-sm border border-blue-100/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-xl mb-1">
//                           Key Metrics & Performance
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent className="pt-2">
//                         <div className="h-[120px] mb-2">
//                           <Bar
//                             data={{
//                               labels: ["2020", "2021", "2022", "2023", "2024"],
//                               datasets: [
//                                 {
//                                   label: "CMBS Volume ($B)",
//                                   data: [2.8, 4.5, 7.2, 11.5, 18.2],
//                                   backgroundColor: "rgba(59, 130, 246, 0.5)",
//                                 },
//                                 {
//                                   label: "Loans Analyzed",
//                                   data: [180, 290, 460, 740, 1160],
//                                   backgroundColor: "rgba(99, 102, 241, 0.5)",
//                                 },
//                               ],
//                             }}
//                             options={{
//                               responsive: true,
//                               maintainAspectRatio: false,
//                               plugins: {
//                                 legend: {
//                                   position: "top" as const,
//                                   labels: {
//                                     boxWidth: 6,
//                                     padding: 2,
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                               scales: {
//                                 x: {
//                                   grid: {
//                                     display: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                                 y: {
//                                   grid: {
//                                     color: "rgba(0, 0, 0, 0.05)",
//                                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//                                     // @ts-expect-error
//                                     drawBorder: false,
//                                   },
//                                   ticks: {
//                                     font: {
//                                       size: 6,
//                                     },
//                                   },
//                                 },
//                               },
//                             }}
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-2">
//                           <div className="bg-blue-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-blue-900">
//                               Total Volume
//                             </h4>
//                             <p className="text-lg font-bold text-blue-600">
//                               $44.2B+
//                             </p>
//                             <p className="text-[10px] text-blue-700">
//                               CMBS deals analyzed
//                             </p>
//                           </div>
//                           <div className="bg-indigo-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-indigo-900">
//                               Loans Reviewed
//                             </h4>
//                             <p className="text-lg font-bold text-indigo-600">
//                               2,830+
//                             </p>
//                             <p className="text-[10px] text-indigo-700">
//                               Detailed analysis
//                             </p>
//                           </div>
//                           <div className="bg-purple-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-purple-900">
//                               Success Rate
//                             </h4>
//                             <p className="text-lg font-bold text-purple-600">
//                               99.5%
//                             </p>
//                             <p className="text-[10px] text-purple-700">
//                               Accuracy rate
//                             </p>
//                           </div>
//                           <div className="bg-green-50 p-2 rounded-lg">
//                             <h4 className="text-xs font-semibold text-green-900">
//                               Efficiency Gain
//                             </h4>
//                             <p className="text-lg font-bold text-green-600">
//                               65%
//                             </p>
//                             <p className="text-[10px] text-green-700">
//                               Time saved vs. traditional methods
//                             </p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </MotionCard>
//                   </TabsContent>
//                 </div>
//               </div>
//             </Tabs>
//           </div>
//         </section>
//         {/* CTA Section */}
//         <section className="relative py-16 bg-gradient-to-br from-[#001F3F] via-blue-900 to-blue-800">
//           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <svg
//               className="absolute w-full h-full"
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z"
//                 fill="rgba(255, 255, 255, 0.05)"
//               />
//             </svg>
//           </div>
//           <div className="container mx-auto px-4 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-center"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                 Need Lender-Ready Underwriting & Due Diligence Support?
//               </h2>
//               <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
//                 Ready to explore how our CRE technology solutions can transform
//                 your business?
//               </p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               >
//                 <Button
//                   size="lg"
//                   className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-[8px]"
//                 >
//                   Book Demo
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
