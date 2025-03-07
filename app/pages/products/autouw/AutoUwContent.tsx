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
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Brain,
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react";
import { HeroVideoDialogDemo } from "@/components/magicui/HeroVideoDialogDemo";

// Features data
const features = [
  {
    title: "Financial Data Extraction",
    description:
      "Extract data from Operating Statements and Rent Rolls with 100% accuracy",
    icon: FileText,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Customizable Outputs",
    description:
      "Generate underwriting models tailored to your format or lender-specific templates",
    icon: Bot,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Rapid Turnaround",
    description: "Process deals in minutes, saving 70% of manual effort",
    icon: Clock,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "AI-Powered Efficiency",
    description: "Leverage advanced algorithms to automate even complex deals",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },
];

// Benefits data
const benefits = [
  {
    title: "Save Time",
    description: "Reduce underwriting time by up to 70%",
    metric: "70%",
    icon: Clock,
  },
  {
    title: "Boost Accuracy",
    description: "Ensure 100% accuracy in data extraction",
    metric: "100%",
    icon: CheckCircle2,
  },
  {
    title: "Scale Effortlessly",
    description: "Handle up to 50+ deals/month without adding to your team",
    metric: "50+",
    icon: BarChart3,
  },
];

// Pricing plans
const plans = [
  {
    name: "Growth",
    description: "5 Complimentary deals done by Clik analysts",
    monthlyPrice: 249,
    perDealPrice: 30,
    features: [
      "Ideal for 5–20 deals per month",
      "Financial models completed by Clik Analysts",
      "All Asset Classes Included",
      "Advanced AI-driven insights",
      "Priority support",
      "Custom model integration",
    ],
    ribbon: "Most Popular",
    cta: "Book Demo",
  },
  {
    name: "Enterprise",
    description: "Complete Automation & Expert Support",
    price: "Custom",
    features: [
      "Unlimited self-created deals",
      "20 complementary Clik Analyst deals/month",
      "$30 per additional Clik Analyst underwriting",
      "Custom model integration",
      "Excel Add-in to sync updates",
      "Dedicated account manager",
    ],
    cta: "Get Started",
  },
];

// FAQ items
const faqItems = [
  {
    question: "What file formats are supported?",
    answer:
      "AutoUW supports a wide range of formats including PDF, Excel (xls, xlsx), Word (doc, docx), and scanned documents. Our AI can process both digital and scanned files with high accuracy.",
  },
  {
    question: "How accurate is the data extraction?",
    answer:
      "Our AI-powered extraction delivers high accuracy by combining automated data processing with expert human validation. Each extraction is reviewed by our analysts to ensure 100% precision, cross-checked against our extensive database of CRE documents.",
  },
  {
    question: "Can I customize the output template?",
    answer:
      "Yes! AutoUW offers full template customization. You can either use our pre-built templates for major lenders or create your own custom templates to match your exact specifications.",
  },
  {
    question: "What if I have more than 20 deals per month?",
    answer:
      "Our Enterprise plan is designed for high-volume users. We'll work with you to create a custom package that meets your specific needs, including unlimited deals and custom integrations.",
  },
];

export default function AutoUWPage() {
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

      <div className="relative">
        <section className="relative z-10 pt-16 pb-16 overflow-hidden mt-14 ">
          <div className="mx-auto px-8 lg:space-y-6 relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 w-full"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                  <span className="text-gray-900">Automate Your</span>{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Underwriting Process
                  </span>
                  <span className="text-gray-900"> with Precision</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  From Operating Statements to Rent Rolls, streamline your
                  underwriting workflows with AutoUW&apos;s AI-powered solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Book Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
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
                  src="/images/Products_Section_Images/AutoUW/Hero_Image.png"
                  alt="InvestAssist Platform Interface"
                  width={2000}
                  height={1600}
                  className="w-[900px] h-[600px]"
                  priority
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/10"></div>
        </section>
      </div>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why AutoUW?</h2>
            <p className="text-xl text-gray-600">
              Powerful features that transform your underwriting process
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

      <section className="flex items-center justify-center min-h-[500px]">
        <HeroVideoDialogDemo />
      </section>
      {/* Workflow Section */}
      <section className="py-16 relative bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How AutoUW Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, efficient, and powerful workflow
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Upload Documents</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/Products_Section_Images/AutoUW/Upload_Documents.png"
                  alt="Upload Documents Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Easily upload and manage your Operating Statements and Rent
                Rolls
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Data Extraction</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/Products_Section_Images/AutoUW/Data Extraction.png"
                  alt="Data Extraction Process"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                AI-powered extraction of critical financial data
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Review & Validate</h3>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/Products_Section_Images/AutoUW/Review & Validate.png"
                  alt="Review and Validation Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Verify extracted data with side-by-side document viewing
              </p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Download Results</h3>
              <div className="grid  gap-4">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src="/images/Products_Section_Images/AutoUW/DownloadResults.png"
                    alt="Operating Statement Results"
                    className="object-cover rounded-lg shadow-2xl"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Export comprehensive analysis in your preferred format
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
              Achieve More with AutoUW
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in your underwriting process
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

      {/* Pricing Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple and Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                      {plan.cta}
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
              Find answers to common questions about AutoUW
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
              Ready to Transform Your Underwriting?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Schedule a demo today and see AutoUW in action.
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
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
