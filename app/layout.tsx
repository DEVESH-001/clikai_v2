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

