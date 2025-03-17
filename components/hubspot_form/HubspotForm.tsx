"use client"

import { useEffect, useRef } from "react"

interface HubspotFormProps {
  region?: string
  portalId: string
  formId: string
  formUrl?: string
  className?: string
  onFormSubmitted?: () => void
}

export default function HubspotForm({
  region = "na1",
  portalId,
  formId,
  formUrl,
  className = "",
  onFormSubmitted,
}: HubspotFormProps) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // If a direct form URL is provided, use an iframe approach
    if (formUrl) {
      if (formRef.current) {
        formRef.current.innerHTML = `
          <iframe 
            src="${formUrl}" 
            width="100%" 
            height=550" 
            style="border: none;" 
            title="HubSpot Form"
          ></iframe>
        `
      }
      return
    }

    // Function to initialize the form using the HubSpot API
    const initializeForm = () => {
      if (formRef.current && window.hbspt) {
        // Clear any existing content
        formRef.current.innerHTML = ""

        // Create the form
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: formRef.current,
          onFormSubmitted: onFormSubmitted,
        })
      }
    }

    // Load the HubSpot script if it hasn't been loaded yet
    if (!document.querySelector(`script[src*="hsforms.net/forms/embed/${portalId}.js"]`)) {
      const script = document.createElement("script")
      script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`
      script.defer = true
      script.async = true

      // Initialize the form once the script is loaded
      script.onload = initializeForm

      document.body.appendChild(script)
    } else {
      // If the script is already loaded, initialize the form directly
      initializeForm()
    }

    // Cleanup function
    return () => {
      if (formRef.current) {
        formRef.current.innerHTML = ""
      }
    }
  }, [region, portalId, formId, formUrl, onFormSubmitted])

  return <div ref={formRef} className={`hubspot-form-container ${className}`}></div>
}

