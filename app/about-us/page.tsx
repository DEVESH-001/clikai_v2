"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {  Building2,  Send } from "lucide-react"
import { GeistSans } from "geist/font/sans"

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
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted By Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
            {[
              {
                name: "BWE",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bwe-blue-zthYuDcrA5o4yl4tSuTcvqohGhMILy.svg",
              },
              {
                name: "Newmark",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newmark-jyvyVTG5MHuT9TRdV2lx2bg5SQd3rR.svg",
              },
              {
                name: "Merchants Capital",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/merchants-capital-hmTr2WTZIy81Nk68d4dPNgL1usWr0E.svg",
              },
              {
                name: "Lument",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lument-dp1yAsXN4aQtdiE4cPXPfNKnvzqn3b.svg",
              },
            ].map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-16"
              >
                <Image
                  src={client.src || "/placeholder.svg"}
                  alt={client.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
         <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h2 className="text-2xl font-bold mb-4">Want to work for us?</h2>
            <p className="mb-6">
              Think you&apos;d be interested in engineering and product roles at Clik.ai? Great! Let&apos;s connect!
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Send Us Your Pitch
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </Card> 

          
        </motion.div>

       
      </div>
    </div>
  );
}

