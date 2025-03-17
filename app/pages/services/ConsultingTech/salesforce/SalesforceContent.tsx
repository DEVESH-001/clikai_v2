/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useCallback, SetStateAction } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Settings,
  Link,
  Database,
  Workflow,
  Headphones,
  Cloud,
  Webhook,
  Zap,
  BarChart2,
  Upload,
  LineChart,
  CheckSquare,
  Users2,
  Cog,
  TrendingUp,
} from "lucide-react";
import { GeistSans } from "geist/font/sans";

import React from "react";
import MeetingsModal from "@/components/hubspot_form/MeetingModal";
import { BookDemoIframeModal } from "@/components/hubspot_form/BookDemoIframe";

const services = [
  {
    icon: Settings,
    title: "Implementation & Configuration",
    description:
      "Set up Salesforce from scratch or reconfigure an existing system to align with CRE-specific workflows.",
    brief:
      "Ensure a smooth Salesforce implementation tailored to your CRE operations, including pipeline tracking, tenant management, and portfolio reporting.",
    pattern: "M0 0h4v4H0V0zm4 4h4v4H4V4z",
  },
  {
    icon: Link,
    title: "Integration Services",
    description:
      "Seamlessly integrate Salesforce with Clik.ai's products like AutoUW, Appraisal Parser, and third-party platforms such as accounting systems and BI tools.",
    brief:
      "Enable seamless data flow and connectivity with custom integrations that enhance your operational efficiency.",
    pattern: "M0 0h8v8H0V0zm8 8h8v8H8V8z",
  },
  {
    icon: Database,
    title: "Data Migration",
    description:
      "Ensure secure and accurate migration of legacy data into Salesforce.",
    brief:
      "Migrate existing data with precision, maintaining data integrity and minimizing disruption to your operations.",
    pattern: "M0 0l5 5-5 5 5-5-5-5z",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Reduce manual tasks with automation solutions tailored to CRE processes.",
    brief:
      "Automate repetitive tasks like lease renewals and document tracking, saving time and improving accuracy.",
    pattern: "M0 0h4v4H0V0zm8 8h4v4H8V8z",
  },
  {
    icon: Headphones,
    title: "Training & Support",
    description:
      "Train your team to maximize Salesforce efficiency and provide ongoing technical support.",
    brief:
      "Equip your team with the knowledge to leverage Salesforce effectively and resolve issues swiftly with dedicated support.",
    pattern: "M0 0l8 8-8 8 8-8-8-8z",
  },
];

const customizationBenefits = [
  {
    icon: Zap,
    title: "Improved Efficiency",
    description:
      "Automate routine tasks and reduce manual errors, streamlining your CRE operations.",
  },
  {
    icon: BarChart2,
    title: "Enhanced Reporting",
    description:
      "Generate customized dashboards and actionable insights for better decision-making.",
  },
  {
    icon: Users2,
    title: "Better Stakeholder Communication",
    description:
      "Keep investors, tenants, and team members informed with automated updates.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description:
      "Ensure your Salesforce setup grows seamlessly with your business needs.",
  },
];

const engagementModels = [
  {
    icon: CheckSquare,
    title: "Project-Based Engagement",
    description:
      "Ideal for one-time Salesforce implementations or customizations, ensuring a defined scope and timely delivery.",
  },
  {
    icon: Users2,
    title: "Resource Augmentation",
    description:
      "Scale your team with Clik.ai's skilled Salesforce professionals to meet ongoing project needs and ensure flexibility.",
  },
  {
    icon: Cog,
    title: "Managed Services",
    description:
      "Let Clik.ai handle end-to-end Salesforce management, from maintenance and upgrades to support and enhancements.",
  },
];

const technologyStack = [
  {
    category: "Salesforce Clouds",
    icon: Cloud,
    technologies: ["Sales Cloud", "Service Cloud", "Marketing Cloud"],
    description:
      "Comprehensive suite of Salesforce cloud solutions for CRE operations",
  },
  {
    category: "Integration Tools",
    icon: Webhook,
    technologies: ["MuleSoft", "Zapier", "Custom APIs"],
    description:
      "Powerful integration capabilities for seamless system connectivity",
  },
  {
    category: "Automation",
    icon: Zap,
    technologies: ["Salesforce Flow", "Process Builder", "Apex Triggers"],
    description: "Advanced automation tools for streamlined workflows",
  },
  {
    category: "Data Management",
    icon: Upload,
    technologies: ["Data Loader", "Dataloader.io"],
    description: "Efficient data handling and migration solutions",
  },
  {
    category: "Analytics",
    icon: LineChart,
    technologies: ["Tableau CRM (formerly Einstein Analytics)"],
    description: "Powerful analytics and visualization capabilities",
  },
];

interface CardItem {
  icon: React.ElementType;
  title: string;
  description: string;
  brief?: string;
  pattern?: string;
}

const Card = ({
  item,
  isService = false,
  isEngagementModel = false,
}: {
  item: CardItem;
  isService?: boolean;
  isEngagementModel?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-100/20 transition-all duration-300 hover:shadow-xl hover:bg-white/90 relative ${
        isHovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <div className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <item.icon
            className={`w-6 h-6 text-blue-600 ${
              isService || isEngagementModel ? "mr-2" : "mr-4"
            }`}
          />
          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
        </div>
        <p className="text-gray-700 mb-4 flex-grow">{item.description}</p>
        {isService && (
          <p className="text-sm text-gray-600 mt-auto">{item.brief}</p>
        )}
      </div>
    </motion.div>
  );
};

interface TechnologyItem {
  category: string;
  icon: React.ComponentType;
  technologies: string[];
  description: string;
}

const TechnologyCard = ({ item }: { item: TechnologyItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-blue-100 transition-all duration-300 hover:shadow-xl hover:bg-white relative ${
        isHovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 relative z-10">
        <div className="flex items-center mb-4">
          <item.icon />
          {/* className="w-6 h-6 text-blue-600 mr-3"  */}
          <h3 className="text-xl font-semibold text-gray-900">
            {item.category}
          </h3>
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function SalesforceCustomizationPage() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const openBookDemo = () => setIsBookDemoOpen(true);
  const closeBookDemo = () => setIsBookDemoOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeBenefit, setActiveBenefit] = useState(null);
  const [activeEngagementModel, setActiveEngagementModel] = useState<
    number | null
  >(null);

  const handleServiceClick = useCallback(
    (index: number) => {
      setActiveService(activeService === index ? null : index);
    },
    [activeService]
  );

  const handleBenefitClick = useCallback(
    (index: SetStateAction<null>) => {
      setActiveBenefit(activeBenefit === index ? null : index);
    },
    [activeBenefit]
  );

  const handleEngagementModelClick = useCallback(
    (index: number) => {
      setActiveEngagementModel(activeEngagementModel === index ? null : index);
    },
    [activeEngagementModel]
  );

  return (
    <div className={GeistSans.className}>
      <div className="min-h-screen">
        {/* Hero Section */}

        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-indigo-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-purple-50/50" />
          <div className="mx-auto px-8 lg:space-y-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Elevate Your CRE Operations with{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                    Salesforce Expertise
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
                  From deal management to portfolio performance, we provide the
                  resources to optimize workflows, enhance stakeholder
                  interactions, and drive growth.
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-[8px]"
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[500px]"
              >
                <Image
                  src="/images/Services_Section_Images/Consulting_Tech/Salesforce/Hero_image.svg"
                  alt="Salesforce Customization"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-12 relative overflow-hidden bg-gradient-to-b from-indigo-50/40 via-blue-50/30 to-purple-50/40">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 C30,60 70,40 100,50 L100,100 L0,100 Z"
                fill="rgba(59, 130, 246, 0.05)"
              />
              <path
                d="M0,50 C30,40 70,60 100,50 L100,100 L0,100 Z"
                fill="rgba(139, 92, 246, 0.05)"
              />
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-8"
            >
              Our Approach to Salesforce Customization
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 text-center mb-12">
                We understand that no two CRE businesses are the same.
                That&apos;s why we offer tailored Salesforce solutions that
                align perfectly with your operational goals. Here&apos;s how we
                make it happen:
              </p>
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />
                {[
                  {
                    title: "Needs Assessment",
                    description:
                      "We analyze your current workflows and identify areas for improvement, ensuring Salesforce meets your specific business requirements.",
                    align: "left",
                  },
                  {
                    title: "Custom Development",
                    description:
                      "Our team creates custom objects, workflows, and fields tailored to your CRE operations.",
                    align: "right",
                  },
                  {
                    title: "Integration",
                    description:
                      "Seamlessly connect Salesforce with Clik.ai's tools like AutoUW, Appraisal Parser, and InvestAssist, as well as third-party platforms.",
                    align: "left",
                  },
                  {
                    title: "User Training",
                    description:
                      "Empower your team with hands-on training and documentation to maximize Salesforce's potential.",
                    align: "right",
                  },
                  {
                    title: "Continuous Support",
                    description:
                      "Ongoing support to address technical issues and implement enhancements as your needs evolve.",
                    align: "left",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{
                      opacity: 0,
                      x: step.align === "left" ? -50 : 50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`flex items-center mb-12 last:mb-0 ${
                      step.align === "right" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        step.align === "right" ? "pl-6" : "pr-6"
                      } ${step.align === "right" ? "text-left" : "text-right"}`}
                    >
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-base text-gray-600">
                        {step.description}
                      </p>
                    </div>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                        style={{
                          left: step.align === "left" ? "unset" : "100%",
                          right: step.align === "left" ? "100%" : "unset",
                        }}
                      />
                    </div>
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-purple-50/40 opacity-10"></div>
          <div className="absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-transparent to-purple-50/40 opacity-10"></div>
        </section>

        {/* Our Salesforce Services Section */}
        <section className="py-12 relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-blue-50/30 to-indigo-50/40">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            >
              Our Salesforce Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {services.map((service, index) => (
                <div key={index} onClick={() => handleServiceClick(index)}>
                  <Card item={service} isService={true} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-indigo-50/40 opacity-10"></div>
          <div className="absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-transparent to-indigo-50/40 opacity-10"></div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-12 relative overflow-hidden bg-gradient-to-b from-indigo-50/40 via-purple-50/30 to-blue-50/40">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z"
                fill="rgba(59, 130, 246, 0.05)"
              />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Clik.ai leverages the following technologies and tools in
                Salesforce customization
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyStack.map((tech, index) => (
                <TechnologyCard key={index} item={tech} />
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-blue-50/40 opacity-10"></div>
          <div className="absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-transparent to-blue-50/40 opacity-10"></div>
        </section>

        {/* Flexible Engagement Models Section */}
        <section className="py-12 relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-indigo-50/30 to-purple-50/40">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z"
                fill="rgba(139, 92, 246, 0.05)"
              />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            >
              Flexible Engagement Models
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagementModels.map((model, index) => (
                <div
                  key={index}
                  onClick={() => handleEngagementModelClick(index)}
                >
                  <Card item={model} isEngagementModel={true} />
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Button
                size="lg"
                onClick={openBookDemo}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-[8px] text-xl "
              >
                Discuss Your Engagement Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-purple-50/40 opacity-10"></div>
          <div className="absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-transparent to-purple-50/40 opacity-10"></div>
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
                Let&apos;s Transform Your CRE Business Together
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
                Salesforce is more than just a CRM—it&apos;s a strategic tool
                for scaling your CRE operations. With Clik.ai&apos;s consulting
                services, you&apos;ll unlock its true potential and achieve
                measurable results.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-[8px]"
                >
                  Schedule a Consultation
                </Button>
              </motion.div>
              <p className="text-blue-200 mt-4">
                Discuss your challenges with our Salesforce consultants.
              </p>
            </motion.div>
          </div>
          {/* Meeting Modal */}
          <MeetingsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            meetingUrl="https://meetings.hubspot.com/prerit/demo-meeting"
          />
          <BookDemoIframeModal
            isOpen={isBookDemoOpen}
            onClose={closeBookDemo}
          />
        </section>
      </div>
    </div>
  );
}
