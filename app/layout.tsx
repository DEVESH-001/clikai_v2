'use client'
import { GeistSans } from "geist/font/sans";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsentBanner } from "@/components/cookie-consent";

import "@/app/globals.css";
import { useState } from "react";
import { CookiePreferencesPopup } from "@/components/cookie-preferences-pop-up";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={`${GeistSans.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}
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
}

