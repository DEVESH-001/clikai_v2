"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

import { motion, AnimatePresence } from "framer-motion"
import { getCookieConsent, setCookieConsent } from "@/actions/cookies"

interface CookieBannerProps {
  onOpenPreferences: () => void
}

export function CookieBanner({ onOpenPreferences }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkConsent = async () => {
      try {
        const consent = await getCookieConsent()
        if (consent) {
          setIsVisible(!consent.hasConsented)
        } else {
          // Default to showing the banner if consent is undefined
          setIsVisible(true)
        }
      } catch (error) {
        console.error("Error checking cookie consent:", error)
        // Default to showing the banner on error
        setIsVisible(true)
      }
    }
    checkConsent()
  }, [])

  const acceptAll = async () => {
    await setCookieConsent({
      hasConsented: true,
      analytics: true,
      marketing: true,
    })
    setIsVisible(false)
    window.location.reload()
  }

  const acceptNecessary = async () => {
    await setCookieConsent({
      hasConsented: true,
      analytics: false,
      marketing: false,
    })
    setIsVisible(false)
    window.location.reload()
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t shadow-lg"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">We value your privacy</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-w-[300px]">
              <Button variant="outline" onClick={onOpenPreferences} className="w-full sm:w-auto">
                Cookie Settings
              </Button>
              <Button variant="outline" onClick={acceptNecessary} className="w-full sm:w-auto">
                Accept Necessary
              </Button>
              <Button onClick={acceptAll} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

