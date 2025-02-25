import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsentManager } from "@/components/CookieConsentManager";
import ChatBot from "@/components/Chatbot";
import { Scripts } from "@/components/Scripts";
import { Analytics } from "@vercel/analytics/react";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          .w-dropdown-list {
            box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
            transition: all 0.3s, opacity 0.1s, transform 0.2s;
          }
          .w-dropdown-link:hover {
            color: #0082f3;
          }
          @media screen and (max-width: 991px) {
            .w-dropdown-list {
              box-shadow: none;
            }
          }
        `}</style>
      </head>
      <body className={GeistSans.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="//www.googletagmanager.com/ns.html?id=GTM-W2238Q3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Scripts />
        <Navbar />
        <main>
          {children}
          <Analytics />
        </main>
        <ChatBot />
        <Footer />
        <CookieConsentManager />
        {/* LinkedIn (noscript) */}
        {/* <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=102232&fmt=gif"
          />
        </noscript> */}
      </body>
    </html>
  );
}

//OLD

// import type React from "react";
// import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import "./globals.css";
// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import { CookieConsentManager } from "@/components/CookieConsentManager";
// import ChatBot from "@/components/Chatbot";

// export const metadata: Metadata = {
//   title: {
//     default: "Clik.ai - AI-Powered Commercial Real Estate Solutions",
//     template: "%s | Clik.ai",
//   },
//   description:
//     "Clik.ai provides AI-powered solutions for commercial real estate, including lease abstraction, underwriting, and portfolio management.",
//   keywords: [
//     "Commercial Real Estate",
//     "AI",
//     "Machine Learning",
//     "Lease Abstraction",
//     "Underwriting",
//     "Portfolio Management",
//   ],
//   authors: [{ name: "Clik.ai Team" }],
//   creator: "Clik.ai",
//   publisher: "Clik.ai",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={GeistSans.className}>
//         <Navbar />
//         <main>{children}</main>
//         <ChatBot />
//         <Footer />
//         <CookieConsentManager />
//       </body>
//     </html>
//   );
// }
