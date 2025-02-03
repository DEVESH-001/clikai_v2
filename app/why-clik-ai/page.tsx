"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  RocketIcon,
  UsersIcon,
  BuildingIcon,
  ArrowUpRightIcon,
  BrainCircuitIcon,
  Target,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  Clock,
  Sparkles,
  Bot,

} from "lucide-react";
// import { GeistSans } from "geist/font/sans";

const advantages = [
  {
    title: "AI-Powered Innovation",
    metrics: [
      { value: "75+%", label: "Time Reduction" },
      { value: "50-75%", label: "Efficiency Gain" },
      { value: "95%", label: "Error Reduction" },
    ],
    features: [
      "Automated financial spreading",
      "Real-time portfolio analytics",
      "AI-driven risk assessment",
    ],
    icon: BrainCircuitIcon,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Enterprise-Grade Solutions",
    metrics: [
      { value: "400+", label: "Integrated Models" },
      { value: "$50B+", label: "Annual Loan Processing" },
      { value: "98%", label: "Client Satisfaction" },
    ],
    features: [
      "Custom model integration",
      "Multi-dimensional platform",
      "Regulatory compliance support",
    ],
    icon: BuildingIcon,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Comprehensive Services",
    metrics: [
      { value: "100%", label: "Service Coverage" },
      { value: "50+", label: "Expert Analysts" },
      { value: "10+", label: "Industries Served" },
    ],
    features: [
      "Financial spreading analysis",
      "Loan setup & onboarding",
      "Reserve replacements processing",
    ],
    icon: UsersIcon,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Proven ROI",
    metrics: [
      { value: "60%", label: "Deal Throughput Increase" },
      { value: "40+%", label: "Cost Savings" },
      { value: "3-6 months", label: "ROI Timeline" },
    ],
    features: [
      "Faster financial reviews",
      "Increased deal capacity",
      "Optimized resource allocation",
    ],
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-500",
  },
];

const journey = [
  {
    year: "2014",
    title: "Due Diligence ",
    description:
      "Started as a specialized KPO providing financial spreading analysis and loan origination support for the US CRE industry",
    icon: BuildingIcon,
  },
  {
    year: "2018",
    title: "Clik.ai Launched",
    description:
      "Transformed into a technology-first company with the launch of AutoUW, revolutionizing underwriting automation",
    icon: RocketIcon,
  },
  {
    year: "2020",
    title: "Market Leadership",
    description:
      "Acquired 3 out of top 10 lenders through product-led services and gained industry recognition",
    icon: TrendingUp,
  },
  {
    year: "2024",
    title: "Full-Service Evolution",
    description:
      "Expanded into comprehensive services including FSA, loan setup, and reserve replacements with advanced AI technology",
    icon: BrainCircuitIcon,
  },
];

const whyChoosePoints = [
  {
    title: "Hybrid Approach",
    description:
      "Unique combination of AI automation and expert human oversight ensures accuracy and reliability",
    icon: Users,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Instant Access",
    description:
      "Get started immediately with our cloud-based SaaS platform - no setup or deployment needed",
    icon: Zap,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Advanced AI Models",
    description:
      "Proprietary machine learning models trained on millions of CRE documents",
    icon: Bot,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Continuous Innovation",
    description:
      "Regular platform updates with cutting-edge AI features and improvements",
    icon: Sparkles,
    gradient: "from-orange-500 to-red-500",
  },
];

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Don&apos;t Let Manual Processes Hold You Back
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 mb-8"
            >
              Join industry leaders achieving efficiency gains with our
              AI-powered CRE solutions
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
                Get Started Today
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bellwether Case Study Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 bg-white/90 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Bellwether Enterprise Success Story
                </h2>
                <p className="text-gray-600 mb-6">
                  BWE achieved up to 50% reduction in time performing financial
                  spreads within UW and Asset Management
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-bold text-xl">25-50%</div>
                      <div className="text-sm text-gray-600">
                        Financial review process improvement
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Target className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-bold text-xl">50-75%</div>
                      <div className="text-sm text-gray-600">
                        Rent roll analysis efficiency gain
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-bold text-xl">90+</div>
                      <div className="text-sm text-gray-600">
                        Models integrated with Clik.ai
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  &quot;The time savings we now have as a result of using
                  Clik.ai allows BWE operations to scale with our growing
                  Servicing portfolio, process more deals with the same level of
                  high personal touch, and focus more time on our
                  customers&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold">Eric Tupta</div>
                    <div className="text-sm text-gray-600">
                      IT Transformation Director
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* The Clik.ai Advantage Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Clik.ai Advantage
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${advantage.gradient} w-fit mb-4`}
                  >
                    <advantage.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {advantage.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-blue-600">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {advantage.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How We Got Here
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-200 transform -translate-x-1/2"></div>
            {journey.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Clik.ai
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {whyChoosePoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card
                    key={index}
                    className="flex-1 min-w-[250px] max-w-[300px] p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col items-start gap-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${point.gradient}`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {point.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-[#001F3F] via-blue-900 to-blue-800">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discover how Clik.ai simplifies your toughest challenges
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Let&apos;s talk about how our solutions can empower your business
              to succeed.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 rounded-[8px]"
              >
                Get Demo
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
