"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  FileCheck,
  Shield,
  Clock,
  ShieldCheck,
} from "lucide-react";

import { GeistSans } from "geist/font/sans";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Database, Archive, DollarSign } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { DisbursementFlowchart } from "../../components/DisbursementFlowchart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const journey = [
  {
    title: "Reserve Tracking and Reconciliation ",
    description:
      "Track reserve balances against repair needs identified in PCNA reports. Reconcile reserve funds to ensure sufficient balances for upcoming property needs.",
    icon: DollarSign,
  },
  {
    title: "Disbursement Requests",
    description:
      "Process reserve disbursement requests from borrowers, ensuring they align with approved maintenance or repair activities as outlined in PCNA reports.",
    icon: FileCheck,
  },
  {
    title: "Compliance Verification",
    description:
      "Verify that reserve fund use complies with loan terms and lender policies, minimizing compliance risk for the servicer.",
    icon: ShieldCheck,
  },
];
export default function DisbursementPCNASupport() {
  return (
    <div className={`min-h-screen ${GeistSans.className}`}>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
          <div className="absolute inset-0">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z"
                fill="rgba(59, 130, 246, 0.1)"
                animate={{
                  d: [
                    "M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z",
                    "M0,0 C30,60 70,40 100,0 L100,100 L0,100 Z",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 10,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Advanced</span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4B85C7] to-blue-600">
                  PCNA Analysis
                </span>{" "}
                <span className="text-gray-900">& Reserve Management</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Expert manual processing of PCNA/PCNR report analysis and
                reserve disbursements
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full mb-8"
            >
              <DisbursementFlowchart />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Optimize Your Operations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* PCNA/PCNR Report Analysis and Data Management Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              PCNA/PCNR Report Analysis and Data Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team meticulously processes and manages your
              PCNA/PCNR reports.
            </p>
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {[
              {
                title: "Data Extraction",
                description:
                  "Extract critical information from PCNA/PCNR reports, including repair estimates, maintenance schedules, and structural assessments.",
                icon: FileText,
              },
              {
                title: "Data Entry and Quality Control",
                description:
                  "Accurately enter extracted data into lender databases / loan servicing platforms to ensure data consistency and quality.",
                icon: Database,
              },
              {
                title: "Digital Archive Management",
                description:
                  "Maintain organized digital archives of PCNA/PCNR reports and other supporting documentation, making it easy for servicers to retrieve data when needed.",
                icon: Archive,
              },
            ].map((service, index) => (
              <SwiperSlide key={index} className="w-64">
                {" "}
                {/* Set fixed width */}
                <Card className="w-full h-[240px] flex flex-col justify-between bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-bold">
                      <service.icon className="w-6 h-6 mr-2 text-blue-600" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    {" "}
                    {/* Ensures equal height distribution */}
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* new reserved section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Reserve Disbursements Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our manual disbursement process ensures accuracy, compliance, and
            efficiency.
          </p>

          <div className="max-w-4xl mx-auto relative mt-16">
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
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute w-4 h-4  rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600 " />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reserve Disbursements Section
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Reserve Disbursements Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our manual disbursement process ensures accuracy, compliance, and
              efficiency.
            </p>
          </motion.div>

          <VerticalTimeline>
            {[
              {
                title: "Reserve Tracking and Reconciliation",
                description:
                  "Track reserve balances against repair needs identified in PCNA reports. Reconcile reserve funds to ensure sufficient balances for upcoming property needs.",
                icon: <DollarSign />,
              },
              {
                title: "Disbursement Requests",
                description:
                  "Process reserve disbursement requests from borrowers, ensuring they align with approved maintenance or repair activities as outlined in PCNA reports.",
                icon: <FileCheck />,
              },
              {
                title: "Compliance Verification",
                description:
                  "Verify that reserve fund use complies with loan terms and lender policies, minimizing compliance risk for the servicer.",
                icon: <ShieldCheck />,
              },
            ].map((step, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(255, 255, 255)",
                  color: "#333",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(255, 255, 255)",
                }}
                iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
                icon={step.icon}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">
                  {step.title}
                </h3>
                <p className="text-gray-700 mt-2">{step.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section> */}

      {/* Our Edge Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Edge in PCNA and Disbursement Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Clik&apos;s approach sets us apart in PCNA analysis
              and reserve disbursement management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Experienced Team",
                description:
                  "Our skilled professionals bring years of expertise in PCNA analysis and disbursement management.",
                icon: Users,
              },
              {
                title: "Citrix-Based Secure Access",
                description:
                  "We work directly on client systems through Citrix, ensuring data security and seamless integration.",
                icon: Shield,
              },
              {
                title: "Meticulous Manual Processing",
                description:
                  "Our team carefully reviews and processes each request, ensuring accuracy and compliance.",
                icon: FileCheck,
              },
              {
                title: "24/7 Global Support",
                description:
                  "Round-the-clock assistance from our global team of experts.",
                icon: Clock,
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-bold">
                      <advantage.icon className="w-6 h-6 mr-2 text-blue-600" />
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our PCNA analysis and
              reserve disbursement management services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                {
                  question: "How does Clik handle PCNA/PCNR report analysis?",
                  answer:
                    "Our experienced team manually processes and analyzes critical information from PCNA/PCNR reports, including repair estimates, maintenance schedules, and structural assessments. This meticulous approach ensures high accuracy and consistent data entry.",
                },
                {
                  question:
                    "How does Clik ensure data security when working on client data?",
                  answer:
                    "We exclusively use Citrix virtual environments provided by our clients to access their systems. This approach ensures that all work is performed within the client's secure infrastructure, maintaining the highest level of data protection.",
                },
                {
                  question:
                    "Can you describe Clik's reserve disbursement process?",
                  answer:
                    "Our team manually tracks reserve balances against repair needs identified in PCNA reports, processes disbursement requests from borrowers, and verifies compliance with loan terms and lender policies. This hands-on approach ensures thorough review and strict adherence to compliance standards.",
                },
                {
                  question:
                    "Does Clik integrate with existing loan servicing platforms?",
                  answer:
                    "Clik doesn't provide a software solution for integration. Instead, our team works directly on client systems through Citrix virtual environments. This allows us to work seamlessly within your existing infrastructure without the need for additional integrations.",
                },
                {
                  question:
                    "How does Clik ensure the accuracy of PCNA data analysis?",
                  answer:
                    "Our team of experienced professionals manually reviews and validates all data. We employ a multi-step quality check process throughout the analysis to ensure the highest level of accuracy in our PCNA data analysis.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      {/* Call-To-Action Section */}

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
              Ready to Elevate Your PCNA Analysis ?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Experience expert manual processing of PCNA/PCNR report
              analysis and reserve disbursements.
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
                Talk To Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
