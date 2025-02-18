// //NEW

// import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import { CookieConsentBanner } from "@/components/cookie-consent";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// import "@/app/globals.css";
// import ClientWrapper from "./clientwrapper";


// export const metadata: Metadata = {
//   metadataBase: new URL("https://yoursite.com"),
//   title: {
//     default: "Clik.ai | CRE Platform",
//     template: "%s | Clikai",
//   },
//   description:
//     "The All-in-One Platform for Commercial Real Estate. Delivering smarter tools and expert support to transform the way CRE works.",
//   keywords: [
//     "CRE",
//     "Commercial Real Estate",
//     "Real Estate Platform",
//     "AutoUW",
//     "InvestAssist"
//   ],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://yoursite.com",
//     siteName: "Your Site Title",
//     images: [
//       {
//         url: "https://yoursite.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Your Site Title - CRE Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@yoursitehandle",
//     creator: "@yoursitehandle",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   verification: {
//     google: "your-google-verification-code",
//     yandex: "your-yandex-verification-code",
//     yahoo: "your-yahoo-verification-code",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={GeistSans.className}>
//       <body className={`${GeistSans.className} min-h-screen flex flex-col`}>
//         <Navbar />
//         <main className="flex-grow">{children}</main>
//         <Footer  />
//         <CookieConsentBanner />
//         <SpeedInsights />
//         {/* Client-side logic */}
//         <ClientWrapper />
//       </body>
//     </html>
//   );
// }







//old

"use client";

import { useState, useEffect } from "react";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsentBanner } from "@/components/cookie-consent";
import { CookiePreferencesPopup } from "@/components/cookie-preferences-pop-up";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/app/globals.css";

const CHATBASE_SCRIPT_ID = "9pIzyyNSJ1VBc6J_w4KUZ";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);

  useEffect(() => {
    const existingScript = document.getElementById(CHATBASE_SCRIPT_ID);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = CHATBASE_SCRIPT_ID;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <html lang="en" className={GeistSans.className}>
      <body className={`${GeistSans.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
          <SpeedInsights />
        </main>
        <Footer
          onOpenCookiePreferences={() => setShowCookiePreferences(true)}
        />
        <CookieConsentBanner
          onOpenPreferences={() => setShowCookiePreferences(true)}
        />
        <CookiePreferencesPopup
          isOpen={showCookiePreferences}
          onClose={() => setShowCookiePreferences(false)}
        />
      </body>
    </html>
  );
};

export default RootLayout;

