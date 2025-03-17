 //new

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export function LogoCarousel() {
  const [, setLogoErrors] = useState<Record<string, boolean>>({});

  const logos = [
    {
      src: "/images/ClientLogos/ClientLogosRefined/newmark.svg",
      alt: "Newmark",
      width: 160,
      height: 40,
    },
    {
      src: "/images/ClientLogos/ClientLogosRefined/lument.svg",
      alt: "Lument",
      width: 160,
      height: 40,
    },
    {
      src: "/images/ClientLogos/ClientLogosRefined/bwe-blue.svg",
      alt: "BWE",
      width: 160,
      height: 40,
    },
    {
      src: "/images/ClientLogos/ClientLogosRefined/merchant-capital.png",
      alt: "Merchants Capital",
      width: 160,
      height: 40,
    },
    {
      src: "/images/ClientLogos/ClientLogosRefined/colliers.png",
      alt: "Colliers",
      width: 160,
      height: 40,
    },
    {
      src: "/images/ClientLogos/ClientLogosRefined/acore-capital.png",
      alt: "ACORE Capital",
      width: 160,
      height: 40,
    },
    {
      src: "/images/company_logo/Columbia_noational.png",
      alt: "Columbia National",
      width: 160,
      height: 40,
    },
    {
      src: "/images/ClientLogos/ClientLogosRefined/webster-bank.svg",
      alt: "Webster Bank",
      width: 160,
      height: 40,
    },
    {
      src: "/images/ClientLogos/ClientLogosRefined/northmarq.svg",
      alt: "Northmarq",
      width: 160,
      height: 40,
    },
    {
      src: "/images/ClientLogos/ClientLogosRefined/hietman.svg",
      alt: "Heitman",
      width: 160,
      height: 40,
    },
  ];
 
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scrollerContent = scrollerRef.current;
    const scrollerWidth = scrollerContent.offsetWidth;

    const animateScroll = () => {
      if (scrollerContent.scrollLeft >= scrollerWidth) {
        scrollerContent.scrollLeft = 0;
      } else {
        scrollerContent.scrollLeft += 1;
      }
    };

    const interval = setInterval(animateScroll, 20);

    return () => clearInterval(interval);
  }, []);

  const handleImageError = (logo: (typeof logos)[0]) => {
    console.warn(`Error loading image: ${logo.src}`);
    setLogoErrors((prev) => ({ ...prev, [logo.alt]: true }));
  };

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-indigo-100 to-blue-50 py-3 relative sm:mt-2 lg:mt-8 ">
      {/* Background noise image */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light "></div>

      {/* Logo bar with responsive margin */}
      <div
        ref={scrollerRef}
        className="flex overflow-hidden relative z-10  md:mt-2 lg:mt-4 xl:mt-4 "
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex w-[200px] flex-shrink-0 items-center justify-center px-4"
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-12 w-auto object-contain"
              onError={() => handleImageError(logo)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
