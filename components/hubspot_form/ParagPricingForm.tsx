"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface PricingFormModalProps {
  isOpen: boolean
  onClose: () => void
  formTitle: string
}

export function PricingFormModal({ isOpen, onClose, formTitle }: PricingFormModalProps) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    // Load HubSpot form script when component mounts
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/embed/4401613.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    script.onload = () => {
      // Initialize HubSpot form when script is loaded
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "4401613",
          formId: "c2e945ca-53de-45b6-820f-8a8ded7b49e2",
          target: "#pricing-hubspot-form",
        })
      }
    }

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] w-[95vw] p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">{formTitle}</DialogTitle>
          <DialogDescription className="text-center">
            {formTitle === "Get Instant Access"
              ? "Fill out the form below to get started with our Self-Service plan"
              : "Schedule a personalized demo with our team"}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div id="pricing-hubspot-form" className="hubspot-form-container"></div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

