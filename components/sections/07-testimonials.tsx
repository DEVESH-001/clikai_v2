"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { GeistSans } from "geist/font/sans";
import { imageUrls } from "@/utils/imageUrls";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
  highlight?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    highlight: "enables us to process more deals",
    content:
      "ClikAI enables us to process more deals, allowing us to focus more time on customers.",
    author: "Eric Tupta",
    role: "Director of Digital Transformation",
    company: "Bellwether Real Estate Capital",
    image: imageUrls.testimonials.ericTupta,
  },
  {
    id: 2,
    highlight: "standardizes CRE financials into a uniform format",
    content:
      "ClikAi and his team were very helpful in implementing their SmartExtract API into our business. The technology is great in the way it standardizes CRE financials into a uniform format, allocates line items and charges into predetermined categories, and maintains maximum flexibility for various uses. I would definitely recommend this tool to any CRE professional looking to make their underwriting process more efficient.",
    author: "W. Cooper Ramsey",
    role: "Vice President - Strategy & Production",
    company: "TrueRate Services",
    image: imageUrls.testimonials.cooperRamsey,
  },
  {
    id: 3,
    highlight:
      "make more sophisticated investment decisions, in a fraction of the time",
    content:
      "Integrating into our underwriting process has allowed our deal team to make more sophisticated investment decisions, in a fraction of the time! The software does a tremendous job of quickly integrating the financials (T12, RR) into a simple, easy to read model and actually goes a step further by mapping it directly into our internal, robust model. Completing proformas and presenting returns to partners is now done all the more confidentially with the leverage of Clik's technology.",
    author: "Jeremy Cisneros",
    role: "Director of Multifamily Acquisitions",
    company: "AJX Capital",
    image: imageUrls.testimonials.jeremyCisneros,
  },
  // {
  //   id: 4,
  //   highlight: "saving them hours of time",
  //   content:
  //     "Parag and the team made the integration process simple and easy for us to provide their great AI abstraction service (Rent Rolls, Operating Statements, T12s) to our customers, saving them hours of time!",
  //   author: "Grant Weiss",
  //   role: "CEO",
  //   company: "ROCKVAL™",
  //   image: imageUrls.testimonials.grantWeiss,
  // },
  {
    id: 5,
    highlight:
      "phenomenal tool in underwriting and pricing commercial real estate deals",
    content:
      "ClikAi team have created a phenomenal tool in underwriting and pricing commercial real estate deals. The software makes the underwriting process seamless.",
    author: "James Vestal",
    role: "CEO",
    company: "Verdad Commercial Real Estate Companies",
    image: imageUrls.testimonials.jamesVestal,
  },
  {
    id: 6,
    highlight: "speed of transferring all the data accurately",
    content:
      "I was so very impressed with the speed of transferring all the data accurately into the template from the financials of my apartment complex- 308 units. Wow‼️‼️ It would have taken my team at least 1-2 hours to get all that in, it's very time consuming. Really excited 😆 to get Clik.ai to do it so fast so that we can spend time doing the calculations & analyzing the real guts of the underwriting process. A huge time $aver‼️‼️‼️🌈🌈🙏 Thank You!",
    author: "Vinney Chopra",
    role: "Managing Principal",
    company: "Moneil Investment Group LLC",
    image: imageUrls.testimonials.vinneyChopra,
  },
  {
    id: 7,
    highlight: "helped automate and speed up the underwriting process",
    content:
      "This tool has helped automate and speed up the underwriting process for my files. The time spent on each file has been more than cut in half. Would recommend to anyone looking to scale.",
    author: "Christian Groomes",
    role: "Senior Sales Manager",
    company: "Lima One Capital",
    image: imageUrls.testimonials.christianGroomes,
  },
];

const companies = [
  "Bellwether Real Estate Capital",
  "TrueRate Services",
  "AJX Capital",
  // "ROCKVAL™",
  "Verdad Commercial Real Estate Companies",
  "Moneil Investment Group LLC",
  "Lima One Capital",
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 10000); // 10 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section
      className={`py-24 bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50 relative overflow-hidden ${GeistSans.className}`}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Impact stories from our clients
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-blue-100">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].author}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <blockquote className="text-2xl font-medium mb-6 text-gray-900">
                  <span className="text-blue-600">
                    The {testimonials[currentIndex].highlight}
                  </span>
                </blockquote>
                <p className="text-lg text-gray-600 mb-8">
                  &quot;{testimonials[currentIndex].content}&quot;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Company Indicators */}
          <div className="mt-12 border-t pt-8">
            <div className="flex flex-wrap justify-center items-center gap-4">
              {companies.map((company) => {
                // Find the first testimonial for this company
                const testimonialIndex = testimonials.findIndex(
                  (t) => t.company === company
                );
                return (
                  <button
                    key={company}
                    onClick={() => setCurrentIndex(testimonialIndex)}
                    className={`whitespace-nowrap px-4 py-2 text-sm transition-colors ${
                      testimonials[currentIndex].company === company
                        ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {company}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
