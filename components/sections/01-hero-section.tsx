"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HeroGraphs } from "./hero-graphs";
import { LogoCarousel } from "./02-logo-carousel";
import { ParticleBackground } from "./ParticleBackground";

export function HeroSection() {
  return (
    <div className="relative">
      <div className="relative z-20 min-h-[50vh] pt-24 pb-0 mt-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 ">
          <ParticleBackground />
        </div>

        <div className="mx-auto px-8 lg:space-y-6 relative  ">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full">
            <div className="lg:w-3/5 mb-8 lg:mb-0 w-full">
              {/* Hero Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left mb-4 leading-tight text-white"
              >
                The{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  All-in-One <br />
                </span>{" "}
                Platform for CRE{" "}
              </motion.h1>

              {/* Hero Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mb-6 text-blue-200 max-w-2xl mx-auto lg:mx-0"
              >
                Delivering smarter tools and expert support to transform the way
                CRE works
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center lg:text-left"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-base md:text-lg font-semibold px-6 py-3"
                >
                  Get Demo
                </Button>
              </motion.div>
            </div>

            {/* Hero Graphs */}
            <div className="lg:w-2/5 w-full mt-8 lg:mt-0 mb-0">
              <HeroGraphs />
            </div>
          </div>
        </div>

        {/* Logo Carousel */}
        <LogoCarousel />
      </div>
    </div>
  );
}
