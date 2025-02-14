"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Send } from "lucide-react";
import { GeistSans } from "geist/font/sans";

export default function AboutUsPage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50 ${GeistSans.className}`}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            AI software to boost your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              multifamily and commercial real estate investment underwriting.
            </span>
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 text-center h-full bg-white/80 backdrop-blur-sm">
              <div className="text-5xl font-bold text-blue-600 mb-2">2017</div>
              <div className="text-gray-600">Founded</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 text-center h-full bg-white/80 backdrop-blur-sm">
              <div className="text-5xl font-bold text-blue-600 mb-2">$50B+</div>
              <div className="text-gray-600">CRE Deals Underwritten</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 text-center h-full bg-white/80 backdrop-blur-sm">
              <div className="text-5xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Employees</div>
            </Card>
          </motion.div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Toronto</h3>
                </div>
                <p className="text-gray-600">
                  325 Front Street West, Suite 400, Toronto
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold">New York</h3>
                </div>
                <p className="text-gray-600">
                  26 Broadway, 8th floor, New York
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Chennai </h3>
                </div>
                <p className="text-gray-600">
                  8/12, 1st street, LIC colony, velachery, Chennai 600042 ,
                  India
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Gurgaon</h3>
                </div>
                <p className="text-gray-600">
                  WeWork Platina Tower, Ground Floor, MG Rd,
                  Sector 28, DLF Phase 1, Gurugram, Haryana 122002, India
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
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
              Want to work for us?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Think you&apos;d be interested in engineering and product roles at
              Clik.ai? Great! Let&apos;s connect!
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
                Send Us Your Pitch
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
