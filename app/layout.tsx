import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsentManager } from "@/components/CookieConsentManager";
import ChatBot from "@/components/Chatbot";




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
      <body className={GeistSans.className}>
        <Navbar />
        <main>{children}</main>
        <ChatBot />
        <Footer />
        <CookieConsentManager />
        {/* <ChatbaseWidget /> */}
      </body>
    </html>
  );
}
