"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GeistSans } from "geist/font/sans"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Building2,
  FileText,
  Zap,
  Calendar,
  TrendingUp,
  FileSignature,
  Calculator,
  Globe,
  Clock,
} from "lucide-react"
import Image from "next/image"

// Enhanced services with more detail from the PDF
const services = [
  {
    title: "Lease Administration",
    icon: FileText,
    items: [
      {
        name: "Lease Abstraction",
        description: "Comprehensive abstraction of leases, amendments, and side letters",
        metrics: "100K+ leases abstracted",
      },
      {
        name: "Ongoing Maintenance",
        description: "Continuous updates and maintenance of lease data",
        metrics: "99.9% accuracy rate",
      },
      {
        name: "Multilingual Abstraction",
        description: "Support for leases in multiple languages - English, Spanish, French, German",
        metrics: "4+ languages supported",
      },
      {
        name: "Data Migration & Clean Up",
        description: "Seamless transfer and cleansing of existing lease data",
        metrics: "100% data integrity",
      },
    ],
  },
  {
    title: "Property Management",
    icon: Building2,
    items: [
      {
        name: "Initial Property Setup",
        description: "Comprehensive setup of properties in management systems",
        metrics: "1000+ properties set up",
      },
      {
        name: "Due Diligence",
        description: "Thorough property and lease audits for acquisitions",
        metrics: "30% faster closing times",
      },
      {
        name: "Template Optimization",
        description: "Customized templates for efficient data management",
        metrics: "50% reduction in setup time",
      },
      {
        name: "Recovery Setup",
        description: "Configuration of expense recovery processes",
        metrics: "15% increase in recoveries",
      },
    ],
  },
  {
    title: "Financial Services",
    icon: Calculator,
    items: [
      {
        name: "Year-End Reconciliation",
        description: "CAM, RET, and INS reconciliations and audits",
        metrics: "7.5K+ reconciliations completed",
      },
      {
        name: "Tenant Invoicing",
        description: "Accurate and timely tenant billing",
        metrics: "99.8% invoice accuracy",
      },
      {
        name: "Financial Reporting",
        description: "Comprehensive financial analysis and reporting",
        metrics: "Real-time financial insights",
      },
    ],
  },
  {
    title: "Critical Date Management",
    icon: Calendar,
    items: [
      {
        name: "Lease Expiry Tracking",
        description: "Proactive monitoring of lease expirations and renewals",
        metrics: "100% on-time notifications",
      },
      {
        name: "Security Deposit Management",
        description: "Tracking and processing of security deposit returns",
        metrics: "Zero missed deadlines",
      },
      {
        name: "Rent Increase Scheduling",
        description: "Automated scheduling and notification of rent increases",
        metrics: "5% average increase in timely rent adjustments",
      },
    ],
  },
  {
    title: "Notice Processing",
    icon: FileSignature,
    items: [
      {
        name: "Renewal Notices",
        description: "Timely preparation and delivery of lease renewal notices",
        metrics: "98% renewal notice compliance",
      },
      {
        name: "Estoppel Certificates",
        description: "Efficient processing of estoppel certificates",
        metrics: "24-hour turnaround time",
      },
      {
        name: "Commencement Letters",
        description: "Accurate preparation of lease commencement date letters",
        metrics: "100% accuracy in date calculations",
      },
      {
        name: "Rent Increase Notifications",
        description: "Clear communication of upcoming rent adjustments",
        metrics: "95% tenant acknowledgment rate",
      },
    ],
  },
]

// Enhanced tools section with expertise levels from the PDF
const tools = [
  {
    name: "Oracle JD Edwards",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oracle%20jdewards-HyW4Mwnp5qSV7zaoQcGHRslHPuaqbF.png",
    expertise: "Advanced",
    features: ["Financial Management", "Real Estate Management", "Lease Administration"],
  },
  {
    name: "Yardi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yardi-Black_RGB-2R0nRw2sANvxfeMbOTj3Vlb0eAvSCW.png",
    expertise: "Expert",
    features: ["Voyager", "Investment Management", "Lease Abstraction"],
  },
  {
    name: "MRI Software",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MRI-logo-01-onCOiq72a8JtC2QfCJWv55ufITX2OF.webp",
    expertise: "Advanced",
    features: ["Commercial Management", "Investment Modeling", "Lease Administration"],
  },
  {
    name: "Lease Harbor",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lease_Harbor.png-HeqAfmsid0ns8hs6mGE3CHhz3rtQdl.webp",
    expertise: "Expert",
    features: ["Lease Administration", "Document Management", "CAM Reconciliation"],
  },
  {
    name: "Visual Lease",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visual%20lease_logo-64FO9SqNTlgCOitzZL3ikYWRMf0HTK.png",
    expertise: "Advanced",
    features: ["Lease Accounting", "FASB/IASB Compliance", "Lease Abstraction"],
  },
  {
    name: "ProLease",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proLease_Logo-lnXyqkK5SewyEfzBSSEIKrOmSObcZt.png",
    expertise: "Advanced",
    features: ["Lease Administration", "Property Management", "Financial Analysis"],
  },
  {
    name: "Red Hat",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Redhat-logo-JFjCgcj11jOJHfMQ8cLPdHUFtTGLeq.webp",
    expertise: "Expert",
    features: ["Enterprise Solutions", "Cloud Infrastructure", "System Integration"],
  },
]

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
]

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
// }

export default function LeaseAbstractionAuditPage() {
  //const { scrollYProgress } = useScroll()
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // })

 //const [activeTab, setActiveTab] = useState("overview")

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
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Background animation
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

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
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                  Next-Gen Lease Abstraction & Audit Services
                </h1>
                <p className="text-xl text-gray-600 mb-8">
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

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        <CardContent className="p-0">
                          <benefit.icon className="w-8 h-8 text-blue-600 mb-3" />
                          <h3 className="text-lg font-semibold mb-2">
                            {benefit.title}
                          </h3>
                          <div className="space-y-2">
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <service.icon className="w-8 h-8 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold mb-4 text-blue-600">
                        {service.title}
                      </h3>
                      <div className="space-y-4">
                        {service.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="space-y-2">
                            <div className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-gray-900">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {item.description}
                                </p>
                                <span className="text-xs font-medium text-blue-600">
                                  {item.metrics}
                                </span>
                              </div>
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

        {/* Client Success Stories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent  bg-gradient-to-r from-blue-700/90 to-blue-500">
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
                    "5,000+ leases processed in 2 weeks",
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

        {/* New CTA */}
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
                  Talk to Us Now
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

