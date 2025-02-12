// "use client";

// import { useState, useEffect } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import type { ISourceOptions } from "@tsparticles/engine";

// interface ParticleBackgroundProps {
//   className?: string;
//   particleColor?: string;
//   linkColor?: string;
//   particleNumber?: number;
//   speed?: number;
//   height?: string;
// }

// export const ParticleBackground = ({
//   className = "",
//   particleColor = "#ffffff",
//   linkColor = "#ffffff",
//   particleNumber = 80,
//   speed = 1,
//   height = "100vh",
// }: ParticleBackgroundProps) => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     const initEngine = async () => {
//       await initParticlesEngine(async (engine) => {
//         await loadSlim(engine);
//       });
//       setInit(true);
//     };
//     initEngine();

//     return () => {
//       // Cleanup particles when component unmounts
//       setInit(false);
//     };
//   }, []);

//   if (!init) return null;

//   const options: ISourceOptions = {
//     background: {
//       color: {
//         value: "transparent",
//       },
//     },
//     fpsLimit: 60,
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
//         value: particleColor,
//       },
//       links: {
//         color: linkColor,
//         distance: 150,
//         enable: true,
//         opacity: 0.5,
//         width: 1,
//       },
//       move: {
//         direction: "none",
//         enable: true,
//         outModes: {
//           default: "destroy",
//           bottom: "destroy",
//           top: "destroy",
//           left: "destroy",
//           right: "destroy",
//         },
//         random: false,
//         speed: speed,
//         straight: false,
//       },
//       number: {
//         density: {
//           enable: true,
//           // area: 800,
//         },
//         value: particleNumber,
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
//     <div
//       style={{
//         height,
//         position: "absolute",
//         width: "100%",
//         top: 0,
//         left: 0,
//         pointerEvents: "none",
//       }}
//     >
//       <Particles
//         id={`tsparticles-${Math.random()}`}
//         className={`absolute inset-0 ${className}`}
//         options={options}
//       />
//     </div>
//   );
// };


"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { ParticleBackgroundProps } from "./particle-background";


export function ParticleBackground({
  className = "",
  id = "tsparticles",
  particleColor = "#ffffff",
  lineColor = "#ffffff",
  backgroundColor = "transparent",
  particleCount = 50,
}: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id={id}
      className={`absolute inset-0 ${className}`}
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: backgroundColor,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: lineColor,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: particleCount,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

