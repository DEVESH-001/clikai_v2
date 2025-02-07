"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
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
          "Real-time financial insights and variance analysis",
          "Cash flow forecasting and portfolio performance reviews",
          "Automated compliance with regulatory requirements",
        ],
      },

      {
        title: "Custom Financial Model Development",
        tagline: "Faster, compliant assessments",
        description:
          "Streamline property assessments and disbursements with AI-driven workflows.",
        benefits: [
          "AI-assisted property condition assessments",
          "Automated replacement reserves disbursement",
          "Intelligent compliance checks for HUD/FHA guidelines",
        ],
      },
      {
        title: "Disbursement & PCNA Support",
        tagline: "Streamlined disbursement and PCNA processingn",
        description:
          "Migrate loan portfolios to modern platforms with AI-powered validation and error checks.",
        benefits: [
          "AI-driven data cleansing and standardization",
          "Automated validation and error detection",
          "Intelligent process optimization for scalability",
        ],
      },
    ],
  },
  {
    id: "lease-administration",
    title: "Lease & Data Administration",
    description: "AI-powered lease management and data processing",
    icon: FileText,
    color: "#F59E0B",
    subservices: [
      {
        title: "Lease Abstraction & Audit",
        tagline: "AI-driven lease data extraction",
        description:
          "Extract and audit critical lease data using advanced AI and machine learning techniques.",
        benefits: [
          "AI-powered extraction of key lease clauses",
          "Automated lease audits for compliance and consistency",
        ],
      },
      {
        title: "Appraisal & OM Data Digitization",
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
    title: "Consulting & Technology Solutions",
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
    <div className="flex items-start">
      <ArrowRight className="w-4 h-4 text-blue-500 mt-3 mr-2 flex-shrink-0 " />
      <Card className="flex-grow overflow-hidden border-0 shadow-sm transition-all duration-300 hover:shadow-md bg-white">
        <CardContent className="p-0">
          <div className="flex">
            <div
              className="flex-shrink-0 w-1 bg-blue-500"
              style={{ backgroundColor: color }}
            ></div>
            <div className="flex-grow">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full p-3 text-left hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-gray-900">
                    {subservice.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-0.5">
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
                    className="px-3 pb-3"
                  >
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      {subservice.description}
                    </p>
                    <h5 className="font-semibold text-xs md:text-sm text-gray-900 mb-1">
                      Key Benefits:
                    </h5>
                    <ul className="space-y-1">
                      {subservice.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-xs md:text-sm text-gray-600">
                            {benefit}
                          </span>
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
    </div>
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
    <div className="mb-6 h-full">
      <div className="flex items-center space-x-3 mb-3">
        <div
          className="p-1.5 rounded-full text-white"
          style={{ backgroundColor: service.color }}
        >
          <Icon className="w-4 h-4" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          {service.title}
        </h3>
      </div>
      <p className="text-sm md:text-base text-gray-600 mb-3">
        {service.description}
      </p>
      <div className="space-y-3">
        {service.subservices.map((subservice, index) => (
          <SubserviceCard
            key={index}
            subservice={subservice}
            color={service.color}
          />
        ))}
      </div>
    </div>
  );
};

// const Slider = ({
//   currentIndex,
//   setCurrentIndex,
// }: {
//   currentIndex: number;
//   setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
// }) => {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   const handleSliderChange = (event: { clientX: number }) => {
//     if (sliderRef.current) {
//       const rect = sliderRef.current.getBoundingClientRect();
//       const x = event.clientX - rect.left;
//       const percentage = x / rect.width;
//       setCurrentIndex(percentage > 0.5 ? 1 : 0);
//     }
//   };

//   return (
//     <div className="w-full mt-8">
//       <div
//         ref={sliderRef}
//         className="relative w-full h-2 bg-gray-200 rounded-full cursor-pointer"
//         onClick={handleSliderChange}
//       >
//         <motion.div
//           className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 rounded-full"
//           animate={{ x: `${currentIndex * 100}%` }}
//           transition={{
//             type: "tween",
//             duration: 0.15,
//             ease: "easeOut",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

export function ServicesSection() {



  return (
    <section
      className={`py-12 bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden ${GeistSans.className}`}
    >
      

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
        <div className="flex-shrink-3 w-full grid md:grid-cols-3 gap-6 md:gap-8">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="h-full">
              <ServiceSection service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
