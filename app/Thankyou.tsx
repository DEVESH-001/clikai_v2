"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-20 w-20 text-green-500" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                    Thank You for Your Interest
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    We appreciate you reaching out to us. Our team has received
                    your information and will be in touch with you shortly.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link href="/">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Return to Homepage
                      </Button>
                    </Link>
                    <Link href="/products/autouw">
                      <Button className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-6 py-2 rounded-md">
                        Explore Our Products
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">
                    What Happens Next?
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-bold text-blue-800 mb-2">
                        1. Review
                      </div>
                      <p className="text-gray-600">
                        Our team will review your information and requirements.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-bold text-blue-800 mb-2">
                        2. Contact
                      </div>
                      <p className="text-gray-600">
                        A Clik.AI representative will reach out to you within
                        1-2 business days.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-bold text-blue-800 mb-2">
                        3. Solution
                      </div>
                      <p className="text-gray-600">
                        We&apos;ll work together to find the perfect solution for
                        your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
