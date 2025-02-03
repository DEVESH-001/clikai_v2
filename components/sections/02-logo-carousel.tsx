// "use client"

// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { imageUrls } from "@/utils/imageUrls"

// export function LogoCarousel() {
//   const [, setLogoErrors] = useState<Record<string, boolean>>({})

//   const logos = [
//     {
//       src: imageUrls.logos.newmark,
//       alt: "Newmark",
//       width: 160,
//       height: 40,
//     },
//     {
//       src: imageUrls.logos.lument,
//       alt: "Lument",
//       width: 160,
//       height: 40,
//     },
//     {
//       src: imageUrls.logos.bwe,
//       alt: "BWE",
//       width: 160,
//       height: 40,
//     },
//     {
//       src: imageUrls.logos.merchantsCapital,
//       alt: "Merchants Capital",
//       width: 160,
//       height: 40,
//     },
//     {
//       src: imageUrls.logos.colliers,
//       alt: "Colliers",
//       width: 160,
//       height: 40,
//     },
//     {
//       src: imageUrls.logos.acoreCapital,
//       alt: "ACORE Capital",
//       width: 160,
//       height: 40,
//     },
//     {
//       src: imageUrls.logos.columbiaNational,
//       alt: "Columbia National",
//       width: 160,
//       height: 40,
//     },
//     {
//       src: imageUrls.logos.websterBank,
//       alt: "Webster Bank",
//       width: 160,
//       height: 40,
//     },
//     {
//       src: imageUrls.logos.northmarq,
//       alt: "Northmarq",
//       width: 160,
//       height: 40,
//     },
//     {
//       src: imageUrls.logos.heitman,
//       alt: "Heitman",
//       width: 160,
//       height: 40,
//     },
//   ]

//   const scrollerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!scrollerRef.current) return

//     const scrollerContent = scrollerRef.current
//     const scrollerWidth = scrollerContent.offsetWidth

//     const animateScroll = () => {
//       if (scrollerContent.scrollLeft >= scrollerWidth) {
//         scrollerContent.scrollLeft = 0
//       } else {
//         scrollerContent.scrollLeft += 1
//       }
//     }

//     const interval = setInterval(animateScroll, 20)

//     return () => clearInterval(interval)
//   }, [])

//   const handleImageError = (logo: (typeof logos)[0]) => {
//     console.warn(`Error loading image: ${logo.src}`)
//     setLogoErrors((prev) => ({ ...prev, [logo.alt]: true }))
//   }

//   return (
//     <div className="w-full overflow-hidden bg-gradient-to-b from-indigo-100 to-blue-50 py-8 relative">
//       <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
//       <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>
//       <div ref={scrollerRef} className="flex overflow-hidden relative z-10">
//         {[...logos, ...logos].map((logo, index) => (
//           <div key={index} className="flex w-[200px] flex-shrink-0 items-center justify-center px-4">
//             <Image
//               src={logo.src || "/placeholder.svg"}
//               alt={logo.alt}
//               width={logo.width}
//               height={logo.height}
//               className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
//               onError={() => handleImageError(logo)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



//new

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { imageUrls } from "@/utils/imageUrls";

export function LogoCarousel() {
  const [, setLogoErrors] = useState<Record<string, boolean>>({});

  const logos = [
    {
      src: imageUrls.logos.newmark,
      alt: "Newmark",
      width: 160,
      height: 40,
    },
    {
      src: imageUrls.logos.lument,
      alt: "Lument",
      width: 160,
      height: 40,
    },
    {
      src: imageUrls.logos.bwe,
      alt: "BWE",
      width: 160,
      height: 40,
    },
    {
      src: imageUrls.logos.merchantsCapital,
      alt: "Merchants Capital",
      width: 160,
      height: 40,
    },
    {
      src: imageUrls.logos.colliers,
      alt: "Colliers",
      width: 160,
      height: 40,
    },
    {
      src: imageUrls.logos.acoreCapital,
      alt: "ACORE Capital",
      width: 160,
      height: 40,
    },
    {
      src: imageUrls.logos.columbiaNational,
      alt: "Columbia National",
      width: 160,
      height: 40,
    },
    {
      src: imageUrls.logos.websterBank,
      alt: "Webster Bank",
      width: 160,
      height: 40,
    },
    {
      src: imageUrls.logos.northmarq,
      alt: "Northmarq",
      width: 160,
      height: 40,
    },
    {
      src: imageUrls.logos.heitman,
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
    <div className="w-full overflow-hidden bg-gradient-to-b from-indigo-100 to-blue-50 py-8 relative">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>
      <div ref={scrollerRef} className="flex overflow-hidden relative z-10">
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

