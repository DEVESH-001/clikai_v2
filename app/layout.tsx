
// "use client";

// import { useState, useEffect } from "react";
// import { GeistSans } from "geist/font/sans";
// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import { CookieConsentBanner } from "@/components/cookie-consent";
// import { CookiePreferencesPopup } from "@/components/cookie-preferences-pop-up";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// import "@/app/globals.css";

// const CHATBASE_SCRIPT_ID = "9pIzyyNSJ1VBc6J_w4KUZ";

// const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [showCookiePreferences, setShowCookiePreferences] = useState(false);

//   useEffect(() => {
//     const existingScript = document.getElementById(CHATBASE_SCRIPT_ID);
//     if (!existingScript) {
//       const script = document.createElement("script");
//       script.src = "https://www.chatbase.co/embed.min.js";
//       script.id = CHATBASE_SCRIPT_ID;
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <html lang="en" className={GeistSans.className}>
//       <body className={`${GeistSans.className} min-h-screen flex flex-col`}>
//         <Navbar />
//         <main className="flex-grow">
//           {children}
//           <SpeedInsights />
//         </main>
//         <Footer
//           onOpenCookiePreferences={() => setShowCookiePreferences(true)}
//         />
//         <CookieConsentBanner
//           onOpenPreferences={() => setShowCookiePreferences(true)}
//         />
//         <CookiePreferencesPopup
//           isOpen={showCookiePreferences}
//           onClose={() => setShowCookiePreferences(false)}
//         />
//       </body>
//     </html>
//   );
// };

// export default RootLayout;

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CookieConsentManager } from "@/components/CookieConsentManager"


export const metadata: Metadata = {
  title: {
    default: "Clik.ai - AI-Powered Commercial Real Estate Solutions",
    template: "%s | Clik.ai",
  },
  description:
    "Clik.ai provides AI-powered solutions for commercial real estate, including lease abstraction, underwriting, and portfolio management.",
  keywords: [
    "Commercial Real Estate",
    "AI",
    "Machine Learning",
    "Lease Abstraction",
    "Underwriting",
    "Portfolio Management",
  ],
  authors: [{ name: "Clik.ai Team" }],
  creator: "Clik.ai",
  publisher: "Clik.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsentManager />
      </body>
    </html>
  )
}

