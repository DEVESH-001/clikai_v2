// "use client";

// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { LogoCarousel } from "@/components/sections/02-logo-carousel";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { HeroGraphs } from "./hero-graphs";

// export function HeroSection() {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesOptions = {
//     background: {
//       color: {
//         value: "transparent",
//       },
//     },
//     fpsLimit: 120,
//     interactivity: {
//       events: {
//         onClick: {
//           enable: true,
//           mode: "push",
//         },
//         onHover: {
//           enable: true,
//           mode: "repulse",
//         },
//         resize: {
//           enable: true,
//         },
//       },
//       modes: {
//         push: {
//           quantity: 4,
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4,
//         },
//       },
//     },
//     particles: {
//       color: {
//         value: "#3B82F6",
//       },
//       links: {
//         color: "#3B82F6",
//         distance: 150,
//         enable: true,
//         opacity: 0.5,
//         width: 1,
//       },
//       collisions: {
//         enable: true,
//       },
//       move: {
//         direction: "none" as const,
//         enable: true,
//         outModes: {
//           default: "bounce" as const,
//         },
//         random: false,
//         speed: 1,
//         straight: false,
//       },
//       number: {
//         density: {
//           enable: true,
//           area: 800,
//         },
//         value: 80,
//       },
//       opacity: {
//         value: 0.5,
//       },
//       shape: {
//         type: "circle",
//       },
//       size: {
//         value: { min: 1, max: 5 },
//       },
//     },
//     detectRetina: true,
//   };

//   return (
//     <div className="relative">
//       {init && (
//         <Particles
//           id="tsparticles"
//           className="absolute inset-0 z-0"
          
          
//           options={particlesOptions}
//         />
//       )}
//       <div className="relative z-10 min-h-[50vh] pt-24 pb-0 mt-8">
//         <div className="mx-auto px-8 lg:space-y-6">
//           <div className="flex flex-col lg:flex-row items-center justify-between h-full">
//             <div className="lg:w-3/5 mb-8 lg:mb-0 w-full">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left mb-4 leading-tight text-blue-900"
//               >
//                 The{" "}
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500"> 
//                   All-in-One <br />
//                 </span>{" "}
//                 Platform for CRE{" "}
//               </motion.h1>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mb-6 text-blue-800 max-w-2xl mx-auto lg:mx-0"
//               >
//                 Delivering smarter tools and expert support to transform the
//                 way CRE works
//               </motion.p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-center lg:text-left"
//               >
//                 <Button
//                   size="lg"
//                   className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-base md:text-lg font-semibold px-6 py-3"
//                 >
//                   Get Demo
//                 </Button>
//               </motion.div>
//             </div>
//             <div className="lg:w-2/5 w-full mt-8 lg:mt-0 mb-0">
//               <HeroGraphs />
//             </div>
//           </div>
//         </div>
//         <LogoCarousel />
//       </div>
//     </div>
//   );
// }








//OLDER CODE




"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { HeroGraphs } from "./hero-graphs";
import { LogoCarousel } from "./02-logo-carousel";
import ParticleBackground from "./NewBackgraound";
//import { GradientBackground } from "./gradient-background";

export function HeroSection() {
  return (
    <div>
      {/* <GradientBackground> */}
      <ParticleBackground/>
        <div className="min-h-[50vh] pt-24 pb-0 mt-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          {/* <div className="container mx-auto px-4 lg:space-y-6"> */}
          <div className=" mx-auto px-8 lg:space-y-6 ">
            <div className="flex flex-col lg:flex-row items-center justify-between h-full ">
              <div className="lg:w-3/5 mb-8 lg:mb-0 w-full">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left mb-4 leading-tight  text-white"
                >
                  The{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    All-in-One <br />
                  </span>{" "}
                  Platform for CRE{" "}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mb-6 text-blue-200 max-w-2xl mx-auto lg:mx-0"
                >
                  Delivering smarter tools and expert support to transform the
                  way CRE works
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
              <div className="lg:w-2/5 w-full mt-8 lg:mt-0 mb-0 " >
                <HeroGraphs />
              </div>
            </div>
          </div>
          <LogoCarousel />
        </div>
      {/* </GradientBackground> */}
    </div>
  );
};