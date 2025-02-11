// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useSpring as useReactSpring, animated } from "@react-spring/web";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import { GeistSans } from "geist/font/sans";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// const HeroSection = () => {
//   const [init, setInit] = useState(false);
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const titleSpring = useReactSpring({
//     from: { opacity: 0, transform: "translateY(50px)" },
//     to: { opacity: 1, transform: "translateY(0px)" },
//     delay: 300,
//   });

//   const subtitleSpring = useReactSpring({
//     from: { opacity: 0, transform: "translateY(30px)" },
//     to: { opacity: 1, transform: "translateY(0px)" },
//     delay: 600,
//   });

//   const buttonSpring = useReactSpring({
//     from: { opacity: 0, transform: "translateY(20px)" },
//     to: { opacity: 1, transform: "translateY(0px)" },
//     delay: 900,
//   });

//   return (
//     <motion.section
//       ref={heroRef}
//       className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
//       style={{ y, opacity }}
//     >
//       {init && (
//         <Particles
//           id="tsparticles"
//           options={{
//             background: {
//               color: {
//                 value: "transparent",
//               },
//             },
//             fpsLimit: 120,
//             interactivity: {
//               events: {
//                 onClick: {
//                   enable: true,
//                   mode: "push",
//                 },
//                 onHover: {
//                   enable: true,
//                   mode: "repulse",
//                 },
//                 resize: true,
//               },
//               modes: {
//                 push: {
//                   quantity: 4,
//                 },
//                 repulse: {
//                   distance: 200,
//                   duration: 0.4,
//                 },
//               },
//             },
//             particles: {
//               color: {
//                 value: "#ffffff",
//               },
//               links: {
//                 color: "#ffffff",
//                 distance: 150,
//                 enable: true,
//                 opacity: 0.5,
//                 width: 1,
//               },
//               collisions: {
//                 enable: true,
//               },
//               move: {
//                 direction: "none",
//                 enable: true,
//                 outModes: {
//                   default: "bounce",
//                 },
//                 random: false,
//                 speed: 1,
//                 straight: false,
//               },
//               number: {
//                 density: {
//                   enable: true,
//                   area: 800,
//                 },
//                 value: 80,
//               },
//               opacity: {
//                 value: 0.5,
//               },
//               shape: {
//                 type: "circle",
//               },
//               size: {
//                 value: { min: 1, max: 5 },
//               },
//             },
//             detectRetina: true,
//           }}
//         />
//       )}
//       <div className="container mx-auto px-4 z-10 text-center">
//         <animated.h1
//           style={titleSpring}
//           className={`text-5xl md:text-7xl font-bold mb-6 text-white ${GeistSans.className}`}
//         >
//           Unlock the{" "}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
//             Hidden Value
//           </span>{" "}
//           in Your Data
//         </animated.h1>
//         <animated.p
//           style={subtitleSpring}
//           className={`text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto ${GeistSans.className}`}
//         >
//           Transform your loan documents into a powerful market intelligence
//           database, giving you a competitive edge in the CRE industry.
//         </animated.p>
//         <animated.div style={buttonSpring}>
//           <Button
//             size="lg"
//             className="bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
//           >
//             Discover Your Data&apos;s Potential
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//         </animated.div>
//       </div>
//     </motion.section>
//   );
// };

// export default function AppraisalOMDataDigitizationPage() {
//   return (
//     <div className={`min-h-screen ${GeistSans.className}`}>
//       <HeroSection />
//       {/* Other sections will be added here */}
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page