"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Zap,
  Server,
  Database,
  CheckCircle,
  Copy,
  FileSpreadsheet,
  FileText,
  Bot,
  Workflow,
  Layout,
  FileJson,
  Code,
  Building,
  FileCheck,
  Briefcase,
  BanknoteIcon as Bank,
  Calculator,
} from "lucide-react";
import { GeistSans } from "geist/font/sans";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type React from "react";
import Link from "next/link";

import { useState } from "react";
import { BookDemoIframeModal } from "@/components/hubspot_form/BookDemoIframe";

const CodePreview = ({ children }: { children: React.ReactNode }) => (
  <div className="relative group">
    <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Copy className="h-4 w-4" />
      </Button>
    </div>
    <pre className="bg-zinc-950 text-zinc-50 p-4 rounded-lg overflow-x-auto">
      <code className="text-sm">{children}</code>
    </pre>
  </div>
);

// const AIBackground = () => (
//   <div className="absolute inset-0 overflow-hidden opacity-10">
//     <div className="absolute top-0 left-0 w-full h-full">
//       {[...Array(20)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full bg-blue-500/20 blur-3xl"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             width: `${Math.random() * 400 + 100}px`,
//             height: `${Math.random() * 400 + 100}px`,
//             animation: `float ${Math.random() * 10 + 10}s infinite`,
//             animationDelay: `${Math.random() * 5}s`,
//           }}
//         />
//       ))}
//     </div>
//   </div>
// );

export default function SmartExtractPage() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const openBookDemo = () => setIsBookDemoOpen(true);
  const closeBookDemo = () => setIsBookDemoOpen(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <div className={`min-h-screen ${GeistSans.className}`}>
        {/* Hero Section */}
        {/* <AIBackground /> */}
        <div className="mx-auto px-8 lg:space-y-6 relative mt-8 sm:mt-12">
          <div className="absolute  inset-0 bg-gradient-to-b from-white via-blue-50 to-indigo-100"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm leading-6 text-blue-700 mb-8 mt-8">
                <span className="font-medium ">Industry&apos;s First</span>
                <span className="ml-3 inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs">
                  100,000+ Documents/Year
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-gray-900">Smart</span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Extract
                </span>{" "}
                <span className="text-gray-900">(SmEx)</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The brain behind AutoUW, adopted by leading CRE Tech companies
                to extract information from their exhaustive data bank of
                Operating Statements & Rent Rolls.
              </p>

              <div className="flex flex-col gap-6 sm:gap-10">
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={openBookDemo}
                    className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 rounded-[8px]"
                  >
                    Get API Access
                    <Server className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 rounded-[8px]"
                  >
                    <Link
                      href="https://clik-ai.gitbook.io/smart-extract-documentation/api-reference/"
                      className="flex items-center"
                    >
                      View Documentation{" "}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-start gap-4 w-full ">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-blue-200 w-56 ">
                    <div className="text-2xl font-bold text-blue-600 flex items-center justify-center">
                      100K+
                    </div>
                    <div className="text-xs text-gray-600 flex items-center justify-center">
                      Documents Processed Yearly
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-blue-200 w-56 text-left">
                    <div className="text-2xl font-bold text-blue-600 flex items-center justify-center">
                      99.9%
                    </div>
                    <div className="text-xs text-gray-600 flex items-center justify-center">
                      Extraction Accuracy
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ y }}
              className="relative sm:h-[400px] md:h-[500px] lg:h-[660px] w-full"
            >
              <div className="relative w-full h-full mt-12">
                <Image
                  src="/images/Products_Section_Images/SmartExtract/Hero_Image.png"
                  alt="SmartExtract Architecture"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Who is it for? Section */}
        <section className="py-12  ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Who is it for?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: "Deal Pipeline and CRM Softwares",
                  description:
                    "Integrate rent roll and income statement PDF parsing and automated cashflow analysis capabilities right within your deal pipeline management and deal-CRM interface.",
                },
                {
                  icon: FileCheck,
                  title: "Appraisal Order and Management Softwares",
                  description:
                    "Give your appraiser clients the tool to automate cash flow and rent roll analysis. Improve stickiness within your product by integrating Clik.ai.",
                },
                {
                  icon: Building,
                  title: "Property Management Technology Providers",
                  description:
                    "Automate rent roll and cashflow PDF document data into your interface using our APIs and extraction iFrame. Handle any format and easily transform data from Yardi, MRI, Appfolio or any table format directly into your database.",
                },
                {
                  icon: Bank,
                  title: "Banks building CRE lending softwares in-house",
                  description:
                    "Bring white label and private hosting capabilities of Clik.ai's rent roll and AI-based underwriting features into your systems. Boost loan sizing and property financial performance tracking in 80% less time.",
                },
                {
                  icon: FileText,
                  title: "Loan Servicing and Origination Softwares",
                  description:
                    "Allow your platform users to parse rent roll and cashflow statement PDFs using Clik.ai iFrame integration. Create loan sizers, OSARs, and asset management excel outputs instantaneously.",
                },
                {
                  icon: Calculator,
                  title: "Asset Management and Equity Modeling Softwares",
                  description:
                    "Enhance your cashflow analysis and future cashflow projection software by automating data input and processing, significantly improving efficiency and accuracy.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Options */}
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Two Ways to Integrate
              </h2>
              <p className="text-xl text-gray-600">
                Choose the integration method that best fits your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* SmartExtract Widget */}
              <Card className="relative overflow-hidden border-2 border-blue-100 rounded-xl hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-blue-100 rounded-xl w-fit">
                    <Layout className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mt-4">
                    SmartExtract Widget
                  </CardTitle>
                  <CardDescription>
                    Ready-to-use UI components for quick integration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Built-in spreadsheet view for data validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Seamless iframe integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>White-label ready with your branding</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link
                      href="https://clik-ai.gitbook.io/smart-extract-documentation/api-reference/"
                      className="w-full"
                    >
                      <Button className="w-full flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* SmartExtract JSON API */}
              <Card className="relative overflow-hidden border-2 border-blue-100 rounded-xl hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-blue-100 rounded-xl w-fit">
                    <FileJson className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mt-4">
                    SmartExtract JSON API
                  </CardTitle>
                  <CardDescription>
                    Direct API access for custom integration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Raw JSON data for maximum flexibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Build your own UI for data validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Stateless architecture for scalability</span>
                    </li>
                  </ul>
                  <div className="pt-4 flex justify-center">
                    <Link
                      href="https://clik-ai.gitbook.io/smart-extract-documentation/api-reference/"
                      className="w-full"
                    >
                      <Button className="w-full flex items-center justify-center gap-2">
                        View API Docs
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Advanced & Exhaustive APIs
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Stateless architecture ready to embed into your existing tech
                  stack
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "SSO Integration",
                      description:
                        "Seamless authentication with your existing system",
                    },
                    {
                      title: "Cloud Infrastructure",
                      description:
                        "Connect to your company's cloud infrastructure",
                    },
                    {
                      title: "Flexible UI Options",
                      description:
                        "Choose between our widget or build your own screens",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wI51ETCLnF3JJlWNf0lS7Y4iT4MfYa.png"
                  alt="Document Processing Workflow"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Bot,
                  title: "AI-Powered Engine",
                  description:
                    "Machine learning models trained on millions of CRE documents, featuring advanced NLP for contextual understanding and continuous learning capabilities",
                },
                {
                  icon: Zap,
                  title: "Real-Time Processing",
                  description:
                    "Lightning-fast data extraction and classification with sub-second response times and parallel processing capabilities",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description:
                    "Bank-grade security with SOC2 compliance, end-to-end encryption, and regular penetration testing to ensure data protection",
                },
                {
                  icon: Workflow,
                  title: "Automated Workflow",
                  description:
                    "Intelligent workflow automation with custom rules engine, automated QC, and seamless integration with existing systems",
                },
              ].map((spec, index) => (
                <Card
                  key={index}
                  className="border-none shadow-none bg-transparent"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                      <spec.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{spec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{spec.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className="py-12 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Comprehensive CRE Document Support
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Extract data from all major commercial real estate document
                types
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileSpreadsheet,
                  title: "Rent Rolls",
                  description:
                    "Tenant details, lease terms, rent schedules, and more",
                  items: [
                    "Unit Mix",
                    "Lease Terms",
                    "Rental Income",
                    "Occupancy Data",
                  ],
                },
                {
                  icon: FileText,
                  title: "Operating Statements",
                  description: "Income, expenses, and key financial metrics",
                  items: [
                    "Revenue",
                    "Operating Expenses",
                    "NOI",
                    "Capital Expenditures",
                  ],
                },
                {
                  icon: Database,
                  title: "Trailing Financials",
                  description: "Historical performance and trends",
                  items: [
                    "Monthly P&L",
                    "YOY Analysis",
                    "Variance Reports",
                    "Cash Flow",
                  ],
                },
              ].map((docType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className="relative group hover:shadow-lg transition-all duration-300 border-blue-100/50 flex flex-col h-full">
                    <CardHeader>
                      <div className="p-3 bg-blue-100 rounded-xl w-fit group-hover:bg-blue-600 transition-colors duration-300">
                        <docType.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl mt-4">
                        {docType.title}
                      </CardTitle>
                      <CardDescription>{docType.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {docType.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">
                              {item}
                            </span>
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

        {/* API Documentation Preview - Compact */}
        <section className="py-6 md:py-8 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Simple Integration
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    Powerful extraction with minimal code. Developer-friendly
                    API.
                  </p>
                </div>
                <CodePreview>
                  {`import { SmartExtract } from '@clik/smart-extract';

const smartExtract = new SmartExtract({
  apiKey: process.env.SMART_EXTRACT_API_KEY,
  endpoint: 'https://api.your-domain.com'
});

const result = await smartExtract.process({
  file: rentRollPdf,
  type: 'rent_roll',
  options: { realTimeUpdates: true, validation: 'strict' }
});

console.log(result.data);`}
                </CodePreview>
              </div>
              <div className="space-y-4">
                <Card className="bg-gradient-to-br from-white to-gray-50 border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">
                      Integration Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <Card className="bg-blue-50/50 border-blue-100">
                        <CardContent className="p-3">
                          <p className="text-lg font-bold text-blue-600">
                            {"<"}2s
                          </p>
                          <p className="text-xs text-gray-600">
                            Processing Time
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-blue-50/50 border-blue-100">
                        <CardContent className="p-3">
                          <p className="text-lg font-bold text-blue-600">
                            99.9%
                          </p>
                          <p className="text-xs text-gray-600">Success Rate</p>
                        </CardContent>
                      </Card>
                    </div>
                    <ul className="space-y-2">
                      {[
                        {
                          title: "RESTful API",
                          description: "JSON API with docs",
                          icon: FileJson,
                        },
                        {
                          title: "Real-time Updates",
                          description: "WebSocket support",
                          icon: Zap,
                        },
                        {
                          title: "Embedded Widget",
                          description: "Pre-built UI components",
                          icon: Layout,
                        },
                        {
                          title: "Native SDKs",
                          description: "Major language libraries",
                          icon: Code,
                        },
                      ].map((method, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50/50 transition-colors"
                        >
                          <method.icon className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-sm">
                              {method.title}
                            </div>
                            <div className="text-xs text-gray-600">
                              {method.description}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-blue-100 bg-blue-50/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-sm">
                          Enterprise Ready
                        </h3>
                        <p className="text-xs text-gray-600">
                          SOC2 compliant, 99.99% uptime SLA
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
                Ready to Transform Your CRE Software?
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
                Join the industry leaders processing over 100,000 documents
                yearly
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
                </Button>
              </motion.div>
            </motion.div>
            <BookDemoIframeModal
              isOpen={isBookDemoOpen}
              onClose={closeBookDemo}
            />
          </div>
        </section>
      </div>
    </>
  );
}
