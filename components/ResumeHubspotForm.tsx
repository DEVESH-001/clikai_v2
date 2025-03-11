"use client"

import { useEffect, useRef } from "react"

interface HubspotFormProps {
  region?: string
  portalId: string
  formId: string
  className?: string
}

export default function HubspotForm({ region = "na1", portalId, formId, className = "" }: HubspotFormProps) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only load the script if it hasn't been loaded yet
    if (!document.querySelector(`script[src*="hsforms.net/forms/embed/${portalId}.js"]`)) {
      const script = document.createElement("script")
      script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`
      script.defer = true
      script.async = true
      document.body.appendChild(script)
    } 
  }, [portalId])

  return (
    <div
      ref={formRef}
      className={`hs-form-frame ${className}`}
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    ></div>
  )
}

