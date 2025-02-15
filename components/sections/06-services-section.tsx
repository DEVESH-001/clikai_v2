"use client";

import { Key, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import {
  Building2,
  FileText,
  Zap,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";
import { GeistSans } from "geist/font/sans";

const services = [
  {
    id: "loan-servicing",
    title: "Loan Origination & Servicing",
    description: "Comprehensive loan management solutions",
    icon: Building2,
    color: "#3B82F6",
    subservices: [
      {
        title: "Underwriting & Due Diligence Support",
        tagline: "Real-time insights and compliance",
        description:
          "Leverage AI for real-time financial insights, variance analysis, and regulatory compliance support.",
        benefits: [
          "Comprehensive underwriting for complex deals",
          "Detailed financial modeling and cash flow analysis",
          "In-depth risk assessment and compliance checks",
        ],
      },
      {
        title: "Custom Financial Model Development",
        tagline: "Faster, compliant assessments",
        description:
          "Streamline property assessments and disbursements with AI-driven workflows.",
        benefits: [
          "Bespoke financial models tailored to your deal",
          "Excel-based models built by CRE experts",
          "Custom underwriting & projections to fit your needs",
        ],
      },
      {
        title: "Disbursement & PCNA Support",
        tagline: "Streamlined disbursement and PCNA processingn",
        description:
          "Migrate loan portfolios to modern platforms with AI-powered validation and error checks.",
        benefits: [
          "Manual data validation and quality assurance",
          "Detailed review of disbursement requests",
          "Accurate PCNA processing and reporting",
        ],
      },
    ],
  },
  {
    id: "lease-administration",
    title: "Lease & Data Administration",
    description: "AI-powered lease management & data processing",
    icon: FileText,
    color: "#F59E0B",
    subservices: [
      {
        title: "Lease Abstraction & Audit",
        tagline: "Expert-driven lease data abstraction",
        description:
          "Extract and audit critical lease data with expert-driven review and validation.",
        benefits: [
          "Manual extraction of key lease clauses",
          "Detailed lease audits for accuracy and compliance",
        ],
      },
      {
        title: "Loan Document Data Digitisation",
        tagline: "Intelligent report conversion",
        description:
          "Transform appraisals and OMs into structured data using AI and natural language processing.",
        benefits: [
          "AI-driven conversion of reports into actionable data",
          "Instant access to key metrics through machine learning",
        ],
      },
      {
        title: "Loan Onboarding & Data Digitization",
        tagline: "AI-assisted data modernization",
        description:
          "Modernize historical lease and financial data using AI-powered migration tools.",
        benefits: [
          "Intelligent migration of legacy lease and financial data",
          "AI-driven data structuring and accuracy checks",
        ],
      },
    ],
  },
  {
    id: "tech-solutions",
    title: "Consulting & Tech Solutions",
    description: "AI-integrated CRE technology solutions",
    icon: Zap,
    color: "#8B5CF6",
    subservices: [
      {
        title: "Salesforce Customization",
        tagline: "AI-enhanced CRM solutions",
        description:
          "Implement AI-powered workflows and integrations for CRE-focused Salesforce instances.",
        benefits: [
          "AI-driven workflow automation and integrations",
          "Intelligent centralized management of CRE data",
        ],
      },
      {
        title: "Custom Reporting & Dashboards",
        tagline: "AI-powered insights",
        description:
          "Create dynamic, AI-enhanced dashboards tailored to your specific CRE KPIs.",
        benefits: [
          "AI-generated dynamic dashboards for CRE KPIs",
          "Intelligent consolidation of portfolio performance data",
        ],
      },
      {
        title: "CRE Technology Consulting",
        tagline: "AI strategy for CRE tech",
        description:
          "Expert guidance on implementing and scaling AI solutions for CRE operations.",
        benefits: [
          "Strategic advice on AI tool selection for CRE",
          "Assistance with AI implementation and scaling",
        ],
      },
    ],
  },
];

interface Subservice {
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
}

const SubserviceCard = ({
  subservice,
  color,
}: {
  subservice: Subservice;
  color: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="overflow-hidden border-0 shadow-sm transition-all duration-300 hover:shadow-md mb-3">
      <CardContent className="p-0">
        <div className="flex">
          <div
            className="flex-shrink-0 w-1"
            style={{ backgroundColor: color }}
          ></div>
          <div className="flex-grow p-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-between items-center w-full text-left"
            >
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  {subservice.title}
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">
                  {subservice.tagline}
                </p>
              </div>
              {isOpen ? (
                <Minus className="w-4 h-4 text-gray-400" />
              ) : (
                <Plus className="w-4 h-4 text-gray-400" />
              )}
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2"
                >
                  <p className="text-xs md:text-sm text-gray-600 mb-2">
                    {subservice.description}
                  </p>
                  <h5 className="font-semibold text-xs text-gray-900 mb-1">
                    Key Benefits:
                  </h5>
                  <ul className="space-y-1">
                    {subservice.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <ArrowRight className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  subservices: Subservice[];
}

const ServiceSection = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div>
      <div className="flex items-center space-x-3 mb-3">
        <div
          className="p-1.5 rounded-full text-white"
          style={{ backgroundColor: service.color }}
        >
          <Icon className="w-4 h-4" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
      <div>
        {service.subservices.map(
          (subservice: Subservice, index: Key | null | undefined) => (
            <SubserviceCard
              key={index}
              subservice={subservice}
              color={service.color}
            />
          )
        )}
      </div>
    </div>
  );
};

export function ServicesSection() {
  return (
    <section
      className={`py-12 bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden ${GeistSans.className}`}
    >
      {/* AI-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${i * 20},50 Q${i * 20 + 10},${30 + Math.random() * 40} ${
                i * 20 + 20
              },50`}
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2 + i,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive CRE Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We handle the heavy lifting, so you can focus on clients and growing
            your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceSection key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
