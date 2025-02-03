"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Briefcase,
  Users,
  Zap,
  Coffee,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Toronto, Canada",
    type: "Full-time",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Data Scientist",
    department: "Data",
    location: "New York, USA",
    type: "Full-time",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Toronto, Canada",
    type: "Full-time",
  },
  {
    title: "Sales Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
  },
];

const benefits = [
  {
    icon: Briefcase,
    title: "Flexible Work Hours",
    description:
      "Balance your work and personal life with our flexible scheduling options.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description:
      "Work with a diverse team of talented professionals from around the world.",
  },
  {
    icon: Zap,
    title: "Cutting-edge Technology",
    description:
      "Stay at the forefront of innovation with access to the latest tools & tech.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description:
      "Enjoy generous vacation time, wellness programs, and social events.",
  },
];

export default function CareersPage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50 ${GeistSans.className}`}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
        >
          Careers at Clik.ai
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-12 max-w-3xl"
        >
          Join our team of innovators and help shape the future of AI-powered
          commercial real estate solutions. We&apos;re always looking for
          talented individuals who are passionate about technology and real
          estate.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Current Openings
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {job.department} | {job.location} | {job.type}
                </p>
                <Button className="w-full  bg-black text-white hover:text-white hover:bg-gray-800">
                  Apply Now
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Why Work With Us?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don&apos;t See a Perfect Fit?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            We&apos;re always on the lookout for talented individuals. Send us
            your resume, and we&apos;ll keep you in mind for future
            opportunities.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit Your Resume
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
