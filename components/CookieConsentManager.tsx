"use client"

import { useState, useEffect } from "react"
import { CookieConsentBanner } from "@/components/cookie-consent"
import { CookiePreferencesPopup } from "./cookie-preference-popup"


export function CookieConsentManager() {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      const timer = setTimeout(
        () => {
          setShowBanner(true)
        },
        5000 + Math.random() * 3000,
      ) // Show after 5-8 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const handleOpenPreferences = () => {
    setIsPreferencesOpen(true)
  }

  const handleClosePreferences = () => {
    setIsPreferencesOpen(false)
  }

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  return (
    <>
      {showBanner && (
        <CookieConsentBanner
          onOpenPreferences={handleOpenPreferences}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      )}
      <CookiePreferencesPopup isOpen={isPreferencesOpen} onClose={handleClosePreferences} />
    </>
  )
}

