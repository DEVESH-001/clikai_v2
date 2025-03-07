"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  FileText,
  Zap,
  TrendingUp,
  FileSignature,
  Calculator,
  Globe,
  Clock,
  DollarSign,
  Database,
  Settings,
} from "lucide-react";
import Image from "next/image";

// Enhanced services with more detail and balanced content
const services = [
  {
    title: "Lease Abstraction",
    icon: FileText,
    items: [
      {
        name: "Comprehensive Lease Abstraction",
        description:
          "Summarize Key Financial and Non-Financial Information from Lease Documents",
        metrics: "100K+ leases abstracted",
      },
      {
        name: "Flexible Support",
        description: "On-demand support without monthly minimums",
        metrics: "Scalable from single building to entire portfolios",
      },
      {
        name: "Software Integration",
        description: "Direct abstraction into various lease software platforms",
        metrics: "Compatible with Yardi, JDE, MRI, LeaseHarbor, and more",
      },
      {
        name: "Customizable Templates",
        description: "Use our standard template or client-provided formats",
        metrics: "Tailored to specific client needs",
      },
    ],
  },
  {
    title: "Detailed Abstraction",
    icon: Zap,
    items: [
      {
        name: "Tenant Information",
        description: "Capture Detailed Tenant Data and SF details",
        metrics: "100% tenant profile accuracy",
      },
      {
        name: "Financial Terms",
        description:
          "Current & Future Base Rent, Percentage Rent, other income",
        metrics: "Comprehensive financial capture",
      },
      {
        name: "Reimbursements",
        // description: "Utilities, taxes, insurance, and CAM reimbursements",
        description:
          "CAM Reimbursements, Real Estate Taxes, Insurance Premiums, Utilities",
        metrics: "Detailed reimbursement tracking",
      },
      {
        name: "Special Provisions",
        description: "Co-tenancy, Go-Dark, Termination options, and more",
        metrics: "Capture all critical lease clauses",
      },
    ],
  },
  {
    title: "Lease Audit Services",
    icon: CheckCircle,
    items: [
      {
        name: "Lease Compliance Review",
        description: "Ensure adherence to lease terms and conditions",
        metrics: "98% compliance rate",
      },
      {
        name: "Financial Audits",
        description: "Verify rent calculations and reimbursements",
        metrics: "Identify potential savings",
      },
      {
        name: "CAM Reconciliations",
        description: "Accurate common area maintenance reconciliations",
        metrics: "15% average increase in recoveries",
      },
      {
        name: "Discrepancy Resolution",
        description: "Identify and Resolve Lease vs. Rent Roll Discrepancies",
        metrics: "100% discrepancy resolution",
      },
    ],
  },
  {
    title: "Property Management Support",
    icon: Building2,
    items: [
      {
        name: "Lease Renewal Management",
        description: "Track and manage lease renewals and expirations",
        metrics: "98% on-time renewal rate",
      },
      {
        name: "Tenant Improvement Tracking",
        description: "Monitor tenant improvement allowances and completions",
        metrics: "100% TI allowance utilization",
      },
      {
        name: "Parking Management",
        description: "Track parking allocations and Associated Income",
        metrics: "Optimize parking revenue",
      },
      {
        name: "Critical Date Alerts",
        description: "Automated notifications for important lease dates",
        metrics: "Zero missed critical dates",
      },
    ],
  },
  {
    title: "Financial Reporting",
    icon: Calculator,
    items: [
      {
        name: "Rent Roll Generation",
        description: "Accurate and up-to-date Rent Rolls",
        metrics: "Real-time financial insights",
      },
      {
        name: "Budget Forecasting",
        description: "Assist in creating accurate budget projections",
        metrics: "95% budget accuracy",
      },
      {
        name: "Variance Analysis",
        description: "Identify and explain budget vs. actual variances",
        metrics: "Detailed variance reports",
      },
      {
        name: "Custom Financial Reports",
        description: "Tailored financial reporting to meet specific needs",
        metrics: "Unlimited custom report options",
      },
    ],
  },
];

// Enhanced tools section with expertise levels from the PDF
const tools = [
  {
    name: "Oracle JD Edwards",
    logo: "/images/Services_Section_Images/Lease&DataAdministration/Abstraction&Audit/Oracle.png",
    expertise: "Advanced",
    features: [
      "Financial Management",
      "Real Estate Management",
      "Lease Administration",
    ],
  },
  {
    name: "Yardi",
    logo: "/images/Services_Section_Images/Lease&DataAdministration/Abstraction&Audit/Yardi.png",
    expertise: "Expert",
    features: ["Voyager", "Investment Management", "Lease Abstraction"],
  },
  {
    name: "MRI Software",
    logo: "/images/Services_Section_Images/Lease&DataAdministration/Abstraction&Audit/MRI.webp",
    expertise: "Advanced",
    features: [
      "Commercial Management",
      "Investment Modeling",
      "Lease Administration",
    ],
  },
  {
    name: "Lease Harbor",
    logo: "/images/Services_Section_Images/Lease&DataAdministration/Abstraction&Audit/Lease_Harbor.webp",
    expertise: "Expert",
    features: [
      "Lease Administration",
      "Document Management",
      "CAM Reconciliation",
    ],
  },
  {
    name: "Visual Lease",
    logo: "/images/Services_Section_Images/Lease&DataAdministration/Abstraction&Audit/visual.png",
    expertise: "Advanced",
    features: ["Lease Accounting", "FASB/IASB Compliance", "Lease Abstraction"],
  },
  {
    name: "ProLease",
    logo: "/images/Services_Section_Images/Lease&DataAdministration/Abstraction&Audit/proLease.png",
    expertise: "Advanced",
    features: [
      "Lease Administration",
      "Property Management",
      "Financial Analysis",
    ],
  },
  {
    name: "Red Hat",
    logo: "/images/Services_Section_Images/Lease&DataAdministration/Abstraction&Audit/Redhat.webp",
    expertise: "Expert",
    features: [
      "Enterprise Solutions",
      "Cloud Infrastructure",
      "System Integration",
    ],
  },
];

// Enhanced benefits with more detail
const whyChooseUs = [
  {
    title: "Comprehensive Lease Management",
    description:
      "From basic to full administration services, our solutions scale to meet your portfolio's needs while maintaining quality across all property types.",
    metrics: [
      { label: "Lease Capacity", value: "100K+" },
      { label: "Accuracy Rate", value: "99.8%" },
      { label: "Client Satisfaction", value: "4.9/5" },
    ],
    icon: TrendingUp,
  },
  {
    title: "Advanced Technology Integration",
    description:
      "Seamless integration with leading property management platforms and proprietary AI-powered tools for efficient processing across multiple databases.",
    metrics: [
      { label: "Expertise in Platforms", value: "7+" },
      { label: "Data Migration Success", value: "100%" },
      { label: "Integration Projects", value: "10+" },
    ],
    icon: Zap,
  },
  {
    title: "Multilingual Support",
    description:
      "Our team and technology support lease abstraction and management across various languages, catering to diverse global portfolios.",
    metrics: [
      { label: "Languages Supported", value: "4+" },
      { label: "Non-English Leases", value: "10k+" },
      { label: "Multilingual Accuracy", value: "99.5%" },
    ],
    icon: Globe,
  },
  {
    title: "Rapid Turnaround",
    description:
      "Leveraging AI and expert analysts, we deliver fast and accurate results for even the most complex lease portfolios.",
    metrics: [
      { label: "Avg. Processing Time", value: "24hrs" },
      { label: "Rush Requests", value: "4hrs" },
      { label: "On-Time Delivery", value: "99.9%" },
    ],
    icon: Clock,
  },
];

// Performance metrics data for charts
// const performanceData = {
//   monthly: [
//     { month: "Jan", leases: 4200, accuracy: 99.8 },
//     { month: "Feb", leases: 4500, accuracy: 99.7 },
//     { month: "Mar", leases: 5100, accuracy: 99.9 },
//     { month: "Apr", leases: 4800, accuracy: 99.8 },
//     { month: "May", leases: 5500, accuracy: 99.9 },
//     { month: "Jun", leases: 6000, accuracy: 99.9 },
//   ],
//   distribution: [
//     { id: "Retail", value: 40 },
//     { id: "Office", value: 30 },
//     { id: "Industrial", value: 20 },
//     { id: "Cellular Towers", value: 10 },
//   ],
// };

export default function LeaseAbstractionAuditPage() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  //const [activeTab, setActiveTab] = useState("overview");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Background animation
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`min-h-screen ${GeistSans.className} bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden`}
    >
      {/* Animated background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0) 50%)`,
          transition: "background 0.3s ease",
        }}
      />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light pointer-events-none"></div>

      {/* Progress bar */}
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      /> */}

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto px-21 lg:space-y-6 relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 text-center lg:text-left"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                  Next-Gen Lease Abstraction & Audit Services
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                  Clik.ai provides comprehensive lease administration services
                  to help property owners, REITs, investors, and property
                  managers manage their portfolios more effectively across
                  retail, office, industrial, and cellular tower properties.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      className="h-full"
                    >
                      <Card className="p-4 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full flex flex-col mt-8">
                        <CardContent className="h-full flex flex-col justify-between">
                          <benefit.icon className="w-8 h-8 text-blue-600 mb-3" />
                          <h3 className="text-lg font-semibold mb-2">
                            {benefit.title}
                          </h3>
                          <div className="space-y-2 flex-grow">
                            {benefit.metrics.map((metric, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between items-center"
                              >
                                <span className="text-sm text-gray-600">
                                  {metric.label}
                                </span>
                                <span className="text-lg font-semibold text-blue-600">
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                Our Comprehensive Services
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end lease management and accounting solutions
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full bg-gradient-to-br from-white to-blue-50/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <service.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-600">
                          {service.title}
                        </h3>
                      </div>
                      <div className="grid gap-3">
                        {service.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start space-x-2 bg-white/80 rounded-lg p-2.5 hover:bg-blue-50/50 transition-colors"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900 text-sm">
                                {item.name}
                              </h4>
                              <p className="text-xs text-gray-600 mt-0.5">
                                {item.description}
                              </p>
                              <span className="text-xs font-medium text-blue-600 mt-1 block">
                                {item.metrics}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tools & Technology Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                Tools & Technology Expertise
              </h2>
              <p className="text-xl text-gray-600">
                Seamless integration with leading property management platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="h-12 flex items-center justify-center mb-3">
                        <Image
                          src={tool.logo || "/placeholder.svg"}
                          alt={tool.name}
                          className="h-10 w-auto object-contain"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                          {tool.name}
                        </h3>
                        <div className="text-xs text-blue-600 font-medium mb-2">
                          {tool.expertise} Level
                        </div>
                        <div className="space-y-1">
                          {tool.features.map((feature, idx) => (
                            <div key={idx} className="text-xs text-gray-500">
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                Our Lease Abstraction Process
              </h2>
              <p className="text-xl text-gray-600">
                A streamlined approach to lease data management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Document Collection",
                  description:
                    "Client provides access to lease documents, rent roll, and additional information",
                  icon: FileText,
                },
                {
                  title: "Documents Completeness Check",
                  description:
                    "We prepare missing document report and share it with the client",
                  icon: CheckCircle,
                },
                {
                  title: "Data Extraction",
                  description:
                    "Upon receipt of all documents, we will start reviewing the documents",
                  icon: Zap,
                },
                {
                  title: "Quality Assurance",
                  description:
                    "Abstract reports will go through QA Check by our Senior Lease Administrator",
                  icon: FileSignature,
                },
                {
                  title: "Secure Delivery",
                  description:
                    "Completed abstracts are delivered by email or through secure server access",
                  icon: Building2,
                },
                {
                  title: "Ongoing Support",
                  description:
                    "On-going support provided post deliveries based on the Scope of work (SOPs)",
                  icon: Clock,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-white to-blue-50/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="p-2 rounded-lg bg-blue-100">
                            <step.icon className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-gray-900">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                Why Choose Our Lease Administration Services
              </h2>
              <p className="text-xl text-gray-600">
                Unparalleled flexibility, quality, and expertise in the industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "On-Demand Support",
                  description:
                    "Flexible services without minimum commitments, scalable to your needs",
                  icon: Clock,
                },
                {
                  title: "High-Quality Output",
                  description:
                    "Experienced team ensuring accurate and comprehensive lease abstracts",
                  icon: CheckCircle,
                },
                {
                  title: "Competitive Pricing",
                  description:
                    "Cost-effective solutions compared to other providers in the market",
                  icon: DollarSign,
                },
                {
                  title: "Quick Turnaround",
                  description:
                    "Efficient processing to meet your deadlines and business needs",
                  icon: Zap,
                },
                {
                  title: "Software Expertise",
                  description:
                    "Proficiency in major lease accounting software platforms",
                  icon: Database,
                },
                {
                  title: "Customizable Solutions",
                  description:
                    "Tailored services to meet specific client requirements and portfolios",
                  icon: Settings,
                },
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-white to-blue-50/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <advantage.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {advantage.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{advantage.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Service Details Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                Comprehensive Lease Management
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end lease administration support for your portfolio
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-600">
                    Key Information Captured
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Tenant Information",
                      "SF Details",
                      "Lease Terms & Dates",
                      "Renewal Options",
                      "Current & Future Base Rent",
                      "Percentage Rent (Retail)",
                      "Other Income (e.g., Promotional)",
                      "Utilities Reimbursement",
                      "Taxes Reimbursement",
                      "Insurance Reimbursement",
                      "CAM Reimbursement",
                      "Parking Information",
                      "Co-Tenancy Clauses",
                      "Go-Dark Provisions",
                      "Termination Options",
                      "Tenant Improvement Allowance",
                      "Right of First Offer/Refusal",
                      "Relocation Clauses",
                      "Kiosk Restrictions",
                      "Discrepancy Notes",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-600">
                    Our Expertise & Flexibility
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Experienced Team
                      </h4>
                      <p className="text-sm text-gray-600">
                        Our team consists of senior lease administrators with
                        extensive experience in various lease accounting
                        software platforms, including Yardi, JDE, MRI,
                        LeaseHarbor, iLeasePro, and many others.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Flexible Engagement
                      </h4>
                      <p className="text-sm text-gray-600">
                        We offer on-demand support without binding our clients
                        to monthly minimums. Whether you need assistance with a
                        single property or an entire portfolio, our services
                        scale to meet your needs.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Direct Software Integration
                      </h4>
                      <p className="text-sm text-gray-600">
                        We can abstract lease information directly into your
                        preferred lease software, such as Yardi, JDE, or MRI,
                        ensuring seamless integration with your existing
                        systems.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Customizable Solutions
                      </h4>
                      <p className="text-sm text-gray-600">
                        Our services can be tailored to your specific
                        requirements, whether you need our standard
                        comprehensive template or a custom format that aligns
                        with your unique business processes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real results from our lease abstraction and audit services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  client: "Major Lease Software Company",
                  industry: "Commercial Real Estate Technology",
                  challenge:
                    "Managing 10,000+ leases across multiple property types and languages",
                  solution:
                    "Worked on their lease software to deliver leases in multiple languages",
                  results: [
                    "99.9% accuracy in multilingual lease data",
                    "50% reduction in processing time",
                    "30% increase in recoverable expenses identified",
                  ],
                },
                {
                  client: "Global Asset Management Firm",
                  industry: "Financial Services",
                  challenge:
                    "Consolidating lease data from newly acquired properties",
                  solution:
                    "Provided rapid lease abstraction and data migration services",
                  results: [
                    "5000+ leases processed in 2 weeks",
                    "100% on-time project delivery",
                    "Seamless integration with existing property management system",
                  ],
                },
                {
                  client: "International Retail Chain",
                  industry: "Retail",
                  challenge:
                    "Managing leases across 5+ countries in multiple languages",
                  solution:
                    "Deployed multilingual lease abstraction team and AI-powered translation tools",
                  results: [
                    "Successfully managed leases in 4 languages",
                    "95% reduction in translation costs",
                    "Standardized lease data across all global locations",
                  ],
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-blue-600">
                        {story.client}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {story.industry}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Challenge:
                          </h4>
                          <p className="text-sm text-gray-600">
                            {story.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Solution:
                          </h4>
                          <p className="text-sm text-gray-600">
                            {story.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Results:
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600">
                            {story.results.map((result, idx) => (
                              <li key={idx}>{result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* faq */}
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
                Ready to Transform Your Lease Management?
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
                Join over 20+ satisfied clients worldwide who trust our lease
                abstraction <br /> and audit services.
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
                  Book Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
