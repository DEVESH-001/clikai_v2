"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";


interface CookieConsentBannerProps {
  onOpenPreferences: () => void;
}

export function CookieConsentBanner({
  onOpenPreferences,
}: CookieConsentBannerProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 5000); // Show after 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-6 z-50 max-w-2xl mx-auto"
      >
       
        <h2 className="text-xl font-bold mb-4">We value your privacy</h2>
        <p className="text-gray-600 mb-6">
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking &quot;Accept All&quot;, you
          consent to our use of cookies.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Accept All
          </Button>
          <Button
            onClick={handleDecline}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Decline
          </Button>
          <Button
            onClick={onOpenPreferences}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Preferences
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
