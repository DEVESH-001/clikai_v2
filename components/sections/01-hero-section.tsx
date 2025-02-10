
// new
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GradientBackground } from "./gradient-background";
import { HeroGraphs } from "./hero-graphs";
import { LogoCarousel } from "./02-logo-carousel";

export function HeroSection() {
  return (
    <GradientBackground className="min-h-[50vh] pt-24 pb-0 mt-16">
      {/* <div className="container mx-auto px-4 lg:space-y-6"> */}
      <div className=" mx-auto px-8 lg:space-y-6">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full">
          <div className="lg:w-3/5 mb-8 lg:mb-0 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left mb-4 leading-tight text-blue-900"
            >
              The {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
               All-in-One {" "} <br />
              </span>{" "}
             Platform for CRE {" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mb-6 text-blue-800 max-w-2xl mx-auto lg:mx-0"
            >
              Delivering smarter tools and expert support to transform the way
              CRE works
            </motion.p>
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
          <div className="lg:w-2/5 w-full mt-8 lg:mt-0 mb-0">
            <HeroGraphs />
          </div>
        </div>
      </div>
      <LogoCarousel />
    </GradientBackground>
  );
}







// "use client";
//  import { motion } from "framer-motion";
// import React from "react";
// import { Button } from "../ui/button";
// import { HeroGraphs } from "./hero-graphs";



// export function HeroSection() {
//   return (
//     <div className="w-full pt-16 md:pt-20 lg:pt-24">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
//           {/* Left content */}
//           <div className="w-full lg:w-3/5 space-y-6">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left leading-tight text-blue-900"
//             >
//               The{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
//                 All-in-One
//               </span>{" "}
//               Platform for CRE
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left text-blue-800 max-w-2xl lg:max-w-none"
//             >
//               Delivering smarter tools and expert support to transform the way
//               CRE works
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-center lg:text-left pt-4"
//             >
//               <Button
//                 size="lg"
//                 className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg font-semibold px-6 py-3"
//               >
//                 Get Demo
//               </Button>
//             </motion.div>
//           </div>

//           {/* Right content */}
//           <div className="w-full lg:w-2/5">
//             <HeroGraphs />
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// }
