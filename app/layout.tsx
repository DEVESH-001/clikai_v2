import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { Navbar } from "@/components/sections/10_Navbar"
import { Footer } from "@/components/sections/9_Footer"
import { Scripts } from "@/components/Scripts"
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider"
import ChatBot from "@/components/chatbot/Chatbot"
import OrganizationSchema from "@/components/schema/OrginazationSchema"
import WebsiteSchema from "@/components/schema/WebsiteSchema"

//Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://clik.ai"),
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
  twitter: {
    card: "summary_large_image",
    title: "Clik.ai - AI-Powered Commercial Real Estate Solutions",
    description:
      "Clik.ai provides AI-powered solutions for commercial real estate, including lease abstraction, underwriting, and portfolio management.",
    images: ["https://clik.ai/opengraph/Clikai.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <OrganizationSchema />
        <WebsiteSchema />
      </head>

      <body className={GeistSans.className}>
        <CookieConsentProvider>
          <Scripts />
          <Navbar />
          <main>{children}</main>
          <ChatBot />
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  )
}

