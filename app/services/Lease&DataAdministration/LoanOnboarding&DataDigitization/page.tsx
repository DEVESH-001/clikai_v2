"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText, Database, Zap, CheckCircle, Shield, BarChart, Upload, RefreshCw, X } from "lucide-react"
import { GeistSans } from "geist/font/sans"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Stats data
// const stats = [
//   { label: "Documents Processed", value: "500K+", suffix: "annually" },
//   { label: "Accuracy Rate", value: "100%", suffix: "with AI + human QC" },
//   { label: "Time Saved", value: "75%", suffix: "vs manual processing" },
//   { label: "Cost Reduction", value: "60%", suffix: "on average" },
// ]

// Document types we process
const documentTypes = [
  {
    category: "Asset Management",
    items: ["Financial Statements", "Operating Statements", "Rent Rolls", "Trigger Analysis Reports"],
    icon: BarChart,
  },
  {
    category: "Property Documentation",
    items: ["Title Documents", "Appraisal Reports", "Inspection Documents", "Lease Agreements"],
    icon: FileText,
  },
  {
    category: "Loan Administration",
    items: ["Insurance Documentation", "Escrow Administration", "Tax Documents", "Loan Onboarding Forms"],
    icon: Database,
  },
]

export default function LoanOnboardingPage() {
  return (
    <div className={`min-h-screen ${GeistSans.className}`}>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Revolutionize</span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Loan Onboarding
                </span>{" "}
                <span className="text-gray-900">with Clik</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Outperform the competition with Clik&apos;s AI-powered loan
                onboarding and data digitization. Achieve unparalleled accuracy,
                speed, and cost savings that traditional methods can&apos;t
                match.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Transform Your Loan Onboarding
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-5xl mx-auto mt-12 mb-16"
          >
            <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20at%205.42.56%E2%80%AFAM-OO7vdZpBUj6KYDj0Puu32UN6KYyaAk.png"
                alt="Loan Onboarding Workflow"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Add a section for key benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "2x Faster", description: "Than industry average" },
              {
                title: "100% Accuracy",
                description: "AI-powered with human QC",
              },
              {
                title: "50% Cost Reduction",
                description: "Compared to manual processes",
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-white shadow-lg border-blue-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
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
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Upload,
                title: "Document Upload",
                description:
                  "Secure upload of loan documents through multiple channels",
              },
              {
                icon: Zap,
                title: "AI Processing",
                description:
                  "Automated data extraction using our proprietary AI models",
              },
              {
                icon: Shield,
                title: "Quality Control",
                description: "Expert review ensuring 99.8% accuracy",
              },
              {
                icon: RefreshCw,
                title: "System Integration",
                description: "Seamless data push to your servicing platform",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative h-full bg-white/80 backdrop-blur-sm border border-blue-100/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <step.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="ml-4 text-lg font-semibold">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-blue-300" />
                    </div>
                  )}
                </Card>
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
              See how Clik&apos;s innovative approach redefines loan onboarding
              and data digitization
            </p>
          </motion.div>

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
                <TableCell className="font-medium">Processing Speed</TableCell>
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
                <TableCell className="font-medium">Cost Reduction</TableCell>
                <TableCell>
                  <Badge className="bg-green-500">50%</Badge>
                </TableCell>
                <TableCell>30-35%</TableCell>
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
            </TableBody>
          </Table>
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
                    <span>100% data accuracy guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>24-hour turnaround time for standard loans</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>4-hour response time for urgent requests</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Weekly performance reports and reviews</span>
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
                    <span>
                      100% accuracy guarantee or we&apos;ll reprocess for free
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>AI-powered processing with expert human review</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>
                      Continuous model training on your specific loan types
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>
                      Compliance with industry regulations (GDPR, CCPA, etc.)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
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
            <h3 className="text-xl md:text-2xl text-blue-200 mb-6">
              Partner with Clik.ai Today
            </h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Join industry leaders who have already revolutionized their loan
              onboarding process with Clik
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-[8px]"
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-[8px]"
                >
                  Download Case Study
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}

