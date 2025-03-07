"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  FileText,
  Database,
  Zap,
  CheckCircle,
  Shield,
  BarChart,
  Upload,
  RefreshCw,
  Layers,
  X,
} from "lucide-react";
import { GeistSans } from "geist/font/sans";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Stats data
// const stats = [
//   { label: "Documents Processed", value: "500K+", suffix: "annually" },
//   { label: "Accuracy Rate", value: "100%", suffix: "with AI + human QC" },
//   { label: "Time Saved", value: "75%", suffix: "vs manual processing" },
//   { label: "Cost Reduction", value: "60%", suffix: "on average" },
// ];

// Document types we process
const documentTypes = [
  {
    category: "Asset Management",
    items: [
      "Financial Statements",
      "Operating Statements",
      "Rent Rolls",
      "Trigger Analysis Reports",
    ],
    icon: BarChart,
  },
  {
    category: "Property Documentation",
    items: [
      "Title Documents",
      "Appraisal Reports",
      "Inspection Documents",
      "Lease Agreements",
    ],
    icon: FileText,
  },
  {
    category: "Loan Administration",
    items: [
      "Insurance Documentation",
      "Escrow Administration",
      "Tax Documents",
      "Loan Onboarding Forms",
    ],
    icon: Database,
  },
];

export default function LoanOnboardingPage() {
  return (
    <div className={`min-h-screen ${GeistSans.className}`}>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Revolutionize</span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                  Data Digitization
                </span>{" "}
                <span className="text-gray-900">for Financial Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your data management with AI-powered digitization.
                Streamline loan onboarding, enhance accuracy, and accelerate
                decision-making across your financial operations.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-4/5 mx-auto mt-12 mb-16"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
               src="/images/Services_Section_Images/Lease&DataAdministration/LoanOnboarding/Hero_Image.png"
                alt="Loan Onboarding Workflow"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Transforming Financial Data Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform delivers unparalleled results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "2x Faster Processing",
                description: "Accelerate workflows, reduce time-to-decision",
              },
              {
                icon: CheckCircle,
                title: "100% Accuracy",
                description: "AI-powered extraction with human QC",
              },
              {
                icon: BarChart,
                title: "50% Cost Reduction",
                description: "Optimize resources, lower operational expenses",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white shadow-sm border-blue-100">
                  <CardContent className="p-4 flex items-center">
                    <div className="p-2 bg-blue-100 rounded-full mr-4">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {stat.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {stat.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Document Processing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform processes all critical loan documents with
              industry-leading accuracy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {documentTypes.map((docType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border border-blue-100/20">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <docType.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle>{docType.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {docType.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
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

      {/* Process Flow Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Intelligent Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined workflow combining AI precision with human expertise
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            {[
              {
                icon: Upload,
                title: "Secure Document Ingestion",
                description:
                  "Multi-channel upload with bank-grade security protocols",
              },
              {
                icon: Layers,
                title: "AI-Powered Data Extraction",
                description:
                  "Intelligent parsing and categorization of complex financial documents",
              },
              {
                icon: Shield,
                title: "Expert Quality Control",
                description:
                  "Human oversight ensuring 100% accuracy and compliance",
              },
              {
                icon: RefreshCw,
                title: "Seamless Integration",
                description:
                  "Direct data push to your existing financial systems",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="p-3 bg-blue-100 rounded-full">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3
                      className={`text-xl font-bold text-gray-900 ${
                        index % 2 === 0 ? "mr-4" : "ml-4"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Clik Sets New Industry Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our innovative approach redefines data digitization in
              financial services
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead>Clik</TableHead>
                    <TableHead>Industry Standard</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Processing Speed
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">2x Faster</Badge>
                    </TableCell>
                    <TableCell>Standard</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Accuracy Rate</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">100%</Badge>
                    </TableCell>
                    <TableCell>98-99%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Cost Reduction
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">50%</Badge>
                    </TableCell>
                    <TableCell>
                      <X className="text-red-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AI + Human QC</TableCell>
                    <TableCell>
                      <CheckCircle className="text-green-500" />
                    </TableCell>
                    <TableCell>
                      <X className="text-red-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Quality SLA tied to Fee
                    </TableCell>
                    <TableCell>
                      <CheckCircle className="text-green-500" />
                    </TableCell>
                    <TableCell>Variable</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="md:w-1/3">
              <Card className="h-full bg-white shadow-lg border-blue-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600">
                    Why Clik Excels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>
                        Proprietary AI models trained on millions of financial
                        documents
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>
                        Continuous learning and improvement from each processed
                        document
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>
                        Customizable workflows to match your specific financial
                        processes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>SOC2 Compliant</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SLA and Quality Commitment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unparalleled service level agreements and quality assurance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">
                  Service Level Agreement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>
                      24/7 operations with same day document processing
                      guaranteed
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Commitment to Quality - OLAs tied to Clik fee</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>
                      Governance at every level - Monthly performance reports
                      and reviews
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>
                      99.9% platform uptime guarantee (In case of our platform
                      leverage)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">
                  Quality Assurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>SOC2 Compliant for highest security standards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>
                      Agency-approved processes for various client businesses
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>AI-powered processing with human expert review</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Continuous model training and improvement</span>
                  </li>
                </ul>
              </CardContent>
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
              Ready to Outperform Your Competition?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Join industry leaders who have already revolutionized their <br />{" "}
              loan onboarding process with Clik
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
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
